#!/usr/bin/env python3
"""
Generate assets/search.json from files in _guides/.

This script is intentionally low-dependency and only uses the Python standard library.
It looks for a simple header block starting with '---' and ending with the next '---'
and extracts `title:`, `description:`, and `order:` fields if present.

It writes a JSON array to `assets/search.json` with entries:
  {"title": ..., "description": ..., "url": ...}

URLs are generated using the `baseurl` found in `_config.yml` and the collection
permalink pattern `/guides/<name>.html` (this matches the site's configuration).
"""

import os
import json
import re

ROOT = os.path.dirname(os.path.dirname(__file__))
GUIDES_DIR = os.path.join(ROOT, '_guides')
ASSETS_DIR = os.path.join(ROOT, 'assets')
OUT_FILE = os.path.join(ASSETS_DIR, 'search.json')
CONFIG_FILE = os.path.join(ROOT, '_config.yml')


def read_baseurl():
    if not os.path.exists(CONFIG_FILE):
        return ''
    with open(CONFIG_FILE, 'r', encoding='utf-8') as f:
        for line in f:
            m = re.match(r"^\s*baseurl:\s*(?:['\"]?)(.*?)(?:['\"]?)\s*$", line)
            if m:
                v = m.group(1).strip()
                return v.rstrip('/')
    return ''


def parse_front_matter(path):
    title = None
    description = None
    order = None
    body = ''
    try:
        with open(path, 'r', encoding='utf-8') as f:
            text = f.read()
    except Exception:
        return title, description, order

    if text.startswith('---'):
        parts = text.split('---', 2)
        if len(parts) >= 3:
            header = parts[1]
            body = parts[2].strip()
            for line in header.splitlines():
                line = line.strip()
                if line.lower().startswith('title:'):
                    title = line.split(':', 1)[1].strip().strip('"\'')
                elif line.lower().startswith('description:'):
                    description = line.split(':', 1)[1].strip().strip('"\'')
                elif line.lower().startswith('order:'):
                    v = line.split(':', 1)[1].strip()
                    try:
                        order = int(v)
                    except Exception:
                        order = None
    return title, description, order, body



def main():
    baseurl = read_baseurl()
    entries = []
    if not os.path.isdir(GUIDES_DIR):
        print('No _guides directory found; nothing to index.')
        return
    for fname in os.listdir(GUIDES_DIR):
        if not fname.lower().endswith('.md'):
            continue
        path = os.path.join(GUIDES_DIR, fname)
        name = os.path.splitext(fname)[0]
        title, description, order, body = parse_front_matter(path)
        if not title:
            # fallback: prettify filename
            title = name.replace('-', ' ').replace('_', ' ').title()
        if description is None:
            description = ''
        if not body:
            body = ''
        # Construct URL using baseurl and the guides permalink (/guides/<name>.html)
        url = f"{baseurl}/guides/{name}.html" if baseurl else f"/guides/{name}.html"
        entries.append({'title': title, 'description': description, 'url': url, 'order': order or 9999, 'text': body})

    # Sort by order then title
    entries.sort(key=lambda e: (e.get('order', 9999), e['title'].lower()))

    # Remove order from output
    out = [{'title': e['title'], 'description': e['description'], 'url': e['url'], 'text': e.get('text','')} for e in entries]

    os.makedirs(ASSETS_DIR, exist_ok=True)
    with open(OUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(out, f, indent=2, ensure_ascii=False)
    print(f'Wrote {OUT_FILE} with {len(out)} entries')


if __name__ == '__main__':
    main()
