import { useState, useEffect, useCallback } from "react";

const POKEMON = [
  [1,"Bulbasaur"],[2,"Ivysaur"],[3,"Venusaur"],[4,"Charmander"],[5,"Charmeleon"],
  [6,"Charizard"],[7,"Squirtle"],[8,"Wartortle"],[9,"Blastoise"],[10,"Caterpie"],
  [11,"Metapod"],[12,"Butterfree"],[13,"Weedle"],[14,"Kakuna"],[15,"Beedrill"],
  [16,"Pidgey"],[17,"Pidgeotto"],[18,"Pidgeot"],[19,"Rattata"],[20,"Raticate"],
  [21,"Spearow"],[22,"Fearow"],[23,"Ekans","T"],[24,"Arbok","T"],[25,"Pikachu"],
  [26,"Raichu"],[27,"Sandshrew","T"],[28,"Sandslash","T"],[29,"Nidoran♀"],[30,"Nidorina"],
  [31,"Nidoqueen"],[32,"Nidoran♂"],[33,"Nidorino"],[34,"Nidoking"],[35,"Clefairy"],
  [36,"Clefable"],[37,"Vulpix","T"],[38,"Ninetales","T"],[39,"Jigglypuff"],[40,"Wigglytuff"],
  [41,"Zubat"],[42,"Golbat"],[43,"Oddish","T"],[44,"Gloom","T"],[45,"Vileplume","T"],
  [46,"Paras"],[47,"Parasect"],[48,"Venonat"],[49,"Venomoth"],[50,"Diglett"],
  [51,"Dugtrio"],[52,"Meowth","T"],[53,"Persian","T"],[54,"Psyduck","T"],[55,"Golduck","T"],
  [56,"Mankey"],[57,"Primeape"],[58,"Growlithe","T"],[59,"Arcanine","T"],[60,"Poliwag"],
  [61,"Poliwhirl"],[62,"Poliwrath"],[63,"Abra"],[64,"Kadabra"],[65,"Alakazam"],
  [66,"Machop"],[67,"Machoke"],[68,"Machamp"],[69,"Bellsprout","T"],[70,"Weepinbell","T"],
  [71,"Victreebel","T"],[72,"Tentacool"],[73,"Tentacruel"],[74,"Geodude"],[75,"Graveler"],
  [76,"Golem"],[77,"Ponyta"],[78,"Rapidash"],[79,"Slowpoke","T"],[80,"Slowbro","T"],
  [81,"Magnemite"],[82,"Magneton"],[83,"Farfetch'd"],[84,"Doduo"],[85,"Dodrio"],
  [86,"Seel"],[87,"Dewgong"],[88,"Grimer"],[89,"Muk"],[90,"Shellder","T"],
  [91,"Cloyster","T"],[92,"Gastly"],[93,"Haunter"],[94,"Gengar"],[95,"Onix"],
  [96,"Drowzee"],[97,"Hypno"],[98,"Krabby"],[99,"Kingler"],[100,"Voltorb"],
  [101,"Electrode"],[102,"Exeggcute"],[103,"Exeggutor"],[104,"Cubone"],[105,"Marowak"],
  [106,"Hitmonlee"],[107,"Hitmonchan"],[108,"Lickitung"],[109,"Koffing"],[110,"Weezing"],
  [111,"Rhyhorn"],[112,"Rhydon"],[113,"Chansey"],[114,"Tangela"],[115,"Kangaskhan"],
  [116,"Horsea"],[117,"Seadra"],[118,"Goldeen"],[119,"Seaking"],[120,"Staryu","T"],
  [121,"Starmie","T"],[122,"Mr. Mime"],[123,"Scyther","T"],[124,"Jynx"],[125,"Electabuzz","T"],
  [126,"Magmar","T"],[127,"Pinsir"],[128,"Tauros"],[129,"Magikarp"],[130,"Gyarados"],
  [131,"Lapras"],[132,"Ditto"],[133,"Eevee"],[134,"Vaporeon"],[135,"Jolteon"],
  [136,"Flareon"],[137,"Porygon"],[138,"Omanyte"],[139,"Omastar"],[140,"Kabuto"],
  [141,"Kabutops"],[142,"Aerodactyl"],[143,"Snorlax"],[144,"Articuno"],[145,"Zapdos"],
  [146,"Moltres"],[147,"Dratini"],[148,"Dragonair"],[149,"Dragonite"],[150,"Mewtwo"],
  [151,"Mew","E"],
];

