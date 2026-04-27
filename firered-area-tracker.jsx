const { useState, useEffect, useCallback, useMemo } = React;

// ─── KANTO DEX (151) ─────────────────────────────────────────────────────────
const DEX = [
  {id:1,  name:"Bulbasaur"},   {id:2,  name:"Ivysaur"},      {id:3,  name:"Venusaur"},
  {id:4,  name:"Charmander"},  {id:5,  name:"Charmeleon"},   {id:6,  name:"Charizard"},
  {id:7,  name:"Squirtle"},    {id:8,  name:"Wartortle"},    {id:9,  name:"Blastoise"},
  {id:10, name:"Caterpie"},    {id:11, name:"Metapod"},      {id:12, name:"Butterfree"},
  {id:13, name:"Weedle"},      {id:14, name:"Kakuna"},       {id:15, name:"Beedrill"},
  {id:16, name:"Pidgey"},      {id:17, name:"Pidgeotto"},    {id:18, name:"Pidgeot"},
  {id:19, name:"Rattata"},     {id:20, name:"Raticate"},     {id:21, name:"Spearow"},
  {id:22, name:"Fearow"},      {id:23, name:"Ekans",    frOnly:true}, {id:24, name:"Arbok",    frOnly:true},
  {id:25, name:"Pikachu"},     {id:26, name:"Raichu"},
  {id:27, name:"Sandshrew",lgOnly:true},{id:28,name:"Sandslash",lgOnly:true},
  {id:29, name:"Nidoran♀"},   {id:30, name:"Nidorina"},     {id:31, name:"Nidoqueen"},
  {id:32, name:"Nidoran♂"},   {id:33, name:"Nidorino"},     {id:34, name:"Nidoking"},
  {id:35, name:"Clefairy"},    {id:36, name:"Clefable"},
  {id:37, name:"Vulpix",  frOnly:true}, {id:38, name:"Ninetales",frOnly:true},
  {id:39, name:"Jigglypuff"}, {id:40, name:"Wigglytuff"},
  {id:41, name:"Zubat"},       {id:42, name:"Golbat"},
  {id:43, name:"Oddish",  frOnly:true}, {id:44, name:"Gloom",   frOnly:true}, {id:45, name:"Vileplume",frOnly:true},
  {id:46, name:"Paras"},       {id:47, name:"Parasect"},
  {id:48, name:"Venonat"},     {id:49, name:"Venomoth"},
  {id:50, name:"Diglett"},     {id:51, name:"Dugtrio"},
  {id:52, name:"Meowth",  lgOnly:true}, {id:53, name:"Persian",  lgOnly:true},
  {id:54, name:"Psyduck",  frOnly:true},{id:55, name:"Golduck",  frOnly:true},
  {id:56, name:"Mankey",  frOnly:true}, {id:57, name:"Primeape", frOnly:true},
  {id:58, name:"Growlithe",frOnly:true},{id:59, name:"Arcanine", frOnly:true},
  {id:60, name:"Poliwag"},     {id:61, name:"Poliwhirl"},    {id:62, name:"Poliwrath"},
  {id:63, name:"Abra"},        {id:64, name:"Kadabra"},      {id:65, name:"Alakazam"},
  {id:66, name:"Machop"},      {id:67, name:"Machoke"},      {id:68, name:"Machamp"},
  {id:69, name:"Bellsprout",lgOnly:true},{id:70,name:"Weepinbell",lgOnly:true},{id:71,name:"Victreebel",lgOnly:true},
  {id:72, name:"Tentacool"},   {id:73, name:"Tentacruel"},
  {id:74, name:"Geodude"},     {id:75, name:"Graveler"},     {id:76, name:"Golem"},
  {id:77, name:"Ponyta"},      {id:78, name:"Rapidash"},
  {id:79, name:"Slowpoke",lgOnly:true}, {id:80, name:"Slowbro",lgOnly:true},
  {id:81, name:"Magnemite"},   {id:82, name:"Magneton"},
  {id:83, name:"Farfetch'd"},  {id:84, name:"Doduo"},        {id:85, name:"Dodrio"},
  {id:86, name:"Seel"},        {id:87, name:"Dewgong"},
  {id:88, name:"Grimer"},      {id:89, name:"Muk"},
  {id:90, name:"Shellder",frOnly:true}, {id:91, name:"Cloyster",frOnly:true},
  {id:92, name:"Gastly"},      {id:93, name:"Haunter"},      {id:94, name:"Gengar"},
  {id:95, name:"Onix"},
  {id:96, name:"Drowzee"},     {id:97, name:"Hypno"},
  {id:98, name:"Krabby"},      {id:99, name:"Kingler"},
  {id:100,name:"Voltorb"},     {id:101,name:"Electrode"},
  {id:102,name:"Exeggcute"},   {id:103,name:"Exeggutor"},
  {id:104,name:"Cubone"},      {id:105,name:"Marowak"},
  {id:106,name:"Hitmonlee"},   {id:107,name:"Hitmonchan"},
  {id:108,name:"Lickitung"},
  {id:109,name:"Koffing",frOnly:true},  {id:110,name:"Weezing",frOnly:true},
  {id:111,name:"Rhyhorn"},     {id:112,name:"Rhydon"},
  {id:113,name:"Chansey"},     {id:114,name:"Tangela"},      {id:115,name:"Kangaskhan"},
  {id:116,name:"Horsea",frOnly:true},   {id:117,name:"Seadra",frOnly:true},
  {id:118,name:"Goldeen"},     {id:119,name:"Seaking"},
  {id:120,name:"Staryu",lgOnly:true},   {id:121,name:"Starmie",lgOnly:true},
  {id:122,name:"Mr. Mime"},    {id:123,name:"Scyther",frOnly:true},
  {id:124,name:"Jynx"},
  {id:125,name:"Electabuzz",frOnly:true},{id:126,name:"Magmar",frOnly:true},
  {id:127,name:"Pinsir",lgOnly:true},   {id:128,name:"Tauros"},
  {id:129,name:"Magikarp"},    {id:130,name:"Gyarados"},
  {id:131,name:"Lapras"},      {id:132,name:"Ditto"},
  {id:133,name:"Eevee"},       {id:134,name:"Vaporeon"},     {id:135,name:"Jolteon"},  {id:136,name:"Flareon"},
  {id:137,name:"Porygon"},
  {id:138,name:"Omanyte"},     {id:139,name:"Omastar"},
  {id:140,name:"Kabuto"},      {id:141,name:"Kabutops"},
  {id:142,name:"Aerodactyl"},  {id:143,name:"Snorlax"},
  {id:144,name:"Articuno"},    {id:145,name:"Zapdos"},       {id:146,name:"Moltres"},
  {id:147,name:"Dratini"},     {id:148,name:"Dragonair"},    {id:149,name:"Dragonite"},
  {id:150,name:"Mewtwo"},      {id:151,name:"Mew",event:true},
];

