# 🔥 Pokémon FireRed Progress Tracker

A pair of interactive trackers built to support a **100% completion + Living Dex** run of Pokémon FireRed Version (Game Boy Advance), playable directly inside [Claude.ai](https://claude.ai) as React artifacts.

---

## 📁 Files

| File | Description |
|---|---|
| `firered-walkthrough-tracker.jsx` | Walkthrough milestone checklist + 151-Pokémon Living Dex grid |
| `firered-area-tracker.jsx` | Area-by-area encounter & item tracker with shared Pokédex tab |

---

## ✨ Features

### `firered-walkthrough-tracker.jsx`
- **Walkthrough checklist** — 14 grouped milestone sections covering the full main story, Sevii Islands post-game, and legendary hunting, with Living Dex tips embedded throughout
- **Pokédex grid** — all 151 Kanto Pokémon displayed in a clickable grid; toggle each as caught
- Filter by: All / Caught / Missing / Needs Trade / Event
- Version exclusives and trade evolutions clearly flagged
- Notes on the migration path to Pokémon HOME

### `firered-area-tracker.jsx` *(main tracker — use this one)*
- **Pokédex tab** — full 151-Pokémon grid with a "Where to find" side panel; click any Pokémon to see every area it appears in, with encounter method, level range, and rate
- **Areas tab** — 54 areas covering all 21 Bulbapedia walkthrough parts through the full Sevii Islands, each with:
  - All wild Pokémon encounters (grass, cave, surf, Old/Good/Super Rod, gift, trade, fossil, Game Corner)
  - All obtainable items — both visible and hidden (★ = requires Itemfinder)
  - FireRed-exclusive and LeafGreen-exclusive tags on relevant encounters
  - ⚠ warnings on one-time-only encounters (Snorlax ×2, Articuno, Zapdos, Moltres, Mewtwo, legendaries)
- **Shared Pokémon state** — catching a Pokémon in any area automatically marks it caught in every other area it appears in, and in the Pokédex tab
- Items are tracked per-area independently
- Progress saved automatically between sessions via browser storage

---

## 🚀 How to Use

These trackers are designed to run as **React artifacts inside Claude.ai**. They do not require any build tools, Node.js, or local setup.

1. Open [claude.ai](https://claude.ai)
2. Start a new conversation
3. Copy the full contents of the `.jsx` file you want to use
4. Paste it into the chat with a prompt such as:

   > *"Run this React artifact for me:"*

5. Claude will render it as an interactive app in the artifact panel
6. Your progress is saved automatically in your browser and will persist across sessions

> **Tip:** Use `firered-area-tracker.jsx` — it includes everything from the walkthrough tracker and more.

---

## 🗺 Areas Covered

The area tracker covers all of the following, organized by Bulbapedia walkthrough part:

**Main Game**
Route 1 · Viridian City · Route 22 · Route 2 · Viridian Forest · Pewter City · Route 3 · Mt. Moon · Route 4 · Cerulean City · Routes 24–25 · Routes 5–6 · Underground Paths · Vermilion City · S.S. Anne · Diglett's Cave · Route 11 · Route 10 · Rock Tunnel · Routes 7–9 · Lavender Town · Pokémon Tower · Celadon City · Rocket Hideout · Routes 12–15 · Fuchsia City · Safari Zone · Routes 16–18 · Saffron City · Silph Co. · Fighting Dojo · Routes 19–21 · Seafoam Islands · Cinnabar Island · Pokémon Mansion · Power Plant · Route 23 · Victory Road

**Post-Game**
Cerulean Cave · One Island (Kindle Road & Mt. Ember) · Two Island (Cape Brink & Berry Forest) · Three Island · Four Island (Icefall Cave) · Five Island (Lost Cave & Meadow) · Six Island (Dotted Hole & Ruin Valley) · Seven Island (Tanoby Ruins & Sevault Canyon)

---

## 📖 Living Dex Notes

A Living Dex means having one of every Pokémon obtained and stored — all 151 in this case, before migrating to Pokémon HOME.

**Key things to plan around:**

- **Fossil choice** — you can only pick one fossil in Mt. Moon per playthrough (Dome → Kabuto, Helix → Omanyte). Trade for the other.
- **Fighting Dojo** — you can only receive Hitmonlee *or* Hitmonchan. Trade for the other.
- **Version exclusives** — FireRed and LeafGreen each have ~15 Pokémon the other version can't catch. All are flagged `FR` or `LG` in the tracker. Trading with a LeafGreen save is required for a complete Living Dex.
- **Trade evolutions** — Alakazam, Gengar, Machamp, and Golem each require a trade to evolve. Plan a trading partner or use a second cartridge/save.
- **Mew** — event-only and not obtainable through normal gameplay. Not flagged as catchable anywhere in this tracker.
- **HOME migration path** — FireRed → Pal Park (Gen IV) → Pokémon Bank (3DS) → Pokémon HOME.

---

## 🛠 Technical Notes

- Built with **React** (hooks: `useState`, `useEffect`, `useCallback`, `useMemo`)
- All encounter and item data is **hardcoded** — no API calls, no network dependency, instant load
- Encounter rates are sourced from Bulbapedia and are approximate in some cases; Pokémon availability is accurate
- Persistent storage uses Claude's artifact `window.storage` API (key-value, browser-scoped)
- No external libraries or dependencies beyond React itself

---

## 📚 References

- [Bulbapedia — FireRed & LeafGreen Walkthrough](https://bulbapedia.bulbagarden.net/wiki/Walkthrough:Pok%C3%A9mon_FireRed_and_LeafGreen)
- [Bulbapedia — Pokémon FireRed and LeafGreen Versions](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_FireRed_and_LeafGreen_Versions)

---

*Built with Claude (Anthropic) · For personal use · Not affiliated with Nintendo or The Pokémon Company*
