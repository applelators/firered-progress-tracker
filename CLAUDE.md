# FireRed Progress Tracker — Claude Guidelines

This file is loaded automatically by Claude Code. It captures the conventions, data pipeline, and known pitfalls for this project so any Claude instance can continue the work consistently.

**Keep this file current.** Update it whenever major changes are made to the repo — new features, structural changes to the data format, new pitfalls discovered, or changes to key conventions. A stale CLAUDE.md is worse than none.

---

## Project Overview

A single-page React 18 app tracking a 100% completion + Living Dex run of Pokémon FireRed/LeafGreen. No build tools — in-browser Babel transpilation via CDN. All data is hardcoded in the JSX. State persists to `localStorage`.

**Active file:** `firered-area-tracker-v3.jsx` (loaded by `index.html`)
**Reference:** `firered-area-tracker-v2.jsx` (previous version, kept for fallback)
**Audit source:** [Bulbapedia FireRed & LeafGreen Walkthrough](https://bulbapedia.bulbagarden.net/wiki/Walkthrough:Pok%C3%A9mon_FireRed_and_LeafGreen)

---

## Part Audit Pipeline

### One part at a time

Always audit one Bulbapedia part at a time. After implementing, pause and let the user review before moving to the next part. Doing multiple parts in one session without review has caused repeated errors.

### Per-area process

For each area in a part:

1. **Fetch raw wikitext** for the area page via `curl "https://bulbapedia.bulbagarden.net/w/index.php?title=PAGE_TITLE&action=raw"`. Never rely on the rendered HTML for encounter or item data — use raw wikitext as the authoritative source.
2. **Wild Pokémon** — extract from `{{Catch/entryfl|...}}` lines. The template format is `|dex#|Name|FR(yes/no)|LG(yes/no)|method|levels|rate|`. The `yes`/`no` flags are explicit — no column-guessing needed.
3. **Encounter rate sanity check** — rates should sum to approximately 100% per version. If they don't, something is wrong.
4. **Items** — extract from `{{Itemlist|...}}` lines. The raw wikitext lists items with their location description and FR/LG availability flags directly.
5. **Trainers** — the rendered walkthrough page is acceptable for trainers (trainer templates in raw wikitext are verbose and harder to parse). Cross-check the team sizes and levels against the rendered page.
6. **Multi-floor areas** — fetch per-floor data. Do not collapse a dungeon into a single flat structure.

### After implementing a part

- Add the new part strings to `AUDITED_PARTS` in the JSX.
- Update `README.md` — add a row to the Audit status table.
- Commit with a clear message referencing the part number and areas covered.

---

## Data Structure

### Flat area

```js
{ part:"Part N", id:"kebab-id", name:"Area Name",
  note:"Optional context shown in the UI.",
  pokemon:[ ... ],
  items:[ ... ],
  trainers:[ ... ] }
```

### Floored area

Use `floors` instead of top-level `pokemon`/`items`/`trainers` for any area with distinct sub-sections: multi-floor dungeons, ships, the Safari Zone, etc.

```js
{ part:"Part N", id:"kebab-id", name:"Area Name",
  note:"...",
  floors:[
    { label:"1F", pokemon:[ ... ], items:[ ... ], trainers:[ ... ] },
    { label:"B1F", pokemon:[ ... ], items:[ ... ], trainers:[ ... ] },
  ] }
```

Every array (`pokemon`, `items`, `trainers`) must be present on every floor, even if empty.

### Pokémon entry

```js
{ name:"Rattata", method:"Grass", levels:"2–5", rate:"45%",
  frOnly:true,   // omit if neither version-exclusive
  lgOnly:true,   // omit if neither version-exclusive
  note:"...",    // optional clarifying note shown in the UI
  warn:true }    // true for one-time-only encounters (legendaries, Snorlax, fossils)
```

`method` values in use: `"Grass"`, `"Cave"`, `"Surf"`, `"Old Rod"`, `"Good Rod"`, `"Super Rod"`, `"Gift"`, `"Trade"`, `"Fossil"`, `"Event"`.

### Item entry

```js
{ name:"Potion", hidden:false, note:"Short location description" }
```

`hidden: true` means the item requires the Itemfinder. The UI renders these with a ★.

### Trainer entry

```js
{ class:"Youngster", name:"Joey",
  note:"Optional note shown under the trainer name.",
  team:[ {name:"Rattata", level:4} ] }
```

Trainer class must match a key in `TRAINER_CLASS_SPRITE` or `TRAINER_NAME_SPRITE` in the JSX for the sprite to render. Rival "Blue" maps via name — use `class:"Rival", name:"Blue"`.

---

## Key Conventions (localStorage)

These key formats are load-bearing. Do not change them without bumping the localStorage key suffix.

| What | Format | Example |
|------|--------|---------|
| Caught Pokémon | `pokémonName` | `"Rattata"` |
| Flat-area item | `${areaId}\|${index}` | `"viridian-forest\|2"` |
| Floored-area item | `${areaId}\|${floorLabel}\|${index}` | `"mt-moon\|B2F\|0"` |
| Trainer | `${areaId}\|${class}\|${name}` | `"route1\|Youngster\|Joey"` |

**Critical:** Flat-area items must use the index, not the item name. Two items with the same name in the same area (e.g., two Antidotes in Viridian Forest, three Potions in Viridian Forest) would share a key under a name-based scheme, causing one checkbox to control both. The index-based format was introduced to fix this bug.

---

## Known Pitfalls

### WebFetch and FR/LG split tables

Bulbapedia renders encounter tables with a FireRed column and a LeafGreen column. WebFetch + AI systematically misreads which column belongs to which version in these tables. This caused multiple wrong `frOnly`/`lgOnly` assignments and swapped encounter rates in earlier sessions.

**Fix:** Always use raw wikitext (`?action=raw`) instead of the rendered page for encounter and item data. The `{{Catch/entryfl}}` template has explicit `|yes|no|` flags for FR and LG — no column interpretation needed. `grep catch/entryfl` pulls all encounter entries at once and is fast to verify.

**If raw wikitext is unavailable for some reason:** flag all split-rate encounters explicitly and ask the user to verify before writing. Never silently assign version exclusivity from a rendered page.

### LOCATION_MAP is built at module scope

`LOCATION_MAP` (the lookup that powers the Pokédex "found in" list) is populated before React renders. The loop that builds it must use the module-scope `_allPokemon` helper, not the component-scope `flattenPokemon`. Both do the same thing, but component-scope helpers aren't available at module load time. Accessing `area.pokemon` directly on a floored area (which has no top-level `.pokemon`) throws at load and produces a blank page.

### Duplicate item names

Multiple items with the same name can appear in the same area or floor (Escape Rope, Antidote, Potion, etc.). Always use index-based item keys — never name-based.

### Area ID format

Area IDs are kebab-case strings used as React keys and in localStorage item keys. They must be stable — changing an ID invalidates all saved item state for that area. Establish IDs when an area is first added and do not rename them.

---

## Commit Conventions

- One commit per part audit (or per meaningful unit of work).
- Message format: `Audit Part N — AreaName · AreaName · AreaName`
- Always commit after the user has reviewed and approved the changes.
- Include `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>` in commit messages.

---

## Running Locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`. Opening `index.html` directly as a `file://` URL fails because the browser blocks loading the `.jsx` file via fetch.