// ─── AREA DATA ────────────────────────────────────────────────────────────────
// Pokémon are tracked GLOBALLY by name. Items are tracked per-area.
// Gift/Trade/Fossil Pokémon are included in pokemon arrays so they sync to the Pokédex.
const AREAS = [
  { part:"Part 1", id:"pallet-town", name:"Pallet Town",
    note:"Choose one starter from Professor Oak — Blue takes the one with a type advantage over yours.",
    pokemon:[{name:"Bulbasaur",method:"Gift",levels:"5",note:"Choose one of three from Professor Oak"},{name:"Charmander",method:"Gift",levels:"5",note:"Choose one of three from Professor Oak"},{name:"Squirtle",method:"Gift",levels:"5",note:"Choose one of three from Professor Oak"}],
    items:[{name:"Potion",hidden:false,note:"From the PC in your bedroom"},{name:"Pokédex",hidden:false,note:"From Professor Oak after choosing your starter"},{name:"Poké Ball ×5",hidden:false,note:"From Oak's aide after receiving the Pokédex"},{name:"Town Map",hidden:false,note:"From Daisy (Blue's sister) after receiving the Pokédex"}] },

  { part:"Part 2", id:"route1", name:"Route 1",
    note:"Can't catch on first visit — no Poké Balls yet. Return from Viridian City.",
    pokemon:[{name:"Pidgey",method:"Grass",levels:"2–5",rate:"50%"},{name:"Rattata",method:"Grass",levels:"2–4",rate:"50%"}],
    items:[{name:"Potion",hidden:false,note:"From the Viridian Mart employee near the signpost"}] },

  { part:"Part 2", id:"viridian-city", name:"Viridian City",
    note:"Deliver Oak's Parcel to unlock the old man's Pokémon-catching tutorial on Route 2.",
    pokemon:[{name:"Farfetch'd",method:"Trade",levels:"any",note:"Trade your Spearow to the man in the north house"}],
    items:[{name:"Oak's Parcel",hidden:false,note:"From the Poké Mart shopkeeper — deliver to Professor Oak in Pallet Town"},{name:"Potion",hidden:false,note:"Near the city's north exit, west of the small tree"},{name:"Teachy TV",hidden:false,note:"From the old man after delivering Oak's Parcel"}] },

  { part:"Part 2", id:"route22", name:"Route 22",
    note:"Worth visiting early — Mankey is useful against Brock. Spearow can be traded for Farfetch'd in Viridian City.",
    pokemon:[{name:"Rattata",method:"Grass",levels:"2–5",rate:"45%"},{name:"Mankey",method:"Grass",levels:"2–5",rate:"45%"},{name:"Spearow",method:"Grass",levels:"3–5",rate:"10%"}],
    items:[] },

  { part:"Part 3", id:"route2-south", name:"Route 2 (South)",
    note:"Pass-through only on first visit. Return with Cut + Boulder Badge to reach the north section and its items.",
    pokemon:[{name:"Pidgey",method:"Grass",levels:"2–5",rate:"45%"},{name:"Rattata",method:"Grass",levels:"2–5",rate:"45%"},{name:"Caterpie",method:"Grass",levels:"4–5",rate:"5%"},{name:"Weedle",method:"Grass",levels:"4–5",rate:"5%"}],
    items:[] },

  { part:"Part 3", id:"viridian-forest", name:"Viridian Forest",
    note:"Pikachu is rare but catchable here (5%). Metapod and Kakuna both appear in both versions at different rates — Kakuna is more common in FireRed, Metapod in LeafGreen.",
    pokemon:[{name:"Caterpie",method:"Grass",levels:"3–5",rate:"40%"},{name:"Weedle",method:"Grass",levels:"3–5",rate:"40%"},{name:"Metapod",method:"Grass",levels:"4–6",rate:"5% FR / 10% LG"},{name:"Kakuna",method:"Grass",levels:"4–6",rate:"10% FR / 5% LG"},{name:"Pikachu",method:"Grass",levels:"3–5",rate:"5%"}],
    items:[{name:"Poké Ball",hidden:false,note:"Dead-end grassy path northwest of south entrance"},{name:"Antidote",hidden:true,note:"West side of lone tree near south entrance"},{name:"Antidote",hidden:false,note:"Northeast area past Trainer Tips sign"},{name:"Potion",hidden:false,note:"Tall grass east of southern entrance"},{name:"Potion",hidden:false,note:"Dead-end path southeast of north exit"},{name:"Potion",hidden:true,note:"In front of Bug Catcher Sammy near north exit"}],
    trainers:[{class:"Bug Catcher",name:"Rick"},{class:"Bug Catcher",name:"Doug"},{class:"Bug Catcher",name:"Anthony"},{class:"Bug Catcher",name:"Charlie"},{class:"Bug Catcher",name:"Sammy"}] },

  { part:"Part 3", id:"route2-north", name:"Route 2 (North, via Cut)",
    note:"Return with HM01 Cut + Boulder Badge. TM28 Dig from the gatehouse man.",
    pokemon:[{name:"Pidgey",method:"Grass",levels:"3–5",rate:"35%"},{name:"Rattata",method:"Grass",levels:"3–5",rate:"35%"},{name:"Nidoran♂",method:"Grass",levels:"3–5",rate:"15%"},{name:"Nidoran♀",method:"Grass",levels:"3–5",rate:"15%"}],
    items:[{name:"TM28 Dig",hidden:false,note:"From man in gatehouse (Boulder Badge + Cut)"},{name:"HP Up",hidden:false,note:"Behind the Cut tree near north entrance"},{name:"Antidote",hidden:true,note:"Itemfinder — behind the gatehouse"}] },

  { part:"Part 3", id:"pewter-city", name:"Pewter City",
    note:"Defeat Brock for TM39 Rock Tomb. Old Amber requires Cut to reach the museum scientist — bring it to Cinnabar Lab to revive Aerodactyl.",
    pokemon:[],
    items:[{name:"Poké Ball",hidden:true,note:"West of Pewter Museum on lighter-colored grass"},{name:"TM39 Rock Tomb",hidden:false,note:"Reward from Brock after defeating him"},{name:"Running Shoes",hidden:false,note:"From Professor Oak's aide on east side of town after defeating Brock"},{name:"Old Amber",hidden:false,note:"Scientist in back of Museum (requires Cut) — bring to Cinnabar Lab to revive Aerodactyl"}],
    trainers:[{class:"Camper",name:"Liam"},{class:"Gym Leader",name:"Brock"}] },

  { part:"Part 4", id:"route3", name:"Route 3",
    note:"Jigglypuff appears at 25% — catch one before Cerulean. Mankey is useful against Brock.",
    pokemon:[{name:"Spearow",method:"Grass",levels:"6–9",rate:"40%"},{name:"Jigglypuff",method:"Grass",levels:"3–5",rate:"25%"},{name:"Nidoran♀",method:"Grass",levels:"6–7",rate:"15%"},{name:"Nidoran♂",method:"Grass",levels:"6–7",rate:"15%"},{name:"Mankey",method:"Grass",levels:"7–9",rate:"5%"}],
    items:[{name:"Potion",hidden:false,note:"West end of the route"},{name:"Potion",hidden:false,note:"Mid-route"}] },

  { part:"Part 4", id:"mt-moon", name:"Mt. Moon",
    note:"⚠ CHOOSE ONE fossil at the end — Dome→Kabuto or Helix→Omanyte. You can only get one per file. Trade for the other! Sandshrew is LG-only.",
    pokemon:[{name:"Zubat",method:"Cave",levels:"9–12",rate:"50%"},{name:"Geodude",method:"Cave",levels:"8–12",rate:"20%"},{name:"Paras",method:"Cave",levels:"10–13",rate:"15%"},{name:"Clefairy",method:"Cave",levels:"10–12",rate:"10%"},{name:"Sandshrew",method:"Cave",levels:"8–12",rate:"5%",lgOnly:true}],
    items:[{name:"TM46 Thief",hidden:false,note:"B1F"},{name:"Ether",hidden:false,note:"1F"},{name:"Ether",hidden:false,note:"B1F"},{name:"Moon Stone",hidden:false,note:"1F"},{name:"Rare Candy",hidden:false,note:"B1F"},{name:"Escape Rope",hidden:false,note:"1F"},{name:"Dome or Helix Fossil",hidden:false,note:"⚠ Choose ONE — Dome=Kabuto, Helix=Omanyte"},{name:"HP Up",hidden:true,note:"Itemfinder, B1F center"},{name:"Moon Stone",hidden:true,note:"Itemfinder, 1F extra"}] },

  { part:"Part 4", id:"route4", name:"Route 4",
    note:"Ekans is FireRed-exclusive; Sandshrew fills the same slot in LeafGreen. TM05 Roar is free.",
    pokemon:[{name:"Rattata",method:"Grass (W)",levels:"8–10",rate:"40%"},{name:"Spearow",method:"Grass (W)",levels:"8–10",rate:"25%"},{name:"Ekans",method:"Grass (W)",levels:"8–12",rate:"25%",frOnly:true},{name:"Sandshrew",method:"Grass (W)",levels:"8–12",rate:"25%",lgOnly:true},{name:"Ekans",method:"Grass (E)",levels:"10–13",rate:"55%",frOnly:true},{name:"Sandshrew",method:"Grass (E)",levels:"10–13",rate:"55%",lgOnly:true},{name:"Spearow",method:"Grass (E)",levels:"9–11",rate:"45%"}],
    items:[{name:"TM05 Roar",hidden:false,note:"From the man on the east side"}] },

  { part:"Part 5", id:"cerulean-city", name:"Cerulean City",
    note:"Trade Poliwhirl for Jynx with the man near the Pokémon Center. Bicycle requires the Bike Voucher from Vermilion's Fan Club.",
    pokemon:[{name:"Jynx",method:"Trade",levels:"any",note:"Trade Poliwhirl to man near Pokémon Center"}],
    items:[{name:"Bicycle",hidden:false,note:"Exchange Bike Voucher (from Fan Club President, Vermilion) at the Bike Shop"}] },

  { part:"Part 5", id:"route24", name:"Route 24 (Nugget Bridge)",
    note:"Defeat all 5 trainers + Rocket Grunt for the Nugget. Oddish is FR-only; Bellsprout is LG-only.",
    pokemon:[{name:"Caterpie",method:"Grass",levels:"7–10",rate:"30%"},{name:"Weedle",method:"Grass",levels:"7–10",rate:"30%"},{name:"Oddish",method:"Grass",levels:"12–15",rate:"20%",frOnly:true},{name:"Bellsprout",method:"Grass",levels:"12–15",rate:"20%",lgOnly:true},{name:"Abra",method:"Grass",levels:"7–10",rate:"10%"},{name:"Magikarp",method:"Old Rod",levels:"5"},{name:"Goldeen",method:"Good Rod",levels:"10–30"},{name:"Goldeen",method:"Super Rod",levels:"15–35"},{name:"Seaking",method:"Super Rod",levels:"15–35"}],
    items:[{name:"Nugget",hidden:false,note:"Rocket Grunt at the north end of the bridge"},{name:"TM45 Attract",hidden:false,note:"From a female trainer on the route"}] },

  { part:"Part 5", id:"route25", name:"Route 25",
    note:"Same encounters as Route 24. Bill's cottage at the far east — transform him back to get the S.S. Ticket.",
    pokemon:[{name:"Caterpie",method:"Grass",levels:"7–10",rate:"30%"},{name:"Weedle",method:"Grass",levels:"7–10",rate:"30%"},{name:"Oddish",method:"Grass",levels:"12–15",rate:"20%",frOnly:true},{name:"Bellsprout",method:"Grass",levels:"12–15",rate:"20%",lgOnly:true},{name:"Abra",method:"Grass",levels:"7–10",rate:"10%"}],
    items:[{name:"S.S. Ticket",hidden:false,note:"From Bill after restoring him from Pokémon form"},{name:"HP Up",hidden:false,note:"Near Bill's cottage"}] },

  { part:"Part 6", id:"route5", name:"Route 5",
    note:"Mankey (FR) replaces Meowth (LG). Abra teleports when attacked — use a Paralyze or Quick Ball.",
    pokemon:[{name:"Pidgey",method:"Grass",levels:"13–17",rate:"30%"},{name:"Mankey",method:"Grass",levels:"13–17",rate:"25%",frOnly:true},{name:"Meowth",method:"Grass",levels:"13–17",rate:"25%",lgOnly:true},{name:"Oddish",method:"Grass",levels:"13–17",rate:"20%",frOnly:true},{name:"Bellsprout",method:"Grass",levels:"13–17",rate:"20%",lgOnly:true},{name:"Jigglypuff",method:"Grass",levels:"13–17",rate:"5%"},{name:"Abra",method:"Grass",levels:"11–15",rate:"5%"},{name:"Mr. Mime",method:"Trade",levels:"any",note:"Trade Abra to the man in the south house connecting to Saffron"}],
    items:[] },

  { part:"Part 6", id:"route6", name:"Route 6",
    note:"Same encounters as Route 5.",
    pokemon:[{name:"Pidgey",method:"Grass",levels:"13–17",rate:"30%"},{name:"Mankey",method:"Grass",levels:"13–17",rate:"25%",frOnly:true},{name:"Meowth",method:"Grass",levels:"13–17",rate:"25%",lgOnly:true},{name:"Oddish",method:"Grass",levels:"13–17",rate:"20%",frOnly:true},{name:"Bellsprout",method:"Grass",levels:"13–17",rate:"20%",lgOnly:true},{name:"Jigglypuff",method:"Grass",levels:"13–17",rate:"5%"},{name:"Abra",method:"Grass",levels:"11–15",rate:"5%"}],
    items:[{name:"Super Repel",hidden:false,note:"South portion of route"}] },

  { part:"Part 6", id:"underground-5-6", name:"Underground Path (5↔6)",
    note:"No wild Pokémon. Shortcut between Routes 5 and 6.",
    pokemon:[],
    items:[{name:"Poké Doll",hidden:false,note:"Woman in side room"},{name:"X Accuracy",hidden:true,note:"Itemfinder on tunnel floor"}] },

  { part:"Part 6", id:"vermilion-city", name:"Vermilion City",
    note:"Get the Old Rod here. Fan Club President gives the Bike Voucher for free — very important!",
    pokemon:[{name:"Tentacool",method:"Surf",levels:"5–40",rate:"90%"},{name:"Tentacruel",method:"Surf",levels:"5–40",rate:"10%"},{name:"Magikarp",method:"Old Rod",levels:"5",rate:"100%"},{name:"Tentacool",method:"Good Rod",levels:"10–30"},{name:"Tentacool",method:"Super Rod",levels:"15–40"},{name:"Tentacruel",method:"Super Rod",levels:"15–40"}],
    items:[{name:"Old Rod",hidden:false,note:"Fisherman in east house"},{name:"Bike Voucher",hidden:false,note:"Pokémon Fan Club President — exchange at Cerulean Bike Shop"}] },

  { part:"Part 6", id:"ss-anne", name:"S.S. Anne",
    note:"⚠ ONE-TIME EVENT — ship leaves after you get HM01 Cut. Sweep all three floors before speaking to the Captain!",
    pokemon:[],
    items:[{name:"HM01 Cut",hidden:false,note:"From the Captain after curing his seasickness"},{name:"Potion",hidden:false,note:"Trash can, 1F east corridor"},{name:"Potion",hidden:false,note:"Trash can, 1F west corridor"},{name:"Great Ball",hidden:false,note:"Trash can, 1F"},{name:"Burn Heal",hidden:false,note:"1F cabin"},{name:"Great Ball",hidden:false,note:"Trash can, 2F"},{name:"Super Repel",hidden:false,note:"2F cabin"},{name:"Ice Heal",hidden:false,note:"2F cabin"},{name:"TM44 Rest",hidden:false,note:"Trash can, 2F"},{name:"Fresh Water",hidden:false,note:"2F"},{name:"Rare Candy",hidden:false,note:"Captain's cabin"},{name:"Ether",hidden:false,note:"B1F trash can"},{name:"Antidote",hidden:false,note:"B1F"},{name:"Full Restore",hidden:true,note:"Itemfinder, Captain's room"}] },

  { part:"Part 6", id:"digletts-cave", name:"Diglett's Cave",
    note:"Simple cave between Route 2 and Route 11. Two Pokémon only.",
    pokemon:[{name:"Diglett",method:"Cave",levels:"15–22",rate:"95%"},{name:"Dugtrio",method:"Cave",levels:"29–31",rate:"5%"}],
    items:[] },

  { part:"Part 7", id:"route11", name:"Route 11",
    note:"30 Pokémon caught → Oak's aide gives the Itemfinder. NPC offers a Nidorina↔Nidorino trade (both catchable elsewhere).",
    pokemon:[{name:"Ekans",method:"Grass",levels:"12–15",rate:"30%",frOnly:true},{name:"Sandshrew",method:"Grass",levels:"12–15",rate:"30%",lgOnly:true},{name:"Spearow",method:"Grass",levels:"13–17",rate:"30%"},{name:"Drowzee",method:"Grass",levels:"11–15",rate:"25%"}],
    items:[{name:"Itemfinder",hidden:false,note:"Oak's aide in east gate (30 Pokémon caught)"},{name:"Super Potion",hidden:false,note:"On the ground"}] },

  { part:"Part 7", id:"route10", name:"Route 10 (Power Plant path)",
    note:"Surf from the north pond to reach the Power Plant (Zapdos). Electric Pokémon in the north grass near the plant.",
    pokemon:[{name:"Voltorb",method:"Grass (N)",levels:"25–27",rate:"25%"},{name:"Magnemite",method:"Grass (N)",levels:"22–26",rate:"30%"},{name:"Spearow",method:"Grass",levels:"15–20",rate:"45%"},{name:"Rattata",method:"Grass (S)",levels:"14–18",rate:"35%"},{name:"Ekans",method:"Grass (S)",levels:"14–18",rate:"25%",frOnly:true},{name:"Sandshrew",method:"Grass (S)",levels:"14–18",rate:"25%",lgOnly:true},{name:"Tentacool",method:"Surf",levels:"5–40",rate:"90%"},{name:"Magikarp",method:"Old Rod",levels:"5"},{name:"Goldeen",method:"Good Rod",levels:"10–30"},{name:"Goldeen",method:"Super Rod",levels:"15–35"},{name:"Seaking",method:"Super Rod",levels:"15–35"}],
    items:[{name:"Revive",hidden:false,note:"South section"},{name:"Max Ether",hidden:false,note:"Near south pond"}] },

  { part:"Part 7", id:"rock-tunnel", name:"Rock Tunnel",
    note:"Two floors. Flash isn't required but helps. Mankey is FR-only; Slowpoke is LG-only.",
    pokemon:[{name:"Zubat",method:"Cave",levels:"17–22",rate:"50%"},{name:"Geodude",method:"Cave",levels:"16–23",rate:"15%"},{name:"Machop",method:"Cave",levels:"16–20",rate:"15%"},{name:"Onix",method:"Cave",levels:"16–20",rate:"10%"},{name:"Mankey",method:"Cave",levels:"17–22",rate:"5%",frOnly:true},{name:"Slowpoke",method:"Cave",levels:"16–20",rate:"5%",lgOnly:true}],
    items:[{name:"Revive",hidden:false,note:"1F"},{name:"Max Ether",hidden:false,note:"1F"},{name:"Escape Rope",hidden:false,note:"1F"},{name:"Potion",hidden:false,note:"1F"},{name:"Hyper Potion",hidden:false,note:"B1F"},{name:"Full Heal",hidden:false,note:"B1F"},{name:"TM28 Dig",hidden:false,note:"B1F"},{name:"Antidote",hidden:true,note:"Itemfinder, 1F"},{name:"Potion",hidden:true,note:"Itemfinder, B1F"}] },

  { part:"Part 8", id:"route9", name:"Route 9",
    note:"Raticate starts appearing here. Ekans (FR) / Sandshrew (LG) split continues.",
    pokemon:[{name:"Rattata",method:"Grass",levels:"15–19",rate:"35%"},{name:"Raticate",method:"Grass",levels:"15–19",rate:"20%"},{name:"Nidoran♀",method:"Grass",levels:"13–17",rate:"15%"},{name:"Nidoran♂",method:"Grass",levels:"13–17",rate:"15%"},{name:"Ekans",method:"Grass",levels:"14–18",rate:"15%",frOnly:true},{name:"Sandshrew",method:"Grass",levels:"14–18",rate:"15%",lgOnly:true}],
    items:[{name:"Rare Candy",hidden:false,note:"Mid-route"}] },

  { part:"Part 8", id:"route8", name:"Route 8",
    note:"Vulpix and Growlithe are FireRed exclusives — catch both here and on Route 7!",
    pokemon:[{name:"Pidgey",method:"Grass",levels:"15–20",rate:"30%"},{name:"Ekans",method:"Grass",levels:"16–20",rate:"25%",frOnly:true},{name:"Sandshrew",method:"Grass",levels:"16–20",rate:"25%",lgOnly:true},{name:"Vulpix",method:"Grass",levels:"16–20",rate:"20%",frOnly:true},{name:"Meowth",method:"Grass",levels:"16–20",rate:"20%",lgOnly:true},{name:"Growlithe",method:"Grass",levels:"15–20",rate:"15%",frOnly:true},{name:"Jigglypuff",method:"Grass",levels:"15–20",rate:"5%"}],
    items:[{name:"Hyper Potion",hidden:false,note:"East of underground path gate"},{name:"Ether",hidden:true,note:"Itemfinder near east grass"}] },

  { part:"Part 8", id:"route7", name:"Route 7",
    note:"Same Vulpix/Growlithe exclusives as Route 8. Underground path connects to Celadon.",
    pokemon:[{name:"Pidgey",method:"Grass",levels:"15–20",rate:"30%"},{name:"Vulpix",method:"Grass",levels:"16–20",rate:"25%",frOnly:true},{name:"Meowth",method:"Grass",levels:"16–20",rate:"25%",lgOnly:true},{name:"Oddish",method:"Grass",levels:"15–20",rate:"25%",frOnly:true},{name:"Bellsprout",method:"Grass",levels:"15–20",rate:"25%",lgOnly:true},{name:"Growlithe",method:"Grass",levels:"15–20",rate:"15%",frOnly:true},{name:"Jigglypuff",method:"Grass",levels:"15–20",rate:"5%"}],
    items:[] },

  { part:"Part 8", id:"lavender-town", name:"Lavender Town",
    note:"No wild Pokémon. Get the Silph Scope from Celadon's Rocket Hideout before tackling the upper floors of Pokémon Tower.",
    pokemon:[],
    items:[{name:"Poké Flute",hidden:false,note:"From Mr. Fuji after rescuing him — wakes both Snorlax"},{name:"Cleanse Tag",hidden:false,note:"Also from Mr. Fuji after rescuing him"}] },

  { part:"Part 8", id:"pokemon-tower", name:"Pokémon Tower",
    note:"Need the Silph Scope to see and catch Ghost-types (floors 4–7). Cubone is here too.",
    pokemon:[{name:"Gastly",method:"Cave",levels:"15–22",rate:"60%"},{name:"Haunter",method:"Cave",levels:"17–23",rate:"25%"},{name:"Cubone",method:"Cave",levels:"17–22",rate:"15%"}],
    items:[{name:"Escape Rope",hidden:false,note:"3F"},{name:"Great Ball",hidden:false,note:"3F"},{name:"Elixir",hidden:false,note:"4F"},{name:"Nugget",hidden:false,note:"5F"},{name:"Rare Candy",hidden:false,note:"6F"},{name:"Awakening",hidden:true,note:"Itemfinder, 3F"},{name:"Revive",hidden:true,note:"Itemfinder, 5F"}] },

  { part:"Part 9", id:"celadon-city", name:"Celadon City",
    note:"Tea from Celadon Mansion top floor unlocks Saffron City. Eevee is a one-time gift (Mansion 4F). Scyther (FR) from Game Corner.",
    pokemon:[{name:"Eevee",method:"Gift",levels:"25",note:"4th floor of Celadon Mansion — one-time, no battle"},{name:"Scyther",method:"Game Corner",levels:"any",note:"5,500 coins (FireRed only!)",frOnly:true},{name:"Pinsir",method:"Game Corner",levels:"any",note:"2,500 coins (LeafGreen only!)",lgOnly:true},{name:"Porygon",method:"Game Corner",levels:"any",note:"9,999 coins"}],
    items:[{name:"Tea",hidden:false,note:"Old woman, top floor of Celadon Mansion — unlocks Saffron City gates"},{name:"TM18 Rain Dance",hidden:false,note:"Give Fresh Water to woman on Dept Store roof"},{name:"TM13 Ice Beam",hidden:false,note:"Dept Store 4F"},{name:"TM14 Blizzard",hidden:false,note:"Dept Store 4F"},{name:"TM22 Solar Beam",hidden:false,note:"Dept Store 4F"},{name:"TM24 Thunderbolt",hidden:false,note:"Game Corner — 4,000 coins"},{name:"TM35 Flamethrower",hidden:false,note:"Game Corner — 4,000 coins"}] },

  { part:"Part 9", id:"rocket-hideout", name:"Rocket Hideout (B1F–B4F)",
    note:"Four basement floors. Find Lift Key on B4F to use elevator. Giovanni drops Silph Scope.",
    pokemon:[],
    items:[{name:"TM12 Taunt",hidden:false,note:"B1F"},{name:"HP Up",hidden:false,note:"B2F"},{name:"X Attack",hidden:false,note:"B2F"},{name:"Escape Rope",hidden:false,note:"B2F"},{name:"Moon Stone",hidden:false,note:"B2F"},{name:"TM49 Snatch",hidden:false,note:"B3F"},{name:"Nugget",hidden:false,note:"B3F"},{name:"Protein",hidden:false,note:"B3F"},{name:"Lift Key",hidden:false,note:"B4F — calls the elevator"},{name:"Silph Scope",hidden:false,note:"From Giovanni on B4F — reveals Ghost Pokémon in Pokémon Tower"}] },

  { part:"Part 10", id:"route12", name:"Route 12 (Silence Bridge)",
    note:"⚠ Snorlax blocks the road — ONE-TIME catch, use Poké Flute! Get Super Rod from the fisherman's brother in the house here.",
    pokemon:[{name:"Pidgey",method:"Grass",levels:"20–25",rate:"30%"},{name:"Oddish",method:"Grass",levels:"21–24",rate:"25%",frOnly:true},{name:"Bellsprout",method:"Grass",levels:"21–24",rate:"25%",lgOnly:true},{name:"Gloom",method:"Grass",levels:"22–25",rate:"20%",frOnly:true},{name:"Weepinbell",method:"Grass",levels:"22–25",rate:"20%",lgOnly:true},{name:"Snorlax",method:"Special",levels:"30",rate:"×1",note:"ONE-TIME — Poké Flute then catch. Do NOT KO!"},{name:"Tentacool",method:"Surf",levels:"5–40",rate:"90%"},{name:"Tentacruel",method:"Surf",levels:"5–40",rate:"10%"},{name:"Magikarp",method:"Old Rod",levels:"5"},{name:"Krabby",method:"Good Rod",levels:"10–30"},{name:"Horsea",method:"Good Rod",levels:"10–30",frOnly:true},{name:"Krabby",method:"Super Rod",levels:"15–35"},{name:"Kingler",method:"Super Rod",levels:"15–35"},{name:"Horsea",method:"Super Rod",levels:"15–35",frOnly:true},{name:"Seadra",method:"Super Rod",levels:"15–35",frOnly:true}],
    items:[{name:"Super Rod",hidden:false,note:"Fishing Guru's brother in the house on the route"},{name:"Ether",hidden:false,note:"Near the fishing pier"}] },

  { part:"Part 10", id:"route13", name:"Route 13",
    note:"Narrow hedge maze heading west. Same Oddish/Bellsprout split.",
    pokemon:[{name:"Pidgey",method:"Grass",levels:"20–25",rate:"30%"},{name:"Oddish",method:"Grass",levels:"21–24",rate:"25%",frOnly:true},{name:"Bellsprout",method:"Grass",levels:"21–24",rate:"25%",lgOnly:true},{name:"Venonat",method:"Grass",levels:"21–24",rate:"20%"},{name:"Gloom",method:"Grass",levels:"22–25",rate:"15%",frOnly:true},{name:"Weepinbell",method:"Grass",levels:"22–25",rate:"15%",lgOnly:true}],
    items:[{name:"Hyper Potion",hidden:false,note:"On the ground"},{name:"Revive",hidden:false,note:"On the ground"}] },

  { part:"Part 10", id:"route14", name:"Route 14",
    note:"Same pool as Route 13. Hidden Nugget in the grass.",
    pokemon:[{name:"Pidgey",method:"Grass",levels:"22–26",rate:"30%"},{name:"Oddish",method:"Grass",levels:"22–26",rate:"25%",frOnly:true},{name:"Bellsprout",method:"Grass",levels:"22–26",rate:"25%",lgOnly:true},{name:"Venonat",method:"Grass",levels:"22–26",rate:"25%"},{name:"Gloom",method:"Grass",levels:"24–27",rate:"15%",frOnly:true},{name:"Weepinbell",method:"Grass",levels:"24–27",rate:"15%",lgOnly:true}],
    items:[{name:"Nugget",hidden:true,note:"Itemfinder in the grass"}] },

  { part:"Part 10", id:"route15", name:"Route 15",
    note:"50 Pokémon caught → Exp. Share from Oak's aide in the east gate.",
    pokemon:[{name:"Pidgey",method:"Grass",levels:"22–26",rate:"30%"},{name:"Oddish",method:"Grass",levels:"22–26",rate:"25%",frOnly:true},{name:"Bellsprout",method:"Grass",levels:"22–26",rate:"25%",lgOnly:true},{name:"Venonat",method:"Grass",levels:"22–26",rate:"25%"},{name:"Gloom",method:"Grass",levels:"24–27",rate:"15%",frOnly:true},{name:"Weepinbell",method:"Grass",levels:"24–27",rate:"15%",lgOnly:true}],
    items:[{name:"Exp. Share",hidden:false,note:"Oak's aide in east gate (50 Pokémon caught)"}] },

  { part:"Part 10", id:"fuchsia-city", name:"Fuchsia City",
    note:"Warden gives HM04 Strength after you return his Gold Teeth (in Safari Zone west area). Good Rod from Fishing Guru here.",
    pokemon:[],
    items:[{name:"Good Rod",hidden:false,note:"Fishing Guru in SE house"},{name:"HM03 Surf",hidden:false,note:"Warden's house reward for completing Safari Zone"},{name:"HM04 Strength",hidden:false,note:"Warden after returning his Gold Teeth"},{name:"TM32 Double Team",hidden:false,note:"Also from Warden alongside HM04"}] },

  { part:"Part 11", id:"safari-zone", name:"Safari Zone",
    note:"500 steps, 30 Safari Balls. Top Living Dex targets: Tauros, Kangaskhan, Scyther (FR), Chansey. Dratini via Super Rod! Find Gold Teeth (west) + HM03 Surf (Secret House).",
    pokemon:[{name:"Nidoran♀",method:"Grass (Center)",levels:"22–26",rate:"20%"},{name:"Nidoran♂",method:"Grass (Center)",levels:"22–26",rate:"20%"},{name:"Exeggcute",method:"Grass (Center)",levels:"22–26",rate:"15%"},{name:"Parasect",method:"Grass (Center)",levels:"22–26",rate:"10%"},{name:"Kangaskhan",method:"Grass (Center)",levels:"22–26",rate:"4%"},{name:"Tauros",method:"Grass (all areas)",levels:"21–28",rate:"4%"},{name:"Rhyhorn",method:"Grass (East)",levels:"20–28",rate:"20%"},{name:"Nidorina",method:"Grass (Area 1)",levels:"22–28",rate:"15%"},{name:"Nidorino",method:"Grass (Area 1)",levels:"22–28",rate:"15%"},{name:"Scyther",method:"Grass (Area 1)",levels:"22–26",rate:"4%",frOnly:true},{name:"Pinsir",method:"Grass (Area 1)",levels:"22–26",rate:"4%",lgOnly:true},{name:"Chansey",method:"Grass (Area 3)",levels:"22–26",rate:"4%"},{name:"Venonat",method:"Grass",levels:"22–26",rate:"20%"},{name:"Venomoth",method:"Grass",levels:"22–30",rate:"10%"},{name:"Magikarp",method:"Old Rod",levels:"5"},{name:"Psyduck",method:"Good Rod",levels:"10–30"},{name:"Slowpoke",method:"Super Rod",levels:"15–35"},{name:"Dratini",method:"Super Rod",levels:"15–35"},{name:"Dragonair",method:"Super Rod",levels:"15–35"}],
    items:[{name:"Gold Teeth",hidden:false,note:"West area — give to Warden for HM04 Strength"},{name:"HM03 Surf",hidden:false,note:"Secret House (far west)"},{name:"TM37 Sandstorm",hidden:false,note:"On the ground"},{name:"Max Revive",hidden:false,note:"On the ground"},{name:"Carbos",hidden:false,note:"On the ground"},{name:"Revive",hidden:false,note:"On the ground"}] },

  { part:"Part 11", id:"routes16-18", name:"Routes 16–18",
    note:"Route 16: Snorlax #2 (ONE-TIME, Poké Flute!) + HM02 Fly behind Cut tree. Route 17 is Cycling Road. Route 18 has same grass.",
    pokemon:[{name:"Raticate",method:"Grass (16/17)",levels:"24–27",rate:"25%"},{name:"Doduo",method:"Grass (16/17)",levels:"24–27",rate:"25%"},{name:"Ekans",method:"Grass (16–18)",levels:"24–27",rate:"25%",frOnly:true},{name:"Sandshrew",method:"Grass (16–18)",levels:"24–27",rate:"25%",lgOnly:true},{name:"Spearow",method:"Grass (18)",levels:"22–26",rate:"20%"},{name:"Snorlax",method:"Special (Rt 16)",levels:"30",rate:"×1",note:"ONE-TIME — Poké Flute, then catch it. Last Snorlax in the game!"}],
    items:[{name:"HM02 Fly",hidden:false,note:"From the girl in the house on Route 16 (Cut the tree west of gate)"},{name:"Rare Candy",hidden:false,note:"Route 16, south grass area"},{name:"TM42 Facade",hidden:false,note:"Route 16"},{name:"Nugget",hidden:true,note:"Itemfinder on Route 17"}] },

  { part:"Part 12", id:"saffron-city", name:"Saffron City",
    note:"Tea from Celadon Mansion required for gate guards. TM29 Psychic is a free gift — grab it immediately!",
    pokemon:[],
    items:[{name:"TM29 Psychic",hidden:false,note:"From Mr. Psychic in the SE house"},{name:"Lure Ball ×5",hidden:false,note:"From Silph Co. receptionist after clearing the building"}] },

  { part:"Part 12", id:"silph-co", name:"Silph Co. (1F–11F)",
    note:"Find Card Key on 5F to open all card-locked doors. Lapras gift on 7F — don't leave that floor without it! Master Ball from Giovanni on 11F.",
    pokemon:[{name:"Lapras",method:"Gift",levels:"25",note:"⚠ 7F — employee gives it to you; do NOT skip this floor!"}],
    items:[{name:"Rare Candy",hidden:false,note:"1F"},{name:"TM36 Sludge Bomb",hidden:false,note:"2F"},{name:"HP Up",hidden:false,note:"2F"},{name:"TM49 Snatch",hidden:false,note:"3F"},{name:"Elixir",hidden:false,note:"3F"},{name:"X Accuracy",hidden:false,note:"4F"},{name:"Card Key",hidden:false,note:"5F — unlocks ALL card-locked doors"},{name:"Carbos",hidden:false,note:"5F"},{name:"Max Revive",hidden:false,note:"7F"},{name:"Protein",hidden:false,note:"7F"},{name:"Iron",hidden:false,note:"9F"},{name:"Max Elixir",hidden:false,note:"9F"},{name:"Master Ball",hidden:false,note:"⚠ 11F, from Giovanni — only ONE in the game!"},{name:"Full Restore",hidden:true,note:"Itemfinder, 7F"},{name:"Nugget",hidden:true,note:"Itemfinder, 10F"}] },

  { part:"Part 12", id:"fighting-dojo", name:"Fighting Dojo",
    note:"Defeat all trainers. Dojo Master awards EITHER Hitmonlee or Hitmonchan — you must choose one. Trade for the other!",
    pokemon:[{name:"Hitmonlee",method:"Gift",levels:"25",note:"⚠ One-time choice — pick Hitmonlee OR Hitmonchan"},{name:"Hitmonchan",method:"Gift",levels:"25",note:"⚠ One-time choice — pick Hitmonlee OR Hitmonchan"}],
    items:[] },

  { part:"Part 13", id:"route19", name:"Route 19",
    note:"Surf south from Fuchsia Beach. Horsea is FireRed-only via fishing — key Living Dex catch.",
    pokemon:[{name:"Tentacool",method:"Surf",levels:"5–40",rate:"90%"},{name:"Tentacruel",method:"Surf",levels:"5–40",rate:"10%"},{name:"Magikarp",method:"Old Rod",levels:"5"},{name:"Krabby",method:"Good Rod",levels:"10–30"},{name:"Horsea",method:"Good Rod",levels:"10–30",frOnly:true},{name:"Krabby",method:"Super Rod",levels:"15–35"},{name:"Kingler",method:"Super Rod",levels:"15–35"},{name:"Horsea",method:"Super Rod",levels:"15–35",frOnly:true},{name:"Seadra",method:"Super Rod",levels:"15–35",frOnly:true}],
    items:[] },

  { part:"Part 13", id:"seafoam-islands", name:"Route 20 & Seafoam Islands",
    note:"Use Strength to block boulders and reach B4F where Articuno waits. Shellder (FR) / Slowpoke (LG) split in the cave.",
    pokemon:[{name:"Tentacool",method:"Surf (Rt 20)",levels:"5–40",rate:"90%"},{name:"Tentacruel",method:"Surf (Rt 20)",levels:"5–40",rate:"10%"},{name:"Horsea",method:"Good Rod (Rt 20)",levels:"10–30",frOnly:true},{name:"Krabby",method:"Good Rod (Rt 20)",levels:"10–30"},{name:"Seadra",method:"Super Rod (Rt 20)",levels:"15–35",frOnly:true},{name:"Kingler",method:"Super Rod (Rt 20)",levels:"15–35"},{name:"Zubat",method:"Cave",levels:"28–35",rate:"30%"},{name:"Golbat",method:"Cave",levels:"28–35",rate:"10%"},{name:"Seel",method:"Cave",levels:"28–33",rate:"20%"},{name:"Dewgong",method:"Cave",levels:"30–35",rate:"10%"},{name:"Shellder",method:"Cave",levels:"25–30",rate:"25%",frOnly:true},{name:"Slowpoke",method:"Cave",levels:"25–30",rate:"25%",lgOnly:true},{name:"Articuno",method:"Special",levels:"50",rate:"×1",note:"ONE-TIME — B4F after rerouting water currents with Strength"}],
    items:[{name:"Rare Candy",hidden:false,note:"B1F"},{name:"TM55 Brine",hidden:false,note:"B2F"},{name:"Calcium",hidden:false,note:"Inside"},{name:"Ultra Ball",hidden:false,note:"B3F"},{name:"Nevermeltice",hidden:false,note:"B4F near Articuno"}] },

  { part:"Part 13", id:"route21", name:"Route 21",
    note:"Tangela is the headline catch here — only in the shore grass. Good fishing on the way back to Pallet Town.",
    pokemon:[{name:"Tangela",method:"Grass",levels:"22–26",rate:"25%"},{name:"Raticate",method:"Grass",levels:"22–26",rate:"30%"},{name:"Pidgeot",method:"Grass",levels:"23–27",rate:"45%"},{name:"Tentacool",method:"Surf",levels:"5–40",rate:"90%"},{name:"Tentacruel",method:"Surf",levels:"5–40",rate:"10%"},{name:"Magikarp",method:"Old Rod",levels:"5"},{name:"Krabby",method:"Good Rod",levels:"10–30"},{name:"Horsea",method:"Good Rod",levels:"10–30",frOnly:true},{name:"Goldeen",method:"Super Rod",levels:"15–35"},{name:"Seaking",method:"Super Rod",levels:"15–35"}],
    items:[{name:"Revive",hidden:false,note:"Near the shore"}] },

  { part:"Part 13", id:"cinnabar-island", name:"Cinnabar Island",
    note:"Restore your fossils and Old Amber at the Lab. Get the Secret Key from the Pokémon Mansion to open the Gym. Staryu is LG-only via fishing.",
    pokemon:[{name:"Omanyte",method:"Fossil",levels:"5",note:"Restore Helix Fossil at the Lab (if you chose it in Mt. Moon)"},{name:"Kabuto",method:"Fossil",levels:"5",note:"Restore Dome Fossil at the Lab (if you chose it in Mt. Moon)"},{name:"Aerodactyl",method:"Fossil",levels:"5",note:"Restore Old Amber at the Lab (from Pewter Museum scientist)"},{name:"Tentacool",method:"Surf",levels:"5–40",rate:"90%"},{name:"Tentacruel",method:"Surf",levels:"5–40",rate:"10%"},{name:"Magikarp",method:"Old Rod",levels:"5"},{name:"Krabby",method:"Good Rod",levels:"10–30"},{name:"Staryu",method:"Good Rod",levels:"10–30",lgOnly:true},{name:"Krabby",method:"Super Rod",levels:"15–35"},{name:"Kingler",method:"Super Rod",levels:"15–35"},{name:"Staryu",method:"Super Rod",levels:"15–35",lgOnly:true}],
    items:[] },

  { part:"Part 14", id:"pokemon-mansion", name:"Pokémon Mansion",
    note:"Get the Secret Key on B1F to open the Cinnabar Gym. Koffing/Weezing/Muk are FR-only. Many items across all four floors.",
    pokemon:[{name:"Grimer",method:"Cave",levels:"30–38",rate:"40%"},{name:"Ponyta",method:"Cave",levels:"30–38",rate:"40%"},{name:"Koffing",method:"Cave",levels:"30–38",rate:"30%",frOnly:true},{name:"Weezing",method:"Cave (3F+)",levels:"34–38",rate:"15%",frOnly:true},{name:"Muk",method:"Cave",levels:"30–38",rate:"5%"},{name:"Rapidash",method:"Cave (3F+)",levels:"34–40",rate:"15%"}],
    items:[{name:"Iron",hidden:false,note:"1F"},{name:"Calcium",hidden:false,note:"1F"},{name:"Max Potion",hidden:false,note:"1F"},{name:"Carbos",hidden:false,note:"3F"},{name:"TM17 Protect",hidden:false,note:"3F"},{name:"TM22 Solar Beam",hidden:false,note:"3F"},{name:"HP Up",hidden:false,note:"3F"},{name:"Rare Candy",hidden:false,note:"3F"},{name:"Full Restore",hidden:false,note:"B1F"},{name:"TM14 Blizzard",hidden:false,note:"B1F"},{name:"Secret Key",hidden:false,note:"⚠ B1F — required to unlock Cinnabar Gym!"},{name:"TM38 Fire Blast",hidden:true,note:"Itemfinder near statue, 3F"},{name:"Max Revive",hidden:true,note:"Itemfinder, 1F"}] },

  { part:"Part 15", id:"power-plant", name:"Power Plant (Zapdos)",
    note:"Surf from Route 10's north pond to reach. Zapdos at the far end. Several floor items are disguised Electrode — be ready to fight or catch them! Electabuzz is FR-only.",
    pokemon:[{name:"Magnemite",method:"Cave",levels:"22–26",rate:"30%"},{name:"Magneton",method:"Cave",levels:"28–33",rate:"25%"},{name:"Voltorb",method:"Cave",levels:"22–26",rate:"30%"},{name:"Electrode",method:"Cave",levels:"28–33",rate:"10%"},{name:"Electabuzz",method:"Cave",levels:"32–35",rate:"5%",frOnly:true},{name:"Zapdos",method:"Special",levels:"50",rate:"×1",note:"ONE-TIME — end of the building"}],
    items:[{name:"TM25 Thunder",hidden:false,note:"Near entrance"},{name:"Full Restore",hidden:false,note:"Inside"},{name:"TM07 Hail",hidden:false,note:"Inside"},{name:"Max Revive",hidden:false,note:"Inside"},{name:"⚠ Electrode ×3 (disguised as items)",hidden:false,note:"Three floor items are Electrode Lv.40 — catch or defeat them"}] },

  { part:"Part 15", id:"route23", name:"Route 23",
    note:"All 8 badges required to pass the gate guards. Dratini available via Super Rod!",
    pokemon:[{name:"Ekans",method:"Grass",levels:"28–32",rate:"30%",frOnly:true},{name:"Sandshrew",method:"Grass",levels:"28–32",rate:"30%",lgOnly:true},{name:"Spearow",method:"Grass",levels:"28–32",rate:"30%"},{name:"Fearow",method:"Grass",levels:"28–32",rate:"20%"},{name:"Nidoran♂",method:"Grass",levels:"28–32",rate:"10%"},{name:"Nidoran♀",method:"Grass",levels:"28–32",rate:"10%"},{name:"Tentacool",method:"Surf",levels:"5–40"},{name:"Magikarp",method:"Old Rod",levels:"5"},{name:"Goldeen",method:"Good Rod",levels:"10–30"},{name:"Dratini",method:"Super Rod",levels:"15–35"}],
    items:[{name:"Max Repel",hidden:false,note:"Early on the route"},{name:"TM26 Earthquake",hidden:false,note:"Mid-route — one of the best TMs!"}] },

  { part:"Part 15", id:"victory-road", name:"Victory Road (1F–3F)",
    note:"Three floors, HM04 Strength needed for boulders. Good variety: Machoke, Onix, Marowak. Sweep all floors for items.",
    pokemon:[{name:"Zubat",method:"Cave",levels:"31–37",rate:"30%"},{name:"Golbat",method:"Cave",levels:"31–37",rate:"20%"},{name:"Geodude",method:"Cave",levels:"31–37",rate:"15%"},{name:"Graveler",method:"Cave",levels:"31–37",rate:"10%"},{name:"Machop",method:"Cave",levels:"31–37",rate:"10%"},{name:"Machoke",method:"Cave",levels:"31–37",rate:"5%"},{name:"Onix",method:"Cave",levels:"31–37",rate:"5%"},{name:"Venomoth",method:"Cave",levels:"31–37",rate:"3%"},{name:"Marowak",method:"Cave",levels:"31–37",rate:"2%"}],
    items:[{name:"Full Heal",hidden:false,note:"1F"},{name:"TM43 Secret Power",hidden:false,note:"1F"},{name:"Guard Spec.",hidden:false,note:"2F"},{name:"Max Revive",hidden:false,note:"2F"},{name:"TM50 Overheat",hidden:false,note:"3F"},{name:"Ultra Ball",hidden:false,note:"3F"},{name:"Full Restore",hidden:false,note:"3F"},{name:"Max Potion",hidden:false,note:"3F"},{name:"Elixir",hidden:true,note:"Itemfinder, 2F"}] },

  { part:"Post-Game", id:"cerulean-cave", name:"Cerulean Cave",
    note:"Requires Champion title + first Sevii Islands quest. Mewtwo on B1F — use Master Ball or stock Ultra Balls. Ditto, Chansey, Rhydon all here.",
    pokemon:[{name:"Golbat",method:"Cave",levels:"46–48",rate:"20%"},{name:"Parasect",method:"Cave",levels:"46–48",rate:"15%"},{name:"Hypno",method:"Cave",levels:"46–48",rate:"15%"},{name:"Ditto",method:"Cave",levels:"46–48",rate:"10%"},{name:"Electrode",method:"Cave",levels:"46–48",rate:"10%"},{name:"Kadabra",method:"Cave",levels:"46–49",rate:"10%"},{name:"Rhydon",method:"Cave",levels:"46–49",rate:"10%"},{name:"Chansey",method:"Cave",levels:"55",rate:"4%"},{name:"Wobbuffet",method:"Cave",levels:"46–48",rate:"6%"},{name:"Psyduck",method:"Surf",levels:"20–35",frOnly:true},{name:"Golduck",method:"Surf",levels:"20–35",frOnly:true},{name:"Slowpoke",method:"Surf",levels:"20–35",lgOnly:true},{name:"Magikarp",method:"Old Rod",levels:"5"},{name:"Poliwag",method:"Good Rod",levels:"10–30"},{name:"Poliwhirl",method:"Super Rod",levels:"15–35"},{name:"Mewtwo",method:"Special",levels:"70",rate:"×1",note:"ONE-TIME — no respawn. Master Ball recommended!"}],
    items:[{name:"Max Revive",hidden:false,note:"1F"},{name:"Full Restore",hidden:false,note:"1F"},{name:"Ultra Ball",hidden:false,note:"1F"},{name:"TM29 Psychic",hidden:true,note:"Itemfinder near water, B1F"}] },

  { part:"Post-Game", id:"one-island", name:"One Island, Kindle Road & Mt. Ember",
    note:"Moltres at Mt. Ember summit (needs Strength). Kindle Road has Ponyta and Vulpix (FR). Magmar is FR-only in Mt. Ember.",
    pokemon:[{name:"Spearow",method:"Grass (Kindle Rd)",levels:"25–30",rate:"30%"},{name:"Fearow",method:"Grass (Kindle Rd)",levels:"25–30",rate:"20%"},{name:"Ponyta",method:"Grass (Kindle Rd)",levels:"25–30",rate:"30%"},{name:"Vulpix",method:"Grass (Kindle Rd)",levels:"25–30",rate:"20%",frOnly:true},{name:"Geodude",method:"Cave (Mt. Ember)",levels:"30–38",rate:"20%"},{name:"Slugma",method:"Cave (Mt. Ember)",levels:"30–38",rate:"30%"},{name:"Magcargo",method:"Cave (Mt. Ember)",levels:"35–40",rate:"10%"},{name:"Magmar",method:"Cave (Mt. Ember)",levels:"36–40",rate:"10%",frOnly:true},{name:"Moltres",method:"Special",levels:"50",rate:"×1",note:"ONE-TIME — Mt. Ember summit, requires Strength"}],
    items:[{name:"TM43 Secret Power",hidden:false,note:"Kindle Road"},{name:"Max Repel",hidden:false,note:"Mt. Ember"},{name:"HP Up",hidden:false,note:"Mt. Ember"},{name:"TM50 Overheat",hidden:false,note:"Mt. Ember peak"}] },

  { part:"Post-Game", id:"two-island", name:"Two Island, Cape Brink & Berry Forest",
    note:"Cape Brink for training. Berry Forest: rescue Lostelle. Hypno and Exeggcute catchable here.",
    pokemon:[{name:"Pidgeot",method:"Grass (Cape Brink)",levels:"35–40",rate:"30%"},{name:"Primeape",method:"Grass (Cape Brink)",levels:"35–40",rate:"25%",frOnly:true},{name:"Gloom",method:"Grass (Cape Brink)",levels:"35–40",rate:"25%",frOnly:true},{name:"Weepinbell",method:"Grass (Cape Brink)",levels:"35–40",rate:"25%",lgOnly:true},{name:"Hypno",method:"Grass (Berry Forest)",levels:"30–40",rate:"20%"},{name:"Slowpoke",method:"Grass (Berry Forest)",levels:"25–35",rate:"25%",lgOnly:true},{name:"Exeggcute",method:"Grass (Berry Forest)",levels:"25–35",rate:"20%"},{name:"Drowzee",method:"Grass (Berry Forest)",levels:"25–35",rate:"20%"},{name:"Oddish",method:"Grass (Berry Forest)",levels:"25–35",rate:"15%",frOnly:true}],
    items:[{name:"Lava Cookie",hidden:false,note:"From Lostelle's father after rescuing her"}] },

  { part:"Post-Game", id:"three-island", name:"Three Island & Bond Bridge",
    note:"Clear Team Rocket from Bond Bridge. Beedrill can appear in grass.",
    pokemon:[{name:"Pidgeot",method:"Grass",levels:"35–40",rate:"20%"},{name:"Raticate",method:"Grass",levels:"30–38",rate:"30%"},{name:"Venonat",method:"Grass",levels:"30–38",rate:"25%"},{name:"Venomoth",method:"Grass",levels:"35–40",rate:"15%"},{name:"Beedrill",method:"Grass (rare)",levels:"40",rate:"rare"}],
    items:[{name:"Soothe Bell",hidden:false,note:"From a character after clearing Team Rocket from the bridge"}] },

  { part:"Post-Game", id:"four-island", name:"Four Island & Icefall Cave",
    note:"HM07 Waterfall is inside Icefall Cave (Surf required). Sneasel and Delibird (FR) are new catches. Lorelei is here for the post-game quest.",
    pokemon:[{name:"Zubat",method:"Cave",levels:"30–38",rate:"30%"},{name:"Golbat",method:"Cave",levels:"35–40",rate:"10%"},{name:"Seel",method:"Cave",levels:"30–38",rate:"25%"},{name:"Dewgong",method:"Cave",levels:"35–40",rate:"10%"},{name:"Sneasel",method:"Cave",levels:"30–38",rate:"15%"},{name:"Delibird",method:"Cave",levels:"30–38",rate:"5%",frOnly:true},{name:"Psyduck",method:"Surf (inside)",levels:"15–35",frOnly:true},{name:"Slowpoke",method:"Surf (inside)",levels:"15–35",lgOnly:true}],
    items:[{name:"HM07 Waterfall",hidden:false,note:"Inner Icefall Cave (Surf required to reach)"},{name:"TM46 Thief",hidden:false,note:"Icefall Cave"},{name:"Zinc",hidden:false,note:"Icefall Cave outer"}] },

  { part:"Post-Game", id:"five-island", name:"Five Island, Lost Cave & Meadow",
    note:"Lost Cave has a 10-step directional puzzle. Lickitung is here — rare and Dex-important.",
    pokemon:[{name:"Lickitung",method:"Grass (Meadow)",levels:"30–38",rate:"10%"},{name:"Pidgey",method:"Grass (Meadow)",levels:"30–35",rate:"30%"},{name:"Rattata",method:"Grass (Meadow)",levels:"30–35",rate:"20%"},{name:"Slowpoke",method:"Grass (Meadow)",levels:"30–40",rate:"25%",lgOnly:true},{name:"Marowak",method:"Cave (Lost Cave)",levels:"35–45",rate:"20%"},{name:"Haunter",method:"Cave (Lost Cave)",levels:"35–40",rate:"25%"},{name:"Gengar",method:"Cave (Lost Cave)",levels:"35–45",rate:"10%"},{name:"Gastly",method:"Cave (Lost Cave)",levels:"30–38",rate:"25%"}],
    items:[{name:"TM21 Frustration",hidden:false,note:"From a woman at Resort Gorgeous"},{name:"Max Revive",hidden:false,note:"Memorial Pillar"}] },

  { part:"Post-Game", id:"six-island", name:"Six Island, Dotted Hole & Ruin Valley",
    note:"Sapphire gem is in the Dotted Hole (use Cut to enter, fall through correct holes) — required to complete the Sevii storyline and enable trading with Ruby/Sapphire/Emerald.",
    pokemon:[{name:"Ekans",method:"Grass (Ruin Valley)",levels:"35–45",rate:"25%",frOnly:true},{name:"Sandshrew",method:"Grass (Ruin Valley)",levels:"35–45",rate:"25%",lgOnly:true},{name:"Fearow",method:"Grass (Ruin Valley)",levels:"35–45",rate:"25%"},{name:"Electrode",method:"Grass (Ruin Valley)",levels:"35–45",rate:"20%"},{name:"Dugtrio",method:"Grass (Ruin Valley)",levels:"35–45",rate:"5%"}],
    items:[{name:"Sapphire",hidden:false,note:"Dotted Hole — required to unlock trading with Gen III games!"},{name:"TM29 Psychic",hidden:false,note:"Dotted Hole"}] },

  { part:"Post-Game", id:"seven-island", name:"Seven Island, Tanoby Ruins & Sevault Canyon",
    note:"Solve the Tanoby Key puzzle (Rock Smash all boulders in Monean Chamber) to spawn Unown in the seven Chambers. Team Rocket Warehouse is the Sevii storyline finale.",
    pokemon:[{name:"Drowzee",method:"Grass (Canyon)",levels:"40–46",rate:"20%"},{name:"Kangaskhan",method:"Grass (Canyon)",levels:"40–46",rate:"10%"},{name:"Cubone",method:"Grass (Canyon)",levels:"36–45",rate:"20%"},{name:"Marowak",method:"Grass (Canyon)",levels:"40–46",rate:"15%"},{name:"Tauros",method:"Grass (Canyon)",levels:"40–46",rate:"10%"},{name:"Geodude",method:"Cave (Ruins)",levels:"35–45",rate:"30%"},{name:"Graveler",method:"Cave (Ruins)",levels:"38–46",rate:"15%"},{name:"Unown",method:"Cave (Tanoby Chambers)",levels:"25–30",rate:"varies",note:"Multiple letter forms across 7 chambers; activate via Tanoby Key puzzle first"}],
    items:[{name:"TM30 Shadow Ball",hidden:false,note:"Team Rocket Warehouse"},{name:"Calcium",hidden:false,note:"Sevault Canyon"},{name:"Calcium",hidden:false,note:"Sevault Canyon"},{name:"TM44 Rest",hidden:false,note:"Sevault Canyon"}] },
];

