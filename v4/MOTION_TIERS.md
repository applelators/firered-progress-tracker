# Motion Tiers — FRLG Tracker v4

Loudness budget for the 32 active motion sketches. Ordered loudest → quietest.

Goal: prevent multiple ceremonies from firing on top of each other, and keep
the everyday texture of the app calm.

---

## Tier 1 — Ceremony

Huge, ≤ 2 fires per run. The whole UI yields to it. Plays once on its
trigger and never again. Cancels in-flight Tier 3 and Tier 4 motion.

| #   | Sketch              | Trigger                                           |
| --- | ------------------- | ------------------------------------------------- |
| 36  | Vault (100%)        | The actual finish line — fires once ever.         |
| 27  | Elite Four reveal   | Endgame card.                                     |
| 10  | Legendary aura      | Mewtwo / Articuno / Zapdos / Moltres encountered. |
| 26  | Fossil revival      | Helix / Dome restored — twice per run.            |

## Tier 2 — Spotlight

Notable but in-flow — big enough to stop and look, small enough you keep
working. Doesn't pause anything else.

| #   | Sketch                | Trigger                                            |
| --- | --------------------- | -------------------------------------------------- |
| 02  | Badge earned          | Each gym clear — 8× per run.                       |
| 34  | Starter pick          | Once.                                              |
| 11  | Trade evolution       | Handful per run.                                   |
| 28  | Part progress ring    | Once per Bulbapedia part completed.                |
| 45  | Achievement ribbon    | Sub-goal milestones between gyms.                  |
| 38  | Route line draw       | First visit to a route, or on map open.            |

## Tier 3 — Confirm

Every-action feedback. < 400 ms. No afterglow. Suppressed for 1.5 s after
any Tier 1 fires (so the Vault isn't crashed by the catch sparkle that
triggered it).

**Catch / progress**
- 01 Wobble reveal · 05 Counter tick · 08 Spark burst
- 22 Toast · 23 Slot-barrel level

**Navigation**
- 04 Tab stagger · 07 Sidebar slide
- 17 Title collapse · 29 Breadcrumb cascade

**Inside an area**
- 06 Pill shimmer · 09 Floor collapse · 32 HM gate pulse

**Pokédex / detail**
- 12 Type flip · 18 Skeleton shimmer · 20 Filter dim
- 37 Pokédex dial · 43 Map pin (cap pulse at 2 cycles)

**FR / LG**
- 03 Accent crossfade

## Tier 4 — Ambient

Continuous, low-energy. Each scoped to a single surface so they never
co-occur. Always yields if anything else is animating in the same viewport.

| #   | Sketch              | Surface                                                          |
| --- | ------------------- | ---------------------------------------------------------------- |
| 14  | Autosave indicator  | Global. Wakes briefly on save, otherwise dim.                    |
| 15  | 0/151 breathing     | Empty states only.                                               |
| 41  | Boxed-mon idle      | Storage / box screen only.                                       |
| 44  | Day ↔ night         | 4 canonical areas only (Tower, Lavender, Cerulean Cave, Seafoam). |

---

## Rules of the road

1. **One Tier 1 at a time.** A second trigger queues until the first finishes.
2. **Tier 1 cancels in-flight Tier 3 / Tier 4** in the same viewport.
3. **Tier 3 is suppressed for 1.5 s after any Tier 1** finishes.
4. **Tier 2 does not suppress Tier 3.** A badge earning while a tab is
   mid-stagger is fine.
5. **Tier 4 yields.** If any Tier 1–3 motion is firing in the same viewport,
   the ambient surface freezes for the duration and resumes after.
6. **`prefers-reduced-motion`** disables Tier 1 ceremonies entirely, replaces
   Tier 2/3 with a colour or border-only state change, and disables Tier 4.

---

## Cuts made during the tier exercise

- **#24 Wax-stamp** — overlap with #02 Badge earned. Pick one. Cut.
- **#25 Cursor spotlight** — desktop-only; revisit when / if a desktop detail
  pane exists. Cut from the active set.
- **#35 Sync diff** — assumes cross-device sync; tracker is `localStorage`
  only today. Parked until that's a real feature.

**Active sketches: 32.**

---

## How this maps to wiring

When porting motion into `firered-area-tracker-v4.jsx`:

- Tier 3 lives inline on each component as the default state-change animation.
- Tier 2 should funnel through one shared `<SpotlightHost>` component so the
  vocabulary stays consistent.
- Tier 1 should funnel through one shared `<CeremonyHost>` that owns the
  queue, the suppression window, and the reduced-motion fallback.
- Tier 4 components opt in to a `useAmbient(active: bool)` hook that pauses
  them when any louder motion is firing.
