# User Guide — add and edit pages

This is a simple how-to for adding and editing pages in the `_guides/` folder. It's written for people who want to contribute content without getting into the technical details of how the site is built.

## Who this is for

- Anyone adding or updating a page in `_guides/`.

## Where to put your page

- Create a single Markdown file for your page inside the `_guides/` folder. Example: `_guides/my-new-page.md`.

## Top-of-file metadata

At the very top of your page put a small header block exactly like this (three dashes, the three lines, then three dashes). Put it as the first thing in the file:

```
---
title: My Page Title
description: Short one-line summary
order: 10
---
```

## What those three lines do (plain language)

- title: The page name people will see.
- description: A short one-line summary shown in lists.
- order: A number that decides where this page shows up in a list (lower numbers appear first). Use gaps like 10, 20 so others can insert pages later.

## Filename rules

- Use all lowercase and hyphens: `my-new-page.md`.
- No spaces or special characters.
- Keep the filename and the title similar so it's easy to find.

## How to format your page

- Headings: use `#` for main title, `##` for section headings, `###` for subsections.
- Paragraphs: leave a blank line between paragraphs.
- Lists: use `-` or `*` for bullet lists, or `1.` `2.` for numbered lists.
- Code or commands: put them in a fenced code block using three backticks:

```
example command or code
```

- Emphasis: `*italic*` or `**bold**` as usual in Markdown.

## Adding images

- Put images into `assets/images/` (or an `images/` folder) and reference them using a path. Example:

```
![Alt text](/user-guide/assets/images/notice.png)
```

## How to link to another guide page

- If the other page file is named `other-page.md`, link to it like this:

```
[Other page](other-page.md)
```

That keeps links simple: use the other page's filename when you write links.

## Quick tips for edits and PRs

- One change per pull request if possible (add a page, or edit a page, or add images).
- In your PR description say where the page should appear and any ordering needs.
- Include any images in the same PR.

## Troubleshooting (plain language)

- Page doesn't show up: check the three-line header is the very first thing in the file and the number after `order:` is a number (no letters).
- Link broken: make sure you used the correct filename in the link and that the target file exists.
