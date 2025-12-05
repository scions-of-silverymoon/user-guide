---
layout: default
title: Quickstart Commands
---

# Quickstart Commands

## Use these commands to set up your character outside of combat

- **`!setrace`** - Before anything else it is important that you set your race on the server. This command will help you do so.

- **`!level`** - Gives you a level summary of your current character and allows you to see your hit die.

- **`!manage`** - Allows you to manage languages, resistances, immunities, vulnerabilities, special senses, etc. It's too much to list here so feel free to go to [🤖bot-spam](https://discord.com/channels/866376531995918346/866397299437600778) and try it there.

- **`!tool`** - Manages proficiencies with tools and allows you to run checks with tools you have proficiency in.

- **`!bag`** - Pulls up your bag. You can add or take away items by typing in `!bag + "Item Name Here"`. Otherwise, you can also add an entire pack of items by typing `!bag pack "Pack Name Here"`. You can find more information about bag management [here](https://avrae.io/dashboard/workshop/6296b723c964982e890e5315).

- **`!g coins`** - Allows players to add and take away gold, silver and copper from their purse, connected to Beyond's inventory gold. In order to add your starter gold, type in `!g coins +#gp or sp, cp, etc`.

- **`!portrait update "link-to-your-image"`** - Allows you to change your character's token/portrait that is stored in Avrae's far depths. To get an image up, usually you have to upload it to an image host like [Imgur](https://imgur.com/). The process would be:
  - Create an Imgur account
  - Click "New Post" and upload your token of preference
  - Now, instead of clicking in any shareable link, you will right click the uploaded token and choose "Copy Image Link"
  - In [🤖bot-spam](https://discord.com/channels/866376531995918346/866397299437600778), run the command `!portrait update "your-copied-image-link-here"`

Additionally, if your character has a familiar, you will run:

- **`!familiar set <creature>`** - Allows you to attach a familiar to your character. More commands that will add a name and a token will be displayed once you input the creature's type.

---

## Use these commands to manage your character in combat

- **`!vsheet`** - Pulls up a simplified readout of your character sheet. DM's will ask for this in each game. This does not display any counters or spells you might have.

- **`!hud`** - Shows your counters for all abilities, overall hp, ac, initiative, highest passive, spell slots, your experience needed to level, how many hit die you have left, your hit die number, and your limited abilities.

- **`!lr`** - Allows your character to take a long rest.

- **`!sr`** - Allows your character to take a short rest.

- **`!sbb`** - Pulls up a simple list of your spells and spell slots.

- **`!token`** or **`!portrait`** - Pulls up the token you have uploaded to your sheet.

### Subscription issues?

Unfortunately, SoS does not maintain any DDB campaign links with source books to help you with racial feats, class features, etc. If there are any that you would like to use through DDB, you must own them individually.

### Need extra help?

- **`!tutorial list`** provides basic tutorials for most of your major functional pieces of discord, like combat for DMs and Players. If you have never used Avrae before, we recommend running `!tutorial quickstart`

- **`!help <topic/spell/command>`** is a useful command to pull instructions and arguments for various other commands, and aliases if they have them. This works for Maps, spells, actions, and much more.

Ping a helper if you have any questions, we'll try to help as best we can!

---

# Basic Combat

## ⊹˚₊‧───────────── Prepare for Combat ─────────────‧₊˚⊹

DMs may ask for these prior to game start:

- **`!vsheet`** - Pulls up a simple readout of your character sheet.

- **`!sbb`** - Pulls up a simple list of your spells and spell slots.

- **`!lr`** - Allows your character to take a long rest.

---

## ⊹˚₊‧───────────── Rolls and Checks ─────────────‧₊˚⊹

### Roll Skill Check:
```
!c <skill>
```
*Example:* `!c stealth`

### Roll Ability Save:
```
!s <ability>
```
*Example:* `!s dex`

### Roll Die Manually:
```
!r XdieY
```
where X is the number of die you need and Y is the type of die you need

*Examples:* `!r 1d4` or `!r 4d10`

Add modifier as `!r die+mod`

*Examples:* `!r 1d20+5` `!r 2d4+4`

---

## ⊹˚₊‧───────────── Basic Commands in Combat ─────────────‧₊˚⊹

### Join Initiative:
```
!init join
```
or `!i j`

### Familiar Join:
*(requires familiar alias)*
```
!fjoin -p #
```
*# is your initiative*

### Initiative Pass:
```
!init next
```
or `!i n`

### Action List:
Lists all your possible attacks, and race & class features
```
!a list
```
AND `!aa` for any source locked features

### Attack (a specific target):
```
!attack "Weapon" -t <Target>
```
*Example:* `!attack longsword -t Jessie`

### Spell Attack (a specific target):
```
!cast "Spell" -t <Target>
```
*Example:* `!cast "cure wounds" -t Jessie`

### Attack of Opportunity:
```
!aoo <attacker> <attack> -t <Target>
```
*Example:* `!aoo Jessie longsword -t MA1`

### Concentration Save:
```
!conc
```

### Dodge:
Adds the dodge effect to user (*does not apply disadvantage automatically*)
```
!dodge
```

### Death Save:
```
!s death
```

### Use Potion:
```
!potion <"potion name"> -t <"target name">
```
*Example:* `!potion superior healing -t Jessie`

---

## ⊹˚₊‧───────────── Arguments and Adjustments ─────────────‧₊˚⊹

### Adding advantage/disadvantage:
```
!attack "Weapon" -t <Target> adv/dis
```
*Example:* `!attack "longsword" -t Jessie adv`

### Add Extra Damage:
(add after attack command)
```
-d #
```
or die

*Example:* `!a longsword -d 2` for +2 damage

### Add Extra attack:
(add after attack command)
```
-b #
```
or die

*Example:* `!a longsword -b 2` for +2 to attack roll

### HP Adjustment:
```
!i hp <Target> +/- <Number>
```
*Example:* `!i hp Jessie +15`

### Temporary HP:
```
!i thp + <Number>
```
*Example:* `!i thp +6`

### Cast Spell at Higher Level:
```
!cast "Spell" -l <# of Desired Level>
```
*(Note: l is lowercase L)*

*Example:* `!cast "cure wounds" -l 5 -t "target name here"`

### Adjust Spell Slots:
```
!g ss <level of spell> +# regained>
```
*Examples:* `!g ss 4 +3` or `!g ss 4 -3`

### Add Effect:
```
!i effect <Target> <Effect> <Effect Arguments>
```
*Example:* `!i effect Jessie stunned`

### Remove Effect:
```
!i re <Target> <Effect>
```
*Example:* `!i re Jessie stunned`

### Change Stat:
```
!i opt <Target> -ac 18
```
*Example:* `!i opt Jessie -ac 18`

---

## Notes:

- If your input has two or more words (ex. "cure wounds" or "silvery barbs"), make sure these are within quotations so Avrae knows what to look up. Sometimes it can get scared from long commands
- A comprehensive summary and more can be found [here](https://docs.google.com/spreadsheets/d/1o23F8z2uKghe9EXINx7yINEFU5wjXbIQJMPR8nfcnzI/edit?usp=sharing)
- Avrae has its own UI to help you navigate its commands found [here](https://avrae-ui.netlify.app/)
