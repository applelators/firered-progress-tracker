# Pokémon FireRed Progress Tracker

An interactive tracker built to support a **100% completion + Living Dex** run of Pokémon FireRed Version (Game Boy Advance).

---

## Files

| File | Description |
|---|---|
| `firered-area-tracker-v2.jsx` | Main tracker (web) — visually redesigned version rendered by `index.html` |
| `firered-area-tracker.jsx` | Main tracker (Claude.ai) — original version kept as a React artifact fallback |
| `firered-walkthrough-tracker.jsx` | Simpler walkthrough milestone checklist + 151-Pokémon Living Dex grid |
| `index.html` | Web entry point — loads DM Sans from Google Fonts and renders v2 |

---

## Hosting

The tracker is designed to run as a **static web page** hosted on Cloudflare Pages (or any static host), as well as a React artifact inside [Claude.ai](https://claude.ai).

### Running locally

Serve the project directory with Python's built-in HTTP server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`. A local server is required — opening `index.html` directly as a `file://` URL will fail because the browser blocks loading the `.jsx` file via fetch.

### Cloudflare Pages deployment

Connect the GitHub repo to Cloudflare Pages with no build command and no output directory. Add a custom subdomain via **Workers & Pages → Custom domains** in the Cloudflare dashboard.

---

## Features

- **Pokédex tab** — full 151-Pokémon grid with sprites; click any Pokémon to see a larger sprite, its caught status, and every area it appears in with encounter method, level range, and rate
- **Areas tab** — audited areas covering Pallet Town through Pewter City, each with:
  - All wild Pokémon encounters with sprites, encounter rates, and FireRed / LeafGreen differences noted
  - All obtainable items with sprites — both visible and hidden (★ = requires Itemfinder)
  - All trainers with trainer class sprites and full Pokémon teams (species, sprite, and level), checkable as defeated
  - FireRed-exclusive and LeafGreen-exclusive tags on relevant encounters
  - Warnings on one-time-only encounters (Snorlax ×2, legendaries, etc.)
- **Shared Pokémon state** — catching a Pokémon in any area marks it caught everywhere, including the Pokédex tab
- **Progress saved automatically** between sessions via browser localStorage

---

## Audit status

Area data is being audited part by part against the [Bulbapedia FireRed & LeafGreen walkthrough](https://bulbapedia.bulbagarden.net/wiki/Walkthrough:Pok%C3%A9mon_FireRed_and_LeafGreen). Only audited parts are shown in the tracker.

| Part | Areas | Status |
|------|-------|--------|
| Part 1 | Pallet Town | Audited |
| Part 2 | Route 1 · Viridian City · Route 22 · Route 2 (West) | Audited |
| Part 3 | Viridian Forest · Pewter City | Audited |
| Part 4 | Route 3 · Route 4 (West) · Mt. Moon · Route 4 (East) | Audited |
| Part 5 | Cerulean City · Route 24 · Route 25 · Cerulean City (Return) · Route 5 · Underground Path (5↔6) | Audited |
| Part 6 | Route 6 · Vermilion City · S.S. Anne | Audited |
| Part 7 | Route 11 · Diglett's Cave · Route 2 (East) · Route 9 · Route 10 (North) | Audited |
| Part 8 | Rock Tunnel · Route 10 (South) · Route 8 · Route 7 · Lavender Town | Audited |
| Part 9 | Celadon City · Rocket Hideout · Pokémon Tower | Audited |
| Part 10 | Route 12 · Route 13 · Route 14 · Route 15 · Fuchsia City · Safari Zone · Route 16 · Route 17 · Route 18 | Audited |
| Part 11–21 | Saffron City through Sevii Islands | Pending audit |

---

## Living Dex notes

A Living Dex means having one of every Pokémon obtained and stored — all 151 in this case, before migrating to Pokémon HOME.

Key things to plan around:

- **Fossil choice** — you can only pick one fossil in Mt. Moon per playthrough (Dome → Kabuto, Helix → Omanyte). Trade for the other.
- **Fighting Dojo** — you can only receive Hitmonlee *or* Hitmonchan. Trade for the other.
- **Version exclusives** — FireRed and LeafGreen each have ~15 Pokémon the other version can't catch. All are flagged `FR` or `LG` in the tracker. Trading with a LeafGreen save is required.
- **Trade evolutions** — Alakazam, Gengar, Machamp, and Golem each require a trade to evolve.
- **Mew** — event-only and not obtainable through normal gameplay. Not flagged as catchable anywhere in this tracker.
- **HOME migration path** — FireRed → Pal Park (Gen IV) → Pokémon Bank (3DS) → Pokémon HOME.

---

## Design (v2)

The web version (`firered-area-tracker-v2.jsx`) uses a fully redesigned visual system:

- **Palette** — deep warm near-black backgrounds (`#110d08`) with a FireRed orange accent (`#d4621a`), amber for items, sage green for caught state, and soft violet for event Pokémon
- **Typography** — [DM Sans](https://fonts.google.com/specimen/DM+Sans) (400/600/700) for all UI text; Courier New kept only for Pokédex numbers
- **Encounter rate tiers** — sky blue ≥ 30%, golden yellow ≥ 10%, soft violet < 10%; split FR/LG rates rendered as stacked color-coded pill badges
- **Checkboxes** — explicit 14×14px checkbox on every row; done rows dim to 40% opacity with strikethrough
- **Sprites** — uncaught Pokémon sprites are desaturated and dimmed; caught sprites render at full opacity

The v1 file (`firered-area-tracker.jsx`) retains the original styling for Claude.ai artifact use. localStorage keys are identical between versions — save data is fully compatible.

---

## Technical notes

- Built with **React 18** (hooks: `useState`, `useEffect`, `useCallback`, `useMemo`)
- In-browser JSX transpilation via **Babel standalone** loaded from CDN — no build tools required
- All encounter and item data is hardcoded; no API calls, instant load
- Encounter rates sourced from Bulbapedia; Pokémon availability is accurate for audited parts
- Persistent storage uses `localStorage`
- Pokémon and item sprites served from [PokeAPI sprites](https://github.com/PokeAPI/sprites) via GitHub raw CDN
- Trainer sprites served from [Pokémon Showdown](https://play.pokemonshowdown.com/sprites/trainers/)

---

## References

- [Bulbapedia — FireRed & LeafGreen Walkthrough](https://bulbapedia.bulbagarden.net/wiki/Walkthrough:Pok%C3%A9mon_FireRed_and_LeafGreen)
- [Bulbapedia — Pokémon FireRed and LeafGreen Versions](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_FireRed_and_LeafGreen_Versions)

---

*Built with Claude (Anthropic) · For personal use · Not affiliated with Nintendo or The Pokémon Company*
