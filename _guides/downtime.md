---
layout: default
title: Downtime Activities
---

# Downtime Activities

What are DTs, and how to do them.

## Table of Contents

- [What are Downtime Activities?](#what-are-downtime-activities)
- [Downtime Activity List](#downtime-activity-list)
  - [Gold-Earning Downtimes](#gold-earning-downtimes)
  - [XP-Earning Downtimes](#xp-earning-downtimes)
  - [Special Downtimes](#special-downtimes)
- [Tool Proficiencies & Features](#tool-proficiencies--features)
- [What are Proficiencies?](#what-are-proficiencies)
- [How to Copy Spells](#how-to-copy-spells)
- [Weekly Lifestyle Reset](#how-to-reset-dts-weekly-lifestyle-charges)
- [Timezone Settings](#timezone-settings)

---

## What are Downtime Activities?

Downtimes are a character's 'free time' where they can earn extra gold, XP or learn a new spell, tool, instrument or language proficiency.

- Run up to **2 DT per day, 14 total per week** per character
- Resets with lifestyle on Sundays
- No RP requirement, run anytime
- No weapons or armor proficiency per RAW

For a list of activities, see [🧯downtime-info🎻](https://discord.com/channels/866376531995918346/881208249762848788), or run `!dt help` in [🤖bot-spam](https://discord.com/channels/866376531995918346/866397299437600778).

### Full information on each command:

- `!dt help [downtime]` - and to see what features and proficiencies help in your rolls, use `!dt help features`

## Downtime Activity List

### Gold-Earning Downtimes

These activities reward gold pieces. Activities marked with * require 2 DT and involve a save that could result in injury.

| Command | Checks | Tool Proficiency Bonus | DT Cost | Risk |
|---------|--------|------------------------|---------|------|
| `!dt barkeep` | Sleight of Hand, Charisma, Insight | Brewer's Supplies | 1 | Safe |
| `!dt bowyer` | Sleight of Hand, Investigation/Perception (highest), Dexterity | Woodcarver's Tools | 1 | Safe |
| `!dt fish` | Nature, Animal Handling, Strength | Water Vehicles | 1 | Safe |
| `!dt garden` | Investigation/Perception (highest), Nature, Wisdom | Herbalism Kit | 1 | Safe |
| `!dt gossip` | Insight/Perception (highest), Persuasion/Intimidation (highest), Intelligence | None | 1 | Safe |
| `!dt perform` | Insight, Performance, Persuasion | Musical Instrument | 1 | Safe |
| `!dt research` | Investigation, Intelligence, Knowledge* | None | 1 | Safe |
| `!dt sermon` | Religion, Wisdom, Persuasion/Performance (highest) | None | 1 | Safe |
| `!dt shopkeep` | Perception/Insight (highest), Persuasion/Deception (highest), Charisma | None | 1 | Safe |
| `!dt teach` | Insight, Persuasion/Performance (highest), Knowledge* | None | 1 | Safe |
| `!dt wrangle` | Perception/Insight (highest), Animal Handling, Athletics/Acrobatics (highest) | None | 1 | Safe |
| `!dt cook`* | Wisdom, Insight, Constitution Save | Cook's Utensils | 2 | Food poisoning |
| `!dt farm`* | Nature, Animal Handling, Constitution Save | None | 2 | Sunburn/heatstroke |
| `!dt guard`* | Perception, Athletics, Dexterity Save | None | 2 | Injury on patrol |
| `!dt heal`* | Insight, Medicine, Constitution Save | None | 2 | Migraine/illness |
| `!dt hunt`* | Athletics, Survival, Dexterity Save | None | 2 | Injury while hunting |
| `!dt lumber`* | Athletics, Survival/Nature (highest), Strength Save | None | 2 | Logging accident |
| `!dt smith`* | Sleight of Hand, Strength, Constitution Save | Smith's Tools | 2 | Forge burns |

*Knowledge = Highest of Arcana, History, Medicine, Nature, or Religion

**Risky Activities:** Activities marked with * cost 2 DT to attempt and involve a save. If you fail the save, you lose 1 additional DT due to injury/illness and must recover. You cannot attempt these if you have less than 2 DT remaining.

### XP-Earning Downtimes

These activities reward experience points. All XP downtimes cost 2 DT and involve a save that could result in injury.

| Command | Checks | Primary Stat | DT Cost |
|---------|--------|--------------|---------|
| `!dt train` | Athletics, Constitution/Strength Save (highest), Weapon Attack | Strength | 2 |
| `!dt spar` | Acrobatics/Stealth (highest), Constitution/Dexterity Save (highest), Weapon Attack | Dexterity | 2 |
| `!dt commune` | Religion/Nature/Insight (highest), Wisdom/Charisma Save (highest), Spellcasting Attack | Wisdom | 2 |
| `!dt practice` | Arcana, Intelligence Save, Spellcasting Attack | Intelligence | 2 |
| `!dt charm` | Persuasion/Deception/Intimidation (highest), Wisdom/Charisma Save (highest), Spellcasting Attack | Charisma | 2 |

**Note:** Even on fails, you always receive some XP or gold! Critical successes (Nat 20) give bonus rewards.

### Special Downtimes

| Command | Description | Cost |
|---------|-------------|------|
| `!dt gamble` | Roll 3d6 against the house (DC 10). Proficiency in Gaming Sets grants advantage. Costs 25gp to play, win up to 50gp. | 1 DT + 25gp |
| `!dt learn` | Learn a new language, tool, or instrument proficiency. See section below for details. | 1 DT per attempt |
| `!dt spell` | Copy spells into your spellbook (Wizards/Tomelocks/Ritual Caster feat only). Costs 50gp per DT. See section below for details. | 1 DT + 50gp |

## Tool Proficiencies & Features

### How Tool Proficiencies Help

Certain downtimes benefit from tool proficiencies. To register your tools, use `!tool pro <tool name>` and check with `!tool list`.

**Gaming Sets for Gambling:**
- Dice Set, Dragonchess Set, Playing Card Set, Three-Dragon Ante Set
- Proficiency grants advantage on gambling rolls
- Expertise grants additional advantage (if you have Artificer 6+ or Rune Knight with Fire Rune)

### Passive Features That Help

Many racial, class, and item features automatically apply to downtime rolls. Run `!dt help features` to see the full list, including:

**Racial Features:** Halfling Lucky, Gnome Cunning, Dwarf/Duergar Resilience, Yuan-ti Magic Resistance, and more

**Class Features:**
- Bard: Jack of All Trades, Expertise
- Rogue: Expertise, Reliable Talent (level 11+)
- Artificer: Tool Expertise (level 6+)
- Monk: Purity of Body (level 10), Diamond Soul (level 14)
- Paladin: Aura of Protection (level 6+), Divine Health (level 3)
- And many subclass features!

**Magic Items:** Belt of Dwarvenkind, Cloak of Protection, Stone of Good Luck, +1/+2/+3 Weapons/Focuses, and more

## What are Proficiencies?

Learning a proficiency lets you learn a new tool, vehicle, instrument or language skill. **Only one proficiency can be learned at a time.**

The more difficult the topic is to learn, the more progress it requires to complete.

*(i.e. A standard language will be easier than an exotic language)*

`!dt help learn` will show the available list of topics and progress needed.

### Available to Learn

**Instruments:**
- Portable: Bagpipes, Birdpipes, Drum, Dulcimer, Flute, Glaur, Hand Drum, Horn, Hurdy Gurdy, Longhorn, Lute, Lyre, Pan Flute, Shawm, Songhorn, Tantan, Thelarr, Tocken, Viol, Wargong, Whistle-Stick, Yarting, Zulkoon
- Non-Portable/Rare: Piano, Harpsichord, Organ, Pipe Organ, Harp

**Tools:**
Alchemist's Supplies, Brewer's Supplies, Calligrapher's Supplies, Carpenter's Tools, Cartographer's Tools, Cobbler's Tools, Cook's Utensils, Dice Set, Disguise Kit, Dragonchess Set, Forgery Kit, Glassblower's Tools, Herbalism Kit, Jeweler's Tools, Leatherworker's Tools, Mason's Tools, Navigator's Tools, Painter's Supplies, Playing Card Set, Poisoner's Kit, Potter's Tools, Smith's Tools, Thieves' Tools, Three Dragon Ante Set, Tinker's Tools, Weaver's Tools, Woodcarver's Tools, Land Vehicles, Water Vehicles, Air Vehicles

**Standard Languages:**
Common, Dwarvish, Elvish, Giant, Gnomish, Goblin, Halfling, Orc, Sign Language

**Exotic Languages:**
Abyssal, Celestial, Draconic, Deep Speech, Infernal, Kraul, Loxodon, Merfolk, Minotaur, Primordial, Quori, Riedran, Sphinx, Sylvan, Undercommon, Vedalken

**Race/Class Specific (Cannot be learned):**
Aarakocra, Druidic, Gith, Thieves' Cant

### How to Learn

**Learning involves:**
- Highest of Intelligence/Wisdom check
- Intelligence Save
- Progress points awarded based on success (1-4 points per attempt)

**Commands:**

1. **Start learning:** `!dt learn <Instrument|Tool|Language>`
   - Example: `!dt learn Lute` or `!dt learn Elvish`
2. **Continue learning:** `!dt learn` (no arguments needed)
3. **Check progress:** Your progress is tracked automatically
4. **When complete:** Run `!dt learn last` in [🧠learning-log📝](https://discord.com/channels/866376531995918346/881630481102303262)
5. **Update sheet:** Add to Beyond/Dicecloud and run `!update`
6. **Add to vsheet:** Use `!manage` or `!tool pro <name>` to register the proficiency

**Useful Commands:**
- `!dt learn log` - See everything you've learned
- `!dt learn reset` - Abandon current progress and start something new (progress is lost)

## How to Copy Spells

Downtime using `!dt spell` automatically removes the cost and uses time for spell copying, from spell scrolls or other players. Must be rp'd if from someone else.

**1 DT = 2 hours of practice and 50gp, per RAW.**

Copying time depends on spell level (higher levels take more DTs to complete).

### Who can copy spells:

Wizards, Tomelocks (Pact of the Tome Warlocks), and those with the Ritual Caster feat.

### Available Spell Schools:

Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, Transmutation

### Process:

1. **Acquire spell source:**
   - Buy spell scroll from [📜shining-scroll](https://discord.com/channels/866376531995918346/880874392316420117), or
   - Copy from another player's spellbook in RP

2. **Start copying:** `!dt spell <school> <level>` in [🩺downtime-log🔬](https://discord.com/channels/866376531995918346/881218238170665043)
   - Example: `!dt spell necromancy 2` (for a 2nd-level necromancy spell)
   - Available schools: abjuration, conjuration, divination, enchantment, evocation, illusion, necromancy, transmutation

3. **Continue copying:** `!dt spell` (no arguments) until complete

4. **Log the spell:** When done, run `!dt spell last <spell name>` in [🩺downtime-log🔬](https://discord.com/channels/866376531995918346/881218238170665043)
   - Example: `!dt spell last Wither and Bloom`

**Useful Commands:**
- `!dt spell log` - See all spells you've copied
- `!dt spell reset` - Abandon current spell (progress and gold are lost)

## How to Reset DTs: Weekly lifestyle charges

Run `!week` in [🍻weekly-logs💸](https://discord.com/channels/866376531995918346/866544281408897024) **once a week on Sunday** to remove the 7 gold for cost.

Lifestyle covers each character's rent/Inn charges, all meals and drinks for roleplay purposes, and converts your RPXP to real XP while resetting your downtimes.

While there are no consequences or punishments to forgetting to meet your rent or forgetting to run `!week`, we ask players to not forget to do it, as it is part of the server's mechanics and activity checks.

## Timezone Settings

The DT system tracks your daily limit (2 per day) based on midnight in your timezone.

**Default timezone:** UTC +0

**Commands:**
- `!dt timezone` - Check your current timezone setting in [🤖bot-spam](https://discord.com/channels/866376531995918346/866397299437600778)
- `!dt timezone <number>` - Set your timezone (e.g., `!dt timezone -5` for EST, `!dt timezone +1` for CET)
- For 30-minute offsets, use decimals (e.g., `!dt timezone -5.5`)
- **Note:** DST must be adjusted manually