// ─── BUILD LOCATION MAP ── (which areas each Pokémon appears in)
// Computed once at module level since AREAS is static
const LOCATION_MAP = {};
for (const area of AREAS) {
  for (const p of area.pokemon) {
    if (!LOCATION_MAP[p.name]) LOCATION_MAP[p.name] = [];
    LOCATION_MAP[p.name].push({ areaId: area.id, areaName: area.name, part: area.part, method: p.method, levels: p.levels, rate: p.rate });
  }
}

// ─── COLORS ──────────────────────────────────────────────────────────────────
const C = {
  bg:"#0e0707", card:"#180b0b", border:"#521010", accent:"#c42020",
  gold:"#c8a820", green:"#30b860", lgBlue:"#6688ee", text:"#eedada",
  muted:"#705050", panel:"#1e0e0e",
};

// Parts that have been fully audited against the Bulbapedia walkthrough — extend as each part is verified.
const AUDITED_PARTS = new Set(["Part 1", "Part 2", "Part 3"]);

function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }
function groupByPart(arr) { return arr.reduce((a, x) => { (a[x.part] = a[x.part]||[]).push(x); return a; }, {}); }

// ─── ROOT COMPONENT ───────────────────────────────────────────────────────────
function FireRedTracker() {
  const [tab, setTab]           = useState("dex");
  const [caught, setCaught]     = useState({});  // {pokémonName: true} — GLOBAL
  const [items, setItems]       = useState({});  // {areaId|itemName: true} — area-specific
  const [trainers, setTrainers] = useState({});  // {areaId|class|name: true} — area-specific
  const [areaId, setAreaId]     = useState(null);
  const [dexFilter, setDexFilter] = useState("all");
  const [dexSelected, setDexSelected] = useState(null); // name of selected Pokémon in Dex view
  const [search, setSearch]     = useState("");
  const [booted, setBooted]     = useState(false);

  useEffect(() => {
    (async () => {
      try { const r = localStorage.getItem("fr-caught5");   if (r) setCaught(JSON.parse(r));   } catch {}
      try { const r = localStorage.getItem("fr-items5");    if (r) setItems(JSON.parse(r));    } catch {}
      try { const r = localStorage.getItem("fr-trainers1"); if (r) setTrainers(JSON.parse(r)); } catch {}
      setBooted(true);
    })();
  }, []);

  const toggleCaught = useCallback((name) => {
    setCaught(prev => {
      const next = { ...prev };
      if (next[name]) delete next[name]; else next[name] = true;
      try { localStorage.setItem("fr-caught5", JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const toggleItem = useCallback((key) => {
    setItems(prev => {
      const next = { ...prev };
      if (next[key]) delete next[key]; else next[key] = true;
      try { localStorage.setItem("fr-items5", JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const toggleTrainer = useCallback((key) => {
    setTrainers(prev => {
      const next = { ...prev };
      if (next[key]) delete next[key]; else next[key] = true;
      try { localStorage.setItem("fr-trainers1", JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const caughtCount = Object.keys(caught).length;
  const area = areaId ? AREAS.find(a => a.id === areaId) : null;

  if (!booted) return <div style={{ background:C.bg, minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", color:C.text, fontFamily:"'Courier New',monospace" }}>Loading…</div>;

  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100vh", background:C.bg, fontFamily:"'Courier New',monospace", color:C.text, overflow:"hidden" }}>
      {/* ── Top bar ── */}
      <div style={{ background:"linear-gradient(135deg,#4a0000,#8a1010,#4a0000)", borderBottom:`2px solid ${C.gold}`, padding:"10px 18px", flexShrink:0 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:8 }}>
          <div>
            <div style={{ fontSize:8, letterSpacing:4, color:C.gold, marginBottom:1 }}>POKÉMON FIRERED</div>
            <div style={{ fontSize:16, fontWeight:"bold", letterSpacing:2 }}>🔥 Complete Tracker</div>
          </div>
          <div style={{ display:"flex", gap:20, fontSize:11 }}>
            <span style={{ color:C.green }}><b>{caughtCount}</b><span style={{ color:C.muted }}>/151</span> caught</span>
            <span style={{ color:C.gold }}><b>{Object.keys(items).length}</b> items ticked</span>
          </div>
        </div>
        {/* Tabs */}
        <div style={{ display:"flex", gap:4, marginTop:10 }}>
          {[["dex","📖 Pokédex"],["areas","🗺 Areas"]].map(([t,label]) => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding:"6px 16px", border:"none", borderRadius:"3px 3px 0 0", cursor:"pointer",
              fontFamily:"'Courier New',monospace", fontSize:12, fontWeight:"bold", letterSpacing:1,
              background: tab===t ? C.bg : "rgba(0,0,0,0.3)",
              color: tab===t ? C.text : C.muted,
              borderBottom: tab===t ? `2px solid ${C.gold}` : "2px solid transparent",
            }}>{label}</button>
          ))}
        </div>
      </div>

      {/* ── Tab: Pokédex ── */}
      {tab === "dex" && <DexTab caught={caught} toggleCaught={toggleCaught} dexFilter={dexFilter} setDexFilter={setDexFilter} dexSelected={dexSelected} setDexSelected={setDexSelected} />}

      {/* ── Tab: Areas ── */}
      {tab === "areas" && <AreasTab caught={caught} toggleCaught={toggleCaught} items={items} toggleItem={toggleItem} trainers={trainers} toggleTrainer={toggleTrainer} areaId={areaId} setAreaId={setAreaId} area={area} search={search} setSearch={setSearch} />}
    </div>
  );
}

// ─── POKÉDEX TAB ──────────────────────────────────────────────────────────────
function DexTab({ caught, toggleCaught, dexFilter, setDexFilter, dexSelected, setDexSelected }) {
  const caughtCount = Object.keys(caught).length;
  const filters = [["all","All 151"],["caught","Caught"],["missing","Missing"],["fr","FR Only"],["lg","LG Only"],["event","Event"]];

  const filtered = DEX.filter(p => {
    if (dexFilter === "caught")  return caught[p.name];
    if (dexFilter === "missing") return !caught[p.name];
    if (dexFilter === "fr")      return p.frOnly;
    if (dexFilter === "lg")      return p.lgOnly;
    if (dexFilter === "event")   return p.event;
    return true;
  });

  const selected = dexSelected ? DEX.find(p => p.name === dexSelected) : null;
  const locs = dexSelected ? (LOCATION_MAP[dexSelected] || []) : [];

  return (
    <div style={{ flex:1, overflow:"hidden", display:"flex", flexDirection:"column" }}>
      {/* Filter + stats */}
      <div style={{ padding:"10px 18px", borderBottom:`1px solid ${C.border}`, background:C.card, flexShrink:0 }}>
        <div style={{ display:"flex", gap:16, alignItems:"center", flexWrap:"wrap" }}>
          <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
            {filters.map(([f,label]) => (
              <button key={f} onClick={() => setDexFilter(f)} style={{
                padding:"3px 10px", fontFamily:"'Courier New',monospace", fontSize:10, cursor:"pointer", letterSpacing:1,
                background: dexFilter===f ? C.accent : "rgba(0,0,0,0.4)",
                color: dexFilter===f ? "#fff" : C.muted,
                border:`1px solid ${dexFilter===f ? "#e05050" : C.border}`, borderRadius:2,
              }}>{label}</button>
            ))}
          </div>
          <div style={{ marginLeft:"auto", fontSize:10, color:C.muted }}>
            <span style={{ color:C.green }}>{caughtCount}</span> / 151
            <span style={{ display:"inline-block", width:80, height:5, background:"rgba(0,0,0,0.4)", borderRadius:2, overflow:"hidden", marginLeft:10, verticalAlign:"middle" }}>
              <span style={{ display:"block", height:"100%", width:`${pct(caughtCount,151)}%`, background:C.green }} />
            </span>
            <span style={{ marginLeft:6 }}>{pct(caughtCount,151)}%</span>
          </div>
        </div>
      </div>

      <div style={{ display:"flex", flex:1, overflow:"hidden" }}>
        {/* Grid */}
        <div style={{ flex:1, overflowY:"auto", padding:"12px 16px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(82px,1fr))", gap:5 }}>
            {filtered.map(p => {
              const isCaught = !!caught[p.name];
              const isSel = dexSelected === p.name;
              return (
                <div key={p.id} onClick={() => { toggleCaught(p.name); setDexSelected(p.name); }}
                  style={{
                    background: isCaught ? "rgba(48,184,96,0.12)" : isSel ? "rgba(196,32,32,0.12)" : C.card,
                    border:`1px solid ${isSel ? C.accent : isCaught ? C.green : p.event ? "#cc88ff" : p.lgOnly ? C.lgBlue : p.frOnly ? "#ee6666" : C.border}`,
                    borderRadius:3, padding:"6px 5px 5px", cursor:"pointer", textAlign:"center",
                    transition:"all 0.1s", position:"relative",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = isCaught ? C.green : C.accent; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = isSel ? C.accent : isCaught ? C.green : p.event ? "#cc88ff" : p.lgOnly ? C.lgBlue : p.frOnly ? "#ee6666" : C.border; }}
                >
                  {isCaught && <div style={{ position:"absolute", top:2, left:4, fontSize:8, color:C.green }}>✓</div>}
                  {p.frOnly && <div style={{ position:"absolute", top:2, right:3, fontSize:7, color:"#ee6666" }}>FR</div>}
                  {p.lgOnly && <div style={{ position:"absolute", top:2, right:3, fontSize:7, color:C.lgBlue }}>LG</div>}
                  {p.event  && <div style={{ position:"absolute", top:2, right:3, fontSize:7, color:"#cc88ff" }}>✦</div>}
                  <div style={{ fontSize:9, color:C.muted, marginBottom:1 }}>#{String(p.id).padStart(3,"0")}</div>
                  <div style={{ fontSize:10, color: isCaught ? C.green : C.text, fontWeight:isCaught?"bold":"normal", lineHeight:1.3, wordBreak:"break-word" }}>{p.name}</div>
                </div>
              );
            })}
          </div>
          {filtered.length === 0 && <div style={{ textAlign:"center", padding:40, color:C.muted, fontSize:12 }}>No Pokémon match this filter.</div>}
        </div>

        {/* Detail panel */}
        <div style={{ width:220, flexShrink:0, borderLeft:`1px solid ${C.border}`, background:C.card, overflowY:"auto", padding:14 }}>
          {!selected ? (
            <div style={{ color:C.muted, fontSize:11, textAlign:"center", marginTop:40, lineHeight:1.8 }}>
              Click any Pokémon to toggle caught &amp; see where to find it.
            </div>
          ) : (
            <>
              <div style={{ marginBottom:12 }}>
                <div style={{ fontSize:9, color:C.muted, marginBottom:2 }}>#{String(selected.id).padStart(3,"0")}</div>
                <div style={{ fontSize:16, fontWeight:"bold", color: caught[selected.name] ? C.green : C.text }}>{selected.name}</div>
                <div style={{ fontSize:10, color: caught[selected.name] ? C.green : C.muted, marginTop:2 }}>
                  {caught[selected.name] ? "✓ Caught" : "✗ Not yet caught"}
                </div>
                {selected.frOnly && <div style={{ fontSize:9, color:"#ee6666", marginTop:3 }}>FireRed exclusive</div>}
                {selected.lgOnly && <div style={{ fontSize:9, color:C.lgBlue, marginTop:3 }}>LeafGreen exclusive — trade needed</div>}
                {selected.event  && <div style={{ fontSize:9, color:"#cc88ff", marginTop:3 }}>Event Pokémon — not in-game obtainable</div>}
              </div>

              <div style={{ fontSize:9, letterSpacing:2, color:C.muted, marginBottom:6, textTransform:"uppercase" }}>Where to find</div>
              {locs.length === 0 ? (
                <div style={{ fontSize:10, color:C.muted, lineHeight:1.7 }}>
                  Not found as a wild encounter or gift in any tracked area.<br/>
                  Obtain via: <b style={{ color:C.text }}>Evolution, trading, or breeding</b>.
                </div>
              ) : (
                locs.map((l, i) => (
                  <div key={i} style={{ marginBottom:8, padding:"6px 8px", background:"rgba(0,0,0,0.25)", borderRadius:2, borderLeft:`2px solid ${C.border}` }}>
                    <div style={{ fontSize:10, color:C.text, fontWeight:"bold", marginBottom:1 }}>{l.areaName}</div>
                    <div style={{ fontSize:9, color:C.muted }}>{l.part}</div>
                    <div style={{ fontSize:9, color:"#aa8888", marginTop:2 }}>
                      {l.method} · Lv.{l.levels}{l.rate ? ` · ${l.rate}` : ""}
                    </div>
                  </div>
                ))
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── AREAS TAB ────────────────────────────────────────────────────────────────
function AreasTab({ caught, toggleCaught, items, toggleItem, trainers, toggleTrainer, areaId, setAreaId, area, search, setSearch }) {
  const visibleAreas = useMemo(() => AREAS.filter(a => AUDITED_PARTS.has(a.part)), []);
  const groups = useMemo(() => groupByPart(visibleAreas), [visibleAreas]);
  const filtered = useMemo(() => search.trim() ? visibleAreas.filter(a => a.name.toLowerCase().includes(search.toLowerCase())) : null, [search, visibleAreas]);

  const pokeDone    = area ? area.pokemon.filter(p => caught[p.name]).length : 0;
  const itemDone    = area ? area.items.filter(i => items[`${areaId}|${i.name}`]).length : 0;
  const trainerDone = area ? (area.trainers || []).filter(t => trainers[`${areaId}|${t.class}|${t.name}`]).length : 0;

  return (
    <div style={{ display:"flex", flex:1, overflow:"hidden" }}>
      {/* Sidebar */}
      <div style={{ width:210, flexShrink:0, borderRight:`1px solid ${C.border}`, background:C.card, display:"flex", flexDirection:"column", overflowY:"auto" }}>
        <div style={{ padding:"8px 10px", borderBottom:`1px solid ${C.border}`, position:"sticky", top:0, background:C.card, zIndex:1 }}>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search areas…"
            style={{ width:"100%", background:"rgba(0,0,0,0.4)", border:`1px solid ${C.border}`, color:C.text, padding:"5px 8px", fontFamily:"'Courier New',monospace", fontSize:11, borderRadius:2, boxSizing:"border-box" }} />
        </div>
        {filtered
          ? filtered.map(a => <AreaRow key={a.id} area={a} areaId={areaId} setAreaId={setAreaId} caught={caught} items={items} trainers={trainers} />)
          : Object.entries(groups).map(([part, list]) => (
              <div key={part}>
                <div style={{ padding:"5px 10px", fontSize:9, letterSpacing:3, color:C.muted, textTransform:"uppercase", background:"rgba(0,0,0,0.25)", borderBottom:`1px solid rgba(82,16,16,0.4)` }}>{part}</div>
                {list.map(a => <AreaRow key={a.id} area={a} areaId={areaId} setAreaId={setAreaId} caught={caught} items={items} trainers={trainers} />)}
              </div>
            ))
        }
        {filtered?.length === 0 && <div style={{ padding:16, fontSize:11, color:C.muted, textAlign:"center" }}>No matches</div>}
      </div>

      {/* Main */}
      <div style={{ flex:1, overflowY:"auto", padding:"18px 20px" }}>
        {!area ? (
          <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height:"100%", color:C.muted, textAlign:"center", gap:10 }}>
            <div style={{ fontSize:32 }}>🗺</div>
            <div style={{ fontSize:13, letterSpacing:2 }}>SELECT AN AREA</div>
            <div style={{ fontSize:11, maxWidth:340, lineHeight:1.8 }}>
              Pokémon are tracked <b style={{ color:C.text }}>globally by name</b> — catching Pikachu here marks it caught everywhere, including the Pokédex tab.
            </div>
          </div>
        ) : (
          <>
            <div style={{ marginBottom:14 }}>
              <div style={{ fontSize:9, color:C.muted, letterSpacing:3, marginBottom:3 }}>{area.part.toUpperCase()}</div>
              <h2 style={{ margin:0, fontSize:18, letterSpacing:1 }}>{area.name}</h2>
            </div>

            {area.note && (
              <div style={{ background:"rgba(200,168,32,0.07)", border:`1px solid rgba(200,168,32,0.22)`, borderRadius:3, padding:"8px 12px", fontSize:11, color:C.gold, marginBottom:12, lineHeight:1.65 }}>
                📝 {area.note}
              </div>
            )}

            <div style={{ display:"flex", gap:12, marginBottom:14, flexWrap:"wrap" }}>
              <MiniBar label="Pokémon"  done={pokeDone}    total={area.pokemon.length}           color={C.green} />
              <MiniBar label="Items"    done={itemDone}    total={area.items.length}             color={C.gold} />
              {area.trainers?.length > 0 && <MiniBar label="Trainers" done={trainerDone} total={area.trainers.length} color="#bb66ee" />}
            </div>

            <div style={{ fontSize:10, color:C.muted, marginBottom:10, display:"flex", gap:16, flexWrap:"wrap" }}>
              <span><span style={{ color:"#ee6666" }}>FR</span> = FireRed exclusive</span>
              <span><span style={{ color:C.lgBlue }}>LG</span> = LeafGreen exclusive</span>
              <span><span style={{ color:C.gold }}>★</span> = Hidden item (Itemfinder)</span>
              <span style={{ color:"rgba(200,200,200,0.35)" }}>Grey = already caught elsewhere</span>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
              {/* Pokémon */}
              <Section title="🐾 Wild Pokémon" count={`${pokeDone}/${area.pokemon.length}`} color={C.green}>
                {area.pokemon.length === 0 ? <Empty text="No wild Pokémon here" /> :
                  area.pokemon.map((p, i) => {
                    const isCaught = !!caught[p.name];
                    return (
                      <Row key={i} done={isCaught} onClick={() => toggleCaught(p.name)}>
                        <div style={{ flex:1 }}>
                          <span style={{ color: isCaught ? C.green : p.lgOnly ? C.lgBlue : p.frOnly ? "#ee6666" : C.text, fontWeight:"bold", fontSize:12 }}>
                            {p.name}
                            {p.frOnly && <Tag color="#ee6666">FR</Tag>}
                            {p.lgOnly && <Tag color={C.lgBlue}>LG</Tag>}
                          </span>
                          <span style={{ fontSize:9, color:C.muted, marginLeft:5 }}>{p.method}</span>
                          {p.note && <div style={{ fontSize:9, color:"#b87030", marginTop:1 }}>⚠ {p.note}</div>}
                        </div>
                        <div style={{ textAlign:"right", fontSize:9, color:C.muted, flexShrink:0, paddingLeft:6 }}>
                          {p.rate && <div>{p.rate}</div>}
                          <div>Lv.{p.levels}</div>
                        </div>
                      </Row>
                    );
                  })
                }
              </Section>

              {/* Items */}
              <Section title="🎒 Items" count={`${itemDone}/${area.items.length}`} color={C.gold}>
                {area.items.length === 0 ? <Empty text="No items here" /> :
                  area.items.map((it, i) => {
                    const key = `${areaId}|${it.name}`;
                    return (
                      <Row key={i} done={!!items[key]} onClick={() => toggleItem(key)}>
                        <div style={{ flex:1 }}>
                          <span style={{ fontSize:11, fontWeight:"bold", color: it.hidden ? C.gold : C.text }}>
                            {it.hidden && <span style={{ color:C.gold, marginRight:3 }}>★</span>}
                            {it.name}
                          </span>
                          {it.note && <div style={{ fontSize:9, color:C.muted, marginTop:2, lineHeight:1.4 }}>{it.note}</div>}
                        </div>
                      </Row>
                    );
                  })
                }
              </Section>
            </div>

            {area.trainers?.length > 0 && (
              <div style={{ marginTop:12 }}>
                <Section title="⚔️ Trainers" count={`${trainerDone}/${area.trainers.length}`} color="#bb66ee">
                  {area.trainers.map((t, i) => {
                    const key = `${areaId}|${t.class}|${t.name}`;
                    return (
                      <Row key={i} done={!!trainers[key]} onClick={() => toggleTrainer(key)}>
                        <span style={{ fontSize:11, fontWeight:"bold" }}>{t.class} {t.name}</span>
                      </Row>
                    );
                  })}
                </Section>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

// ─── Shared sub-components ────────────────────────────────────────────────────
function AreaRow({ area, areaId, setAreaId, caught, items, trainers }) {
  const isSel = areaId === area.id;
  const pd  = area.pokemon.filter(p => caught[p.name]).length;
  const id_ = area.items.filter(i => items[`${area.id}|${i.name}`]).length;
  const td  = (area.trainers || []).filter(t => trainers[`${area.id}|${t.class}|${t.name}`]).length;
  const total = area.pokemon.length + area.items.length + (area.trainers?.length || 0);
  const allDone = total > 0 && (pd + id_ + td) === total;
  return (
    <div onClick={() => setAreaId(area.id)} style={{ padding:"7px 10px", cursor:"pointer", borderBottom:`1px solid rgba(82,16,16,0.2)`, borderLeft:`3px solid ${isSel ? C.accent : "transparent"}`, background: isSel ? "rgba(196,32,32,0.1)" : "transparent", transition:"all 0.08s" }}
      onMouseEnter={e => { if (!isSel) e.currentTarget.style.background="rgba(255,255,255,0.02)"; }}
      onMouseLeave={e => { if (!isSel) e.currentTarget.style.background="transparent"; }}>
      <div style={{ fontSize:11, color: allDone ? C.green : isSel ? "#fff" : "#c09090", lineHeight:1.3 }}>{allDone ? "✓ " : ""}{area.name}</div>
      {total > 0 && (
        <div style={{ display:"flex", gap:8, marginTop:2, fontSize:9 }}>
          <span style={{ color: pd===area.pokemon.length && area.pokemon.length>0 ? C.green : C.muted }}>{pd}/{area.pokemon.length} 🐾</span>
          <span style={{ color: id_===area.items.length && area.items.length>0 ? C.gold : C.muted }}>{id_}/{area.items.length} 🎒</span>
          {area.trainers?.length > 0 && <span style={{ color: td===area.trainers.length ? "#bb66ee" : C.muted }}>{td}/{area.trainers.length} ⚔️</span>}
        </div>
      )}
    </div>
  );
}

function Section({ title, count, color, children }) {
  return (
    <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:3, overflow:"hidden" }}>
      <div style={{ padding:"7px 11px", background:"rgba(0,0,0,0.25)", borderBottom:`1px solid ${C.border}`, display:"flex", justifyContent:"space-between" }}>
        <span style={{ fontSize:11, fontWeight:"bold", letterSpacing:1 }}>{title}</span>
        <span style={{ fontSize:10, color, padding:"1px 7px", background:"rgba(0,0,0,0.3)", borderRadius:2 }}>{count}</span>
      </div>
      <div style={{ maxHeight:460, overflowY:"auto" }}>{children}</div>
    </div>
  );
}

function Row({ done, onClick, children }) {
  return (
    <div onClick={onClick} style={{ display:"flex", alignItems:"flex-start", gap:9, padding:"7px 11px", cursor:"pointer", borderBottom:`1px solid rgba(82,16,16,0.15)`, background: done?"rgba(48,184,96,0.05)":"transparent", transition:"background 0.07s" }}
      onMouseEnter={e => e.currentTarget.style.background = done?"rgba(48,184,96,0.09)":"rgba(255,255,255,0.02)"}
      onMouseLeave={e => e.currentTarget.style.background = done?"rgba(48,184,96,0.05)":"transparent"}>
      <div style={{ width:12, height:12, border:`2px solid ${done ? C.green : C.border}`, background:done?C.green:"transparent", flexShrink:0, marginTop:2, display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.1s" }}>
        {done && <span style={{ color:"#000", fontSize:7, fontWeight:"bold" }}>✓</span>}
      </div>
      <div style={{ display:"flex", justifyContent:"space-between", flex:1, opacity:done?0.45:1, textDecoration:done?"line-through":"none" }}>{children}</div>
    </div>
  );
}

function Tag({ color, children }) {
  return <span style={{ marginLeft:4, fontSize:8, color, border:`1px solid ${color}`, padding:"0 3px", borderRadius:2, verticalAlign:"middle" }}>{children}</span>;
}

function Empty({ text }) {
  return <div style={{ padding:18, textAlign:"center", fontSize:11, color:C.muted }}>{text}</div>;
}

function MiniBar({ label, done, total, color }) {
  const p = pct(done, total);
  return (
    <div style={{ flex:1, minWidth:130 }}>
      <div style={{ display:"flex", justifyContent:"space-between", fontSize:10, marginBottom:2 }}>
        <span style={{ color:C.muted }}>{label}</span>
        <span style={{ color }}>{done}/{total}{total?` (${p}%)`:""}</span>
      </div>
      <div style={{ height:4, background:"rgba(0,0,0,0.4)", borderRadius:2, overflow:"hidden" }}>
        <div style={{ height:"100%", width:`${p}%`, background:color, transition:"width 0.3s" }} />
      </div>
    </div>
  );
}