const WALKTHROUGH = [
  {
    group: "🏁 Beginning",
    items: [
      "Choose your Starter Pokémon from Prof. Oak",
      "Defeat your Rival in Oak's Lab",
      "Deliver Oak's Parcel (Viridian City PokéMart → Oak)",
      "Catch at least one Pokémon on Route 1",
    ],
  },
  {
    group: "🪨 Badge 1 – Boulder Badge",
    items: [
      "Navigate Viridian Forest (catch Pokémon here!)",
      "Defeat Brock at Pewter City Gym",
    ],
  },
  {
    group: "💧 Badge 2 – Cascade Badge",
    items: [
      "Traverse Mt. Moon (catch Clefairy, fossil Pokémon!)",
      "Defeat your Rival on Nugget Bridge (Route 24)",
      "Visit Bill and obtain the S.S. Ticket",
      "Defeat Misty at Cerulean City Gym",
      "Obtain HM01 Cut (from the S.S. Anne Captain)",
    ],
  },
  {
    group: "⚡ Badge 3 – Thunder Badge",
    items: [
      "Board the S.S. Anne (catch Pokémon, get items!)",
      "Defeat Lt. Surge at Vermilion City Gym",
    ],
  },
  {
    group: "🌈 Badge 4 – Rainbow Badge",
    items: [
      "Traverse Rock Tunnel (no Flash? still catch Pokémon!)",
      "Collect the Silph Scope from Celadon Rocket Hideout",
      "Defeat Erika at Celadon City Gym",
      "Get TMs from Celadon Game Corner",
      "Rescue Mr. Fuji from Pokémon Tower (Lavender Town)",
      "Obtain HM02 Fly from Route 16 helper",
    ],
  },
  {
    group: "🧠 Badge 5 – Soul Badge",
    items: [
      "Defeat Koga at Fuchsia City Gym",
      "Obtain HM03 Surf (Safari Zone warden's Gold Teeth)",
      "Catch Pokémon in the Safari Zone (Scyther/Pinsir, Kangaskhan, Tauros!)",
    ],
  },
  {
    group: "🔮 Badge 6 – Marsh Badge",
    items: [
      "Fight through Silph Co. and rescue the President",
      "Defeat your Rival inside Silph Co.",
      "Defeat Sabrina at Saffron City Gym",
      "Battle the Fighting Dojo (obtain Hitmonlee or Hitmonchan)",
    ],
  },
  {
    group: "🔥 Badge 7 – Volcano Badge",
    items: [
      "Surf to Cinnabar Island",
      "Explore the Pokémon Mansion (get Secret Key!)",
      "Fossil resurrection (Omanyte or Kabuto, Aerodactyl)",
      "Defeat Blaine at Cinnabar Island Gym",
      "Catch Pokémon via in-game trades (Mr. Mime, Jynx, Lickitung)",
    ],
  },
  {
    group: "🌍 Badge 8 – Earth Badge",
    items: [
      "Defeat Giovanni at Viridian City Gym",
      "Obtain HM04 Strength (Fuchsia City warden)",
      "Catch both Snorlax (Routes 12 & 16)",
      "Collect remaining TMs from gyms & routes",
    ],
  },
  {
    group: "🏆 Indigo Plateau",
    items: [
      "Traverse Victory Road (catch Pokémon here!)",
      "Defeat Lorelei (Elite Four #1)",
      "Defeat Bruno (Elite Four #2)",
      "Defeat Agatha (Elite Four #3)",
      "Defeat Lance (Elite Four #4)",
      "Defeat your Rival (Champion!)",
    ],
  },
  {
    group: "🏝️ Sevii Islands – Part 1",
    items: [
      "Help Celio on One Island (retrieve Meteorite from Mt. Ember)",
      "Rescue the Pokémon on Two Island (Berry Forest / Lostelle)",
      "Defeat the Rockets on Three Island (Bond Bridge)",
      "Return Ruby to Celio (One Island)",
    ],
  },
  {
    group: "🏝️ Sevii Islands – Part 2 (National Dex Required)",
    items: [
      "Obtain the National Pokédex (60+ seen)",
      "Receive Rainbow Pass (access Islands 4-7)",
      "Collect Sapphire from Dotted Hole (Six Island)",
      "Retrieve Sapphire from Scientist on Five Island",
      "Defeat Team Rocket Network Machine (Sevii Islands finale)",
      "Return Sapphire to Celio (enables trading with Gen III games)",
    ],
  },
  {
    group: "🐉 Legendary Hunting",
    items: [
      "Catch Articuno (Seafoam Islands)",
      "Catch Zapdos (Power Plant, Route 10)",
      "Catch Moltres (Mt. Ember Peak, One Island)",
      "Unlock Cerulean Cave (become Champion first)",
      "Catch Mewtwo (Cerulean Cave)",
    ],
  },
  {
    group: "✅ Living Dex Wrap-Up",
    items: [
      "Complete in-game trades for version exclusives",
      "Trade with LeafGreen (or another FR) for remaining version exclusives",
      "Breed or evolve all evolution line members",
      "All 151 Kanto Pokémon obtained (see Pokédex tab)",
      "Transfer Living Dex to Pokémon HOME via Pokémon Bank / Pal Park chain",
    ],
  },
];

const COLORS = {
  bg: "#1a0a0a",
  card: "#2a1010",
  cardBorder: "#8B2020",
  accent: "#FF4444",
  accentLight: "#FF7777",
  gold: "#FFD700",
  green: "#44FF88",
  text: "#FFE4E4",
  textMuted: "#AA8888",
  blue: "#4499FF",
  panel: "#3a1515",
};

export default function FireRedTracker() {
  const [tab, setTab] = useState("walkthrough");
  const [checks, setChecks] = useState({});
  const [dex, setDex] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    async function load() {
      try {
        const c = await window.storage.get("firered-checks");
        if (c) setChecks(JSON.parse(c.value));
      } catch {}
      try {
        const d = await window.storage.get("firered-dex");
        if (d) setDex(JSON.parse(d.value));
      } catch {}
      setLoaded(true);
    }
    load();
  }, []);

  const saveChecks = useCallback(async (val) => {
    try { await window.storage.set("firered-checks", JSON.stringify(val)); } catch {}
  }, []);

  const saveDex = useCallback(async (val) => {
    try { await window.storage.set("firered-dex", JSON.stringify(val)); } catch {}
  }, []);

  const toggleCheck = (key) => {
    const next = { ...checks, [key]: !checks[key] };
    setChecks(next);
    saveChecks(next);
  };

  const toggleDex = (num) => {
    const next = { ...dex, [num]: !dex[num] };
    setDex(next);
    saveDex(next);
  };

  const totalChecks = WALKTHROUGH.reduce((a, g) => a + g.items.length, 0);
  const doneChecks = Object.values(checks).filter(Boolean).length;
  const doneDex = Object.values(dex).filter(Boolean).length;
  const totalDex = 151;

  const filteredPokemon = POKEMON.filter(([num, name, flag]) => {
    if (filter === "caught") return dex[num];
    if (filter === "missing") return !dex[num];
    if (filter === "trade") return flag === "T";
    if (filter === "event") return flag === "E";
    return true;
  });

  if (!loaded) return (
    <div style={{ background: COLORS.bg, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.text, fontFamily: "'Courier New', monospace", fontSize: 20 }}>
      Loading save data...
    </div>
  );

  return (
    <div style={{
      background: COLORS.bg,
      minHeight: "100vh",
      fontFamily: "'Courier New', monospace",
      color: COLORS.text,
      padding: "0 0 40px 0",
    }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, #8B0000 0%, #CC2200 50%, #8B0000 100%)`,
        borderBottom: `3px solid ${COLORS.gold}`,
        padding: "20px 24px 16px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: 11, letterSpacing: 4, color: COLORS.gold, marginBottom: 4, textTransform: "uppercase" }}>Pokémon</div>
          <h1 style={{ margin: 0, fontSize: "clamp(18px, 4vw, 28px)", fontWeight: "bold", letterSpacing: 2, color: "#fff", textShadow: "2px 2px 0 #000" }}>
            🔥 FireRed Progress Tracker
          </h1>
          <div style={{ marginTop: 12, display: "flex", gap: 20, flexWrap: "wrap" }}>
            <ProgressBar label="Walkthrough" done={doneChecks} total={totalChecks} color={COLORS.gold} />
            <ProgressBar label="Living Dex" done={doneDex} total={totalDex} color={COLORS.green} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: `2px solid ${COLORS.cardBorder}`, background: COLORS.card }}>
        {["walkthrough", "pokedex"].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: "12px 24px",
            background: tab === t ? COLORS.accent : "transparent",
            color: tab === t ? "#fff" : COLORS.textMuted,
            border: "none",
            cursor: "pointer",
            fontFamily: "'Courier New', monospace",
            fontSize: 13,
            fontWeight: "bold",
            letterSpacing: 2,
            textTransform: "uppercase",
            borderBottom: tab === t ? `3px solid ${COLORS.gold}` : "3px solid transparent",
            transition: "all 0.15s",
          }}>
            {t === "walkthrough" ? "📋 Walkthrough" : "📖 Pokédex (1–151)"}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>

        {/* WALKTHROUGH TAB */}
        {tab === "walkthrough" && (
          <div>
            <p style={{ color: COLORS.textMuted, fontSize: 12, marginBottom: 20, lineHeight: 1.6 }}>
              Check off milestones as you complete them. Progress is saved automatically in your browser.
              Tips for Living Dex hunters are included throughout.
            </p>
            {WALKTHROUGH.map((group, gi) => {
              const groupDone = group.items.filter((_, ii) => checks[`${gi}-${ii}`]).length;
              return (
                <div key={gi} style={{
                  background: COLORS.card,
                  border: `1px solid ${COLORS.cardBorder}`,
                  borderRadius: 4,
                  marginBottom: 16,
                  overflow: "hidden",
                }}>
                  <div style={{
                    padding: "10px 16px",
                    background: groupDone === group.items.length ? "rgba(68,255,136,0.1)" : "rgba(139,32,32,0.3)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: `1px solid ${COLORS.cardBorder}`,
                  }}>
                    <span style={{ fontWeight: "bold", fontSize: 13, letterSpacing: 1 }}>{group.group}</span>
                    <span style={{
                      fontSize: 11,
                      color: groupDone === group.items.length ? COLORS.green : COLORS.textMuted,
                      background: "rgba(0,0,0,0.3)",
                      padding: "2px 8px",
                      borderRadius: 2,
                    }}>
                      {groupDone}/{group.items.length}
                    </span>
                  </div>
                  <div style={{ padding: "8px 0" }}>
                    {group.items.map((item, ii) => {
                      const key = `${gi}-${ii}`;
                      const done = checks[key];
                      return (
                        <div key={ii} onClick={() => toggleCheck(key)} style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 12,
                          padding: "8px 16px",
                          cursor: "pointer",
                          background: done ? "rgba(68,255,136,0.05)" : "transparent",
                          transition: "background 0.1s",
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = done ? "rgba(68,255,136,0.1)" : "rgba(255,255,255,0.03)"}
                        onMouseLeave={e => e.currentTarget.style.background = done ? "rgba(68,255,136,0.05)" : "transparent"}>
                          <div style={{
                            width: 16,
                            height: 16,
                            border: `2px solid ${done ? COLORS.green : COLORS.cardBorder}`,
                            background: done ? COLORS.green : "transparent",
                            flexShrink: 0,
                            marginTop: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.15s",
                          }}>
                            {done && <span style={{ color: "#000", fontSize: 10, fontWeight: "bold", lineHeight: 1 }}>✓</span>}
                          </div>
                          <span style={{
                            fontSize: 13,
                            color: done ? COLORS.textMuted : COLORS.text,
                            textDecoration: done ? "line-through" : "none",
                            lineHeight: 1.5,
                          }}>{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* POKEDEX TAB */}
        {tab === "pokedex" && (
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ color: COLORS.textMuted, fontSize: 12 }}>Filter:</span>
              {[["all","All 151"],["caught","Caught"],["missing","Missing"],["trade","Needs Trade ↔"],["event","Event 🎁"]].map(([f, label]) => (
                <button key={f} onClick={() => setFilter(f)} style={{
                  padding: "4px 12px",
                  background: filter === f ? COLORS.accent : COLORS.card,
                  color: filter === f ? "#fff" : COLORS.textMuted,
                  border: `1px solid ${filter === f ? COLORS.accentLight : COLORS.cardBorder}`,
                  borderRadius: 2,
                  cursor: "pointer",
                  fontFamily: "'Courier New', monospace",
                  fontSize: 11,
                  letterSpacing: 1,
                }}>
                  {label}
                </button>
              ))}
              <span style={{ marginLeft: "auto", fontSize: 12, color: COLORS.green, background: "rgba(68,255,136,0.1)", padding: "4px 12px", borderRadius: 2 }}>
                {doneDex} / {totalDex} caught
              </span>
            </div>

            {/* Legend */}
            <div style={{ display: "flex", gap: 16, marginBottom: 14, fontSize: 11, color: COLORS.textMuted, flexWrap: "wrap" }}>
              <span><span style={{ color: COLORS.gold }}>↔</span> = Needs trade (version exclusive or trade evo)</span>
              <span><span style={{ color: "#FF99FF" }}>🎁</span> = Event / unobtainable in-game</span>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(88px, 1fr))",
              gap: 6,
            }}>
              {filteredPokemon.map(([num, name, flag]) => {
                const caught = dex[num];
                const isEvent = flag === "E";
                const isTrade = flag === "T";
                return (
                  <div
                    key={num}
                    onClick={() => toggleDex(num)}
                    style={{
                      background: caught ? "rgba(68,255,136,0.12)" : COLORS.card,
                      border: `1px solid ${caught ? COLORS.green : isEvent ? "#FF99FF" : isTrade ? COLORS.gold : COLORS.cardBorder}`,
                      borderRadius: 3,
                      padding: "7px 6px 6px",
                      cursor: "pointer",
                      textAlign: "center",
                      transition: "all 0.12s",
                      position: "relative",
                      opacity: isEvent ? 0.75 : 1,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = caught ? COLORS.green : COLORS.accentLight; e.currentTarget.style.background = caught ? "rgba(68,255,136,0.18)" : "rgba(255,68,68,0.08)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = caught ? COLORS.green : isEvent ? "#FF99FF" : isTrade ? COLORS.gold : COLORS.cardBorder; e.currentTarget.style.background = caught ? "rgba(68,255,136,0.12)" : COLORS.card; }}
                  >
                    {/* Badge flag */}
                    {(isTrade || isEvent) && (
                      <div style={{ position: "absolute", top: 2, right: 4, fontSize: 9, color: isEvent ? "#FF99FF" : COLORS.gold }}>
                        {isEvent ? "🎁" : "↔"}
                      </div>
                    )}
                    {/* Caught checkmark */}
                    {caught && (
                      <div style={{ position: "absolute", top: 2, left: 4, fontSize: 10, color: COLORS.green }}>✓</div>
                    )}
                    <div style={{ fontSize: 10, color: COLORS.textMuted, marginBottom: 2 }}>#{String(num).padStart(3, "0")}</div>
                    <div style={{ fontSize: 11, color: caught ? COLORS.green : COLORS.text, fontWeight: caught ? "bold" : "normal", lineHeight: 1.3, wordBreak: "break-word" }}>
                      {name}
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredPokemon.length === 0 && (
              <div style={{ textAlign: "center", padding: 40, color: COLORS.textMuted, fontSize: 14 }}>
                No Pokémon match this filter.
              </div>
            )}

            <div style={{ marginTop: 24, background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 4, padding: 16 }}>
              <div style={{ fontSize: 12, color: COLORS.gold, letterSpacing: 2, marginBottom: 10, textTransform: "uppercase" }}>📝 Living Dex Notes</div>
              <div style={{ fontSize: 12, color: COLORS.textMuted, lineHeight: 1.8 }}>
                <div>• <span style={{ color: COLORS.gold }}>↔ Version exclusives</span> require trading with a LeafGreen cart/save. Key ones: Ekans/Arbok, Oddish line, Psyduck line, Growlithe line, Vulpix line, Meowth line, Bellsprout line, Staryu/Starmie, Magmar, Electabuzz, Shellder/Cloyster, Scyther, Slowpoke line.</div>
                <div>• <span style={{ color: COLORS.gold }}>Trade evolutions</span> (Graveler→Golem, Haunter→Gengar, Machoke→Machamp, Kadabra→Alakazam) also require trading.</div>
                <div>• <span style={{ color: "#FF99FF" }}>🎁 Mew</span> was event-only and is not obtainable in a standard cartridge. It can be transferred from other Gen III games that received it via event, or via Pokémon HOME methods.</div>
                <div>• <span style={{ color: COLORS.text }}>Fossil choice</span>: pick Helix (Omanyte) or Dome (Kabuto) fossil in Mt. Moon — you can only get one per playthrough. The other requires trading.</div>
                <div>• To migrate to <span style={{ color: COLORS.blue }}>Pokémon HOME</span>: FR→Pal Park (Gen IV) → Pokémon Bank (3DS) → HOME. Alternatively, use Pokémon HOME's supported Gen III connectivity if available.</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProgressBar({ label, done, total, color }) {
  const pct = Math.round((done / total) * 100);
  return (
    <div style={{ flex: 1, minWidth: 160 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontSize: 11 }}>
        <span style={{ color: "rgba(255,255,255,0.8)", letterSpacing: 1 }}>{label}</span>
        <span style={{ color }}>{done}/{total} ({pct}%)</span>
      </div>
      <div style={{ height: 8, background: "rgba(0,0,0,0.4)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: `${pct}%`,
          background: color,
          borderRadius: 2,
          transition: "width 0.3s",
          boxShadow: `0 0 8px ${color}`,
        }} />
      </div>
    </div>
  );
}
