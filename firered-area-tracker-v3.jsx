const { useState, useEffect, useCallback, useMemo } = React;

function useIsMobile() {
  const [mobile, setMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const h = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return mobile;
}

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
  {id:37, name:"Vulpix",  lgOnly:true}, {id:38, name:"Ninetales",lgOnly:true},
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
  {id:125,name:"Electabuzz",frOnly:true},{id:126,name:"Magmar",lgOnly:true},
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
    items:[{name:"Potion",hidden:false,note:"From the PC in your bedroom"},{name:"Pokédex",hidden:false,note:"From Professor Oak after choosing your starter"},{name:"Poké Ball ×5",hidden:false,note:"From Oak's aide after receiving the Pokédex"},{name:"Town Map",hidden:false,note:"From Daisy (Blue's sister) after receiving the Pokédex"}],
    trainers:[{class:"Rival",name:"Blue",note:"Has the starter with a type advantage over yours — one of these three.",team:[{name:"Charmander",level:5},{name:"Squirtle",level:5},{name:"Bulbasaur",level:5}]}] },

  { part:"Part 2", id:"route1", name:"Route 1",
    note:"Can't catch on first visit — no Poké Balls yet. Return from Viridian City.",
    pokemon:[{name:"Pidgey",method:"Grass",levels:"2–5",rate:"50%"},{name:"Rattata",method:"Grass",levels:"2–4",rate:"50%"}],
    items:[{name:"Potion",hidden:false,note:"From the Viridian Mart employee near the signpost"}] },

  { part:"Part 2", id:"viridian-city", name:"Viridian City",
    note:"Deliver Oak's Parcel to unlock the old man's Pokémon-catching tutorial on Route 2.",
    pokemon:[],
    items:[{name:"Oak's Parcel",hidden:false,note:"From the Poké Mart shopkeeper — deliver to Professor Oak in Pallet Town"},{name:"Potion",hidden:false,note:"Near the city's north exit, west of the small tree"},{name:"Teachy TV",hidden:false,note:"From the old man after delivering Oak's Parcel"},{name:"TM26 Earthquake",hidden:false,note:"From the Viridian Gym Leader after defeating them — not accessible until post-game"}] },

  { part:"Part 2", id:"route22", name:"Route 22",
    note:"Worth visiting early for Mankey (useful against Brock). Surf and fishing unlocked on the return visit after Viridian Gym. Blue challenges you here a second time before the Pokémon League.",
    pokemon:[
      {name:"Rattata",  method:"Grass",     levels:"2–5",   rate:"45%"},
      {name:"Mankey",   method:"Grass",     levels:"2–5",   rate:"45%"},
      {name:"Spearow",  method:"Grass",     levels:"3–5",   rate:"10%"},
      {name:"Psyduck",  method:"Surf",      levels:"20–40", rate:"100%", frOnly:true},
      {name:"Slowpoke", method:"Surf",      levels:"20–40", rate:"100%", lgOnly:true},
      {name:"Magikarp", method:"Old Rod",   levels:"5",     rate:"100%"},
      {name:"Poliwag",  method:"Good Rod",  levels:"5–15",  rate:"60%"},
      {name:"Goldeen",  method:"Good Rod",  levels:"5–15",  rate:"20%"},
      {name:"Magikarp", method:"Good Rod",  levels:"5–15",  rate:"20%"},
      {name:"Poliwag",  method:"Super Rod", levels:"15–25", rate:"40%"},
      {name:"Poliwhirl",method:"Super Rod", levels:"20–30", rate:"40%"},
      {name:"Gyarados", method:"Super Rod", levels:"15–25", rate:"15%"},
      {name:"Psyduck",  method:"Super Rod", levels:"15–35", rate:"5%",  frOnly:true},
      {name:"Slowpoke", method:"Super Rod", levels:"15–35", rate:"5%",  lgOnly:true},
    ],
    items:[],
    trainers:[
      {class:"Rival",name:"Blue",note:"Early visit — Lv. 9 Pidgey + the starter that counters yours.",
        team:[{name:"Pidgey",level:9}]},
      {class:"Rival",name:"Blue",note:"Pre-League return — team varies by starter. Shown: vs Bulbasaur.",
        team:[{name:"Pidgeot",level:47},{name:"Rhyhorn",level:45},{name:"Exeggcute",level:45},{name:"Gyarados",level:45},{name:"Alakazam",level:47},{name:"Charizard",level:53}]},
    ]},

  { part:"Part 2", id:"route2-west", name:"Route 2 (West)",
    note:"Pass-through on the way to Viridian Forest. Wild Pokémon are available on first visit.",
    pokemon:[{name:"Pidgey",method:"Grass",levels:"2–5",rate:"45%"},{name:"Rattata",method:"Grass",levels:"2–5",rate:"45%"},{name:"Caterpie",method:"Grass",levels:"4–5",rate:"5%"},{name:"Weedle",method:"Grass",levels:"4–5",rate:"5%"}],
    items:[] },

  { part:"Part 3", id:"viridian-forest", name:"Viridian Forest",
    note:"Pikachu is rare but catchable here (5%). Metapod and Kakuna both appear in both versions at different rates — Kakuna is more common in FireRed, Metapod in LeafGreen.",
    pokemon:[{name:"Caterpie",method:"Grass",levels:"3–5",rate:"40%"},{name:"Weedle",method:"Grass",levels:"3–5",rate:"40%"},{name:"Metapod",method:"Grass",levels:"4–6",rate:"5% FR / 10% LG"},{name:"Kakuna",method:"Grass",levels:"4–6",rate:"10% FR / 5% LG"},{name:"Pikachu",method:"Grass",levels:"3–5",rate:"5%"}],
    items:[{name:"Poké Ball",hidden:false,note:"Dead-end grassy path northwest of south entrance"},{name:"Antidote",hidden:true,note:"West side of lone tree near south entrance",img:"screenshots/hidden/viridian-forest-1.png"},{name:"Antidote",hidden:false,note:"Northeast area past Trainer Tips sign"},{name:"Potion",hidden:false,note:"Tall grass east of southern entrance"},{name:"Potion",hidden:false,note:"Dead-end path southeast of north exit"},{name:"Potion",hidden:true,note:"In front of Bug Catcher Sammy near north exit",img:"screenshots/hidden/viridian-forest-5.png"}],
    trainers:[
      {class:"Bug Catcher",name:"Rick",   team:[{name:"Weedle",level:6},{name:"Caterpie",level:6}]},
      {class:"Bug Catcher",name:"Doug",   team:[{name:"Weedle",level:7},{name:"Kakuna",level:7},{name:"Weedle",level:7}]},
      {class:"Bug Catcher",name:"Anthony",team:[{name:"Caterpie",level:7},{name:"Caterpie",level:8}]},
      {class:"Bug Catcher",name:"Charlie",team:[{name:"Metapod",level:7},{name:"Caterpie",level:7},{name:"Metapod",level:7}]},
      {class:"Bug Catcher",name:"Sammy",  team:[{name:"Weedle",level:9}]},
    ] },



  { part:"Part 3", id:"pewter-city", name:"Pewter City",
    note:"Defeat Brock for TM39 Rock Tomb. Old Amber requires Cut to reach the museum scientist — bring it to Cinnabar Lab to revive Aerodactyl.",
    pokemon:[],
    items:[{name:"Poké Ball",hidden:true,note:"West of Pewter Museum on lighter-colored grass",img:"screenshots/hidden/pewter-city-0.png"},{name:"TM39 Rock Tomb",hidden:false,note:"Reward from Brock after defeating him"},{name:"Running Shoes",hidden:false,note:"From Professor Oak's aide on east side of town after defeating Brock"},{name:"Old Amber",hidden:false,note:"Scientist in back of Museum (requires Cut) — bring to Cinnabar Lab to revive Aerodactyl"}],
    trainers:[
      {class:"Camper",    name:"Liam", team:[{name:"Geodude",level:10},{name:"Sandshrew",level:11}]},
      {class:"Gym Leader",name:"Brock",team:[{name:"Geodude",level:12},{name:"Onix",level:14}]},
    ] },

  { part:"Part 4", id:"route3", name:"Route 3",
    note:"Nidoran♀ is more common in FireRed (14%), Nidoran♂ in LeafGreen (14%). Both versions have Mankey and Jigglypuff.",
    pokemon:[
      {name:"Spearow",method:"Grass",levels:"6–8",rate:"35%"},
      {name:"Pidgey",method:"Grass",levels:"6–7",rate:"30%"},
      {name:"Jigglypuff",method:"Grass",levels:"3–7",rate:"10%"},
      {name:"Mankey",method:"Grass",levels:"7",rate:"10%"},
      {name:"Nidoran♀",method:"Grass",levels:"6–7",rate:"1% FR / 14% LG"},
      {name:"Nidoran♂",method:"Grass",levels:"6–7",rate:"14% FR / 1% LG"},
    ],
    items:[{name:"Oran Berry",hidden:true,note:"Between ledges near Youngster Calvin (★ Itemfinder)",img:"screenshots/hidden/route3-0.png"}],
    trainers:[
      {class:"Lass",       name:"Janice", team:[{name:"Pidgey",   level:9},{name:"Pidgey",  level:9}]},
      {class:"Bug Catcher",name:"Colton", team:[{name:"Caterpie", level:10},{name:"Weedle",  level:10},{name:"Caterpie",level:10}]},
      {class:"Youngster",  name:"Ben",    team:[{name:"Rattata",  level:11},{name:"Ekans",   level:11}]},
      {class:"Bug Catcher",name:"Greg",   team:[{name:"Weedle",   level:9},{name:"Kakuna",  level:9},{name:"Caterpie",level:9},{name:"Metapod",level:9}]},
      {class:"Youngster",  name:"Calvin", team:[{name:"Spearow",  level:14}]},
      {class:"Lass",       name:"Sally",  team:[{name:"Rattata",  level:10},{name:"Nidoran♀",level:10}]},
      {class:"Bug Catcher",name:"James",  team:[{name:"Caterpie", level:11},{name:"Metapod", level:11}]},
      {class:"Lass",       name:"Robin",  team:[{name:"Jigglypuff",level:14}]},
    ] },

  { part:"Part 4", id:"route4-west", name:"Route 4 (West)",
    note:"Small area between Route 3 and Mt. Moon. A man near the Pokémon Center sells Magikarp for ₽500.",
    pokemon:[{name:"Magikarp",method:"Buy",levels:"5",note:"Purchase from the man for ₽500 — at the Pokémon Center building on Route 4"}],
    items:[{name:"Persim Berry",hidden:true,note:"West of Pokémon Center, between rocks (★ Itemfinder)",img:"screenshots/hidden/route4-west-0.png"}],
    trainers:[] },

  { part:"Part 4", id:"mt-moon", name:"Mt. Moon",
    note:"⚠ CHOOSE ONE fossil at the end of B2F — Dome→Kabuto or Helix→Omanyte. Only one per file; trade for the other.",
    floors:[
      { label:"1F",
        pokemon:[
          {name:"Zubat",   method:"Cave",levels:"7–10",rate:"69%"},
          {name:"Geodude", method:"Cave",levels:"7–9", rate:"25%"},
          {name:"Paras",   method:"Cave",levels:"8",   rate:"5%"},
          {name:"Clefairy",method:"Cave",levels:"8",   rate:"1%"},
        ],
        items:[
          {name:"TM09 Bullet Seed",hidden:false,note:"West chamber"},
          {name:"Paralyze Heal",   hidden:false,note:"West chamber"},
          {name:"Potion",          hidden:false,note:"Southeast area"},
          {name:"Rare Candy",      hidden:false,note:"Southeast corner"},
          {name:"Escape Rope",     hidden:false,note:"East-central area"},
          {name:"Moon Stone",      hidden:false,note:"Northwest corner"},
        ],
        trainers:[
          {class:"Bug Catcher",name:"Kent",   team:[{name:"Weedle",   level:11},{name:"Kakuna",   level:11}]},
          {class:"Lass",       name:"Iris",   team:[{name:"Clefairy", level:14}]},
          {class:"Super Nerd", name:"Jovan",  team:[{name:"Magnemite",level:11},{name:"Voltorb",  level:11}]},
          {class:"Bug Catcher",name:"Robby",  team:[{name:"Caterpie", level:10},{name:"Metapod",  level:10},{name:"Caterpie",level:10}]},
          {class:"Lass",       name:"Miriam", team:[{name:"Oddish",   level:11},{name:"Bellsprout",level:11}]},
          {class:"Youngster",  name:"Josh",   team:[{name:"Rattata",  level:10},{name:"Rattata",  level:10},{name:"Zubat",   level:10}]},
          {class:"Hiker",      name:"Marcos", team:[{name:"Geodude",  level:10},{name:"Geodude",  level:10},{name:"Onix",    level:10}]},
        ]},
      { label:"B1F",
        pokemon:[
          {name:"Paras",method:"Cave",levels:"5–10",rate:"100%",note:"Mushroom room off main path"},
        ],
        items:[
          {name:"Tiny Mushroom",hidden:true,note:"Recurring throughout B1F/B2F (★ Itemfinder)"},
          {name:"Big Mushroom", hidden:true,note:"Recurring throughout B1F/B2F (★ Itemfinder)"},
        ],
        trainers:[]},
      { label:"B2F",
        pokemon:[
          {name:"Zubat",   method:"Cave",levels:"8–11", rate:"49%"},
          {name:"Geodude", method:"Cave",levels:"9–10", rate:"30%"},
          {name:"Paras",   method:"Cave",levels:"10–12",rate:"15%"},
          {name:"Clefairy",method:"Cave",levels:"10–12",rate:"6%"},
          {name:"Kabuto",  method:"Fossil",levels:"5",  note:"Restore Dome Fossil at Cinnabar Lab"},
          {name:"Omanyte", method:"Fossil",levels:"5",  note:"Restore Helix Fossil at Cinnabar Lab"},
        ],
        items:[
          {name:"Star Piece",  hidden:false,note:"South section"},
          {name:"TM46 Thief",  hidden:false,note:"Northeast platform"},
          {name:"Ether",       hidden:true, note:"Northeast section (★ Itemfinder)",img:"screenshots/hidden/mt-moon-b2f-2.png"},
          {name:"Moon Stone",  hidden:true, note:"Near fossils (★ Itemfinder)",img:"screenshots/hidden/mt-moon-b2f-3.png"},
          {name:"Revive",      hidden:false,note:"North of center ladder"},
          {name:"Antidote",    hidden:false,note:"Southwest of northwest ladder"},
          {name:"Dome Fossil", hidden:false,note:"⚠ Choose Dome OR Helix, not both! (Dome→Kabuto)"},
          {name:"Helix Fossil",hidden:false,note:"⚠ Choose Dome OR Helix, not both! (Helix→Omanyte)"},
        ],
        trainers:[
          {class:"Team Rocket Grunt",name:"Grunt 1",team:[{name:"Sandshrew",level:11},{name:"Rattata",  level:11},{name:"Zubat",   level:11}]},
          {class:"Team Rocket Grunt",name:"Grunt 2",team:[{name:"Zubat",    level:11},{name:"Ekans",    level:11}]},
          {class:"Team Rocket Grunt",name:"Grunt 3",team:[{name:"Rattata",  level:13},{name:"Sandshrew",level:13}]},
          {class:"Team Rocket Grunt",name:"Grunt 4",team:[{name:"Rattata",  level:13},{name:"Zubat",    level:13}]},
          {class:"Super Nerd",       name:"Miguel", team:[{name:"Grimer",   level:12},{name:"Voltorb",  level:12},{name:"Koffing",level:12}]},
        ]},
    ] },

  { part:"Part 4", id:"route4-east", name:"Route 4 (East)",
    note:"Ekans is FireRed-only; Sandshrew fills the same slot in LeafGreen. Two one-time Move Tutors on the eastern hill: Mega Punch (left) and Mega Kick (right).",
    pokemon:[
      {name:"Rattata",  method:"Grass",levels:"8–12",rate:"35%"},
      {name:"Spearow",  method:"Grass",levels:"8–12",rate:"35%"},
      {name:"Ekans",    method:"Grass",levels:"6–12",rate:"25%",frOnly:true},
      {name:"Sandshrew",method:"Grass",levels:"6–12",rate:"25%",lgOnly:true},
      {name:"Mankey",   method:"Grass",levels:"10–12",rate:"5%"},
    ],
    items:[
      {name:"Great Ball",  hidden:true, note:"Corner west of northwest hill (★ Itemfinder)",img:"screenshots/hidden/route4-east-0.png"},
      {name:"Razz Berry",  hidden:true, note:"South-central area (★ Itemfinder)",img:"screenshots/hidden/route4-east-1.png"},
      {name:"TM05 Roar",   hidden:false,note:"Eastern hill — from the man by the hill"},
    ],
    trainers:[] },

  { part:"Part 5", id:"cerulean-city", name:"Cerulean City",
    note:"Defeat Misty for TM03 Water Pulse. Blue battles you near the south bridge. A trade NPC offers Jynx for Poliwhirl.",
    pokemon:[{name:"Jynx",method:"Trade",levels:"any",note:"Trade Poliwhirl to the man near the Pokémon Center"}],
    items:[
      {name:"Rare Candy",      hidden:true, note:"Backyard of northwest house (★ Itemfinder)",img:"screenshots/hidden/cerulean-city-0.png"},
      {name:"Powder Jar",      hidden:false,note:"From the old man in the north-northwest house"},
      {name:"TM03 Water Pulse",hidden:false,note:"From Misty after defeating her"},
      {name:"Fame Checker",    hidden:false,note:"From Blue after the rival battle"},
      {name:"Bicycle",         hidden:false,note:"Exchange Bike Voucher (from Fan Club President, Vermilion City) at the Bike Shop"},
    ],
    trainers:[
      {class:"Swimmer",    name:"Luis",  team:[{name:"Horsea",    level:16},{name:"Shellder",level:16}]},
      {class:"Picnicker",  name:"Diana", team:[{name:"Goldeen",   level:19}]},
      {class:"Gym Leader", name:"Misty", team:[{name:"Staryu",    level:18},{name:"Starmie", level:21}]},
      {class:"Rival",      name:"Blue",  note:"Has the starter with a type advantage over yours.",
        team:[{name:"Pidgeotto",level:17},{name:"Abra",level:16},{name:"Rattata",level:15}]},
    ] },

  { part:"Part 5", id:"route24", name:"Route 24",
    note:"Defeat all 5 Nugget Bridge trainers + the Team Rocket Grunt at the top to receive the Nugget. Oddish/Metapod are FR-only; Bellsprout/Kakuna are LG-only.",
    pokemon:[
      {name:"Oddish",    method:"Grass",levels:"12–14",rate:"25%",frOnly:true},
      {name:"Bellsprout",method:"Grass",levels:"12–14",rate:"25%",lgOnly:true},
      {name:"Caterpie",  method:"Grass",levels:"7",    rate:"20%"},
      {name:"Weedle",    method:"Grass",levels:"7",    rate:"20%"},
      {name:"Pidgey",    method:"Grass",levels:"11–13",rate:"15%"},
      {name:"Abra",      method:"Grass",levels:"8–12", rate:"15%"},
      {name:"Metapod",   method:"Grass",levels:"8",    rate:"1% FR / 4% LG"},
      {name:"Kakuna",    method:"Grass",levels:"8",    rate:"4% FR / 1% LG"},
    ],
    items:[
      {name:"Nugget",       hidden:false,note:"From the Team Rocket Grunt at the north end of Nugget Bridge"},
      {name:"TM45 Attract", hidden:false,note:"Northwest hill"},
      {name:"Pecha Berry",  hidden:true, note:"Northeast hill, accessible via Route 25 (★ Itemfinder)",img:"screenshots/hidden/route24-2.png"},
    ],
    trainers:[
      {class:"Bug Catcher",      name:"Cale",  team:[{name:"Caterpie",level:10},{name:"Weedle", level:10},{name:"Metapod",level:10},{name:"Kakuna",level:10}]},
      {class:"Lass",             name:"Ali",   team:[{name:"Pidgey",  level:12},{name:"Oddish", level:12}]},
      {class:"Youngster",        name:"Timmy", team:[{name:"Sandshrew",level:14},{name:"Ekans",  level:14}]},
      {class:"Lass",             name:"Reli",  team:[{name:"Nidoran♂",level:16},{name:"Nidoran♀",level:16}]},
      {class:"Camper",           name:"Ethan", team:[{name:"Mankey",  level:18}]},
      {class:"Team Rocket Grunt",name:"Grunt", team:[{name:"Ekans",   level:15},{name:"Zubat",  level:15}]},
      {class:"Camper",           name:"Shane", team:[{name:"Rattata", level:14},{name:"Ekans",  level:14}]},
    ] },

  { part:"Part 5", id:"route25", name:"Route 25",
    note:"Same encounters as Route 24. Bill's cottage is at the far east — help him revert from Pokémon form to receive the S.S. Ticket.",
    pokemon:[
      {name:"Oddish",    method:"Grass",levels:"12–14",rate:"25%",frOnly:true},
      {name:"Bellsprout",method:"Grass",levels:"12–14",rate:"25%",lgOnly:true},
      {name:"Caterpie",  method:"Grass",levels:"7",    rate:"20%"},
      {name:"Weedle",    method:"Grass",levels:"7",    rate:"20%"},
      {name:"Pidgey",    method:"Grass",levels:"11–13",rate:"15%"},
      {name:"Abra",      method:"Grass",levels:"8–12", rate:"15%"},
      {name:"Metapod",   method:"Grass",levels:"8",    rate:"1% FR / 4% LG"},
      {name:"Kakuna",    method:"Grass",levels:"8",    rate:"4% FR / 1% LG"},
    ],
    items:[
      {name:"Elixir",          hidden:true, note:"Northwest maze near Hiker Franklin (★ Itemfinder)",img:"screenshots/hidden/route25-0.png"},
      {name:"TM43 Secret Power",hidden:false,note:"Northeast maze"},
      {name:"Oran Berry",      hidden:true, note:"Southeast of maze (★ Itemfinder)",img:"screenshots/hidden/route25-2.png"},
      {name:"Bluk Berry",      hidden:true, note:"Northeast maze near fence end (★ Itemfinder)",img:"screenshots/hidden/route25-3.png"},
      {name:"Ether",           hidden:true, note:"Near Sea Cottage entrance (★ Itemfinder)",img:"screenshots/hidden/route25-4.png"},
      {name:"S.S. Ticket",     hidden:false,note:"From Bill after restoring him from Pokémon form"},
    ],
    trainers:[
      {class:"Hiker",    name:"Franklin",team:[{name:"Machop",   level:15},{name:"Geodude",level:15}]},
      {class:"Hiker",    name:"Wayne",   team:[{name:"Onix",     level:17}]},
      {class:"Youngster",name:"Joey",    team:[{name:"Rattata",  level:15},{name:"Spearow",level:15}]},
      {class:"Youngster",name:"Dan",     team:[{name:"Slowpoke", level:17}]},
      {class:"Picnicker",name:"Kelsey",  team:[{name:"Nidoran♂",level:15},{name:"Nidoran♀",level:15}]},
      {class:"Hiker",    name:"Nob",     team:[{name:"Geodude",  level:13},{name:"Geodude",level:13},{name:"Machop",level:13},{name:"Geodude",level:13}]},
      {class:"Camper",   name:"Flint",   team:[{name:"Rattata",  level:14},{name:"Ekans",  level:14}]},
      {class:"Youngster",name:"Chad",    team:[{name:"Ekans",    level:14},{name:"Sandshrew",level:14}]},
      {class:"Lass",     name:"Haley",   team:[{name:"Oddish",   level:13},{name:"Pidgey", level:13},{name:"Oddish",level:13}]},
    ] },

  { part:"Part 5", id:"cerulean-city-return", name:"Cerulean City (Return)",
    note:"After exploring Routes 24–25 — a Team Rocket Grunt has broken into a house near the Pokémon Center. Defeat them to receive TM28 Dig.",
    pokemon:[],
    items:[{name:"TM28 Dig",hidden:false,note:"From Team Rocket Grunt after defeating them in the burgled house"}],
    trainers:[{class:"Team Rocket Grunt",name:"Grunt",team:[{name:"Machop",level:17},{name:"Drowzee",level:17}]}] },

  { part:"Part 5", id:"route5", name:"Route 5",
    note:"Meowth appears in both versions at 35%. Oddish is FR-only; Bellsprout is LG-only.",
    pokemon:[
      {name:"Pidgey",    method:"Grass",levels:"13–16",rate:"40%"},
      {name:"Meowth",    method:"Grass",levels:"10–16",rate:"35%"},
      {name:"Oddish",    method:"Grass",levels:"13–16",rate:"25%",frOnly:true},
      {name:"Bellsprout",method:"Grass",levels:"13–16",rate:"25%",lgOnly:true},
    ],
    items:[] },

  { part:"Part 6", id:"route6", name:"Route 6",
    note:"Same Pokémon pool as Route 5. Meowth appears in both versions at 35%.",
    pokemon:[
      {name:"Pidgey",    method:"Grass",levels:"13–16",rate:"40%"},
      {name:"Meowth",    method:"Grass",levels:"10–16",rate:"35%"},
      {name:"Oddish",    method:"Grass",levels:"13–16",rate:"25%",frOnly:true},
      {name:"Bellsprout",method:"Grass",levels:"13–16",rate:"25%",lgOnly:true},
    ],
    items:[
      {name:"Rare Candy",  hidden:true,note:"Northeast hill, two steps north of gap between ledges (★ Itemfinder)",img:"screenshots/hidden/route6-0.png"},
      {name:"Sitrus Berry",hidden:true,note:"Northwest hill (★ Itemfinder)",img:"screenshots/hidden/route6-1.png"},
    ],
    trainers:[
      {class:"Bug Catcher",name:"Keigo",   team:[{name:"Weedle",    level:16},{name:"Caterpie",level:16},{name:"Weedle",level:16}]},
      {class:"Camper",     name:"Ricky",   team:[{name:"Squirtle",  level:20}]},
      {class:"Picnicker",  name:"Nancy",   team:[{name:"Rattata",   level:16},{name:"Pikachu", level:16}]},
      {class:"Bug Catcher",name:"Elijah",  team:[{name:"Butterfree",level:20}]},
      {class:"Picnicker",  name:"Isabelle",team:[{name:"Pidgey",    level:16},{name:"Pidgey",  level:16},{name:"Pidgey",level:16}]},
      {class:"Camper",     name:"Jeff",    team:[{name:"Spearow",   level:16},{name:"Raticate",level:16}]},
    ] },

  { part:"Part 5", id:"underground-5-6", name:"Underground Path (5↔6)",
    note:"No wild encounters. A woman gives you a nicknamed Nidoran (Ms. Nido in FR, Mr. Nido in LG) — it holds a Tiny Mushroom. A trade NPC lets you swap for the opposite gender. Both methods are version-exclusive.",
    pokemon:[
      {name:"Nidoran♀",method:"Gift",levels:"any",frOnly:true,note:"Ms. Nido (FR) — from the woman in the tunnel; holds Tiny Mushroom"},
      {name:"Nidoran♂",method:"Gift",levels:"any",lgOnly:true,note:"Mr. Nido (LG) — from the woman in the tunnel; holds Tiny Mushroom"},
    ],
    items:[
      {name:"Tiny Mushroom",hidden:false,note:"Held by the gift Nidoran (Ms. Nido / Mr. Nido)"},
      {name:"Antidote",     hidden:true, note:"Near north stairs (★ Itemfinder)"},
      {name:"Paralyze Heal",hidden:true, note:"Northernmost section (★ Itemfinder)"},
      {name:"Awakening",    hidden:true, note:"North section (★ Itemfinder)"},
      {name:"Potion",       hidden:true, note:"Northernmost section (★ Itemfinder)"},
      {name:"Ether",        hidden:true, note:"South section (★ Itemfinder)"},
      {name:"Ice Heal",     hidden:true, note:"Near south stairs (★ Itemfinder)"},
      {name:"Burn Heal",    hidden:true, note:"Near south stairs (★ Itemfinder)"},
    ],
    trainers:[] },

  { part:"Part 6", id:"vermilion-city", name:"Vermilion City",
    note:"Get the Bike Voucher from the Fan Club Chairman — exchange it at Cerulean's Bike Shop. Farfetch'd trade: give a Spearow to receive Ch'Ding, which holds a Stick.",
    pokemon:[
      {name:"Farfetch'd",method:"Trade",  levels:"any",note:"Trade Spearow to the man near the Pokémon Center; Ch'Ding holds a Stick"},
      {name:"Magikarp",  method:"Old Rod",levels:"5",  rate:"100%"},
    ],
    items:[
      {name:"Max Ether",      hidden:true, note:"Four steps south, one step west of Pokémon Center entrance (★ Itemfinder)",img:"screenshots/hidden/vermilion-city-0.png"},
      {name:"Vs. Seeker",     hidden:false,note:"Pokémon Center — from the female Ace Trainer at the counter"},
      {name:"Old Rod",        hidden:false,note:"Northwest house, from the Fishing Guru"},
      {name:"Bike Voucher",   hidden:false,note:"Pokémon Fan Club Chairman — exchange at Cerulean City Bike Shop for the Bicycle"},
      {name:"TM34 Shock Wave",hidden:false,note:"From Lt. Surge after defeating him"},
    ],
    trainers:[
      {class:"Sailor",    name:"Dwayne",   team:[{name:"Pikachu",  level:21},{name:"Pikachu",  level:21}]},
      {class:"Engineer",  name:"Baily",    team:[{name:"Voltorb",  level:21},{name:"Magnemite",level:21}]},
      {class:"Gentleman", name:"Tucker",   team:[{name:"Pikachu",  level:23}]},
      {class:"Gym Leader",name:"Lt. Surge",team:[{name:"Voltorb",  level:21},{name:"Pikachu",  level:18},{name:"Raichu",level:24}]},
    ] },

  { part:"Part 6", id:"ss-anne", name:"S.S. Anne",
    note:"⚠ ONE-TIME EVENT — ship leaves permanently after receiving HM01 Cut. Sweep all cabins and defeat Blue on 2F before talking to the Captain! A hidden Lava Cookie in the harbour requires Surf — missable if you skip it.",
    floors:[
      { label:"Deck",
        pokemon:[],
        items:[],
        trainers:[
          {class:"Sailor",name:"Trevor",team:[{name:"Machop",level:17},{name:"Tentacool",level:17}]},
          {class:"Sailor",name:"Edmond",team:[{name:"Machop",level:18},{name:"Shellder", level:18}]},
        ]},
      { label:"1F",
        pokemon:[],
        items:[
          {name:"TM31 Brick Break",hidden:false,note:"Second cabin from left"},
          {name:"Great Ball",      hidden:false,note:"Kitchen"},
          {name:"Pecha Berry",     hidden:true, note:"Kitchen — nearest trash can to doorway (★ Itemfinder)",img:"screenshots/hidden/ss-anne-1f-2.png"},
          {name:"Cheri Berry",     hidden:true, note:"Kitchen — middle trash can (★ Itemfinder)",img:"screenshots/hidden/ss-anne-1f-3.png"},
          {name:"Chesto Berry",    hidden:true, note:"Kitchen — farthest trash can from doorway (★ Itemfinder)",img:"screenshots/hidden/ss-anne-1f-4.png"},
        ],
        trainers:[
          {class:"Gentleman",name:"Thomas",team:[{name:"Growlithe",level:18},{name:"Growlithe",level:18}]},
          {class:"Gentleman",name:"Arthur",team:[{name:"Nidoran♂", level:19},{name:"Nidoran♀", level:19}]},
          {class:"Lass",     name:"Ann",   team:[{name:"Pidgey",   level:18},{name:"Nidoran♀", level:18}]},
          {class:"Youngster",name:"Tyler", team:[{name:"Nidoran♂", level:21}]},
        ]},
      { label:"B1F",
        pokemon:[],
        items:[
          {name:"Hyper Potion",hidden:true, note:"Hallway trash can near stairs to 1F (★ Itemfinder)",img:"screenshots/hidden/ss-anne-b1f-0.png"},
          {name:"Super Potion",hidden:false,note:"Rightmost cabin"},
          {name:"Ether",       hidden:false,note:"Middle cabin"},
          {name:"TM44 Rest",   hidden:false,note:"Second cabin from left"},
        ],
        trainers:[
          {class:"Fisherman",name:"Barny",  team:[{name:"Tentacool",level:17},{name:"Staryu",  level:17},{name:"Shellder",  level:17}]},
          {class:"Sailor",   name:"Phillip",team:[{name:"Machop",   level:20}]},
          {class:"Sailor",   name:"Huey",   team:[{name:"Tentacool",level:18},{name:"Staryu",  level:18}]},
          {class:"Sailor",   name:"Dylan",  team:[{name:"Horsea",   level:17},{name:"Horsea",  level:17},{name:"Horsea",   level:17}]},
          {class:"Sailor",   name:"Duncan", team:[{name:"Horsea",   level:17},{name:"Shellder",level:17},{name:"Tentacool",level:17}]},
          {class:"Sailor",   name:"Leonard",team:[{name:"Shellder", level:21}]},
        ]},
      { label:"2F",
        pokemon:[],
        items:[
          {name:"Stardust", hidden:false,note:"Second cabin from left"},
          {name:"X Attack", hidden:false,note:"Fourth cabin from left"},
          {name:"HM01 Cut", hidden:false,note:"Captain's quarters — from the Captain after helping him"},
        ],
        trainers:[
          {class:"Fisherman",name:"Dale",  team:[{name:"Goldeen",  level:17},{name:"Goldeen",level:17},{name:"Tentacool",level:17}]},
          {class:"Gentleman",name:"Brooks",team:[{name:"Pikachu",  level:23}]},
          {class:"Gentleman",name:"Lamar", team:[{name:"Growlithe",level:17},{name:"Ponyta",  level:17}]},
          {class:"Lass",     name:"Dawn",  team:[{name:"Rattata",  level:18},{name:"Pikachu", level:18}]},
          {class:"Rival",    name:"Blue",  note:"4th Pokémon is the starter strong against yours.",
            team:[{name:"Pidgeotto",level:19},{name:"Raticate",level:16},{name:"Kadabra",level:18}]},
        ]},
      { label:"Harbour",
        pokemon:[],
        items:[
          {name:"Lava Cookie",hidden:true,note:"⚠ SE corner near the truck — requires Surf, only while ship is moored (★ Itemfinder)"},
        ],
        trainers:[]},
    ]},

  { part:"Part 7", id:"route11", name:"Route 11",
    note:"Ekans is FR-only at 40%; Sandshrew fills the same slot in LeafGreen. Get the Itemfinder from Oak's aide in the east gate (30 Pokémon). Trade NPC in the gate: Nidorino→Nidorina (FR) or Nidorina→Nidorino (LG).",
    pokemon:[
      {name:"Ekans",    method:"Grass",  levels:"12–15",rate:"40%",frOnly:true},
      {name:"Sandshrew",method:"Grass",  levels:"12–15",rate:"40%",lgOnly:true},
      {name:"Spearow",  method:"Grass",  levels:"13–17",rate:"35%"},
      {name:"Drowzee",  method:"Grass",  levels:"11–15",rate:"25%"},
      {name:"Magikarp", method:"Old Rod",levels:"5",    rate:"100%"},
      {name:"Nidorina", method:"Trade",  levels:"any",  frOnly:true,note:"Trade Nidorino in the east gate (FR)"},
      {name:"Nidorino", method:"Trade",  levels:"any",  lgOnly:true,note:"Trade Nidorina in the east gate (LG)"},
    ],
    items:[
      {name:"Awakening",   hidden:false,note:"Northwest part of the route"},
      {name:"X Defend",    hidden:false,note:"Middle of the route, in a grass patch"},
      {name:"Escape Rope", hidden:true, note:"On a rock just north of the east gate (★ Itemfinder)",img:"screenshots/hidden/route11-2.png"},
      {name:"Great Ball",  hidden:false,note:"South of the east gate"},
      {name:"Itemfinder",  hidden:false,note:"East gate — from Oak's aide after catching 30 different species"},
    ],
    trainers:[
      {class:"Youngster",name:"Eddie",  team:[{name:"Ekans",    level:21}]},
      {class:"Gamer",    name:"Hugo",   team:[{name:"Poliwag",  level:18},{name:"Horsea",   level:18}]},
      {class:"Engineer", name:"Bernie", team:[{name:"Magnemite",level:18},{name:"Magnemite",level:18},{name:"Magneton",level:18}]},
      {class:"Youngster",name:"Dave",   team:[{name:"Nidoran♂", level:18},{name:"Nidorino", level:18}]},
      {class:"Youngster",name:"Dillon", team:[{name:"Sandshrew",level:19},{name:"Zubat",    level:19}]},
      {class:"Gamer",    name:"Jasper", team:[{name:"Bellsprout",level:18},{name:"Oddish",  level:18}]},
      {class:"Engineer", name:"Braxton",team:[{name:"Magnemite",level:21}]},
      {class:"Gamer",    name:"Darian", team:[{name:"Growlithe",level:18},{name:"Vulpix",   level:18}]},
      {class:"Youngster",name:"Yasu",   team:[{name:"Rattata",  level:17},{name:"Rattata",  level:17},{name:"Raticate",level:17}]},
      {class:"Gamer",    name:"Dirk",   team:[{name:"Voltorb",  level:18},{name:"Magnemite",level:18}]},
    ] },

  { part:"Part 7", id:"digletts-cave", name:"Diglett's Cave",
    note:"Simple cave between Route 2 and Route 11. Two Pokémon only.",
    pokemon:[{name:"Diglett",method:"Cave",levels:"15–22",rate:"95%"},{name:"Dugtrio",method:"Cave",levels:"29–31",rate:"5%"}],
    items:[] },

  { part:"Part 7", id:"route2-east", name:"Route 2 (East)",
    note:"Accessible after using Cut on the blocking tree. Mr. Mime trade is here — swap Abra with the boy in the gate. HM05 Flash from Oak's aide requires 10 Pokémon.",
    pokemon:[
      {name:"Mr. Mime",method:"Trade",levels:"any",note:"Trade Abra in the east gate building"},
    ],
    items:[
      {name:"HM05 Flash",   hidden:false,note:"East gate building — from Oak's aide after catching 10 different species"},
      {name:"Ether",        hidden:false,note:"South of the gate, past the first ledge"},
      {name:"Paralyze Heal",hidden:false,note:"South of the second ledge"},
    ],
    trainers:[] },

  { part:"Part 7", id:"route9", name:"Route 9",
    note:"Ekans is FR-only at 25%; Sandshrew fills the same slot in LeafGreen.",
    pokemon:[
      {name:"Rattata",  method:"Grass",levels:"14–17",rate:"40%"},
      {name:"Spearow",  method:"Grass",levels:"13–17",rate:"35%"},
      {name:"Ekans",    method:"Grass",levels:"11–17",rate:"25%",frOnly:true},
      {name:"Sandshrew",method:"Grass",levels:"11–17",rate:"25%",lgOnly:true},
    ],
    items:[
      {name:"TM40 Aerial Ace",hidden:false,note:"Southwest corner of the route"},
      {name:"Ether",          hidden:true, note:"Northwest part of the route, on a rock (★ Itemfinder)",img:"screenshots/hidden/route9-1.png"},
      {name:"Burn Heal",      hidden:false,note:"Southeast corner of the route"},
      {name:"Chesto Berry",   hidden:true, note:"Northeast part of the route (★ Itemfinder)",img:"screenshots/hidden/route9-3.png"},
      {name:"Rare Candy",     hidden:true, note:"Northeast part of the route, one step west and south from corner (★ Itemfinder)",img:"screenshots/hidden/route9-4.png"},
    ],
    trainers:[
      {class:"Picnicker",  name:"Alicia",team:[{name:"Oddish",    level:18},{name:"Bellsprout",level:18},{name:"Oddish",level:18},{name:"Bellsprout",level:18}]},
      {class:"Hiker",      name:"Jeremy",team:[{name:"Machop",    level:20},{name:"Onix",      level:20}]},
      {class:"Camper",     name:"Chris", team:[{name:"Growlithe", level:21},{name:"Charmander",level:21}]},
      {class:"Bug Catcher",name:"Brent", team:[{name:"Beedrill",  level:19},{name:"Beedrill",  level:19}]},
      {class:"Hiker",      name:"Alan",  team:[{name:"Geodude",   level:21},{name:"Onix",      level:21}]},
      {class:"Bug Catcher",name:"Conner",team:[{name:"Caterpie",  level:20},{name:"Weedle",    level:20},{name:"Venonat",level:20}]},
      {class:"Camper",     name:"Drew",  team:[{name:"Rattata",   level:19},{name:"Sandshrew", level:19},{name:"Ekans",level:19},{name:"Sandshrew",level:19}]},
      {class:"Hiker",      name:"Brice", team:[{name:"Geodude",   level:20},{name:"Geodude",   level:20},{name:"Machop",level:20}]},
      {class:"Picnicker",  name:"Caitlin",team:[{name:"Meowth",   level:23}]},
    ] },

  { part:"Part 7", id:"route10-north", name:"Route 10 (North)",
    note:"Pokémon Center here — stock up before Rock Tunnel. Voltorb first appears at 40%. Ekans is FR-only; Sandshrew fills the same slot in LeafGreen.",
    pokemon:[
      {name:"Voltorb",  method:"Grass",  levels:"14–17",rate:"40%"},
      {name:"Spearow",  method:"Grass",  levels:"13–17",rate:"35%"},
      {name:"Ekans",    method:"Grass",  levels:"11–17",rate:"25%",frOnly:true},
      {name:"Sandshrew",method:"Grass",  levels:"11–17",rate:"25%",lgOnly:true},
      {name:"Magikarp", method:"Old Rod",levels:"5",    rate:"100%"},
    ],
    items:[
      {name:"Everstone",   hidden:false,note:"Pokémon Center — from Oak's aide after catching 20 different species"},
      {name:"Persim Berry",hidden:true, note:"Southeast of Pokémon Center, corner of fencing (★ Itemfinder)",img:"screenshots/hidden/route10-north-1.png"},
      {name:"Cheri Berry", hidden:true, note:"Southwest of Pokémon Center, edge of dirt patch (★ Itemfinder)",img:"screenshots/hidden/route10-north-2.png"},
      {name:"Super Potion",hidden:true, note:"One step east of Rock Tunnel north entrance — requires Cut (★ Itemfinder)",img:"screenshots/hidden/route10-north-3.png"},
    ],
    trainers:[
      {class:"Picnicker", name:"Heidi",team:[{name:"Pikachu", level:20},{name:"Clefairy",level:20}]},
      {class:"PokéManiac",name:"Mark", team:[{name:"Rhyhorn", level:29},{name:"Lickitung",level:29}]},
    ] },

  { part:"Part 8", id:"rock-tunnel", name:"Rock Tunnel",
    note:"Two floors; use Flash to ease navigation. Mankey and Machop both appear in both versions — no version exclusives here.",
    floors:[
      { label:"1F",
        pokemon:[
          {name:"Geodude",method:"Cave",levels:"15–17",rate:"35%"},
          {name:"Zubat",  method:"Cave",levels:"15–16",rate:"30%"},
          {name:"Mankey", method:"Cave",levels:"16–17",rate:"15%"},
          {name:"Machop", method:"Cave",levels:"16–17",rate:"15%"},
          {name:"Onix",   method:"Cave",levels:"13–15",rate:"5%"},
        ],
        items:[
          {name:"Repel",      hidden:false,note:"Northeast"},
          {name:"Escape Rope",hidden:false,note:"West"},
          {name:"Pearl",      hidden:false,note:"South"},
        ],
        trainers:[
          {class:"PokéManiac",name:"Ashton", team:[{name:"Cubone",    level:23},{name:"Slowpoke", level:23}]},
          {class:"Hiker",     name:"Lenny",  team:[{name:"Geodude",   level:19},{name:"Machop",   level:19},{name:"Geodude",  level:19},{name:"Geodude",level:19}]},
          {class:"Hiker",     name:"Oliver", team:[{name:"Onix",      level:20},{name:"Onix",     level:20},{name:"Geodude",  level:20}]},
          {class:"Hiker",     name:"Lucas",  team:[{name:"Geodude",   level:21},{name:"Graveler", level:21}]},
          {class:"Picnicker", name:"Leah",   team:[{name:"Bellsprout",level:22},{name:"Clefairy", level:22}]},
          {class:"Picnicker", name:"Ariana", team:[{name:"Pidgey",    level:19},{name:"Rattata",  level:19},{name:"Rattata",  level:19},{name:"Bellsprout",level:19}]},
          {class:"Picnicker", name:"Dana",   team:[{name:"Meowth",    level:20},{name:"Oddish",   level:20},{name:"Pidgey",   level:20}]},
        ]},
      { label:"B1F",
        pokemon:[
          {name:"Geodude",method:"Cave",levels:"15–17",rate:"35%"},
          {name:"Zubat",  method:"Cave",levels:"15–16",rate:"30%"},
          {name:"Mankey", method:"Cave",levels:"16–17",rate:"15%"},
          {name:"Machop", method:"Cave",levels:"17",   rate:"10%"},
          {name:"Onix",   method:"Cave",levels:"13–17",rate:"10%"},
        ],
        items:[
          {name:"Revive",  hidden:false,note:"Southeast"},
          {name:"Max Ether",hidden:false,note:"Northwest"},
        ],
        trainers:[
          {class:"PokéManiac",name:"Winston",team:[{name:"Slowpoke",   level:25}]},
          {class:"Picnicker", name:"Martha", team:[{name:"Oddish",     level:22},{name:"Bulbasaur",level:22}]},
          {class:"PokéManiac",name:"Steve",  team:[{name:"Charmander", level:22},{name:"Cubone",   level:22}]},
          {class:"Hiker",     name:"Allen",  team:[{name:"Geodude",    level:25}]},
          {class:"Hiker",     name:"Eric",   team:[{name:"Machop",     level:20},{name:"Onix",     level:20}]},
          {class:"Picnicker", name:"Sofia",  team:[{name:"Jigglypuff", level:21},{name:"Pidgey",   level:21},{name:"Meowth",level:21}]},
          {class:"Hiker",     name:"Dudley", team:[{name:"Geodude",    level:21},{name:"Geodude",  level:21},{name:"Graveler",level:21}]},
          {class:"PokéManiac",name:"Cooper", team:[{name:"Slowpoke",   level:20},{name:"Slowpoke", level:20},{name:"Slowpoke",level:20}]},
        ]},
    ] },

  { part:"Part 8", id:"route10-south", name:"Route 10 (South)",
    note:"The stretch south of Rock Tunnel's exit. Route 10 North (Part 7) has the Pokémon Center before the tunnel.",
    pokemon:[
      {name:"Voltorb",  method:"Grass",  levels:"17–21",rate:"40%"},
      {name:"Spearow",  method:"Grass",  levels:"18–22",rate:"35%"},
      {name:"Ekans",    method:"Grass",  levels:"16–21",rate:"25%",frOnly:true},
      {name:"Sandshrew",method:"Grass",  levels:"16–21",rate:"25%",lgOnly:true},
      {name:"Magikarp", method:"Old Rod",levels:"5",    rate:"100%"},
    ],
    items:[
      {name:"Nanab Berry",hidden:true,note:"East of Rock Tunnel exit (★ Itemfinder)",img:"screenshots/hidden/route10-south-0.png"},
    ],
    trainers:[
      {class:"Picnicker", name:"Carol",  team:[{name:"Pidgey",   level:21},{name:"Pidgeotto",level:21}]},
      {class:"Hiker",     name:"Clark",  team:[{name:"Geodude",  level:21},{name:"Onix",     level:21}]},
      {class:"Hiker",     name:"Trent",  team:[{name:"Onix",     level:19},{name:"Graveler", level:19}]},
      {class:"PokéManiac",name:"Herman", team:[{name:"Cubone",   level:20},{name:"Slowpoke", level:20}]},
    ] },

  { part:"Part 8", id:"route8", name:"Route 8",
    note:"Growlithe is FR-only; Vulpix is LG-only. Meowth appears in both versions. Underground Path (7↔8) connects to Celadon.",
    pokemon:[
      {name:"Pidgey",   method:"Grass",levels:"18–20",rate:"30%"},
      {name:"Meowth",   method:"Grass",levels:"18–20",rate:"30%"},
      {name:"Ekans",    method:"Grass",levels:"17–19",rate:"20%",frOnly:true},
      {name:"Sandshrew",method:"Grass",levels:"17–19",rate:"20%",lgOnly:true},
      {name:"Growlithe",method:"Grass",levels:"15–18",rate:"20%",frOnly:true},
      {name:"Vulpix",   method:"Grass",levels:"15–18",rate:"20%",lgOnly:true},
    ],
    items:[
      {name:"Leppa Berry", hidden:true, note:"Tall grass SE (requires Cut, ★ Itemfinder)",img:"screenshots/hidden/route8-0.png"},
      {name:"Lum Berry",   hidden:true, note:"Tall grass NW (requires Cut, ★ Itemfinder)",img:"screenshots/hidden/route8-1.png"},
      {name:"Rawst Berry", hidden:true, note:"Tall grass NE (requires Cut, ★ Itemfinder)",img:"screenshots/hidden/route8-2.png"},
    ],
    trainers:[
      {class:"Lass",      name:"Julia",   team:[{name:"Clefairy", level:22},{name:"Clefairy",  level:22}]},
      {class:"Lass",      name:"Paige",   team:[{name:"Nidoran♀", level:23},{name:"Nidorina",  level:23}]},
      {class:"Lass",      name:"Andrea",  team:[{name:"Meowth",   level:24},{name:"Meowth",    level:24},{name:"Meowth",level:24}]},
      {class:"Lass",      name:"Megan",   team:[{name:"Pidgey",   level:19},{name:"Rattata",   level:19},{name:"Nidoran♂",level:19},{name:"Meowth",level:19},{name:"Pikachu",level:19}]},
      {class:"Super Nerd",name:"Glenn",   team:[{name:"Grimer",   level:22},{name:"Muk",       level:22},{name:"Grimer",level:22}]},
      {class:"Super Nerd",name:"Leslie",  team:[{name:"Koffing",  level:26}]},
      {class:"Super Nerd",name:"Aidan",   team:[{name:"Voltorb",  level:20},{name:"Voltorb",   level:20},{name:"Magnemite",level:20},{name:"Koffing",level:20}]},
      {class:"Biker",     name:"Jaren",   team:[{name:"Grimer",   level:24},{name:"Grimer",    level:24}]},
      {class:"Biker",     name:"Ricardo", team:[{name:"Koffing",  level:22},{name:"Koffing",   level:22},{name:"Grimer",level:23}]},
      {class:"Gamer",     name:"Rich",    team:[{name:"Growlithe",level:24},{name:"Vulpix",    level:24}]},
      {class:"Gamer",     name:"Stan",    team:[{name:"Poliwag",  level:22},{name:"Poliwag",   level:22},{name:"Poliwhirl",level:22}]},
      {class:"Twins",     name:"Eli & Anne",team:[{name:"Clefairy",level:22},{name:"Jigglypuff",level:22}]},
    ] },

  { part:"Part 8", id:"route7", name:"Route 7",
    note:"Growlithe is FR-only; Vulpix is LG-only. Meowth appears in both. Short route — underground path gate leads to Celadon.",
    pokemon:[
      {name:"Meowth",   method:"Grass",levels:"17–20",rate:"40%"},
      {name:"Pidgey",   method:"Grass",levels:"19–22",rate:"30%"},
      {name:"Oddish",   method:"Grass",levels:"19–22",rate:"20%",frOnly:true},
      {name:"Bellsprout",method:"Grass",levels:"19–22",rate:"20%",lgOnly:true},
      {name:"Growlithe",method:"Grass",levels:"18–20",rate:"10%",frOnly:true},
      {name:"Vulpix",   method:"Grass",levels:"18–20",rate:"10%",lgOnly:true},
    ],
    items:[
      {name:"Wepear Berry",hidden:true,note:"Southeast corner (★ Itemfinder)",img:"screenshots/hidden/route7-0.png"},
    ],
    trainers:[] },

  { part:"Part 8", id:"lavender-town", name:"Lavender Town",
    note:"First visit. You can't clear Pokémon Tower yet — come back after getting the Silph Scope from Celadon's Rocket Hideout (Part 9). Name Rater is in town.",
    pokemon:[],
    items:[],
    trainers:[] },

  { part:"Part 9", id:"celadon-city", name:"Celadon City",
    note:"Get Tea from the old woman on the top floor of Celadon Mansion (via the back entrance) — this unlocks all Saffron City gate guards. Eevee is a one-time gift on Mansion 4F. Challenge Erika for the Rainbow Badge.",
    pokemon:[
      {name:"Eevee",   method:"Gift",  levels:"25", note:"One-time — 4F of Celadon Mansion (back entrance, top floor)"},
      {name:"Magikarp",method:"Old Rod",levels:"5", rate:"100%"},
    ],
    items:[
      {name:"Tea",              hidden:false,note:"Old woman, top floor of Celadon Mansion (back entrance) — unlocks Saffron City gates"},
      {name:"Coin Case",        hidden:false,note:"Man in the restaurant on the south side of town"},
      {name:"Ether",            hidden:false,note:"Northwest corner of town"},
      {name:"TM16 Light Screen",hidden:false,note:"Rooftop vending machine exchange — give Fresh Water"},
      {name:"TM20 Safeguard",   hidden:false,note:"Rooftop vending machine exchange — give Soda Pop"},
      {name:"TM33 Reflect",     hidden:false,note:"Rooftop vending machine exchange — give Lemonade"},
      {name:"TM19 Giga Drain",  hidden:false,note:"Erika's reward for defeating her"},
      {name:"PP Up",            hidden:true, note:"Northeast of the small tree, east side of city (★ Itemfinder)",img:"screenshots/hidden/celadon-city-7.png"},
    ],
    trainers:[
      {class:"Beauty",     name:"Tamia",  team:[{name:"Bellsprout",level:24},{name:"Bellsprout",level:24}]},
      {class:"Lass",       name:"Kay",    team:[{name:"Bellsprout",level:23},{name:"Weepinbell",level:23}]},
      {class:"Beauty",     name:"Bridget",team:[{name:"Oddish",    level:21},{name:"Oddish",    level:21},{name:"Bellsprout",level:21},{name:"Bellsprout",level:21}]},
      {class:"Picnicker",  name:"Tina",   team:[{name:"Bulbasaur", level:24},{name:"Ivysaur",   level:24}]},
      {class:"Cooltrainer",name:"Mary",   team:[{name:"Bellsprout",level:22},{name:"Oddish",    level:22},{name:"Weepinbell",level:22},{name:"Gloom",level:22},{name:"Ivysaur",level:22}]},
      {class:"Lass",       name:"Lisa",   team:[{name:"Oddish",    level:23},{name:"Gloom",     level:23}]},
      {class:"Beauty",     name:"Lori",   team:[{name:"Exeggcute", level:24}]},
      {class:"Erika",      name:"Erika",  team:[{name:"Victreebel",level:29},{name:"Tangela",   level:24},{name:"Vileplume",level:29}]},
    ] },

  { part:"Part 9", id:"celadon-game-corner", name:"Celadon Game Corner",
    note:"Exchange coins at the Prize Corner. TM24 Thunderbolt and TM35 Flamethrower are 4,000 coins each — top-tier competitive TMs. Defeat the Team Rocket Grunt to access the poster switch that opens the Rocket Hideout stairs.",
    pokemon:[
      {name:"Scyther", method:"Game Corner",levels:"25", note:"5,500 coins — FR only",frOnly:true},
      {name:"Pinsir",  method:"Game Corner",levels:"18", note:"2,500 coins — LG only",lgOnly:true},
      {name:"Dratini", method:"Game Corner",levels:"18", note:"2,800 coins FR / 4,600 coins LG"},
      {name:"Porygon", method:"Game Corner",levels:"26", note:"9,999 coins FR / 6,500 coins LG"},
      {name:"Abra",    method:"Game Corner",levels:"9",  note:"180 coins FR / 120 coins LG"},
      {name:"Clefairy",method:"Game Corner",levels:"8",  note:"500 coins FR / 750 coins LG"},
    ],
    items:[
      {name:"TM24 Thunderbolt",  hidden:false,note:"Prize Corner — 4,000 coins"},
      {name:"TM35 Flamethrower", hidden:false,note:"Prize Corner — 4,000 coins"},
    ],
    trainers:[
      {class:"Team Rocket Grunt",name:"Grunt 1",team:[{name:"Raticate",level:20},{name:"Zubat",level:20}]},
    ] },

  { part:"Part 9", id:"rocket-hideout", name:"Rocket Hideout (B1F–B4F)",
    note:"Four basement floors. Collect the Lift Key (dropped by a Grunt on B4F northwest) to use the elevator. Giovanni on B4F drops the Silph Scope — required to identify Ghost-types in Pokémon Tower.",
    floors:[
      { label:"B1F",
        pokemon:[],
        items:[
          {name:"PP Up",       hidden:true, note:"Southeastern planter (★ Itemfinder)",img:"screenshots/hidden/rocket-hideout-b1f-0.png"},
          {name:"Escape Rope", hidden:false,note:"Western room"},
          {name:"Hyper Potion",hidden:false,note:"East room (accessible via B2F south stairs)"},
        ],
        trainers:[
          {class:"Team Rocket Grunt",name:"Grunt 1",team:[{name:"Drowzee", level:21},{name:"Machop",  level:21}]},
          {class:"Team Rocket Grunt",name:"Grunt 2",team:[{name:"Raticate",level:21},{name:"Raticate",level:21}]},
          {class:"Team Rocket Grunt",name:"Grunt 3",team:[{name:"Rattata", level:19},{name:"Raticate",level:19},{name:"Raticate",level:19},{name:"Rattata",level:19}]},
          {class:"Team Rocket Grunt",name:"Grunt 4",team:[{name:"Grimer",  level:20},{name:"Koffing", level:20},{name:"Koffing",level:20}]},
          {class:"Team Rocket Grunt",name:"Grunt 9",team:[{name:"Koffing", level:21},{name:"Zubat",   level:21}]},
        ]},
      { label:"B2F",
        pokemon:[],
        items:[
          {name:"X Speed",     hidden:false,note:"Northeast corner"},
          {name:"Moon Stone",  hidden:false,note:"West wall"},
          {name:"TM12 Taunt",  hidden:false,note:"Middle area"},
          {name:"Super Potion",hidden:false,note:"Southwest area"},
        ],
        trainers:[
          {class:"Team Rocket Grunt",name:"Grunt 6",team:[{name:"Zubat",level:17},{name:"Koffing",level:17},{name:"Grimer",level:17},{name:"Zubat",level:17},{name:"Raticate",level:17}]},
        ]},
      { label:"B3F",
        pokemon:[],
        items:[
          {name:"TM21 Frustration",hidden:false,note:"East-central room"},
          {name:"Nugget",          hidden:true, note:"Northwest corner (★ Itemfinder)",img:"screenshots/hidden/rocket-hideout-b3f-1.png"},
          {name:"Rare Candy",      hidden:false,note:"Spinner maze, east side"},
          {name:"Black Glasses",   hidden:false,note:"Southeast corner"},
        ],
        trainers:[
          {class:"Team Rocket Grunt",name:"Grunt 7",team:[{name:"Machop", level:21},{name:"Machop",  level:21}]},
          {class:"Team Rocket Grunt",name:"Grunt 8",team:[{name:"Rattata",level:20},{name:"Raticate",level:20},{name:"Drowzee",level:20}]},
        ]},
      { label:"B4F",
        pokemon:[],
        items:[
          {name:"Max Ether",  hidden:false,note:"Northwest room table"},
          {name:"TM49 Snatch",hidden:false,note:"Northwest room"},
          {name:"Calcium",    hidden:false,note:"Southeast, table west of elevator"},
          {name:"Net Ball",   hidden:true, note:"Between potted plants SW of Giovanni (★ Itemfinder)",img:"screenshots/hidden/rocket-hideout-b4f-3.png"},
          {name:"Nest Ball",  hidden:true, note:"Between potted plants SE of Giovanni (★ Itemfinder)",img:"screenshots/hidden/rocket-hideout-b4f-4.png"},
          {name:"Lift Key",   hidden:false,note:"Dropped by northwest Grunt after defeat"},
          {name:"Silph Scope",hidden:false,note:"Dropped by Giovanni after defeat"},
        ],
        trainers:[
          {class:"Team Rocket Grunt",name:"Grunt 5", team:[{name:"Grimer",   level:22},{name:"Koffing",   level:22}]},
          {class:"Team Rocket Grunt",name:"Grunt 10",team:[{name:"Sandshrew",level:23},{name:"Ekans",     level:23},{name:"Sandslash",level:23}]},
          {class:"Team Rocket Grunt",name:"Grunt 11",team:[{name:"Ekans",    level:23},{name:"Sandshrew", level:23},{name:"Arbok",    level:23}]},
          {class:"Giovanni",         name:"Giovanni",team:[{name:"Onix",     level:25},{name:"Rhyhorn",   level:24},{name:"Kangaskhan",level:29}]},
        ]},
    ] },

  { part:"Part 9", id:"pokemon-tower", name:"Pokémon Tower",
    note:"Requires Silph Scope (from Rocket Hideout) to reveal and catch Ghost-types on floors 3–7. Rescue Mr. Fuji on 7F to receive the Poké Flute. Cleanse Tag is a field item on 5F.",
    floors:[
      { label:"2F",
        pokemon:[],
        items:[],
        trainers:[
          {class:"Rival",name:"Blue",note:"Team varies by starter — shown here for Bulbasaur start",
            team:[{name:"Pidgeotto",level:25},{name:"Exeggcute",level:23},{name:"Gyarados",level:22},{name:"Kadabra",level:20},{name:"Charmeleon",level:25}]},
        ]},
      { label:"3F",
        pokemon:[
          {name:"Gastly", method:"Cave",levels:"17–19",rate:"90%"},
          {name:"Cubone", method:"Cave",levels:"17–18",rate:"9%"},
          {name:"Haunter",method:"Cave",levels:"17",   rate:"1%"},
        ],
        items:[
          {name:"Escape Rope", hidden:false,note:""},
          {name:"Awakening",   hidden:false,note:""},
          {name:"Super Potion",hidden:false,note:""},
          {name:"Star Piece",  hidden:true, note:"★ Itemfinder"},
        ],
        trainers:[
          {class:"Channeler",name:"Hope",    team:[{name:"Gastly",level:23}]},
          {class:"Channeler",name:"Patricia",team:[{name:"Gastly",level:22}]},
          {class:"Channeler",name:"Carly",   team:[{name:"Gastly",level:24}]},
        ]},
      { label:"4F–5F",
        pokemon:[
          {name:"Gastly", method:"Cave",levels:"20–22",rate:"86%"},
          {name:"Cubone", method:"Cave",levels:"19–21",rate:"9%"},
          {name:"Haunter",method:"Cave",levels:"20–22",rate:"5%"},
        ],
        items:[
          {name:"Elixir",    hidden:false,note:"4F"},
          {name:"Escape Rope",hidden:false,note:"4F"},
          {name:"Full Heal", hidden:false,note:"4F"},
          {name:"Great Ball",hidden:false,note:"4F"},
          {name:"Cleanse Tag",hidden:false,note:"5F"},
          {name:"Nugget",    hidden:false,note:"5F"},
          {name:"Big Mushroom",hidden:true,note:"5F (★ Itemfinder)",img:"screenshots/hidden/pokemon-tower-4f-5f-6.png"},
        ],
        trainers:[
          {class:"Channeler",name:"Laurel",team:[{name:"Gastly",level:23},{name:"Gastly",level:23}]},
          {class:"Channeler",name:"Jody",  team:[{name:"Gastly",level:22}]},
          {class:"Channeler",name:"Paula", team:[{name:"Gastly",level:24}]},
          {class:"Channeler",name:"Ruth",  team:[{name:"Gastly",level:22}]},
          {class:"Channeler",name:"Tammy", team:[{name:"Haunter",level:23}]},
        ]},
      { label:"6F",
        pokemon:[
          {name:"Gastly", method:"Cave",levels:"22–23",rate:"85%"},
          {name:"Cubone", method:"Cave",levels:"21–22",rate:"9%"},
          {name:"Haunter",method:"Cave",levels:"22–23",rate:"6%"},
        ],
        items:[
          {name:"X Accuracy",hidden:false,note:""},
          {name:"Rare Candy", hidden:false,note:""},
        ],
        trainers:[
          {class:"Channeler",name:"Karina",   team:[{name:"Gastly",level:24}]},
          {class:"Channeler",name:"Janae",    team:[{name:"Gastly",level:22}]},
          {class:"Channeler",name:"Angelica", team:[{name:"Gastly",level:22},{name:"Gastly",level:22},{name:"Gastly",level:22}]},
          {class:"Channeler",name:"Jennifer", team:[{name:"Gastly",level:24}]},
          {class:"Channeler",name:"Emilia",   team:[{name:"Gastly",level:24}]},
        ]},
      { label:"7F",
        pokemon:[
          {name:"Gastly", method:"Cave",levels:"22–23",rate:"75%"},
          {name:"Haunter",method:"Cave",levels:"22–23",rate:"15%"},
          {name:"Cubone", method:"Cave",levels:"22–23",rate:"10%"},
        ],
        items:[
          {name:"Poké Flute",hidden:false,note:"From Mr. Fuji after rescuing him — wakes both Snorlax"},
        ],
        trainers:[
          {class:"Team Rocket Grunt",name:"Grunt 1",team:[{name:"Zubat",  level:25},{name:"Zubat",  level:25},{name:"Golbat",level:25}]},
          {class:"Team Rocket Grunt",name:"Grunt 2",team:[{name:"Koffing",level:26},{name:"Drowzee",level:26}]},
          {class:"Team Rocket Grunt",name:"Grunt 3",team:[{name:"Zubat",  level:23},{name:"Rattata",level:23}]},
        ]},
    ] },

  { part:"Part 10", id:"route12", name:"Route 12 (Silence Bridge)",
    note:"⚠ Snorlax blocks the road — ONE-TIME catch, Lv30, use Poké Flute! Get the Super Rod from the Fishing Guru's younger brother in the house on this route.",
    pokemon:[
      {name:"Oddish",   method:"Grass",   levels:"22–26",rate:"35%",frOnly:true},
      {name:"Bellsprout",method:"Grass",  levels:"22–26",rate:"35%",lgOnly:true},
      {name:"Pidgey",   method:"Grass",   levels:"23–27",rate:"30%"},
      {name:"Venonat",  method:"Grass",   levels:"24–26",rate:"30%"},
      {name:"Gloom",    method:"Grass",   levels:"28–30",rate:"5%", frOnly:true},
      {name:"Weepinbell",method:"Grass",  levels:"28–30",rate:"5%", lgOnly:true},
      {name:"Snorlax",  method:"Special", levels:"30",   rate:"×1", note:"⚠ ONE-TIME — wake with Poké Flute, then catch. Do NOT KO!"},
      {name:"Tentacool",method:"Surf",    levels:"5–40", rate:"100%"},
      {name:"Magikarp", method:"Old Rod", levels:"5",    rate:"100%"},
      {name:"Horsea",   method:"Good Rod",levels:"5–15", rate:"60%",frOnly:true},
      {name:"Krabby",   method:"Good Rod",levels:"5–15", rate:"20%",frOnly:true},
      {name:"Krabby",   method:"Good Rod",levels:"5–15", rate:"60%",lgOnly:true},
      {name:"Horsea",   method:"Good Rod",levels:"5–15", rate:"20%",lgOnly:true},
      {name:"Magikarp", method:"Good Rod",levels:"5–15", rate:"20%"},
      {name:"Horsea",   method:"Super Rod",levels:"15–35",rate:"84%",frOnly:true},
      {name:"Krabby",   method:"Super Rod",levels:"15–35",rate:"84%",lgOnly:true},
      {name:"Gyarados", method:"Super Rod",levels:"15–25",rate:"15%"},
      {name:"Psyduck",  method:"Super Rod",levels:"25–35",rate:"1%", frOnly:true},
      {name:"Slowpoke", method:"Super Rod",levels:"25–35",rate:"1%", lgOnly:true},
    ],
    items:[
      {name:"TM27 Return",  hidden:false,note:"Girl on 2F of the Lavender Town gate building"},
      {name:"Super Rod",    hidden:false,note:"Fishing Guru's younger brother in the house on the route"},
      {name:"Net Ball",     hidden:false,note:"Gate building north of route"},
      {name:"Hyper Potion", hidden:true, note:"5 east, 2 north of Fisherman Elliot (★ Itemfinder)",img:"screenshots/hidden/route12-3.png"},
      {name:"Iron",         hidden:false,note:"SW of Fishing Guru's house (requires Cut)"},
      {name:"Rare Candy",   hidden:true, note:"In the tall grass patch (requires Cut, ★ Itemfinder)",img:"screenshots/hidden/route12-5.png"},
      {name:"TM48 Skill Swap",hidden:false,note:"Southeast of Lavender Town gate (requires Surf)"},
    ],
    trainers:[
      {class:"Fisherman",   name:"Ned",    team:[{name:"Goldeen", level:22},{name:"Poliwag",level:22},{name:"Goldeen",level:22}]},
      {class:"Fisherman",   name:"Chip",   team:[{name:"Tentacool",level:24},{name:"Goldeen",level:24}]},
      {class:"Fisherman",   name:"Hank",   team:[{name:"Goldeen", level:27}]},
      {class:"Fisherman",   name:"Elliot", team:[{name:"Poliwag", level:21},{name:"Shellder",level:21},{name:"Goldeen",level:21},{name:"Horsea",level:21}]},
      {class:"Fisherman",   name:"Andrew", team:[{name:"Magikarp",level:24},{name:"Magikarp",level:24}]},
      {class:"Young Couple",name:"Gia & Jes",team:[{name:"Nidoran♂",level:24},{name:"Nidoran♀",level:24}]},
      {class:"Rocker",      name:"Luca",   team:[{name:"Voltorb", level:29},{name:"Electrode",level:29}]},
      {class:"Camper",      name:"Justin", team:[{name:"Nidoran♂",level:29},{name:"Nidorino",level:29}]},
    ] },

  { part:"Part 10", id:"route13", name:"Route 13",
    note:"Narrow hedge maze with multiple trainers. Ditto appears here — unique catch for the Living Dex!",
    pokemon:[
      {name:"Oddish",    method:"Grass",   levels:"22–26",rate:"35%",frOnly:true},
      {name:"Bellsprout",method:"Grass",   levels:"22–26",rate:"35%",lgOnly:true},
      {name:"Venonat",   method:"Grass",   levels:"24–26",rate:"30%"},
      {name:"Pidgey",    method:"Grass",   levels:"25–27",rate:"20%"},
      {name:"Ditto",     method:"Grass",   levels:"25",   rate:"5%"},
      {name:"Pidgeotto", method:"Grass",   levels:"29",   rate:"5%"},
      {name:"Gloom",     method:"Grass",   levels:"28–30",rate:"5%",frOnly:true},
      {name:"Weepinbell",method:"Grass",   levels:"28–30",rate:"5%",lgOnly:true},
      {name:"Tentacool", method:"Surf",    levels:"5–40", rate:"100%"},
      {name:"Magikarp",  method:"Old Rod", levels:"5",    rate:"100%"},
      {name:"Horsea",    method:"Good Rod",levels:"5–15", rate:"60%",frOnly:true},
      {name:"Krabby",    method:"Good Rod",levels:"5–15", rate:"20%",frOnly:true},
      {name:"Krabby",    method:"Good Rod",levels:"5–15", rate:"60%",lgOnly:true},
      {name:"Horsea",    method:"Good Rod",levels:"5–15", rate:"20%",lgOnly:true},
      {name:"Magikarp",  method:"Good Rod",levels:"5–15", rate:"20%"},
      {name:"Horsea",    method:"Super Rod",levels:"15–35",rate:"84%",frOnly:true},
      {name:"Krabby",    method:"Super Rod",levels:"15–35",rate:"84%",lgOnly:true},
      {name:"Gyarados",  method:"Super Rod",levels:"15–25",rate:"15%"},
      {name:"Psyduck",   method:"Super Rod",levels:"25–35",rate:"1%", frOnly:true},
      {name:"Slowpoke",  method:"Super Rod",levels:"25–35",rate:"1%", lgOnly:true},
    ],
    items:[
      {name:"PP Up",hidden:true,note:"Two steps east of the Trainer Tips sign (★ Itemfinder)",img:"screenshots/hidden/route13-0.png"},
    ],
    trainers:[
      {class:"Picnicker", name:"Alma",      team:[{name:"Goldeen",   level:28},{name:"Poliwag",   level:28},{name:"Horsea",    level:28}]},
      {class:"Picnicker", name:"Susie",     team:[{name:"Pidgey",    level:24},{name:"Meowth",    level:24},{name:"Rattata",   level:24},{name:"Pikachu",level:24},{name:"Meowth",level:24}]},
      {class:"Picnicker", name:"Valerie",   team:[{name:"Poliwag",   level:30},{name:"Poliwag",   level:30}]},
      {class:"Picnicker", name:"Gwen",      team:[{name:"Pidgey",    level:27},{name:"Meowth",    level:27},{name:"Pidgey",    level:27},{name:"Pidgeotto",level:27}]},
      {class:"Beauty",    name:"Lola",      team:[{name:"Rattata",   level:27},{name:"Pikachu",   level:27},{name:"Rattata",   level:27}]},
      {class:"Beauty",    name:"Sheila",    team:[{name:"Clefairy",  level:29},{name:"Meowth",    level:29}]},
      {class:"Bird Keeper",name:"Sebastian",team:[{name:"Pidgey",    level:29},{name:"Pidgeotto", level:29}]},
      {class:"Bird Keeper",name:"Robert",   team:[{name:"Pidgey",    level:26},{name:"Pidgeotto", level:26},{name:"Spearow",   level:26},{name:"Fearow",level:26}]},
      {class:"Bird Keeper",name:"Perry",    team:[{name:"Spearow",   level:25},{name:"Pidgey",    level:25},{name:"Pidgey",    level:25},{name:"Spearow",level:25},{name:"Spearow",level:25}]},
      {class:"Biker",     name:"Jared",     team:[{name:"Koffing",   level:28},{name:"Koffing",   level:28},{name:"Koffing",  level:28}]},
    ] },

  { part:"Part 10", id:"route14", name:"Route 14",
    note:"Bird Keepers and Bikers patrol this route. Ditto appears here too.",
    pokemon:[
      {name:"Oddish",    method:"Grass",levels:"22–26",rate:"35%",frOnly:true},
      {name:"Bellsprout",method:"Grass",levels:"22–26",rate:"35%",lgOnly:true},
      {name:"Venonat",   method:"Grass",levels:"24–26",rate:"30%"},
      {name:"Ditto",     method:"Grass",levels:"23",   rate:"15%"},
      {name:"Pidgey",    method:"Grass",levels:"27",   rate:"10%"},
      {name:"Pidgeotto", method:"Grass",levels:"29",   rate:"5%"},
      {name:"Gloom",     method:"Grass",levels:"30",   rate:"5%",frOnly:true},
      {name:"Weepinbell",method:"Grass",levels:"30",   rate:"5%",lgOnly:true},
    ],
    items:[
      {name:"Pinap Berry",hidden:true,note:"Southeast corner near Twins Kiri & Jan (★ Itemfinder)",img:"screenshots/hidden/route14-0.png"},
      {name:"Zinc",      hidden:true,note:"In the tall grass patch (★ Itemfinder)",img:"screenshots/hidden/route14-1.png"},
    ],
    trainers:[
      {class:"Bird Keeper",name:"Carter", team:[{name:"Pidgey",    level:28},{name:"Doduo",    level:28},{name:"Pidgeotto",level:28}]},
      {class:"Bird Keeper",name:"Mitch",  team:[{name:"Pidgey",    level:26},{name:"Spearow",  level:26},{name:"Pidgey",   level:26},{name:"Fearow",level:26}]},
      {class:"Bird Keeper",name:"Beck",   team:[{name:"Pidgeotto", level:29},{name:"Fearow",   level:29}]},
      {class:"Bird Keeper",name:"Donald", team:[{name:"Farfetch'd",level:33}]},
      {class:"Bird Keeper",name:"Marlon", team:[{name:"Spearow",   level:28},{name:"Doduo",    level:28},{name:"Fearow",   level:28}]},
      {class:"Bird Keeper",name:"Benny",  team:[{name:"Spearow",   level:29},{name:"Fearow",   level:29}]},
      {class:"Twins",      name:"Kiri & Jan",team:[{name:"Charmander",level:29},{name:"Squirtle",level:29}]},
      {class:"Biker",      name:"Gerald", team:[{name:"Koffing",   level:29},{name:"Muk",      level:29}]},
      {class:"Biker",      name:"Malik",  team:[{name:"Koffing",   level:29},{name:"Grimer",   level:29}]},
      {class:"Biker",      name:"Isaac",  team:[{name:"Grimer",    level:28},{name:"Grimer",    level:28},{name:"Koffing",level:28}]},
      {class:"Biker",      name:"Lukas",  team:[{name:"Koffing",   level:26},{name:"Koffing",  level:26},{name:"Grimer",level:26},{name:"Koffing",level:26}]},
    ] },

  { part:"Part 10", id:"route15", name:"Route 15",
    note:"50 Pokémon caught → Exp. Share from Oak's aide in the east gate. Northern path requires Cut; southern path is always accessible.",
    pokemon:[
      {name:"Oddish",    method:"Grass",levels:"22–26",rate:"35%",frOnly:true},
      {name:"Bellsprout",method:"Grass",levels:"22–26",rate:"35%",lgOnly:true},
      {name:"Venonat",   method:"Grass",levels:"24–26",rate:"30%"},
      {name:"Pidgey",    method:"Grass",levels:"25–27",rate:"20%"},
      {name:"Ditto",     method:"Grass",levels:"25",   rate:"5%"},
      {name:"Pidgeotto", method:"Grass",levels:"29",   rate:"5%"},
      {name:"Gloom",     method:"Grass",levels:"28–30",rate:"5%",frOnly:true},
      {name:"Weepinbell",method:"Grass",levels:"28–30",rate:"5%",lgOnly:true},
    ],
    items:[
      {name:"Exp. Share",   hidden:false,note:"Oak's aide in the east gate building (catch 50 species)"},
      {name:"TM18 Rain Dance",hidden:false,note:"Western portion of the northern hill (requires Cut)"},
    ],
    trainers:[
      {class:"Picnicker",  name:"Becky",   team:[{name:"Pikachu",   level:29},{name:"Raichu",     level:29}]},
      {class:"Picnicker",  name:"Celia",   team:[{name:"Clefairy",  level:33}]},
      {class:"Picnicker",  name:"Kindra",  team:[{name:"Gloom",     level:28},{name:"Oddish",     level:28},{name:"Oddish",level:28}]},
      {class:"Picnicker",  name:"Yazmin",  team:[{name:"Bellsprout",level:29},{name:"Oddish",     level:29},{name:"Tangela",level:29}]},
      {class:"Beauty",     name:"Grace",   team:[{name:"Pidgeotto", level:29},{name:"Wigglytuff", level:29}]},
      {class:"Beauty",     name:"Olivia",  team:[{name:"Bulbasaur", level:29},{name:"Ivysaur",    level:29}]},
      {class:"Bird Keeper",name:"Chester", team:[{name:"Dodrio",    level:28},{name:"Doduo",      level:28},{name:"Doduo",level:28}]},
      {class:"Bird Keeper",name:"Edwin",   team:[{name:"Pidgeotto", level:26},{name:"Farfetch'd", level:26},{name:"Doduo",level:26},{name:"Pidgey",level:26}]},
      {class:"Crush Kin",  name:"Ron & Mya",team:[{name:"Hitmonchan",level:29},{name:"Hitmonlee",level:29}]},
      {class:"Biker",      name:"Ernest",  team:[{name:"Koffing",   level:25},{name:"Koffing",   level:25},{name:"Weezing",level:25},{name:"Koffing",level:25},{name:"Grimer",level:25}]},
      {class:"Biker",      name:"Alex",    team:[{name:"Koffing",   level:28},{name:"Grimer",    level:28},{name:"Weezing",level:28}]},
    ] },

  { part:"Part 10", id:"fuchsia-city", name:"Fuchsia City",
    note:"Return the Warden's Gold Teeth (found in Safari Zone Area 3, northeast of the rocky ridge) to get HM04 Strength. Good Rod from the Fishing Guru here. Defeat Koga for the Soul Badge and TM06 Toxic.",
    pokemon:[
      {name:"Magikarp",method:"Old Rod", levels:"5",    rate:"100%"},
      {name:"Poliwag", method:"Good Rod",levels:"5–15", rate:"60%"},
      {name:"Goldeen", method:"Good Rod",levels:"5–15", rate:"20%"},
      {name:"Magikarp",method:"Good Rod",levels:"5–15", rate:"20%"},
    ],
    items:[
      {name:"Good Rod",    hidden:false,note:"Fishing Guru's brother in the southeastern house"},
      {name:"HM04 Strength",hidden:false,note:"Safari Zone Warden — return his Gold Teeth"},
      {name:"Rare Candy",  hidden:false,note:"Inside the Warden's house (requires Strength)"},
      {name:"TM06 Toxic",  hidden:false,note:"Koga's reward for defeating him"},
      {name:"Max Revive",  hidden:true, note:"Backyard of Fishing Guru's house, one step east of the southernmost flower (★ Itemfinder)",img:"screenshots/hidden/fuchsia-city-4.png"},
    ],
    trainers:[
      {class:"Juggler",name:"Nate",    team:[{name:"Drowzee",level:34},{name:"Kadabra",level:34}]},
      {class:"Juggler",name:"Kayden",  team:[{name:"Hypno",  level:38}]},
      {class:"Juggler",name:"Kirk",    team:[{name:"Drowzee",level:31},{name:"Drowzee",level:31},{name:"Kadabra",level:31},{name:"Drowzee",level:31}]},
      {class:"Juggler",name:"Shawn",   team:[{name:"Drowzee",level:34},{name:"Hypno",  level:34}]},
      {class:"Tamer",  name:"Edgar",   team:[{name:"Arbok",  level:33},{name:"Arbok",  level:33},{name:"Sandslash",level:33}]},
      {class:"Tamer",  name:"Phil",    team:[{name:"Sandslash",level:34},{name:"Arbok",level:34}]},
      {class:"Koga",   name:"Koga",    team:[{name:"Koffing",level:37},{name:"Muk",    level:39},{name:"Koffing",level:37},{name:"Weezing",level:43}]},
    ] },

  { part:"Part 10", id:"safari-zone", name:"Safari Zone",
    note:"600 steps, 30 Safari Balls. Top Living Dex targets: Scyther (FR, Center & Area 1) or Pinsir (LG, Center & Area 1), Kangaskhan (Area 1 & 3), Chansey (Center & Area 2), Dratini via Super Rod. Gold Teeth and HM03 Surf are both in Area 3.",
    floors:[
      { label:"Center",
        pokemon:[
          {name:"Nidoran♂", method:"Grass",levels:"22",   rate:"20%",frOnly:true},
          {name:"Nidoran♀", method:"Grass",levels:"22",   rate:"20%",lgOnly:true},
          {name:"Exeggcute",method:"Grass",levels:"24–25",rate:"20%"},
          {name:"Rhyhorn",  method:"Grass",levels:"25",   rate:"20%"},
          {name:"Venonat",  method:"Grass",levels:"22",   rate:"15%"},
          {name:"Nidorino", method:"Grass",levels:"31",   rate:"10%",frOnly:true},
          {name:"Nidorina", method:"Grass",levels:"31",   rate:"10%",lgOnly:true},
          {name:"Nidorina", method:"Grass",levels:"31",   rate:"5%", lgOnly:true},
          {name:"Nidorino", method:"Grass",levels:"31",   rate:"5%", frOnly:true},
          {name:"Parasect", method:"Grass",levels:"30",   rate:"5%"},
          {name:"Scyther",  method:"Grass",levels:"23",   rate:"4%", frOnly:true},
          {name:"Pinsir",   method:"Grass",levels:"23",   rate:"4%", lgOnly:true},
          {name:"Chansey",  method:"Grass",levels:"23",   rate:"1%"},
          {name:"Magikarp", method:"Old Rod",  levels:"5",    rate:"100%"},
          {name:"Goldeen",  method:"Good Rod", levels:"5–15", rate:"60%"},
          {name:"Poliwag",  method:"Good Rod", levels:"5–15", rate:"20%"},
          {name:"Magikarp", method:"Good Rod", levels:"5–15", rate:"20%"},
          {name:"Krabby",   method:"Super Rod",levels:"15",   rate:"40%"},
          {name:"Dratini",  method:"Super Rod",levels:"15",   rate:"25%"},
          {name:"Psyduck",  method:"Super Rod",levels:"15",   rate:"15%"},
          {name:"Dragonair",method:"Super Rod",levels:"15",   rate:"10%"},
          {name:"Slowpoke", method:"Super Rod",levels:"15",   rate:"10%"},
        ],
        items:[
          {name:"Nugget",    hidden:false,note:"Central island (requires Surf)"},
          {name:"Leaf Stone",hidden:true, note:"Central island, three steps east of the Nugget (★ Itemfinder, requires Surf)",img:"screenshots/hidden/safari-zone-center-1.png"},
        ],
        trainers:[]},
      { label:"Area 1",
        pokemon:[
          {name:"Nidoran♂",  method:"Grass",levels:"24",   rate:"20%",frOnly:true},
          {name:"Nidoran♀",  method:"Grass",levels:"24",   rate:"20%",lgOnly:true},
          {name:"Doduo",     method:"Grass",levels:"26",   rate:"20%"},
          {name:"Exeggcute", method:"Grass",levels:"23–25",rate:"20%"},
          {name:"Paras",     method:"Grass",levels:"22",   rate:"15%"},
          {name:"Nidorino",  method:"Grass",levels:"33",   rate:"10%",frOnly:true},
          {name:"Nidorina",  method:"Grass",levels:"33",   rate:"10%",lgOnly:true},
          {name:"Nidoran♀",  method:"Grass",levels:"24",   rate:"5%", frOnly:true},
          {name:"Nidorina",  method:"Grass",levels:"33",   rate:"5%", lgOnly:true},
          {name:"Parasect",  method:"Grass",levels:"25",   rate:"5%"},
          {name:"Kangaskhan",method:"Grass",levels:"25",   rate:"4%"},
          {name:"Scyther",   method:"Grass",levels:"28",   rate:"1%", frOnly:true},
          {name:"Pinsir",    method:"Grass",levels:"28",   rate:"1%", lgOnly:true},
        ],
        items:[
          {name:"Leaf Stone",    hidden:false,note:"Southern rocky ridge"},
          {name:"TM11 Sunny Day",hidden:false,note:"In the tall grass nearly surrounded by water"},
          {name:"Max Potion",    hidden:false,note:"West of the smaller rocky ridge"},
          {name:"Full Restore",  hidden:false,note:"Southwest of the rest house"},
        ],
        trainers:[]},
      { label:"Area 2",
        pokemon:[
          {name:"Nidoran♂", method:"Grass",levels:"30",   rate:"20%",frOnly:true},
          {name:"Nidoran♀", method:"Grass",levels:"30",   rate:"20%",lgOnly:true},
          {name:"Exeggcute",method:"Grass",levels:"25–27",rate:"20%"},
          {name:"Rhyhorn",  method:"Grass",levels:"26",   rate:"20%"},
          {name:"Paras",    method:"Grass",levels:"23",   rate:"15%"},
          {name:"Nidorino", method:"Grass",levels:"30",   rate:"10%",frOnly:true},
          {name:"Nidorina", method:"Grass",levels:"30",   rate:"10%",lgOnly:true},
          {name:"Nidorina", method:"Grass",levels:"30",   rate:"5%", lgOnly:true},
          {name:"Nidorino", method:"Grass",levels:"30",   rate:"5%", frOnly:true},
          {name:"Venomoth", method:"Grass",levels:"32",   rate:"5%"},
          {name:"Chansey",  method:"Grass",levels:"26",   rate:"4%"},
          {name:"Tauros",   method:"Grass",levels:"28",   rate:"1%"},
        ],
        items:[
          {name:"Quick Claw",      hidden:false,note:"Near the middle of the zone"},
          {name:"TM47 Steel Wing", hidden:false,note:"Southwest of the rest house"},
          {name:"Protein",         hidden:false,note:"Northwest of the rest house"},
        ],
        trainers:[]},
      { label:"Area 3",
        pokemon:[
          {name:"Nidoran♀", method:"Grass",levels:"22",   rate:"20%",lgOnly:true},
          {name:"Nidoran♂", method:"Grass",levels:"22",   rate:"20%",frOnly:true},
          {name:"Doduo",    method:"Grass",levels:"26",   rate:"20%"},
          {name:"Exeggcute",method:"Grass",levels:"25–27",rate:"20%"},
          {name:"Venonat",  method:"Grass",levels:"23",   rate:"15%"},
          {name:"Nidorina", method:"Grass",levels:"30",   rate:"10%",lgOnly:true},
          {name:"Nidorino", method:"Grass",levels:"30",   rate:"10%",frOnly:true},
          {name:"Nidoran♀", method:"Grass",levels:"30",   rate:"5%", frOnly:true},
          {name:"Nidorina", method:"Grass",levels:"30",   rate:"5%", lgOnly:true},
          {name:"Venomoth", method:"Grass",levels:"32",   rate:"5%"},
          {name:"Tauros",   method:"Grass",levels:"25",   rate:"4%"},
          {name:"Kangaskhan",method:"Grass",levels:"28",  rate:"1%"},
        ],
        items:[
          {name:"Gold Teeth",      hidden:false,note:"Northeast of the rocky ridge — return to the Warden in Fuchsia City for HM04 Strength"},
          {name:"TM32 Double Team",hidden:false,note:"Southeast of the Secret House"},
          {name:"Revive",          hidden:true, note:"In the dirt patch in front of the Secret House (★ Itemfinder)",img:"screenshots/hidden/safari-zone-area-3-2.png"},
          {name:"HM03 Surf",       hidden:false,note:"Secret House — received from a safari official"},
          {name:"Max Potion",      hidden:false,note:"In the tall grass patch (requires Surf)"},
          {name:"Max Revive",      hidden:false,note:"Southeast side of the rocky ridge (requires Surf)"},
        ],
        trainers:[]},
    ] },

  { part:"Part 10", id:"route16", name:"Route 16",
    note:"⚠ Snorlax #2 blocks the west gate — ONE-TIME catch, Lv30, wake with Poké Flute! HM02 Fly is behind the Cut tree in the gated house. Amulet Coin from Oak's aide at the gate (requires 40 caught species).",
    pokemon:[
      {name:"Rattata", method:"Grass",  levels:"18–22",rate:"30%"},
      {name:"Doduo",   method:"Grass",  levels:"18–22",rate:"35%"},
      {name:"Spearow", method:"Grass",  levels:"20–22",rate:"30%"},
      {name:"Raticate",method:"Grass",  levels:"23–25",rate:"5%"},
      {name:"Snorlax", method:"Special",levels:"30",   rate:"×1",note:"⚠ ONE-TIME — wake with Poké Flute, then catch. Last Snorlax in the game!"},
    ],
    items:[
      {name:"HM02 Fly",    hidden:false,note:"Girl's house (northwest, requires Cut to enter)"},
      {name:"Amulet Coin", hidden:false,note:"Oak's aide at the gate — show 40 caught species"},
      {name:"Leftovers",   hidden:true, note:"Where Snorlax was sleeping (★ Itemfinder)",img:"screenshots/hidden/route16-2.png"},
    ],
    trainers:[
      {class:"Young Couple",name:"Lea & Jed",team:[{name:"Rapidash",level:29},{name:"Ninetales",level:29}]},
      {class:"Biker",       name:"Lao",      team:[{name:"Grimer",  level:29},{name:"Koffing", level:29}]},
      {class:"Cue Ball",    name:"Koji",     team:[{name:"Machop",  level:28},{name:"Mankey",  level:28},{name:"Machop",level:28}]},
      {class:"Cue Ball",    name:"Luke",     team:[{name:"Mankey",  level:29},{name:"Machop",  level:29}]},
      {class:"Biker",       name:"Hideo",    team:[{name:"Weezing", level:33}]},
      {class:"Biker",       name:"Ruben",    team:[{name:"Weezing", level:28},{name:"Koffing", level:28},{name:"Weezing",level:28}]},
      {class:"Cue Ball",    name:"Camron",   team:[{name:"Mankey",  level:29},{name:"Machop",  level:29}]},
    ] },

  { part:"Part 10", id:"route17", name:"Route 17 (Cycling Road)",
    note:"Cycling Road — you ride straight through. Lots of Bikers and Cue Balls line the path. All items are hidden; use the Itemfinder as you go.",
    pokemon:[
      {name:"Rattata", method:"Grass",levels:"22",   rate:"5%"},
      {name:"Raticate",method:"Grass",levels:"25–29",rate:"25%"},
      {name:"Spearow", method:"Grass",levels:"20–22",rate:"30%"},
      {name:"Fearow",  method:"Grass",levels:"25–27",rate:"5%"},
      {name:"Doduo",   method:"Grass",levels:"24–28",rate:"35%"},
    ],
    items:[
      {name:"Full Restore",hidden:true,note:"1W, 6N of northernmost signboard (★ Itemfinder)",img:"screenshots/hidden/route17-0.png"},
      {name:"PP Up",       hidden:true,note:"Middle bridge's west road, aligned with 2nd signboard from north (★ Itemfinder)",img:"screenshots/hidden/route17-1.png"},
      {name:"Rare Candy",  hidden:true,note:"East road, aligned with 3rd signboard from north (★ Itemfinder)",img:"screenshots/hidden/route17-2.png"},
      {name:"Max Revive",  hidden:true,note:"Small grass bridge connecting west and east segments (★ Itemfinder)",img:"screenshots/hidden/route17-3.png"},
      {name:"Max Elixir",  hidden:true,note:"3E of southernmost sign (★ Itemfinder)",img:"screenshots/hidden/route17-4.png"},
    ],
    trainers:[
      {class:"Cue Ball",name:"Isaiah",team:[{name:"Machop",  level:29},{name:"Machamp", level:29}]},
      {class:"Cue Ball",name:"Corey", team:[{name:"Primeape",level:29},{name:"Machoke", level:29}]},
      {class:"Cue Ball",name:"Raul",  team:[{name:"Mankey",  level:29},{name:"Primeape",level:29}]},
      {class:"Cue Ball",name:"Jamal", team:[{name:"Mankey",  level:26},{name:"Mankey",  level:26},{name:"Machamp",level:26},{name:"Machop",level:26}]},
      {class:"Cue Ball",name:"Zeek",  team:[{name:"Machoke", level:33}]},
      {class:"Biker",   name:"Virgil",team:[{name:"Weezing", level:28},{name:"Koffing", level:28},{name:"Weezing",level:28}]},
      {class:"Biker",   name:"Billy", team:[{name:"Muk",     level:33}]},
      {class:"Biker",   name:"Nikolas",team:[{name:"Voltorb",level:29},{name:"Voltorb", level:29}]},
      {class:"Biker",   name:"Jaxon", team:[{name:"Weezing", level:29},{name:"Muk",     level:29}]},
      {class:"Biker",   name:"William",team:[{name:"Koffing",level:25},{name:"Weezing", level:25},{name:"Koffing",level:25},{name:"Weezing",level:25},{name:"Koffing",level:25}]},
    ] },

  { part:"Part 10", id:"route18", name:"Route 18",
    note:"Short east–west route between the Cycling Road exit and Fuchsia City. In-game trade in the gate: give Golduck (FR) or Slowbro (LG) to receive Lickitung — key Living Dex catch!",
    pokemon:[
      {name:"Rattata", method:"Grass",levels:"22",   rate:"5%"},
      {name:"Raticate",method:"Grass",levels:"25–29",rate:"15%"},
      {name:"Spearow", method:"Grass",levels:"20–22",rate:"30%"},
      {name:"Fearow",  method:"Grass",levels:"25–29",rate:"15%"},
      {name:"Doduo",   method:"Grass",levels:"24–28",rate:"35%"},
      {name:"Lickitung",method:"Trade",levels:"varies",note:"Trade in the gate building: give Golduck (FR) or Slowbro (LG)"},
    ],
    items:[],
    trainers:[
      {class:"Bird Keeper",name:"Jacob", team:[{name:"Spearow",level:26},{name:"Spearow",level:26},{name:"Fearow", level:26}]},
      {class:"Bird Keeper",name:"Wilton",team:[{name:"Spearow",level:29},{name:"Fearow", level:29}]},
      {class:"Bird Keeper",name:"Ramiro",team:[{name:"Dodrio", level:34}]},
    ] },

  { part:"Part 11", id:"saffron-city", name:"Saffron City",
    note:"Tea from Celadon Mansion required for gate guards. TM29 Psychic is a free gift from Mr. Psychic in the SE house.",
    pokemon:[],
    items:[
      {name:"Nugget",      hidden:true, note:"Copycat's house (NW) — on the desk in her room (★ Itemfinder)",img:"screenshots/hidden/saffron-city-0.png"},
      {name:"TM29 Psychic",hidden:false,note:"From Mr. Psychic in the SE house"},
    ],
    trainers:[] },

  { part:"Part 11", id:"silph-co", name:"Silph Co.",
    note:"⚠ Find Card Key on 5F to open all locked doors. Lapras gift on 7F — do not skip it! Master Ball from the president after defeating Giovanni on 11F.",
    floors:[
      { label:"2F",
        pokemon:[],
        items:[
          {name:"Ultra Ball",hidden:true,note:"SW room, southern potted plant (★ Itemfinder)",img:"screenshots/hidden/silph-co-2f-0.png"},
        ],
        trainers:[
          {class:"Team Rocket Grunt",name:"Grunt 1", team:[{name:"Golbat",level:25},{name:"Zubat",level:25},{name:"Zubat",level:25},{name:"Raticate",level:25},{name:"Zubat",level:25}]},
          {class:"Scientist",        name:"Jerry",   team:[{name:"Magnemite",level:28},{name:"Voltorb",level:28},{name:"Magneton",level:28}]},
          {class:"Team Rocket Grunt",name:"Grunt 2", team:[{name:"Cubone",level:29},{name:"Zubat",level:29}]},
          {class:"Scientist",        name:"Connor",  team:[{name:"Grimer",level:26},{name:"Weezing",level:26},{name:"Koffing",level:26},{name:"Weezing",level:26}]},
        ]},
      { label:"3F",
        pokemon:[],
        items:[
          {name:"Hyper Potion",hidden:false,note:"NE of the Scientist"},
          {name:"Protein",     hidden:true, note:"SE corner, middle of three potted plants (★ Itemfinder)",img:"screenshots/hidden/silph-co-3f-1.png"},
        ],
        trainers:[
          {class:"Team Rocket Grunt",name:"Grunt 3",team:[{name:"Raticate",level:28},{name:"Hypno",level:28},{name:"Raticate",level:28}]},
          {class:"Scientist",        name:"Jose",   team:[{name:"Electrode",level:29},{name:"Weezing",level:29}]},
        ]},
      { label:"4F",
        pokemon:[],
        items:[
          {name:"Full Heal",    hidden:false,note:"NW room"},
          {name:"Max Revive",   hidden:false,note:"NW room"},
          {name:"Escape Rope",  hidden:false,note:"NW room"},
          {name:"TM41 Torment", hidden:false,note:"SE room"},
          {name:"Iron",         hidden:true, note:"SE room, southern of three potted plants (★ Itemfinder)",img:"screenshots/hidden/silph-co-4f-4.png"},
        ],
        trainers:[
          {class:"Team Rocket Grunt",name:"Grunt 4", team:[{name:"Ekans",level:28},{name:"Zubat",level:28},{name:"Cubone",level:28}]},
          {class:"Team Rocket Grunt",name:"Grunt 5", team:[{name:"Machop",level:29},{name:"Drowzee",level:29}]},
          {class:"Scientist",        name:"Rodney",  team:[{name:"Electrode",level:33}]},
        ]},
      { label:"5F",
        pokemon:[],
        items:[
          {name:"Card Key",         hidden:false,note:"South hallway — unlocks all card-locked doors"},
          {name:"Protein",          hidden:false,note:"NW room (requires Card Key)"},
          {name:"TM01 Focus Punch", hidden:false,note:"SW room"},
          {name:"PP Up",            hidden:true, note:"Larger central room, potted plant (★ Itemfinder)",img:"screenshots/hidden/silph-co-5f-3.png"},
          {name:"Elixir",           hidden:true, note:"Smaller central room, potted plant (★ Itemfinder, requires Card Key)",img:"screenshots/hidden/silph-co-5f-4.png"},
        ],
        trainers:[
          {class:"Team Rocket Grunt",name:"Grunt 6", team:[{name:"Hypno",level:33}]},
          {class:"Juggler",          name:"Dalton",  team:[{name:"Kadabra",level:29},{name:"Mr. Mime",level:29}]},
          {class:"Scientist",        name:"Beau",    team:[{name:"Magneton",level:26},{name:"Magnemite",level:26},{name:"Koffing",level:26},{name:"Weezing",level:26}]},
          {class:"Team Rocket Grunt",name:"Grunt 7", team:[{name:"Arbok",level:33}]},
        ]},
      { label:"6F",
        pokemon:[],
        items:[
          {name:"HP Up",     hidden:false,note:"SW room (requires Card Key)"},
          {name:"X Sp. Atk", hidden:false,note:"SW room (requires Card Key)"},
          {name:"Carbos",    hidden:true, note:"NW room, western potted plant (★ Itemfinder)",img:"screenshots/hidden/silph-co-6f-2.png"},
        ],
        trainers:[
          {class:"Team Rocket Grunt",name:"Grunt 8",  team:[{name:"Machop",level:29},{name:"Machoke",level:29}]},
          {class:"Team Rocket Grunt",name:"Grunt 9",  team:[{name:"Zubat",level:28},{name:"Zubat",level:28},{name:"Golbat",level:28}]},
          {class:"Scientist",        name:"Taylor",   team:[{name:"Voltorb",level:25},{name:"Koffing",level:25},{name:"Magneton",level:25},{name:"Magnemite",level:25},{name:"Koffing",level:25}]},
        ]},
      { label:"7F",
        pokemon:[
          {name:"Lapras",method:"Gift",levels:"25",note:"⚠ From an employee in the NW area — do not skip this floor!",warn:true},
        ],
        items:[
          {name:"TM08 Bulk Up",hidden:false,note:"East-central room (requires Card Key)"},
          {name:"Calcium",     hidden:false,note:"SW room"},
          {name:"Zinc",        hidden:true, note:"East-central room, southern potted plant (★ Itemfinder)",img:"screenshots/hidden/silph-co-7f-2.png"},
        ],
        trainers:[
          {class:"Team Rocket Grunt",name:"Grunt 10", team:[{name:"Cubone",level:29},{name:"Cubone",level:29}]},
          {class:"Team Rocket Grunt",name:"Grunt 11", team:[{name:"Raticate",level:26},{name:"Zubat",level:26},{name:"Golbat",level:26},{name:"Rattata",level:26}]},
          {class:"Scientist",        name:"Joshua",   team:[{name:"Electrode",level:29},{name:"Muk",level:29}]},
          {class:"Team Rocket Grunt",name:"Grunt 12", team:[{name:"Sandshrew",level:29},{name:"Sandslash",level:29}]},
          {class:"Rival",            name:"Blue",     note:"NW room. Team varies by starter — shown here for Bulbasaur start.",
            team:[{name:"Pidgeot",level:37},{name:"Exeggcute",level:38},{name:"Gyarados",level:35},{name:"Alakazam",level:35}]},
        ]},
      { label:"8F",
        pokemon:[],
        items:[
          {name:"Iron",   hidden:false,note:"East-central room, east of the two beds"},
          {name:"Nugget", hidden:true, note:"East-central room, northern potted plant (★ Itemfinder)",img:"screenshots/hidden/silph-co-8f-1.png"},
        ],
        trainers:[
          {class:"Team Rocket Grunt",name:"Grunt 13", team:[{name:"Raticate",level:26},{name:"Golbat",level:26},{name:"Arbok",level:26},{name:"Koffing",level:26}]},
          {class:"Team Rocket Grunt",name:"Grunt 14", team:[{name:"Weezing",level:28},{name:"Golbat",level:28},{name:"Koffing",level:28}]},
          {class:"Scientist",        name:"Parker",   team:[{name:"Grimer",level:29},{name:"Electrode",level:29}]},
        ]},
      { label:"9F",
        pokemon:[],
        items:[
          {name:"Max Potion",hidden:true,note:"S-SW room, corner near the boxes (★ Itemfinder)"},
          {name:"Calcium",   hidden:true,note:"Western room, eastern potted plant (★ Itemfinder)",img:"screenshots/hidden/silph-co-9f-1.png"},
        ],
        trainers:[
          {class:"Team Rocket Grunt",name:"Grunt 15", team:[{name:"Golbat",level:28},{name:"Drowzee",level:28},{name:"Hypno",level:28}]},
          {class:"Team Rocket Grunt",name:"Grunt 16", team:[{name:"Drowzee",level:28},{name:"Grimer",level:28},{name:"Machop",level:28}]},
          {class:"Scientist",        name:"Ed",       team:[{name:"Voltorb",level:28},{name:"Magneton",level:28},{name:"Koffing",level:28}]},
        ]},
      { label:"10F",
        pokemon:[],
        items:[
          {name:"Carbos",    hidden:false,note:"SW room"},
          {name:"Rare Candy",hidden:false,note:"SW room"},
          {name:"Ultra Ball",hidden:false,note:"SW room"},
          {name:"HP Up",     hidden:true, note:"NE room, potted plant (★ Itemfinder)",img:"screenshots/hidden/silph-co-10f-3.png"},
        ],
        trainers:[
          {class:"Team Rocket Grunt",name:"Grunt 17", team:[{name:"Machoke",level:33}]},
          {class:"Scientist",        name:"Travis",   team:[{name:"Magnemite",level:29},{name:"Koffing",level:29}]},
        ]},
      { label:"11F",
        pokemon:[],
        items:[
          {name:"Zinc",       hidden:false,note:"East side, SE corner"},
          {name:"Revive",     hidden:true, note:"West side, middle of three potted plants outside president's office (★ Itemfinder)",img:"screenshots/hidden/silph-co-11f-1.png"},
          {name:"Master Ball",hidden:false,note:"⚠ From the president after defeating Giovanni — only ONE in the game!"},
        ],
        trainers:[
          {class:"Team Rocket Grunt",name:"Grunt 18", team:[{name:"Rattata",level:25},{name:"Zubat",level:25},{name:"Ekans",level:25},{name:"Rattata",level:25},{name:"Rattata",level:25}]},
          {class:"Team Rocket Grunt",name:"Grunt 19", team:[{name:"Cubone",level:32},{name:"Drowzee",level:32},{name:"Marowak",level:32}]},
          {class:"Giovanni",         name:"Giovanni", team:[{name:"Nidorino",level:37},{name:"Rhyhorn",level:37},{name:"Kangaskhan",level:35},{name:"Nidoqueen",level:41}]},
        ]},
    ]},

  { part:"Part 11", id:"fighting-dojo", name:"Fighting Dojo",
    note:"Defeat all Black Belts, then the Karate Master. Choose EITHER Hitmonlee OR Hitmonchan as your reward — trade for the other!",
    pokemon:[
      {name:"Hitmonlee", method:"Gift",levels:"25",note:"⚠ One-time choice — pick Hitmonlee OR Hitmonchan",warn:true},
      {name:"Hitmonchan",method:"Gift",levels:"25",note:"⚠ One-time choice — pick Hitmonlee OR Hitmonchan",warn:true},
    ],
    items:[],
    trainers:[
      {class:"Black Belt",name:"Hideki",team:[{name:"Machop",level:32},{name:"Machoke",level:32}]},
      {class:"Black Belt",name:"Hitoshi",team:[{name:"Machop",level:31},{name:"Mankey",level:31},{name:"Primeape",level:31}]},
      {class:"Black Belt",name:"Mike",   team:[{name:"Mankey",level:31},{name:"Mankey",level:31},{name:"Primeape",level:31}]},
      {class:"Black Belt",name:"Aaron",  team:[{name:"Primeape",level:36}]},
      {class:"Black Belt",name:"Koichi", note:"Karate Master — defeat him to earn your choice of Hitmonlee or Hitmonchan.",
        team:[{name:"Hitmonlee",level:37},{name:"Hitmonchan",level:37}]},
    ]},

  { part:"Part 11", id:"saffron-gym", name:"Saffron Gym",
    note:"Psychic-type gym. Warp puzzle: SE → NW → SW → SW leads to Sabrina. Defeat her for the Marsh Badge (obedience up to Lv. 70) and TM04 Calm Mind.",
    pokemon:[],
    items:[
      {name:"TM04 Calm Mind",hidden:false,note:"From Sabrina after defeating her"},
    ],
    trainers:[
      {class:"Psychic",  name:"Cameron",team:[{name:"Slowpoke",level:33},{name:"Slowpoke",level:33},{name:"Slowbro",level:33}]},
      {class:"Psychic",  name:"Tyron",  team:[{name:"Mr. Mime",level:34},{name:"Kadabra",level:34}]},
      {class:"Channeler",name:"Stacy",  team:[{name:"Haunter",level:38}]},
      {class:"Psychic",  name:"Preston",team:[{name:"Slowbro",level:38}]},
      {class:"Channeler",name:"Amanda", team:[{name:"Gastly",level:34},{name:"Haunter",level:34}]},
      {class:"Channeler",name:"Tasha",  team:[{name:"Gastly",level:33},{name:"Gastly",level:33},{name:"Haunter",level:33}]},
      {class:"Psychic",  name:"Johan",  team:[{name:"Kadabra",level:31},{name:"Mr. Mime",level:31},{name:"Slowpoke",level:31},{name:"Kadabra",level:31}]},
      {class:"Gym Leader",name:"Sabrina",team:[{name:"Kadabra",level:38},{name:"Mr. Mime",level:37},{name:"Venomoth",level:38},{name:"Alakazam",level:43}]},
    ]},

  { part:"Part 12", id:"route-19", name:"Route 19",
    note:"Surf south from Fuchsia City. Trainer-heavy route — lots of Swimmers and a Sis and Bro pair.",
    pokemon:[
      {name:"Tentacool", method:"Surf",     levels:"5–40", rate:"100%"},
      {name:"Magikarp",  method:"Old Rod",  levels:"5",    rate:"100%"},
      {name:"Magikarp",  method:"Good Rod", levels:"5–15", rate:"60%"},
      {name:"Krabby",    method:"Good Rod", levels:"5–15", rate:"20%", frOnly:true},
      {name:"Horsea",    method:"Good Rod", levels:"5–15", rate:"20%", lgOnly:true},
      {name:"Horsea",    method:"Super Rod",levels:"15–35",rate:"80%", frOnly:true},
      {name:"Krabby",    method:"Super Rod",levels:"15–35",rate:"80%", lgOnly:true},
      {name:"Gyarados",  method:"Super Rod",levels:"15–35",rate:"15%"},
      {name:"Seadra",    method:"Super Rod",levels:"15–35",rate:"4%",  frOnly:true},
      {name:"Kingler",   method:"Super Rod",levels:"15–35",rate:"4%",  lgOnly:true},
      {name:"Psyduck",   method:"Super Rod",levels:"15–35",rate:"1%",  frOnly:true},
      {name:"Slowpoke",  method:"Super Rod",levels:"15–35",rate:"1%",  lgOnly:true},
    ],
    items:[],
    trainers:[
      {class:"Swimmer♂",   name:"Richard",  team:[{name:"Tentacool",level:30},{name:"Shellder",level:30}]},
      {class:"Swimmer♂",   name:"Reece",    team:[{name:"Goldeen",level:29},{name:"Horsea",level:29},{name:"Staryu",level:29}]},
      {class:"Swimmer♂",   name:"Tony",     team:[{name:"Horsea",level:30},{name:"Horsea",level:30}]},
      {class:"Swimmer♂",   name:"David",    team:[{name:"Goldeen",level:29},{name:"Shellder",level:29},{name:"Seaking",level:29}]},
      {class:"Swimmer♂",   name:"Douglas",  team:[{name:"Horsea",level:27},{name:"Tentacool",level:27},{name:"Tentacool",level:27},{name:"Goldeen",level:27}]},
      {class:"Swimmer♂",   name:"Matthew",  team:[{name:"Poliwag",level:30},{name:"Poliwhirl",level:30}]},
      {class:"Sis and Bro",name:"Lia & Luc",team:[{name:"Goldeen",level:30},{name:"Seaking",level:30}]},
      {class:"Swimmer♂",   name:"Axle",     team:[{name:"Tentacool",level:27},{name:"Tentacool",level:27},{name:"Staryu",level:27},{name:"Horsea",level:27},{name:"Tentacruel",level:27}]},
      {class:"Swimmer♀",   name:"Alice",    team:[{name:"Goldeen",level:30},{name:"Seaking",level:30}]},
      {class:"Swimmer♀",   name:"Anya",     team:[{name:"Poliwag",level:27},{name:"Goldeen",level:27},{name:"Seaking",level:27},{name:"Goldeen",level:27},{name:"Poliwag",level:27}]},
      {class:"Swimmer♀",   name:"Connie",   team:[{name:"Staryu",level:29},{name:"Staryu",level:29},{name:"Staryu",level:29}]},
    ]},

  { part:"Part 12", id:"route-20-east", name:"Route 20 (East)",
    note:"Eastern half of Route 20, between Route 19 and the Seafoam Islands entrance.",
    pokemon:[
      {name:"Tentacool", method:"Surf",     levels:"5–40", rate:"100%"},
      {name:"Magikarp",  method:"Old Rod",  levels:"5",    rate:"100%"},
      {name:"Magikarp",  method:"Good Rod", levels:"5–15", rate:"60%"},
      {name:"Krabby",    method:"Good Rod", levels:"5–15", rate:"20%", frOnly:true},
      {name:"Horsea",    method:"Good Rod", levels:"5–15", rate:"20%", lgOnly:true},
      {name:"Horsea",    method:"Super Rod",levels:"15–35",rate:"80%", frOnly:true},
      {name:"Krabby",    method:"Super Rod",levels:"15–35",rate:"80%", lgOnly:true},
      {name:"Gyarados",  method:"Super Rod",levels:"15–35",rate:"15%"},
      {name:"Seadra",    method:"Super Rod",levels:"15–35",rate:"4%",  frOnly:true},
      {name:"Kingler",   method:"Super Rod",levels:"15–35",rate:"4%",  lgOnly:true},
      {name:"Psyduck",   method:"Super Rod",levels:"15–35",rate:"1%",  frOnly:true},
      {name:"Slowpoke",  method:"Super Rod",levels:"15–35",rate:"1%",  lgOnly:true},
    ],
    items:[
      {name:"Stardust",hidden:true,note:"On the small rocky islet south of the main path (★ Itemfinder)"},
    ],
    trainers:[
      {class:"Swimmer♂",name:"Barry",  team:[{name:"Shellder",level:31},{name:"Cloyster",level:31}]},
      {class:"Swimmer♂",name:"Darrin", team:[{name:"Horsea",level:28},{name:"Horsea",level:28},{name:"Horsea",level:28},{name:"Seadra",level:28}]},
      {class:"Swimmer♀",name:"Shirley",team:[{name:"Seadra",level:30},{name:"Horsea",level:30},{name:"Seadra",level:30}]},
      {class:"Swimmer♀",name:"Tiffany",team:[{name:"Seaking",level:35}]},
    ]},

  { part:"Part 12", id:"seafoam-islands", name:"Seafoam Islands",
    note:"Use Strength to push boulders into the holes to divert the water current and reach B4F where Articuno waits. Five floors — explore all of them for items.",
    floors:[
      { label:"1F",
        pokemon:[
          {name:"Psyduck", method:"Cave",levels:"26–33",rate:"55%",frOnly:true},
          {name:"Slowpoke",method:"Cave",levels:"26–33",rate:"55%",lgOnly:true},
          {name:"Zubat",   method:"Cave",levels:"22–26",rate:"34%"},
          {name:"Golbat",  method:"Cave",levels:"26–30",rate:"11%"},
        ],
        items:[
          {name:"Ice Heal",hidden:false,note:"Southwest corner of the rocky ridge"},
        ],
        trainers:[]},
      { label:"B1F",
        pokemon:[
          {name:"Psyduck", method:"Cave",levels:"29–31",rate:"40%",frOnly:true},
          {name:"Slowpoke",method:"Cave",levels:"29–31",rate:"40%",lgOnly:true},
          {name:"Zubat",   method:"Cave",levels:"22–26",rate:"34%"},
          {name:"Golbat",  method:"Cave",levels:"26–30",rate:"11%"},
          {name:"Seel",    method:"Cave",levels:"28",   rate:"10%"},
          {name:"Golduck", method:"Cave",levels:"33–35",rate:"5%", frOnly:true},
          {name:"Slowbro", method:"Cave",levels:"33–35",rate:"5%", lgOnly:true},
        ],
        items:[
          {name:"Revive",     hidden:false,note:"On the central ridge"},
          {name:"Water Stone",hidden:false,note:"South-central area — accessible via B2F"},
        ],
        trainers:[]},
      { label:"B2F",
        pokemon:[
          {name:"Psyduck", method:"Cave",levels:"30–32",rate:"40%",frOnly:true},
          {name:"Slowpoke",method:"Cave",levels:"30–32",rate:"40%",lgOnly:true},
          {name:"Seel",    method:"Cave",levels:"30–32",rate:"20%"},
          {name:"Zubat",   method:"Cave",levels:"22–24",rate:"20%"},
          {name:"Golbat",  method:"Cave",levels:"26–30",rate:"10%"},
          {name:"Golduck", method:"Cave",levels:"32–34",rate:"10%",frOnly:true},
          {name:"Slowbro", method:"Cave",levels:"32–34",rate:"10%",lgOnly:true},
        ],
        items:[
          {name:"Big Pearl",hidden:false,note:"South of the larger ridge"},
        ],
        trainers:[]},
      { label:"B3F",
        pokemon:[
          {name:"Seel",    method:"Cave",    levels:"30–32",rate:"40%"},
          {name:"Psyduck", method:"Cave",    levels:"30–32",rate:"20%",frOnly:true},
          {name:"Slowpoke",method:"Cave",    levels:"30–32",rate:"20%",lgOnly:true},
          {name:"Golduck", method:"Cave",    levels:"32–34",rate:"15%",frOnly:true},
          {name:"Slowbro", method:"Cave",    levels:"32–34",rate:"15%",lgOnly:true},
          {name:"Zubat",   method:"Cave",    levels:"24",   rate:"10%"},
          {name:"Golbat",  method:"Cave",    levels:"26–30",rate:"10%"},
          {name:"Dewgong", method:"Cave",    levels:"32–34",rate:"5%"},
          {name:"Seel",    method:"Surf",    levels:"25–35",rate:"60%"},
          {name:"Horsea",  method:"Surf",    levels:"25–30",rate:"30%",frOnly:true},
          {name:"Krabby",  method:"Surf",    levels:"25–30",rate:"30%",lgOnly:true},
          {name:"Dewgong", method:"Surf",    levels:"35–40",rate:"5%"},
          {name:"Psyduck", method:"Surf",    levels:"30–40",rate:"4%", frOnly:true},
          {name:"Slowpoke",method:"Surf",    levels:"30–40",rate:"4%", lgOnly:true},
          {name:"Golduck", method:"Surf",    levels:"35–40",rate:"1%", frOnly:true},
          {name:"Slowbro", method:"Surf",    levels:"35–40",rate:"1%", lgOnly:true},
          {name:"Magikarp",method:"Old Rod", levels:"5",    rate:"100%"},
          {name:"Magikarp",method:"Good Rod",levels:"5–15", rate:"60%"},
          {name:"Horsea",  method:"Good Rod",levels:"5–15", rate:"20%",frOnly:true},
          {name:"Krabby",  method:"Good Rod",levels:"5–15", rate:"20%",lgOnly:true},
          {name:"Horsea",  method:"Super Rod",levels:"15–30",rate:"80%",frOnly:true},
          {name:"Krabby",  method:"Super Rod",levels:"15–30",rate:"80%",lgOnly:true},
          {name:"Gyarados",method:"Super Rod",levels:"15–35",rate:"16%"},
          {name:"Psyduck", method:"Super Rod",levels:"15–25",rate:"4%", frOnly:true},
          {name:"Slowpoke",method:"Super Rod",levels:"15–25",rate:"4%", lgOnly:true},
        ],
        items:[
          {name:"Nugget",hidden:true,note:"Southwest corner of the western rocky ridge (★ Itemfinder)",img:"screenshots/hidden/seafoam-islands-b3f-0.png"},
        ],
        trainers:[]},
      { label:"B4F",
        pokemon:[
          {name:"Seel",    method:"Cave",    levels:"30–34",rate:"50%"},
          {name:"Golbat",  method:"Cave",    levels:"26–30",rate:"15%"},
          {name:"Golduck", method:"Cave",    levels:"32–34",rate:"15%",frOnly:true},
          {name:"Slowbro", method:"Cave",    levels:"32–34",rate:"15%",lgOnly:true},
          {name:"Psyduck", method:"Cave",    levels:"32",   rate:"10%",frOnly:true},
          {name:"Slowpoke",method:"Cave",    levels:"32",   rate:"10%",lgOnly:true},
          {name:"Dewgong", method:"Cave",    levels:"34–36",rate:"10%"},
          {name:"Articuno",method:"Special", levels:"50",   rate:"×1", note:"⚠ ONE-TIME — use your best Poké Balls!",warn:true},
          {name:"Seel",    method:"Surf",    levels:"25–35",rate:"60%"},
          {name:"Horsea",  method:"Surf",    levels:"25–30",rate:"30%",frOnly:true},
          {name:"Krabby",  method:"Surf",    levels:"25–30",rate:"30%",lgOnly:true},
          {name:"Dewgong", method:"Surf",    levels:"35–40",rate:"5%"},
          {name:"Psyduck", method:"Surf",    levels:"30–40",rate:"4%", frOnly:true},
          {name:"Slowpoke",method:"Surf",    levels:"30–40",rate:"4%", lgOnly:true},
          {name:"Golduck", method:"Surf",    levels:"35–40",rate:"1%", frOnly:true},
          {name:"Slowbro", method:"Surf",    levels:"35–40",rate:"1%", lgOnly:true},
          {name:"Magikarp",method:"Old Rod", levels:"5",    rate:"100%"},
          {name:"Magikarp",method:"Good Rod",levels:"5–15", rate:"60%"},
          {name:"Horsea",  method:"Good Rod",levels:"5–15", rate:"20%",frOnly:true},
          {name:"Krabby",  method:"Good Rod",levels:"5–15", rate:"20%",lgOnly:true},
          {name:"Horsea",  method:"Super Rod",levels:"15–30",rate:"80%",frOnly:true},
          {name:"Krabby",  method:"Super Rod",levels:"15–30",rate:"80%",lgOnly:true},
          {name:"Gyarados",method:"Super Rod",levels:"15–35",rate:"16%"},
          {name:"Psyduck", method:"Super Rod",levels:"15–25",rate:"4%", frOnly:true},
          {name:"Slowpoke",method:"Super Rod",levels:"15–25",rate:"4%", lgOnly:true},
        ],
        items:[
          {name:"Water Stone",hidden:true,  note:"On a rock near the western ladder (★ Itemfinder)",img:"screenshots/hidden/seafoam-islands-b4f-0.png"},
          {name:"Ultra Ball", hidden:false, note:"South side, east of the sign near Articuno"},
        ],
        trainers:[]},
    ]},

  { part:"Part 12", id:"route-20-west", name:"Route 20 (West)",
    note:"Western half of Route 20, between the Seafoam Islands exit and Cinnabar Island.",
    pokemon:[
      {name:"Tentacool", method:"Surf",     levels:"5–40", rate:"100%"},
      {name:"Magikarp",  method:"Old Rod",  levels:"5",    rate:"100%"},
      {name:"Magikarp",  method:"Good Rod", levels:"5–15", rate:"60%"},
      {name:"Krabby",    method:"Good Rod", levels:"5–15", rate:"20%", frOnly:true},
      {name:"Horsea",    method:"Good Rod", levels:"5–15", rate:"20%", lgOnly:true},
      {name:"Horsea",    method:"Super Rod",levels:"15–35",rate:"80%", frOnly:true},
      {name:"Krabby",    method:"Super Rod",levels:"15–35",rate:"80%", lgOnly:true},
      {name:"Gyarados",  method:"Super Rod",levels:"15–35",rate:"15%"},
      {name:"Seadra",    method:"Super Rod",levels:"15–35",rate:"4%",  frOnly:true},
      {name:"Kingler",   method:"Super Rod",levels:"15–35",rate:"4%",  lgOnly:true},
      {name:"Psyduck",   method:"Super Rod",levels:"15–35",rate:"1%",  frOnly:true},
      {name:"Slowpoke",  method:"Super Rod",levels:"15–35",rate:"1%",  lgOnly:true},
    ],
    items:[],
    trainers:[
      {class:"Picnicker",  name:"Irene",  team:[{name:"Tentacool",level:30},{name:"Horsea",level:30},{name:"Seel",level:30}]},
      {class:"Bird Keeper",name:"Roger",  team:[{name:"Fearow",level:30},{name:"Fearow",level:30},{name:"Pidgeotto",level:30}]},
      {class:"Swimmer♀",   name:"Nora",   team:[{name:"Shellder",level:30},{name:"Shellder",level:30},{name:"Cloyster",level:30}]},
      {class:"Swimmer♂",   name:"Dean",   team:[{name:"Staryu",level:35}]},
      {class:"Picnicker",  name:"Missy",  team:[{name:"Goldeen",level:31},{name:"Seaking",level:31}]},
      {class:"Swimmer♀",   name:"Melissa",team:[{name:"Poliwag",level:31},{name:"Seaking",level:31}]},
    ]},

  { part:"Part 13", id:"cinnabar-island", name:"Cinnabar Island",
    note:"Cinnabar Lab restores fossils and hosts three one-time NPC trades.",
    pokemon:[
      {name:"Omanyte",   method:"Fossil",   note:"Restore Helix Fossil at Cinnabar Lab",                  warn:true},
      {name:"Kabuto",    method:"Fossil",   note:"Restore Dome Fossil at Cinnabar Lab",                   warn:true},
      {name:"Aerodactyl",method:"Fossil",   note:"Restore Old Amber at Cinnabar Lab",                     warn:true},
      {name:"Electrode", method:"Trade",    note:"Trade Raichu with Old man in Cinnabar Lab",              warn:true},
      {name:"Tangela",   method:"Trade",    note:"Trade Venonat with woman in Cinnabar Lab (holds Stardust)", warn:true},
      {name:"Seel",      method:"Trade",    note:"Trade Ponyta with Scientist in Cinnabar Lab",            warn:true},
      {name:"Tentacool", method:"Surf",      levels:"5–40",  rate:"90%"},
      {name:"Tentacruel",method:"Surf",      levels:"30–40", rate:"10%"},
      {name:"Magikarp",  method:"Old Rod",   levels:"5",     rate:"100%"},
      {name:"Horsea",    method:"Good Rod",  levels:"5–15",  rate:"60%", frOnly:true},
      {name:"Horsea",    method:"Good Rod",  levels:"5–15",  rate:"20%", lgOnly:true},
      {name:"Krabby",    method:"Good Rod",  levels:"5–15",  rate:"20%", frOnly:true},
      {name:"Krabby",    method:"Good Rod",  levels:"5–15",  rate:"60%", lgOnly:true},
      {name:"Magikarp",  method:"Good Rod",  levels:"5–15",  rate:"20%"},
      {name:"Shellder",  method:"Super Rod", levels:"15–40", rate:"40%", frOnly:true},
      {name:"Horsea",    method:"Super Rod", levels:"15–40", rate:"40%", frOnly:true},
      {name:"Krabby",    method:"Super Rod", levels:"15–40", rate:"40%", lgOnly:true},
      {name:"Staryu",    method:"Super Rod", levels:"15–40", rate:"40%", lgOnly:true},
      {name:"Gyarados",  method:"Super Rod", levels:"15–40", rate:"15%"},
      {name:"Seadra",    method:"Super Rod", levels:"15–40", rate:"4%",  frOnly:true},
      {name:"Slowbro",   method:"Super Rod", levels:"15–40", rate:"4%",  lgOnly:true},
      {name:"Psyduck",   method:"Super Rod", levels:"15–40", rate:"1%",  frOnly:true},
      {name:"Slowpoke",  method:"Super Rod", levels:"15–40", rate:"1%",  lgOnly:true},
    ],
    items:[],
    trainers:[]},

  { part:"Part 13", id:"pokemon-mansion", name:"Pokémon Mansion",
    note:"Wild Pokémon are identical on 1F, 2F, and 3F. The Secret Key in B1F unlocks Cinnabar Gym.",
    floors:[
      { label:"1F–3F",
        pokemon:[
          {name:"Raticate", method:"Cave", levels:"32–36", rate:"30%"},
          {name:"Koffing",  method:"Cave", levels:"28–30", rate:"30%", frOnly:true},
          {name:"Grimer",   method:"Cave", levels:"28–30", rate:"30%", lgOnly:true},
          {name:"Rattata",  method:"Cave", levels:"26–28", rate:"15%"},
          {name:"Growlithe",method:"Cave", levels:"30–32", rate:"15%", frOnly:true},
          {name:"Vulpix",   method:"Cave", levels:"30–32", rate:"15%", lgOnly:true},
          {name:"Grimer",   method:"Cave", levels:"28",    rate:"5%",  frOnly:true},
          {name:"Weezing",  method:"Cave", levels:"32",    rate:"5%",  frOnly:true},
          {name:"Koffing",  method:"Cave", levels:"28",    rate:"5%",  lgOnly:true},
          {name:"Muk",      method:"Cave", levels:"32",    rate:"5%",  lgOnly:true},
        ],
        items:[
          {name:"Moon Stone",  hidden:true,  note:"1F – Northwest pillar",img:"screenshots/hidden/pokemon-mansion-1f-3f-0.png"},
          {name:"Escape Rope", hidden:false, note:"1F – Near the pillars"},
          {name:"Protein",     hidden:false, note:"1F – Northeast room"},
          {name:"Carbos",      hidden:false, note:"1F – Among potted plants"},
          {name:"Zinc",        hidden:false, note:"2F – Western balcony"},
          {name:"Calcium",     hidden:false, note:"2F – Northeast room"},
          {name:"HP Up",       hidden:false, note:"2F – East room"},
          {name:"Iron",        hidden:false, note:"3F – Northeast room"},
          {name:"Rare Candy",  hidden:true,  note:"3F – East-central hallway",img:"screenshots/hidden/pokemon-mansion-1f-3f-8.png"},
          {name:"Max Potion",  hidden:false, note:"3F – Southwest room"},
        ],
        trainers:[
          {class:"Youngster",name:"Johnson",team:[{name:"Ekans",level:33},{name:"Ekans",level:33},{name:"Raticate",level:34}]},
          {class:"Scientist",name:"Ted",    team:[{name:"Electrode",level:29},{name:"Weezing",level:29}]},
          {class:"Burglar",  name:"Arnie",  team:[{name:"Charmander",level:34},{name:"Charmeleon",level:34}]},
          {class:"Burglar",  name:"Simon",  team:[{name:"Ninetales",level:38}]},
          {class:"Scientist",name:"Braydon",team:[{name:"Magnemite",level:33},{name:"Magneton",level:33},{name:"Voltorb",level:33}]},
        ]},
      { label:"B1F",
        pokemon:[
          {name:"Raticate", method:"Cave", levels:"34–38", rate:"30%"},
          {name:"Koffing",  method:"Cave", levels:"28–30", rate:"30%", frOnly:true},
          {name:"Grimer",   method:"Cave", levels:"28–30", rate:"30%", lgOnly:true},
          {name:"Growlithe",method:"Cave", levels:"30–32", rate:"15%", frOnly:true},
          {name:"Vulpix",   method:"Cave", levels:"30–32", rate:"15%", lgOnly:true},
          {name:"Ditto",    method:"Cave", levels:"30",    rate:"10%"},
          {name:"Rattata",  method:"Cave", levels:"26",    rate:"5%"},
          {name:"Grimer",   method:"Cave", levels:"28",    rate:"5%",  frOnly:true},
          {name:"Weezing",  method:"Cave", levels:"34",    rate:"5%",  frOnly:true},
          {name:"Koffing",  method:"Cave", levels:"28",    rate:"5%",  lgOnly:true},
          {name:"Muk",      method:"Cave", levels:"34",    rate:"5%",  lgOnly:true},
        ],
        items:[
          {name:"Full Restore",   hidden:false, note:"Southwest corner"},
          {name:"Elixir",         hidden:true,  note:"Northeast room",img:"screenshots/hidden/pokemon-mansion-b1f-1.png"},
          {name:"TM14 Blizzard",  hidden:false, note:"North-central room"},
          {name:"Secret Key",     hidden:false, note:"Northwest room — opens Cinnabar Gym"},
          {name:"TM22 SolarBeam", hidden:false, note:"West-central room"},
        ],
        trainers:[
          {class:"Burglar",  name:"Lewis",team:[{name:"Growlithe",level:34},{name:"Ponyta",level:34}]},
          {class:"Scientist",name:"Ivan", team:[{name:"Magnemite",level:34},{name:"Electrode",level:34}]},
        ]},
    ]},

  { part:"Part 13", id:"cinnabar-gym", name:"Cinnabar Gym",
    note:"Requires the Secret Key from Pokémon Mansion B1F. Blaine awards the Volcano Badge.",
    pokemon:[],
    items:[
      {name:"TM38 Fire Blast", hidden:false, note:"Reward from Blaine"},
    ],
    trainers:[
      {class:"Burglar",   name:"Quinn",  team:[{name:"Growlithe",level:36},{name:"Vulpix",level:36},{name:"Ninetales",level:36}]},
      {class:"Super Nerd",name:"Erik",   team:[{name:"Vulpix",level:36},{name:"Vulpix",level:36},{name:"Ninetales",level:36}]},
      {class:"Super Nerd",name:"Avery",  team:[{name:"Ponyta",level:34},{name:"Charmander",level:34},{name:"Vulpix",level:34},{name:"Growlithe",level:34}]},
      {class:"Burglar",   name:"Ramon",  team:[{name:"Ponyta",level:41}]},
      {class:"Super Nerd",name:"Derek",  team:[{name:"Rapidash",level:41}]},
      {class:"Burglar",   name:"Dusty",  team:[{name:"Vulpix",level:37},{name:"Growlithe",level:37}]},
      {class:"Super Nerd",name:"Zac",    team:[{name:"Growlithe",level:37},{name:"Vulpix",level:37}]},
      {class:"Gym Leader",name:"Blaine", note:"Volcano Badge · TM38 Fire Blast",
        team:[{name:"Growlithe",level:42},{name:"Ponyta",level:40},{name:"Rapidash",level:42},{name:"Arcanine",level:47}]},
    ]},

  { part:"Part 14", id:"one-island", name:"One Island",
    note:"The Network Center here connects the Sevii Islands. Bill gives a Meteorite; Celio gives the Tri-Pass once the machine is repaired.",
    pokemon:[
      {name:"Tentacool",  method:"Surf",      levels:"5–40",  rate:"95%"},
      {name:"Tentacruel", method:"Surf",      levels:"35–40", rate:"5%"},
      {name:"Magikarp",   method:"Old Rod",   levels:"5",     rate:"100%"},
      {name:"Horsea",     method:"Good Rod",  levels:"5–15",  rate:"80%", frOnly:true},
      {name:"Krabby",     method:"Good Rod",  levels:"5–15",  rate:"80%", lgOnly:true},
      {name:"Magikarp",   method:"Good Rod",  levels:"5–15",  rate:"20%"},
      {name:"Shellder",   method:"Super Rod", levels:"15–25", rate:"40%", frOnly:true},
      {name:"Horsea",     method:"Super Rod", levels:"15–25", rate:"40%", frOnly:true},
      {name:"Staryu",     method:"Super Rod", levels:"15–25", rate:"40%", lgOnly:true},
      {name:"Krabby",     method:"Super Rod", levels:"15–25", rate:"40%", lgOnly:true},
      {name:"Gyarados",   method:"Super Rod", levels:"15–25", rate:"15%"},
      {name:"Seadra",     method:"Super Rod", levels:"25–35", rate:"4%",  frOnly:true},
      {name:"Kingler",    method:"Super Rod", levels:"25–35", rate:"4%",  lgOnly:true},
      {name:"Psyduck",    method:"Super Rod", levels:"25–35", rate:"1%",  frOnly:true},
      {name:"Slowpoke",   method:"Super Rod", levels:"25–35", rate:"1%",  lgOnly:true},
    ],
    items:[],
    trainers:[]},

  { part:"Part 14", id:"treasure-beach", name:"Treasure Beach",
    note:"A beachside area north of One Island's harbor. All hidden items are recurring pickups.",
    pokemon:[
      {name:"Spearow",  method:"Grass", levels:"31–32",    rate:"30%"},
      {name:"Tangela",  method:"Grass", levels:"33–35",    rate:"30%"},
      {name:"Fearow",   method:"Grass", levels:"36–40",    rate:"20%"},
      {name:"Meowth",   method:"Grass", levels:"31",       rate:"10%"},
      {name:"Persian",  method:"Grass", levels:"37–40",    rate:"5%"},
      {name:"Psyduck",  method:"Grass", levels:"31",       rate:"5%",  frOnly:true},
      {name:"Slowpoke", method:"Grass", levels:"31",       rate:"5%",  lgOnly:true},
      {name:"Tentacool",  method:"Surf",      levels:"5–40",  rate:"95%"},
      {name:"Tentacruel", method:"Surf",      levels:"35–40", rate:"5%"},
      {name:"Magikarp",   method:"Old Rod",   levels:"5",     rate:"100%"},
      {name:"Horsea",     method:"Good Rod",  levels:"5–15",  rate:"80%", frOnly:true},
      {name:"Krabby",     method:"Good Rod",  levels:"5–15",  rate:"80%", lgOnly:true},
      {name:"Magikarp",   method:"Good Rod",  levels:"5–15",  rate:"20%"},
      {name:"Shellder",   method:"Super Rod", levels:"15–25", rate:"40%", frOnly:true},
      {name:"Horsea",     method:"Super Rod", levels:"15–25", rate:"40%", frOnly:true},
      {name:"Staryu",     method:"Super Rod", levels:"15–25", rate:"40%", lgOnly:true},
      {name:"Krabby",     method:"Super Rod", levels:"15–25", rate:"40%", lgOnly:true},
      {name:"Gyarados",   method:"Super Rod", levels:"15–25", rate:"15%"},
      {name:"Seadra",     method:"Super Rod", levels:"25–35", rate:"4%",  frOnly:true},
      {name:"Kingler",    method:"Super Rod", levels:"25–35", rate:"4%",  lgOnly:true},
      {name:"Psyduck",    method:"Super Rod", levels:"25–35", rate:"1%",  frOnly:true},
      {name:"Slowpoke",   method:"Super Rod", levels:"25–35", rate:"1%",  lgOnly:true},
    ],
    items:[
      {name:"Ultra Ball", hidden:true,  note:"East of northernmost grass"},
      {name:"Ultra Ball", hidden:true,  note:"Southeast corner"},
      {name:"Pearl",      hidden:true,  note:"West side, southernmost sandy patch"},
      {name:"Pearl",      hidden:true,  note:"Two steps east/north of first Pearl"},
      {name:"Big Pearl",  hidden:true,  note:"Middle northwest sandy patch"},
      {name:"Stardust",   hidden:true,  note:"Middle shore"},
      {name:"Stardust",   hidden:true,  note:"Southwest corner northwest patch"},
      {name:"Star Piece", hidden:true,  note:"Four steps north, one west of southeast corner"},
    ],
    trainers:[
      {class:"Swimmer♀", name:"Amara", team:[{name:"Seel",level:36},{name:"Seel",level:36},{name:"Dewgong",level:36}]},
    ]},

  { part:"Part 14", id:"kindle-road", name:"Kindle Road",
    note:"Northern road on One Island leading to Mt. Ember. HM06 Rock Smash is obtained from an old man at Ember Spa, the hot springs at the road's north end.",
    pokemon:[
      {name:"Ponyta",   method:"Grass",      levels:"31–34",    rate:"30%"},
      {name:"Spearow",  method:"Grass",      levels:"30–32",    rate:"25%"},
      {name:"Fearow",   method:"Grass",      levels:"36",       rate:"10%"},
      {name:"Meowth",   method:"Grass",      levels:"31",       rate:"10%"},
      {name:"Geodude",  method:"Grass",      levels:"31",       rate:"10%"},
      {name:"Persian",  method:"Grass",      levels:"37–40",    rate:"5%"},
      {name:"Rapidash", method:"Grass",      levels:"37–40",    rate:"5%"},
      {name:"Psyduck",  method:"Grass",      levels:"34",       rate:"5%",  frOnly:true},
      {name:"Slowpoke", method:"Grass",      levels:"34",       rate:"5%",  lgOnly:true},
      {name:"Geodude",  method:"Rock Smash", levels:"5–30",     rate:"95%"},
      {name:"Graveler", method:"Rock Smash", levels:"25–40",    rate:"5%"},
      {name:"Tentacool",  method:"Surf",      levels:"5–40",  rate:"95%"},
      {name:"Tentacruel", method:"Surf",      levels:"35–40", rate:"5%"},
      {name:"Magikarp",   method:"Old Rod",   levels:"5",     rate:"100%"},
      {name:"Horsea",     method:"Good Rod",  levels:"5–15",  rate:"80%", frOnly:true},
      {name:"Krabby",     method:"Good Rod",  levels:"5–15",  rate:"80%", lgOnly:true},
      {name:"Magikarp",   method:"Good Rod",  levels:"5–15",  rate:"20%"},
      {name:"Shellder",   method:"Super Rod", levels:"15–25", rate:"40%", frOnly:true},
      {name:"Horsea",     method:"Super Rod", levels:"15–25", rate:"40%", frOnly:true},
      {name:"Staryu",     method:"Super Rod", levels:"15–25", rate:"40%", lgOnly:true},
      {name:"Krabby",     method:"Super Rod", levels:"15–25", rate:"40%", lgOnly:true},
      {name:"Gyarados",   method:"Super Rod", levels:"15–25", rate:"15%"},
      {name:"Seadra",     method:"Super Rod", levels:"25–35", rate:"4%",  frOnly:true},
      {name:"Kingler",    method:"Super Rod", levels:"25–35", rate:"4%",  lgOnly:true},
      {name:"Psyduck",    method:"Super Rod", levels:"25–35", rate:"1%",  frOnly:true},
      {name:"Slowpoke",   method:"Super Rod", levels:"25–35", rate:"1%",  lgOnly:true},
    ],
    items:[
      {name:"HM06 Rock Smash", hidden:false, note:"From old man at Ember Spa"},
      {name:"Max Repel",       hidden:false, note:"East rocky ridge (requires Surf)"},
      {name:"Ether",           hidden:false, note:"Rocky area south of Ember Spa (requires Rock Smash)"},
      {name:"Carbos",          hidden:false, note:"Southern point rocky ridge (requires Rock Smash)"},
    ],
    trainers:[
      {class:"Swimmer♀",  name:"Abigail",   team:[{name:"Psyduck",level:35},{name:"Psyduck",level:36},{name:"Golduck",level:37}]},
      {class:"Picnicker",  name:"Claire",    team:[{name:"Meowth",level:35},{name:"Meowth",level:35},{name:"Pikachu",level:35},{name:"Clefairy",level:35}]},
      {class:"Crush Girl", name:"Tanya",     team:[{name:"Hitmonlee",level:38},{name:"Hitmonchan",level:38}]},
      {class:"Camper",     name:"Bryce",     team:[{name:"Nidorino",level:36},{name:"Raticate",level:36},{name:"Sandslash",level:36}]},
      {class:"Swimmer♂",  name:"Garrett",   team:[{name:"Shellder",level:35},{name:"Cloyster",level:35},{name:"Wartortle",level:38}]},
      {class:"Crush Kin",  name:"Mik & Kia",team:[{name:"Machoke",level:39},{name:"Primeape",level:39}]},
      {class:"Black Belt", name:"Hugh",      team:[{name:"Machop",level:37},{name:"Machoke",level:37}]},
      {class:"Black Belt", name:"Shea",      team:[{name:"Machop",level:38},{name:"Machoke",level:38}]},
      {class:"Crush Girl", name:"Sharon",    team:[{name:"Mankey",level:37},{name:"Primeape",level:37}]},
      {class:"Swimmer♂",  name:"Finn",      team:[{name:"Starmie",level:38}]},
      {class:"Swimmer♀",  name:"Maria",     team:[{name:"Seadra",level:37},{name:"Seadra",level:37}]},
      {class:"Fisherman",  name:"Tommy",     team:[{name:"Goldeen",level:33},{name:"Goldeen",level:33},{name:"Seaking",level:35},{name:"Seaking",level:35},{name:"Seaking",level:35}]},
    ]},

  { part:"Part 14", id:"mt-ember", name:"Mt. Ember",
    note:"Moltres rests at the summit — one-time encounter. A Ruby is hidden here, unlocking the deeper Sevii Islands.",
    pokemon:[
      {name:"Moltres",  method:"Cave",       warn:true, note:"One-time encounter at the Mt. Ember summit"},
      {name:"Ponyta",   method:"Grass",      levels:"30–36",    rate:"35%"},
      {name:"Fearow",   method:"Grass",      levels:"38–40",    rate:"25%"},
      {name:"Spearow",  method:"Grass",      levels:"30–32",    rate:"15%", frOnly:true},
      {name:"Machop",   method:"Grass",      levels:"35",       rate:"10%"},
      {name:"Geodude",  method:"Grass",      levels:"33",       rate:"10%"},
      {name:"Rapidash", method:"Grass",      levels:"39–42",    rate:"5%"},
      {name:"Spearow",  method:"Grass",      levels:"32",       rate:"10%", lgOnly:true},
      {name:"Magmar",   method:"Grass",      levels:"38–40",    rate:"5%",  lgOnly:true},
      {name:"Geodude",  method:"Rock Smash", levels:"5–30",     rate:"95%"},
      {name:"Graveler", method:"Rock Smash", levels:"25–40",    rate:"5%"},
    ],
    items:[
      {name:"Dire Hit",   hidden:false, note:"Lower east side, northeast of eastern grass"},
      {name:"Ultra Ball", hidden:true,  note:"Southwest dead-end near Pokémon Ranger Logan",img:"screenshots/hidden/mt-ember-1.png"},
      {name:"Ultra Ball", hidden:true,  note:"Upper west summit entrance dead-end"},
      {name:"Fire Stone", hidden:true,  note:"Southeast summit entrance (requires Rock Smash and Strength)",img:"screenshots/hidden/mt-ember-3.png"},
      {name:"Fire Stone", hidden:true,  note:"Southwest lone rock"},
    ],
    trainers:[
      {class:"Pokémon Ranger", name:"Beth",   team:[{name:"Bellsprout",level:38},{name:"Gloom",level:38},{name:"Gloom",level:38}]},
      {class:"Crush Girl",     name:"Jocelyn",team:[{name:"Hitmonchan",level:38},{name:"Hitmonchan",level:38}]},
      {class:"Pokémon Ranger", name:"Logan",  team:[{name:"Exeggcute",level:37},{name:"Exeggutor",level:40}]},
    ]},

  { part:"Part 14", id:"two-island", name:"Two Island",
    note:"The Game Corner owner asks you to rescue his daughter Lostelle from Berry Forest. Moon Stone received from her father after the rescue.",
    pokemon:[
      {name:"Oddish",    method:"Grass", levels:"30–32",    rate:"30%", frOnly:true},
      {name:"Bellsprout",method:"Grass", levels:"30–32",    rate:"30%", lgOnly:true},
      {name:"Spearow",   method:"Grass", levels:"31",       rate:"20%"},
      {name:"Gloom",     method:"Grass", levels:"36–38",    rate:"15%", frOnly:true},
      {name:"Weepinbell",method:"Grass", levels:"36–38",    rate:"15%", lgOnly:true},
      {name:"Fearow",    method:"Grass", levels:"36",       rate:"10%"},
      {name:"Meowth",    method:"Grass", levels:"31",       rate:"10%"},
      {name:"Persian",   method:"Grass", levels:"37–40",    rate:"5%"},
      {name:"Psyduck",   method:"Grass", levels:"31",       rate:"5%",  frOnly:true},
      {name:"Golduck",   method:"Grass", levels:"37–40",    rate:"5%",  frOnly:true},
      {name:"Slowpoke",  method:"Grass", levels:"31",       rate:"5%",  lgOnly:true},
      {name:"Slowbro",   method:"Grass", levels:"37–40",    rate:"5%",  lgOnly:true},
      {name:"Psyduck",   method:"Surf",      levels:"5–40",  rate:"95%", frOnly:true},
      {name:"Golduck",   method:"Surf",      levels:"35–40", rate:"5%",  frOnly:true},
      {name:"Slowpoke",  method:"Surf",      levels:"5–40",  rate:"95%", lgOnly:true},
      {name:"Slowbro",   method:"Surf",      levels:"35–40", rate:"5%",  lgOnly:true},
      {name:"Magikarp",  method:"Old Rod",   levels:"5",     rate:"100%"},
      {name:"Poliwag",   method:"Good Rod",  levels:"5–15",  rate:"60%"},
      {name:"Goldeen",   method:"Good Rod",  levels:"5–15",  rate:"20%"},
      {name:"Magikarp",  method:"Good Rod",  levels:"5–15",  rate:"20%"},
      {name:"Poliwag",   method:"Super Rod", levels:"15–25", rate:"40%"},
      {name:"Poliwhirl", method:"Super Rod", levels:"20–30", rate:"40%"},
      {name:"Gyarados",  method:"Super Rod", levels:"15–25", rate:"15%"},
      {name:"Psyduck",   method:"Super Rod", levels:"15–35", rate:"5%",  frOnly:true},
      {name:"Slowpoke",  method:"Super Rod", levels:"15–35", rate:"5%",  lgOnly:true},
    ],
    items:[
      {name:"Revive",     hidden:false, note:"South of Game Corner (requires Cut)"},
      {name:"Moon Stone", hidden:false, note:"From Lostelle's father after rescuing Lostelle from Berry Forest"},
    ],
    trainers:[]},

  { part:"Part 14", id:"cape-brink", name:"Cape Brink",
    note:"Accessible from Two Island. The Move Maniac re-teaches forgotten moves for 2 Tiny Mushroom or 1 Big Mushroom.",
    pokemon:[],
    items:[
      {name:"PP Max",     hidden:true, note:"East lake sandy spot (requires Surf and Itemfinder)",img:"screenshots/hidden/cape-brink-0.png"},
      {name:"Rare Candy", hidden:true, note:"Behind Move Tutor house",img:"screenshots/hidden/cape-brink-1.png"},
    ],
    trainers:[]},

  { part:"Part 14", id:"three-isle-port", name:"Three Isle Port",
    note:"A secluded beach on Three Island's east side. The only location where Dunsparce can be caught.",
    pokemon:[
      {name:"Dunsparce", method:"Grass", levels:"5–35", rate:"100%"},
    ],
    items:[],
    trainers:[]},

  { part:"Part 14", id:"three-isle-path", name:"Three Isle Path",
    note:"A cave through Three Island, initially controlled by Team Rocket. No wild Pokémon inside.",
    pokemon:[],
    items:[
      {name:"Nugget", hidden:true,  note:"On a rock southeast of the stairs",img:"screenshots/hidden/three-isle-path-0.png"},
      {name:"Nugget", hidden:false, note:"From the man after clearing Team Rocket"},
    ],
    trainers:[]},

  { part:"Part 14", id:"bond-bridge", name:"Bond Bridge",
    note:"The bridge connecting Two Island and Three Island. All hidden items are recurring pickups.",
    pokemon:[
      {name:"Pidgey",    method:"Grass", levels:"29–32",    rate:"30%"},
      {name:"Pidgeotto", method:"Grass", levels:"34–40",    rate:"15%"},
      {name:"Oddish",    method:"Grass", levels:"31",       rate:"20%", frOnly:true},
      {name:"Bellsprout",method:"Grass", levels:"31",       rate:"20%", lgOnly:true},
      {name:"Meowth",    method:"Grass", levels:"31",       rate:"10%"},
      {name:"Gloom",     method:"Grass", levels:"36",       rate:"10%", frOnly:true},
      {name:"Weepinbell",method:"Grass", levels:"36",       rate:"10%", lgOnly:true},
      {name:"Venonat",   method:"Grass", levels:"34",       rate:"5%"},
      {name:"Persian",   method:"Grass", levels:"37–40",    rate:"5%"},
      {name:"Psyduck",   method:"Grass", levels:"31",       rate:"5%",  frOnly:true},
      {name:"Slowpoke",  method:"Grass", levels:"31",       rate:"5%",  lgOnly:true},
      {name:"Tentacool",  method:"Surf",      levels:"5–40",  rate:"95%"},
      {name:"Tentacruel", method:"Surf",      levels:"35–40", rate:"5%"},
      {name:"Magikarp",   method:"Old Rod",   levels:"5",     rate:"100%"},
      {name:"Horsea",     method:"Good Rod",  levels:"5–15",  rate:"80%", frOnly:true},
      {name:"Krabby",     method:"Good Rod",  levels:"5–15",  rate:"80%", lgOnly:true},
      {name:"Magikarp",   method:"Good Rod",  levels:"5–15",  rate:"20%"},
      {name:"Shellder",   method:"Super Rod", levels:"15–25", rate:"40%", frOnly:true},
      {name:"Horsea",     method:"Super Rod", levels:"15–25", rate:"40%", frOnly:true},
      {name:"Staryu",     method:"Super Rod", levels:"15–25", rate:"40%", lgOnly:true},
      {name:"Krabby",     method:"Super Rod", levels:"15–25", rate:"40%", lgOnly:true},
      {name:"Gyarados",   method:"Super Rod", levels:"15–25", rate:"15%"},
      {name:"Seadra",     method:"Super Rod", levels:"25–35", rate:"4%",  frOnly:true},
      {name:"Kingler",    method:"Super Rod", levels:"25–35", rate:"4%",  lgOnly:true},
      {name:"Psyduck",    method:"Super Rod", levels:"25–35", rate:"1%",  frOnly:true},
      {name:"Slowpoke",   method:"Super Rod", levels:"25–35", rate:"1%",  lgOnly:true},
    ],
    items:[
      {name:"Max Repel", hidden:true, note:"Northwest of Aroma Lady Violet",img:"screenshots/hidden/bond-bridge-0.png"},
      {name:"Pearl",     hidden:true, note:"Southwest corner near Tuber Alexis"},
      {name:"Stardust",  hidden:true, note:"One square west, two north of bridge's northwest corner"},
    ],
    trainers:[
      {class:"Twins",      name:"Joy & Meg", team:[{name:"Clefairy",level:37},{name:"Clefairy",level:37}]},
      {class:"Aroma Lady", name:"Violet",    team:[{name:"Bulbasaur",level:36},{name:"Ivysaur",level:36},{name:"Ivysaur",level:36}]},
      {class:"Tuber♀",     name:"Alexis",    team:[{name:"Staryu",level:34},{name:"Staryu",level:34},{name:"Krabby",level:34},{name:"Krabby",level:34}]},
      {class:"Swimmer♀",   name:"Tisha",     note:"Requires Surf to reach", team:[{name:"Kingler",level:38}]},
      {class:"Tuber♀",     name:"Amira",     team:[{name:"Poliwag",level:34},{name:"Poliwhirl",level:35},{name:"Poliwag",level:34}]},
      {class:"Aroma Lady", name:"Nikki",     team:[{name:"Bellsprout",level:37},{name:"Weepinbell",level:37}]},
    ]},

  { part:"Part 14", id:"berry-forest", name:"Berry Forest",
    note:"A dense forest on Three Island where Lostelle is found. All berries are recurring hidden pickups. Max Elixir requires Cut and Surf.",
    pokemon:[
      {name:"Pidgey",    method:"Grass", levels:"32",    rate:"10%"},
      {name:"Pidgeotto", method:"Grass", levels:"37",    rate:"20%"},
      {name:"Oddish",    method:"Grass", levels:"30",    rate:"10%", frOnly:true},
      {name:"Gloom",     method:"Grass", levels:"35",    rate:"20%", frOnly:true},
      {name:"Venonat",   method:"Grass", levels:"34",    rate:"10%"},
      {name:"Venomoth",  method:"Grass", levels:"37–40", rate:"5%"},
      {name:"Psyduck",   method:"Grass", levels:"31",    rate:"5%",  frOnly:true},
      {name:"Bellsprout",method:"Grass", levels:"30",    rate:"10%", lgOnly:true},
      {name:"Weepinbell",method:"Grass", levels:"35",    rate:"20%", lgOnly:true},
      {name:"Slowpoke",  method:"Grass", levels:"31",    rate:"5%",  lgOnly:true},
      {name:"Drowzee",   method:"Grass", levels:"34",    rate:"10%"},
      {name:"Hypno",     method:"Grass", levels:"37–40", rate:"5%"},
      {name:"Exeggcute", method:"Grass", levels:"35",    rate:"5%"},
      {name:"Psyduck",   method:"Surf",      levels:"5–40",  rate:"95%", frOnly:true},
      {name:"Golduck",   method:"Surf",      levels:"35–40", rate:"5%",  frOnly:true},
      {name:"Slowpoke",  method:"Surf",      levels:"5–40",  rate:"95%", lgOnly:true},
      {name:"Slowbro",   method:"Surf",      levels:"35–40", rate:"5%",  lgOnly:true},
      {name:"Magikarp",  method:"Old Rod",   levels:"5",     rate:"100%"},
      {name:"Poliwag",   method:"Good Rod",  levels:"5–15",  rate:"20%"},
      {name:"Goldeen",   method:"Good Rod",  levels:"5–15",  rate:"60%"},
      {name:"Magikarp",  method:"Good Rod",  levels:"5–15",  rate:"20%"},
      {name:"Goldeen",   method:"Super Rod", levels:"15–25", rate:"40%"},
      {name:"Seaking",   method:"Super Rod", levels:"20–30", rate:"40%"},
      {name:"Gyarados",  method:"Super Rod", levels:"15–25", rate:"15%"},
      {name:"Psyduck",   method:"Super Rod", levels:"15–35", rate:"5%",  frOnly:true},
      {name:"Slowpoke",  method:"Super Rod", levels:"15–35", rate:"5%",  lgOnly:true},
    ],
    items:[
      {name:"Razz Berry",  hidden:true, note:"Southwest of first cuttable tree"},
      {name:"Oran Berry",  hidden:true, note:"Northwest of first cuttable tree",img:"screenshots/hidden/berry-forest-1.png"},
      {name:"Persim Berry",hidden:true, note:"Northeast of ledge near entrance",img:"screenshots/hidden/berry-forest-2.png"},
      {name:"Pinap Berry", hidden:true, note:"Northeast of Oran Berry",img:"screenshots/hidden/berry-forest-3.png"},
      {name:"Chesto Berry",hidden:true, note:"Northeastern corner"},
      {name:"Aspear Berry",hidden:true, note:"Northeast of northernmost water",img:"screenshots/hidden/berry-forest-5.png"},
      {name:"Rawst Berry", hidden:true, note:"Northwest of Aspear Berry"},
      {name:"Bluk Berry",  hidden:true, note:"Southeast of cuttable tree",img:"screenshots/hidden/berry-forest-7.png"},
      {name:"Nanab Berry", hidden:true, note:"Northeast of middle water"},
      {name:"Cheri Berry", hidden:true, note:"North of middle water",img:"screenshots/hidden/berry-forest-9.png"},
      {name:"Wepear Berry",hidden:true, note:"North of middle water",img:"screenshots/hidden/berry-forest-10.png"},
      {name:"Pecha Berry", hidden:true, note:"North of southernmost water"},
      {name:"Lum Berry",   hidden:true, note:"Northwest area"},
      {name:"Full Heal",   hidden:false,note:"North of northernmost water"},
      {name:"Max Ether",   hidden:false,note:"West of Rawst Berry"},
      {name:"Max Elixir",  hidden:false,note:"Southeast dead-end (requires Cut and Surf)"},
      {name:"Iapapa Berry",hidden:false,note:"From Lostelle after rescue"},
    ],
    trainers:[]},

  { part:"Part 15", id:"route21", name:"Route 21",
    note:"Connects Cinnabar Island to Pallet Town. Tangela is the only grass encounter.",
    pokemon:[
      {name:"Tangela",    method:"Grass",    levels:"17–28", rate:"100%"},
      {name:"Tentacool",  method:"Surf",      levels:"5–40",  rate:"100%"},
      {name:"Magikarp",   method:"Old Rod",   levels:"5",     rate:"100%"},
      {name:"Horsea",     method:"Good Rod",  levels:"5–15",  rate:"60%", frOnly:true},
      {name:"Krabby",     method:"Good Rod",  levels:"5–15",  rate:"20%", frOnly:true},
      {name:"Krabby",     method:"Good Rod",  levels:"5–15",  rate:"60%", lgOnly:true},
      {name:"Horsea",     method:"Good Rod",  levels:"5–15",  rate:"20%", lgOnly:true},
      {name:"Magikarp",   method:"Good Rod",  levels:"5–15",  rate:"20%"},
      {name:"Horsea",     method:"Super Rod", levels:"15–25", rate:"80%", frOnly:true},
      {name:"Krabby",     method:"Super Rod", levels:"15–25", rate:"80%", lgOnly:true},
      {name:"Gyarados",   method:"Super Rod", levels:"15–25", rate:"15%"},
      {name:"Seadra",     method:"Super Rod", levels:"25–35", rate:"4%",  frOnly:true},
      {name:"Kingler",    method:"Super Rod", levels:"25–35", rate:"4%",  lgOnly:true},
      {name:"Psyduck",    method:"Super Rod", levels:"25–35", rate:"1%",  frOnly:true},
      {name:"Slowpoke",   method:"Super Rod", levels:"25–35", rate:"1%",  lgOnly:true},
    ],
    items:[
      {name:"Pearl", hidden:true, note:"Small island near Swimmer Spencer (recurring pickup)"},
    ],
    trainers:[
      {class:"Fisherman",   name:"Wade",     team:[{name:"Magikarp",level:27},{name:"Magikarp",level:27},{name:"Magikarp",level:27},{name:"Magikarp",level:27},{name:"Magikarp",level:27},{name:"Magikarp",level:27}]},
      {class:"Fisherman",   name:"Ronald",   team:[{name:"Seaking",level:28},{name:"Goldeen",level:28},{name:"Seaking",level:28},{name:"Seaking",level:28}]},
      {class:"Sis and Bro", name:"Lil & Ian",team:[{name:"Seadra",level:33},{name:"Starmie",level:33}]},
      {class:"Swimmer♂",   name:"Spencer",  team:[{name:"Seadra",level:33},{name:"Tentacruel",level:33}]},
      {class:"Fisherman",   name:"Claude",   team:[{name:"Shellder",level:31},{name:"Cloyster",level:31}]},
      {class:"Fisherman",   name:"Nolan",    team:[{name:"Seaking",level:33},{name:"Goldeen",level:33}]},
      {class:"Swimmer♂",   name:"Jack",     team:[{name:"Starmie",level:37}]},
      {class:"Swimmer♂",   name:"Roland",   team:[{name:"Poliwhirl",level:32},{name:"Tentacool",level:32},{name:"Seadra",level:32}]},
      {class:"Swimmer♂",   name:"Jerome",   team:[{name:"Staryu",level:33},{name:"Wartortle",level:33}]},
    ]},

  { part:"Part 15", id:"power-plant", name:"Power Plant",
    note:"Accessible from Route 10 (North) via Surf. Two item spots are Electrode in disguise — approaching them starts a battle. Zapdos waits at the far end.",
    pokemon:[
      {name:"Zapdos",    method:"Cave", warn:true, note:"One-time encounter at the back of the Power Plant"},
      {name:"Magnemite", method:"Cave", levels:"22–25", rate:"30%"},
      {name:"Voltorb",   method:"Cave", levels:"22–25", rate:"30%"},
      {name:"Pikachu",   method:"Cave", levels:"22–26", rate:"25%"},
      {name:"Magneton",  method:"Cave", levels:"31–34", rate:"10%", frOnly:true},
      {name:"Magneton",  method:"Cave", levels:"31–34", rate:"15%", lgOnly:true},
      {name:"Electabuzz",method:"Cave", levels:"32–35", rate:"5%",  frOnly:true},
      {name:"Electrode", method:"Cave", levels:"30",    note:"Two static encounters disguised as item balls — caught with a regular Poké Ball"},
    ],
    items:[
      {name:"Max Potion",   hidden:false, note:"North of the entrance room"},
      {name:"TM17 Protect", hidden:false, note:"Central corridor"},
      {name:"Elixir",       hidden:false, note:"Central corridor"},
      {name:"TM25 Thunder", hidden:false, note:"Southeast room"},
      {name:"Thunder Stone",hidden:false, note:"Northeast room, northeast corner"},
      {name:"Thunder Stone",hidden:true,  note:"One step south, three steps east of Zapdos' location",img:"screenshots/hidden/power-plant-5.png"},
      {name:"Max Elixir",   hidden:true,  note:"Central room, in front of the eastern machine",img:"screenshots/hidden/power-plant-6.png"},
      {name:"Electrode",    hidden:false, note:"Fake item — south-central room (starts a battle when grabbed)"},
      {name:"Electrode",    hidden:false, note:"Fake item — northeast room, northwest corner (starts a battle when grabbed)"},
    ],
    trainers:[]},

  { part:"Part 16", id:"route23", name:"Route 23",
    note:"A checkpoint gauntlet — you need all eight badges to pass the successive gatekeepers. Connects Viridian City to Victory Road and the Indigo Plateau.",
    pokemon:[
      {name:"Mankey",   method:"Grass",     levels:"32–34",  rate:"30%"},
      {name:"Fearow",   method:"Grass",     levels:"40–44",  rate:"25%"},
      {name:"Ekans",    method:"Grass",     levels:"32–34",  rate:"20%", frOnly:true},
      {name:"Sandshrew",method:"Grass",     levels:"32–34",  rate:"20%", lgOnly:true},
      {name:"Spearow",  method:"Grass",     levels:"32–34",  rate:"15%"},
      {name:"Arbok",    method:"Grass",     levels:"44",     rate:"5%",  frOnly:true},
      {name:"Sandslash",method:"Grass",     levels:"44",     rate:"5%",  lgOnly:true},
      {name:"Primeape", method:"Grass",     levels:"42",     rate:"5%"},
      {name:"Psyduck",  method:"Surf",      levels:"20–40",  rate:"100%", frOnly:true},
      {name:"Slowpoke", method:"Surf",      levels:"20–40",  rate:"100%", lgOnly:true},
      {name:"Magikarp", method:"Old Rod",   levels:"5",      rate:"100%"},
      {name:"Poliwag",  method:"Good Rod",  levels:"5–15",   rate:"60%"},
      {name:"Goldeen",  method:"Good Rod",  levels:"5–15",   rate:"20%"},
      {name:"Magikarp", method:"Good Rod",  levels:"5–15",   rate:"20%"},
      {name:"Poliwag",  method:"Super Rod", levels:"15–25",  rate:"40%"},
      {name:"Poliwhirl",method:"Super Rod", levels:"20–30",  rate:"40%"},
      {name:"Gyarados", method:"Super Rod", levels:"15–25",  rate:"15%"},
      {name:"Psyduck",  method:"Super Rod", levels:"15–35",  rate:"5%",  frOnly:true},
      {name:"Slowpoke", method:"Super Rod", levels:"15–35",  rate:"5%",  lgOnly:true},
    ],
    items:[
      {name:"Leppa Berry",  hidden:true, note:"Northwest of Thunder Badge checkpoint",img:"screenshots/hidden/route23-0.png"},
      {name:"Max Ether",    hidden:true, note:"Northeast island area",img:"screenshots/hidden/route23-1.png"},
      {name:"Ultra Ball",   hidden:true, note:"Northeast of lake",img:"screenshots/hidden/route23-2.png"},
      {name:"Aspear Berry", hidden:true, note:"Southwest of Volcano Badge checkpoint",img:"screenshots/hidden/route23-3.png"},
      {name:"Full Restore", hidden:true, note:"East of northern grass patch",img:"screenshots/hidden/route23-4.png"},
      {name:"Sitrus Berry", hidden:true, note:"West-southwest of Victory Road entrance",img:"screenshots/hidden/route23-5.png"},
      {name:"Lum Berry",    hidden:true, note:"Southwest of the stone maze (north section)",img:"screenshots/hidden/route23-6.png"},
      {name:"Max Elixir",   hidden:true, note:"Northwest of the stone maze (north section)",img:"screenshots/hidden/route23-7.png"},
    ],
    trainers:[]},

  { part:"Part 16", id:"victory-road", name:"Victory Road",
    note:"Three-floor cave between Route 23 and the Indigo Plateau. Strength and Rock Smash are needed for some items.",
    floors:[
      { label:"1F",
        pokemon:[
          {name:"Onix",     method:"Cave", levels:"40–43", rate:"30%"},
          {name:"Machop",   method:"Cave", levels:"32–34", rate:"20%"},
          {name:"Geodude",  method:"Cave", levels:"32–34", rate:"20%"},
          {name:"Zubat",    method:"Cave", levels:"32–34", rate:"10%"},
          {name:"Arbok",    method:"Cave", levels:"44",    rate:"5%",  frOnly:true},
          {name:"Sandslash",method:"Cave", levels:"44",    rate:"5%",  lgOnly:true},
          {name:"Golbat",   method:"Cave", levels:"44",    rate:"5%"},
          {name:"Machoke",  method:"Cave", levels:"44",    rate:"5%"},
          {name:"Marowak",  method:"Cave", levels:"44",    rate:"5%"},
        ],
        items:[
          {name:"TM02 Dragon Claw",hidden:false, note:"North area (requires Strength)"},
          {name:"Rare Candy",      hidden:false, note:"North area (requires Strength)"},
          {name:"Full Restore",    hidden:true,  note:"On rock east of TM02",img:"screenshots/hidden/victory-road-1f-2.png"},
          {name:"Ultra Ball",      hidden:true,  note:"Near center of floor",img:"screenshots/hidden/victory-road-1f-3.png"},
        ],
        trainers:[
          {class:"Cooltrainer",name:"Naomi",  team:[{name:"Persian",  level:42},{name:"Ponyta",   level:42},{name:"Rapidash", level:42},{name:"Vulpix",   level:42},{name:"Ninetales",level:42}]},
          {class:"Cooltrainer",name:"Rolando", team:[{name:"Raticate", level:42},{name:"Ivysaur",  level:42},{name:"Wartortle",level:42},{name:"Charmeleon",level:42},{name:"Charizard", level:42}]},
          {class:"Juggler",    name:"Nelson",  team:[{name:"Drowzee",  level:41},{name:"Hypno",    level:41},{name:"Kadabra",  level:41},{name:"Kadabra",  level:41}]},
          {class:"Tamer",      name:"Vincent", team:[{name:"Persian",  level:44},{name:"Golduck",  level:44}]},
        ]},
      { label:"2F",
        pokemon:[
          {name:"Machop",   method:"Cave", levels:"34",    rate:"20%"},
          {name:"Geodude",  method:"Cave", levels:"34",    rate:"20%"},
          {name:"Onix",     method:"Cave", levels:"43–46", rate:"20%"},
          {name:"Zubat",    method:"Cave", levels:"34",    rate:"10%"},
          {name:"Primeape", method:"Cave", levels:"42",    rate:"10%"},
          {name:"Arbok",    method:"Cave", levels:"46",    rate:"5%",  frOnly:true},
          {name:"Sandslash",method:"Cave", levels:"46",    rate:"5%",  lgOnly:true},
          {name:"Golbat",   method:"Cave", levels:"46",    rate:"5%"},
          {name:"Machoke",  method:"Cave", levels:"46",    rate:"5%"},
          {name:"Marowak",  method:"Cave", levels:"46",    rate:"5%"},
        ],
        items:[
          {name:"TM37 Sandstorm",hidden:false, note:"Southwest of Black Belt Daisuke"},
          {name:"Full Heal",     hidden:false, note:"Southwest of Tamer Vincent's area"},
          {name:"TM07 Hail",     hidden:false, note:"Northeast area"},
          {name:"Guard Spec.",   hidden:false, note:"Northwest area"},
        ],
        trainers:[
          {class:"Black Belt",  name:"Daisuke", team:[{name:"Machoke",level:43},{name:"Machop",  level:43},{name:"Machoke",level:43}]},
          {class:"Juggler",     name:"Gregory", team:[{name:"Mr. Mime",level:48}]},
          {class:"Cooltrainer", name:"George",  team:[{name:"Exeggutor",level:42},{name:"Sandslash",level:42},{name:"Cloyster",level:42},{name:"Electrode",level:42},{name:"Arcanine",level:42}]},
          {class:"PokéManiac",  name:"Dawson",  team:[{name:"Charmeleon",level:40},{name:"Lapras",level:40},{name:"Lickitung",level:40}]},
          {class:"Cooltrainer", name:"Alexa",   team:[{name:"Clefairy",level:42},{name:"Jigglypuff",level:42},{name:"Persian",level:42},{name:"Dewgong",level:42},{name:"Chansey",level:42}]},
        ]},
      { label:"3F",
        pokemon:[
          {name:"Onix",     method:"Cave", levels:"44–46", rate:"30%"},
          {name:"Machop",   method:"Cave", levels:"34–36", rate:"20%"},
          {name:"Geodude",  method:"Cave", levels:"34–36", rate:"20%"},
          {name:"Zubat",    method:"Cave", levels:"34–36", rate:"10%"},
          {name:"Arbok",    method:"Cave", levels:"46",    rate:"5%",  frOnly:true},
          {name:"Sandslash",method:"Cave", levels:"46",    rate:"5%",  lgOnly:true},
          {name:"Golbat",   method:"Cave", levels:"46",    rate:"5%"},
          {name:"Machoke",  method:"Cave", levels:"46",    rate:"5%"},
          {name:"Marowak",  method:"Cave", levels:"46",    rate:"5%"},
        ],
        items:[
          {name:"Max Revive", hidden:false, note:"Northeast area"},
          {name:"TM50 Overheat",hidden:false, note:"Northwest area"},
        ],
        trainers:[
          {class:"Cooltrainer",name:"Colby",    team:[{name:"Kingler",   level:41},{name:"Poliwhirl",level:41},{name:"Tentacruel",level:41},{name:"Seadra",   level:41},{name:"Blastoise",level:43}]},
          {class:"Cooltrainer",name:"Caroline", team:[{name:"Bellsprout",level:42},{name:"Weepinbell",level:42},{name:"Victreebel",level:42},{name:"Paras",    level:42},{name:"Parasect", level:42}]},
          {class:"Cool Couple",name:"Ray & Tyra",team:[{name:"Nidoking", level:45},{name:"Nidoqueen",level:45}]},
        ]},
    ]},

  { part:"Part 17", id:"indigo-plateau", name:"Indigo Plateau",
    note:"Face the Elite Four in order — Lorelei → Bruno → Agatha → Lance — then challenge Blue as Champion. Blue's team varies depending on which starter you chose.",
    pokemon:[],
    items:[],
    trainers:[
      {class:"Elite Four",name:"Lorelei", note:"Ice-type specialist",
        team:[{name:"Dewgong",level:52},{name:"Cloyster",level:51},{name:"Slowbro",level:52},{name:"Jynx",level:54},{name:"Lapras",level:54}]},
      {class:"Elite Four",name:"Bruno",   note:"Fighting-type specialist",
        team:[{name:"Onix",level:51},{name:"Hitmonchan",level:53},{name:"Hitmonlee",level:53},{name:"Onix",level:54},{name:"Machamp",level:56}]},
      {class:"Elite Four",name:"Agatha",  note:"Ghost-type specialist",
        team:[{name:"Gengar",level:54},{name:"Golbat",level:54},{name:"Haunter",level:53},{name:"Arbok",level:56},{name:"Gengar",level:58}]},
      {class:"Elite Four",name:"Lance",   note:"Dragon-type specialist",
        team:[{name:"Gyarados",level:56},{name:"Dragonair",level:54},{name:"Dragonair",level:54},{name:"Aerodactyl",level:58},{name:"Dragonite",level:60}]},
      {class:"Rival",     name:"Blue",    note:"Champion — vs Bulbasaur starter",
        team:[{name:"Pidgeot",level:59},{name:"Alakazam",level:57},{name:"Rhydon",level:59},{name:"Exeggutor",level:59},{name:"Gyarados",level:61},{name:"Charizard",level:63}]},
      {class:"Rival",     name:"Blue",    note:"Champion — vs Charmander starter",
        team:[{name:"Pidgeot",level:59},{name:"Alakazam",level:57},{name:"Rhydon",level:59},{name:"Arcanine",level:59},{name:"Exeggutor",level:61},{name:"Blastoise",level:63}]},
      {class:"Rival",     name:"Blue",    note:"Champion — vs Squirtle starter",
        team:[{name:"Pidgeot",level:59},{name:"Alakazam",level:57},{name:"Rhydon",level:59},{name:"Gyarados",level:59},{name:"Arcanine",level:61},{name:"Venusaur",level:63}]},
    ]},

  { part:"Part 15", id:"viridian-gym", name:"Viridian Gym",
    note:"Giovanni's Ground-type gym — spinner tile maze. Defeating Giovanni earns the Earth Badge. TM26 Earthquake is already tracked in Viridian City (Part 2).",
    pokemon:[],
    items:[
      {name:"Macho Brace", hidden:true, note:"On the spot where Giovanni stood (requires Itemfinder)",img:"screenshots/hidden/viridian-gym-0.png"},
    ],
    trainers:[
      {class:"Tamer",       name:"Cole",    team:[{name:"Arbok",    level:39},{name:"Tauros",   level:39}]},
      {class:"Black Belt",  name:"Kiyo",    team:[{name:"Machoke",  level:43}]},
      {class:"Cooltrainer", name:"Samuel",  team:[{name:"Sandslash",level:37},{name:"Sandslash",level:37},{name:"Rhyhorn",  level:38},{name:"Nidorino",level:39},{name:"Nidoking", level:39}]},
      {class:"Cooltrainer", name:"Yuji",    team:[{name:"Sandslash",level:38},{name:"Graveler", level:38},{name:"Onix",     level:38},{name:"Graveler", level:38},{name:"Marowak",  level:38}]},
      {class:"Black Belt",  name:"Atsushi", team:[{name:"Machop",   level:40},{name:"Machoke",  level:40},{name:"Machoke",  level:40}]},
      {class:"Tamer",       name:"Jason",   team:[{name:"Rhyhorn",  level:43}]},
      {class:"Cooltrainer", name:"Warren",  team:[{name:"Marowak",  level:37},{name:"Marowak",  level:37},{name:"Rhyhorn",  level:38},{name:"Nidorina", level:39},{name:"Nidoqueen",level:39}]},
      {class:"Black Belt",  name:"Takashi", team:[{name:"Machoke",  level:38},{name:"Machop",   level:38},{name:"Machoke",  level:38}]},
      {class:"Gym Leader",  name:"Giovanni",note:"Earth Badge · TM26 Earthquake",
        team:[{name:"Rhyhorn",level:45},{name:"Dugtrio",level:42},{name:"Nidoqueen",level:44},{name:"Nidoking",level:45},{name:"Rhyhorn",level:50}]},
    ]},

];

// ─── BUILD LOCATION MAP ── (which areas each Pokémon appears in)
// Computed once at module level since AREAS is static
const _allPokemon = a => a.floors ? a.floors.flatMap(f => f.pokemon || []) : (a.pokemon || []);
const LOCATION_MAP = {};
for (const area of AREAS) {
  for (const p of _allPokemon(area)) {
    if (!LOCATION_MAP[p.name]) LOCATION_MAP[p.name] = [];
    LOCATION_MAP[p.name].push({ areaId: area.id, areaName: area.name, part: area.part, method: p.method, levels: p.levels, rate: p.rate, frOnly: !!p.frOnly, lgOnly: !!p.lgOnly });
  }
}

// ─── BEST ENCOUNTER AREA MAP ─────────────────────────────────────────────────
// For each Pokémon × version, the single area with the highest encounter rate.
// Used in PokemonEntry to flag when a better hunting spot exists elsewhere.
function _locPct(loc, ver) {
  if (!loc.rate) return null;
  const m = loc.rate.match(/^(\S+)\s+FR\s*\/\s*(\S+)\s+LG$/i);
  if (m) return parseRatePct(ver === "fr" ? m[1] : m[2]);
  return parseRatePct(loc.rate);
}
const BEST_AREA_MAP = { fr:{}, lg:{} };
for (const [name, locs] of Object.entries(LOCATION_MAP)) {
  for (const ver of ["fr","lg"]) {
    let best = null;
    for (const loc of locs) {
      if (ver === "fr" && loc.lgOnly) continue;
      if (ver === "lg" && loc.frOnly) continue;
      const pct = _locPct(loc, ver);
      if (pct && (!best || pct > best.pct)) best = { pct, areaName: loc.areaName };
    }
    if (best) BEST_AREA_MAP[ver][name] = best;
  }
}

// ─── CATCH CONSTRAINT MAP ─────────────────────────────────────────────────────
// Identifies Pokémon that cannot be caught with a regular Poké Ball:
//   "safari"     → only catchable in the Safari Zone (Safari Ball forced)
//   method-string → only obtainable via Gift / Trade / Fossil / Game Corner / Event
// Computed from AREAS data; Pokémon with any normal wild catch outside the Safari Zone
// are excluded (no constraint).
const SAFARI_BALL_AREA_IDS = new Set(["safari-zone"]);
const _NO_POKEBALL_METHODS = new Set(["Gift","Trade","Fossil","Event","Game Corner"]);
const _WILD_METHODS = new Set(["Grass","Cave","Surf","Old Rod","Good Rod","Super Rod"]);

const _catchFlags = {};
for (const area of AREAS) {
  for (const p of _allPokemon(area)) {
    if (!_catchFlags[p.name]) _catchFlags[p.name] = { wn:false, ws:false, sp:null };
    const f = _catchFlags[p.name];
    if (_WILD_METHODS.has(p.method)) {
      if (SAFARI_BALL_AREA_IDS.has(area.id)) f.ws = true;
      else f.wn = true;
    } else if (_NO_POKEBALL_METHODS.has(p.method) && !f.sp) {
      f.sp = p.method;
    }
  }
}
const CATCH_CONSTRAINT_MAP = {};
for (const [name, f] of Object.entries(_catchFlags)) {
  if (!f.wn) CATCH_CONSTRAINT_MAP[name] = f.ws ? "safari" : (f.sp || null);
}

const CONSTRAINT_STYLE = {
  "safari":      { label:"Safari",  color:"#4aaf74", desc:"Safari Zone only — Safari Ball required, not a regular Poké Ball" },
  "Gift":        { label:"Gift",    color:"#5b8dd9", desc:"Gift — received from an NPC, cannot be caught in the wild" },
  "Trade":       { label:"Trade",   color:"#9b6fd4", desc:"Trade only — obtained via in-game trade, cannot be caught in the wild" },
  "Fossil":      { label:"Fossil",  color:"#b09060", desc:"Fossil revival — restored at Cinnabar Lab, cannot be caught in the wild" },
  "Game Corner": { label:"Prize",   color:"#c8960a", desc:"Game Corner prize — redeemed with coins, cannot be caught in the wild" },
  "Event":       { label:"Event",   color:"#a87acc", desc:"Event only — not normally obtainable in-game" },
};

// ─── COLORS ──────────────────────────────────────────────────────────────────
const C = {
  bg:"#110d08", card:"#1c1510", border:"#3a2a1c",
  frRed:"#d4621a", lgGreen:"#3fa84a",
  accent:"#d4621a",  // static fallback; live version uses CSS var(--frlg-accent)
  gold:"#c8960a", green:"#4aaf74", lgGreen2:"#3fa84a",
  text:"#ede0d4", muted:"#8a7a6a", panel:"#231a12",
};

// ─── 100% COMPLETION CHECKLIST DATA ──────────────────────────────────────────
const COMPLETION_SECTIONS = [
  {
    id:"trainer-card", title:"Trainer Card Stars", color:"#d4b840",
    items:[
      { id:"star-hof",   label:"★   Hall of Fame",             note:"Defeat Elite Four + Champion Blue → Bronze card" },
      { id:"star-kanto", label:"★★  Kanto Pokédex",             note:"Own all 150 Kanto Pokémon (Mew excluded) → Copper card", auto:"kanto-dex" },
      { id:"star-natl",  label:"★★★  National Pokédex",         note:"Out of scope — requires Pokémon from many Gen III games", disabled:true },
      { id:"star-mini",  label:"★★★★  Pokémon Jump / Dodrio",   note:"Requires multiplayer + GBA Wireless Adapter", disabled:true },
    ],
  },
  {
    id:"sevii", title:"Sevii Islands Quests", color:"#5ab0d8",
    items:[
      { id:"sevii-123", label:"Unlocked Islands 1–3",           note:"Automatic after Bill escorts you post-Blaine" },
      { id:"ruby",      label:"Delivered Ruby to Celio",        note:"Find Ruby at Mt. Ember summit — One Island" },
      { id:"lostelle",  label:"Rescued Lostelle with Bill",     note:"Berry Forest — Three Island" },
      { id:"sapphire",  label:"Retrieved Sapphire",             note:"Dotted Hole — Five Island" },
      { id:"sevii-47",  label:"Unlocked Islands 4–7",           note:"Automatic after delivering Sapphire to Celio" },
      { id:"lorelei",   label:"Helped Lorelei at Icefall Cave", note:"Defeat Rockets — Four Island" },
    ],
  },
  {
    id:"diploma", title:"Diploma", color:C.green,
    items:[
      { id:"diploma", label:"Received Diploma", note:"Talk to Game Freak developer at Celadon Condominiums — requires owning all 150 Kanto Pokémon (Mew excluded)" },
    ],
  },
  {
    id:"hms", title:"HMs", color:"#a87acc",
    items:[
      { id:"hm-cut",        label:"Cut",        note:"Cap'n's gift aboard S.S. Anne" },
      { id:"hm-fly",        label:"Fly",        note:"Girl on Route 16" },
      { id:"hm-surf",       label:"Surf",       note:"Safari Zone warden" },
      { id:"hm-strength",   label:"Strength",   note:"Safari Zone warden — after returning his Gold Teeth" },
      { id:"hm-flash",      label:"Flash",      note:"Professor Oak's aide on Route 2 (10 Pokémon seen)" },
      { id:"hm-rock-smash", label:"Rock Smash", note:"Man on One Island" },
      { id:"hm-waterfall",  label:"Waterfall",  note:"Found in Icefall Cave — Four Island" },
    ],
  },
  {
    id:"trades", title:"In-Game Trades", color:C.gold,
    items:[
      { id:"trade-mr-mime",   label:"Mr. Mime",               auto:"mr-mime",   note:"Give Abra → Route 2 east gate. Not available in the wild — required for Pokédex." },
      { id:"trade-jynx",      label:"Jynx",                   auto:"jynx",      note:"Give Poliwhirl → Cerulean City house. Not available in the wild — required for Pokédex." },
      { id:"trade-farfetchd", label:"Farfetch'd",             auto:"farfetchd", note:"Give Spearow → Vermilion City. Not available in the wild — required for Pokédex." },
      { id:"trade-lickitung", label:"Lickitung",              auto:"lickitung", note:"Give Golduck (FR) or Slowbro (LG) → Route 18 gate. Not available in the wild — required for Pokédex." },
      { id:"trade-nidoran",   label:"Nidoran gender swap",    optional:true,    note:"Underground Path (5↔6): give Nidoran♀ (FR) or ♂ (LG) → receive opposite gender. Both catchable in the wild." },
      { id:"trade-nidevo",    label:"Nidorino / Nidorina",    optional:true,    note:"Route 11 gate: give Nidorino (FR) or Nidorina (LG) → receive the other. Both catchable in the wild (Safari Zone)." },
      { id:"trade-electrode", label:"Electrode",              optional:true,    note:"Give Raichu → Cinnabar Lab. Catchable in the wild at Power Plant." },
      { id:"trade-tangela",   label:"Tangela",                optional:true,    note:"Give Venonat → Cinnabar Lab. Catchable in the wild on Route 21." },
      { id:"trade-seel",      label:"Seel",                   optional:true,    note:"Give Ponyta → Cinnabar Lab. Catchable in the wild in Seafoam Islands." },
    ],
  },
  {
    id:"trainer-tower", title:"Trainer Tower (Seven Island)", color:"#c85252",
    items:[
      { id:"tt-single",   label:"Single mode cleared",   note:"7F tower, timed — best time recorded", reward:"Up-Grade" },
      { id:"tt-double",   label:"Double mode cleared",   note:"7F tower, timed — 2v2 battles",        reward:"Dragon Scale" },
      { id:"tt-knockout", label:"Knockout mode cleared", note:"7F tower, timed — elimination format",  reward:"Metal Coat" },
      { id:"tt-mixed",    label:"Mixed mode cleared",    note:"7F tower, timed — alternating formats", reward:"King's Rock" },
    ],
  },
];

// ─── AREA TYPE ────────────────────────────────────────────────────────────────
function getAreaType(area) {
  const n = area.name.toLowerCase();
  if (n.includes("route")) return "route";
  if (n.includes("cave") || n.includes("tunnel") || n.includes("mt. moon") ||
      n.includes("forest") || n.includes("tower") || n.includes("hideout") ||
      n.includes("mansion") || n.includes("rocket") || n.includes("dungeon")) return "cave";
  if (n.includes("s.s.") || n.includes("seafoam") || n.includes("sea") ||
      n.includes("anne") || n.includes("island")) return "water";
  if (n.includes("safari")) return "safari";
  if (n.includes("game corner") || n.includes("underground path")) return "special";
  return "city";
}
const AREA_TINT = {
  route:   { bar:"#4a8a38", bg:"rgba(40,90,28,0.13)" },
  cave:    { bar:"#7a6a52", bg:"rgba(80,65,45,0.14)" },
  water:   { bar:"#3a7acc", bg:"rgba(28,70,140,0.13)" },
  safari:  { bar:"#5aaa40", bg:"rgba(50,100,28,0.13)" },
  special: { bar:"#9a5acc", bg:"rgba(90,50,130,0.13)" },
  city:    { bar:"#c8960a", bg:"rgba(100,72,10,0.11)" },
};

// ─── GYM BADGES ──────────────────────────────────────────────────────────────
const BADGES = [
  { id:"boulder", name:"Boulder Badge", city:"Pewter City",    color:"#b0907a", shape:"octagon" },
  { id:"cascade", name:"Cascade Badge", city:"Cerulean City",  color:"#5aaadd", shape:"drop"    },
  { id:"thunder", name:"Thunder Badge", city:"Vermilion City", color:"#e0d040", shape:"bolt"    },
  { id:"rainbow", name:"Rainbow Badge", city:"Celadon City",   color:"#e06898", shape:"flower"  },
  { id:"soul",    name:"Soul Badge",    city:"Fuchsia City",   color:"#b06ad0", shape:"cross"   },
  { id:"marsh",   name:"Marsh Badge",   city:"Saffron City",   color:"#60b8d8", shape:"hex"     },
  { id:"volcano", name:"Volcano Badge", city:"Cinnabar Island",color:"#e04828", shape:"tri"     },
  { id:"earth",   name:"Earth Badge",   city:"Viridian City",  color:"#c0a030", shape:"globe"   },
];

// ─── KANTO MAP NODES ─────────────────────────────────────────────────────────
const MAP_NODES = [
  { id:"pallet-town",          x:52,  y:178, label:"Pallet",    type:"city"    },
  { id:"route1",               x:52,  y:162, label:"Rt.1",      type:"route"   },
  { id:"viridian-city",        x:52,  y:145, label:"Viridian",  type:"city"    },
  { id:"route22",              x:28,  y:152, label:"Rt.22",     type:"route"   },
  { id:"route2-west",          x:52,  y:130, label:"Rt.2W",     type:"route"   },
  { id:"viridian-forest",      x:52,  y:117, label:"V.Forest",  type:"dungeon" },
  { id:"route2-east",          x:52,  y:117, label:"Rt.2E",     type:"route"   },
  { id:"pewter-city",          x:52,  y:98,  label:"Pewter",    type:"city"    },
  { id:"route3",               x:78,  y:91,  label:"Rt.3",      type:"route"   },
  { id:"route4-west",          x:96,  y:85,  label:"Rt.4W",     type:"route"   },
  { id:"mt-moon",              x:105, y:82,  label:"Mt.Moon",   type:"dungeon" },
  { id:"route4-east",          x:115, y:78,  label:"Rt.4E",     type:"route"   },
  { id:"cerulean-city",        x:126, y:72,  label:"Cerulean",  type:"city"    },
  { id:"cerulean-city-return", x:126, y:72,  label:"",          type:"city"    },
  { id:"route24",              x:140, y:60,  label:"Rt.24",     type:"route"   },
  { id:"route25",              x:156, y:54,  label:"Rt.25",     type:"route"   },
  { id:"route5",               x:126, y:96,  label:"Rt.5",      type:"route"   },
  { id:"underground-5-6",      x:110, y:110, label:"UG 5↔6",   type:"dungeon" },
  { id:"route6",               x:126, y:118, label:"Rt.6",      type:"route"   },
  { id:"vermilion-city",       x:126, y:135, label:"Vermilion", type:"city"    },
  { id:"ss-anne",              x:140, y:143, label:"S.S.Anne",  type:"dungeon" },
  { id:"route11",              x:148, y:133, label:"Rt.11",     type:"route"   },
  { id:"digletts-cave",        x:82,  y:145, label:"Dgt.Cave",  type:"dungeon" },
  { id:"route9",               x:148, y:88,  label:"Rt.9",      type:"route"   },
  { id:"route10-north",        x:155, y:99,  label:"Rt.10N",    type:"route"   },
  { id:"rock-tunnel",          x:160, y:110, label:"RockTnl",   type:"dungeon" },
  { id:"route10-south",        x:160, y:121, label:"Rt.10S",    type:"route"   },
  { id:"route8",               x:138, y:110, label:"Rt.8",      type:"route"   },
  { id:"route7",               x:108, y:110, label:"Rt.7",      type:"route"   },
  { id:"lavender-town",        x:168, y:110, label:"Lavender",  type:"city"    },
  { id:"pokemon-tower",        x:168, y:110, label:"",          type:"dungeon" },
  { id:"celadon-city",         x:84,  y:110, label:"Celadon",   type:"city"    },
  { id:"celadon-game-corner",  x:84,  y:110, label:"",          type:"dungeon" },
  { id:"rocket-hideout",       x:84,  y:110, label:"",          type:"dungeon" },
  { id:"route16",              x:64,  y:124, label:"Rt.16",     type:"route"   },
  { id:"route17",              x:64,  y:140, label:"Rt.17",     type:"route"   },
  { id:"route18",              x:72,  y:155, label:"Rt.18",     type:"route"   },
  { id:"fuchsia-city",         x:82,  y:163, label:"Fuchsia",   type:"city"    },
  { id:"safari-zone",          x:64,  y:163, label:"Safari",    type:"dungeon" },
  { id:"route12",              x:168, y:124, label:"Rt.12",     type:"route"   },
  { id:"route13",              x:162, y:138, label:"Rt.13",     type:"route"   },
  { id:"route14",              x:152, y:150, label:"Rt.14",     type:"route"   },
  { id:"route15",              x:120, y:163, label:"Rt.15",     type:"route"   },
];
const MAP_CONNECTIONS = [
  ["pallet-town","route1"],["route1","viridian-city"],
  ["viridian-city","route22"],
  ["viridian-city","route2-west"],["route2-west","viridian-forest"],["viridian-forest","pewter-city"],
  ["pewter-city","route3"],["route3","route4-west"],["route4-west","mt-moon"],["mt-moon","route4-east"],["route4-east","cerulean-city"],
  ["cerulean-city","route24"],["route24","route25"],
  ["cerulean-city","route5"],["route5","underground-5-6"],["underground-5-6","route6"],["route6","vermilion-city"],
  ["vermilion-city","ss-anne"],["vermilion-city","route11"],
  ["cerulean-city","route9"],["route9","route10-north"],["route10-north","rock-tunnel"],["rock-tunnel","route10-south"],
  ["route10-south","lavender-town"],["lavender-town","route12"],
  ["lavender-town","route8"],["route8","route7"],["route7","celadon-city"],
  ["route8","route11"],
  ["celadon-city","route16"],["route16","route17"],["route17","route18"],["route18","fuchsia-city"],
  ["fuchsia-city","safari-zone"],["fuchsia-city","route15"],
  ["route12","route13"],["route13","route14"],["route14","route15"],
  ["viridian-city","digletts-cave"],["digletts-cave","route11"],
  ["route9","cerulean-city"],
];

// Parts that have been fully audited against the Bulbapedia walkthrough — extend as each part is verified.
const AUDITED_PARTS = new Set(["Part 1", "Part 2", "Part 3", "Part 4", "Part 5", "Part 6", "Part 7", "Part 8", "Part 9", "Part 10", "Part 11", "Part 12", "Part 13", "Part 14", "Part 15", "Part 16", "Part 17"]);

// ─── CATCH RATE DATA ──────────────────────────────────────────────────────────
// Gen III base catch rates for all 151 Kanto Pokémon (FRLG)
const CATCH_RATE_DATA = [
  {id:1,  name:"Bulbasaur",   rate:45}, {id:2,  name:"Ivysaur",    rate:45}, {id:3,  name:"Venusaur",   rate:45},
  {id:4,  name:"Charmander",  rate:45}, {id:5,  name:"Charmeleon", rate:45}, {id:6,  name:"Charizard",  rate:45},
  {id:7,  name:"Squirtle",    rate:45}, {id:8,  name:"Wartortle",  rate:45}, {id:9,  name:"Blastoise",  rate:45},
  {id:10, name:"Caterpie",    rate:255},{id:11, name:"Metapod",    rate:120},{id:12, name:"Butterfree", rate:45},
  {id:13, name:"Weedle",      rate:255},{id:14, name:"Kakuna",     rate:120},{id:15, name:"Beedrill",   rate:45},
  {id:16, name:"Pidgey",      rate:255},{id:17, name:"Pidgeotto",  rate:120},{id:18, name:"Pidgeot",    rate:45},
  {id:19, name:"Rattata",     rate:255},{id:20, name:"Raticate",   rate:127},
  {id:21, name:"Spearow",     rate:255},{id:22, name:"Fearow",     rate:90},
  {id:23, name:"Ekans",       rate:255},{id:24, name:"Arbok",      rate:90},
  {id:25, name:"Pikachu",     rate:190},{id:26, name:"Raichu",     rate:75},
  {id:27, name:"Sandshrew",   rate:255},{id:28, name:"Sandslash",  rate:90},
  {id:29, name:"Nidoran♀",    rate:235},{id:30, name:"Nidorina",   rate:120},{id:31, name:"Nidoqueen",  rate:45},
  {id:32, name:"Nidoran♂",    rate:235},{id:33, name:"Nidorino",   rate:120},{id:34, name:"Nidoking",   rate:45},
  {id:35, name:"Clefairy",    rate:150},{id:36, name:"Clefable",   rate:25},
  {id:37, name:"Vulpix",      rate:190},{id:38, name:"Ninetales",  rate:75},
  {id:39, name:"Jigglypuff",  rate:170},{id:40, name:"Wigglytuff", rate:50},
  {id:41, name:"Zubat",       rate:255},{id:42, name:"Golbat",     rate:90},
  {id:43, name:"Oddish",      rate:255},{id:44, name:"Gloom",      rate:120},{id:45, name:"Vileplume",  rate:45},
  {id:46, name:"Paras",       rate:190},{id:47, name:"Parasect",   rate:75},
  {id:48, name:"Venonat",     rate:190},{id:49, name:"Venomoth",   rate:75},
  {id:50, name:"Diglett",     rate:255},{id:51, name:"Dugtrio",    rate:50},
  {id:52, name:"Meowth",      rate:255},{id:53, name:"Persian",    rate:90},
  {id:54, name:"Psyduck",     rate:190},{id:55, name:"Golduck",    rate:75},
  {id:56, name:"Mankey",      rate:190},{id:57, name:"Primeape",   rate:75},
  {id:58, name:"Growlithe",   rate:190},{id:59, name:"Arcanine",   rate:75},
  {id:60, name:"Poliwag",     rate:255},{id:61, name:"Poliwhirl",  rate:120},{id:62, name:"Poliwrath",  rate:45},
  {id:63, name:"Abra",        rate:200},{id:64, name:"Kadabra",    rate:100},{id:65, name:"Alakazam",   rate:50},
  {id:66, name:"Machop",      rate:180},{id:67, name:"Machoke",    rate:90}, {id:68, name:"Machamp",    rate:45},
  {id:69, name:"Bellsprout",  rate:255},{id:70, name:"Weepinbell", rate:120},{id:71, name:"Victreebel", rate:45},
  {id:72, name:"Tentacool",   rate:190},{id:73, name:"Tentacruel", rate:60},
  {id:74, name:"Geodude",     rate:255},{id:75, name:"Graveler",   rate:120},{id:76, name:"Golem",      rate:45},
  {id:77, name:"Ponyta",      rate:190},{id:78, name:"Rapidash",   rate:60},
  {id:79, name:"Slowpoke",    rate:190},{id:80, name:"Slowbro",    rate:75},
  {id:81, name:"Magnemite",   rate:190},{id:82, name:"Magneton",   rate:60},
  {id:83, name:"Farfetch'd",  rate:45},
  {id:84, name:"Doduo",       rate:190},{id:85, name:"Dodrio",     rate:45},
  {id:86, name:"Seel",        rate:190},{id:87, name:"Dewgong",    rate:75},
  {id:88, name:"Grimer",      rate:190},{id:89, name:"Muk",        rate:75},
  {id:90, name:"Shellder",    rate:190},{id:91, name:"Cloyster",   rate:60},
  {id:92, name:"Gastly",      rate:190},{id:93, name:"Haunter",    rate:90}, {id:94, name:"Gengar",     rate:45},
  {id:95, name:"Onix",        rate:45},
  {id:96, name:"Drowzee",     rate:190},{id:97, name:"Hypno",      rate:75},
  {id:98, name:"Krabby",      rate:225},{id:99, name:"Kingler",    rate:60},
  {id:100,name:"Voltorb",     rate:190},{id:101,name:"Electrode",  rate:60},
  {id:102,name:"Exeggcute",   rate:90}, {id:103,name:"Exeggutor",  rate:45},
  {id:104,name:"Cubone",      rate:190},{id:105,name:"Marowak",    rate:75},
  {id:106,name:"Hitmonlee",   rate:45}, {id:107,name:"Hitmonchan", rate:45},
  {id:108,name:"Lickitung",   rate:45},
  {id:109,name:"Koffing",     rate:190},{id:110,name:"Weezing",    rate:60},
  {id:111,name:"Rhyhorn",     rate:120},{id:112,name:"Rhydon",     rate:60},
  {id:113,name:"Chansey",     rate:30},
  {id:114,name:"Tangela",     rate:45},
  {id:115,name:"Kangaskhan",  rate:45},
  {id:116,name:"Horsea",      rate:225},{id:117,name:"Seadra",     rate:75},
  {id:118,name:"Goldeen",     rate:225},{id:119,name:"Seaking",    rate:60},
  {id:120,name:"Staryu",      rate:225},{id:121,name:"Starmie",    rate:60},
  {id:122,name:"Mr. Mime",    rate:45},
  {id:123,name:"Scyther",     rate:45},
  {id:124,name:"Jynx",        rate:45},
  {id:125,name:"Electabuzz",  rate:45},
  {id:126,name:"Magmar",      rate:45},
  {id:127,name:"Pinsir",      rate:45},
  {id:128,name:"Tauros",      rate:45},
  {id:129,name:"Magikarp",    rate:255},{id:130,name:"Gyarados",   rate:45},
  {id:131,name:"Lapras",      rate:45},
  {id:132,name:"Ditto",       rate:35},
  {id:133,name:"Eevee",       rate:45},
  {id:134,name:"Vaporeon",    rate:45},{id:135,name:"Jolteon",    rate:45},{id:136,name:"Flareon",    rate:45},
  {id:137,name:"Porygon",     rate:45},
  {id:138,name:"Omanyte",     rate:45},{id:139,name:"Omastar",    rate:45},
  {id:140,name:"Kabuto",      rate:45},{id:141,name:"Kabutops",   rate:45},
  {id:142,name:"Aerodactyl",  rate:45},
  {id:143,name:"Snorlax",     rate:25},
  {id:144,name:"Articuno",    rate:3},
  {id:145,name:"Zapdos",      rate:3},
  {id:146,name:"Moltres",     rate:3},
  {id:147,name:"Dratini",     rate:45},{id:148,name:"Dragonair",  rate:45},{id:149,name:"Dragonite",  rate:45},
  {id:150,name:"Mewtwo",      rate:3},
  {id:151,name:"Mew",         rate:45},
];

// ─── SPRITES ─────────────────────────────────────────────────────────────────
const DEX_ID = Object.fromEntries(DEX.map(p => [p.name, p.id]));
const pokeSpriteUrl = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

const ITEM_SPRITE = {
  "Antidote":"antidote","Potion":"potion","Poké Ball":"poke-ball","Poké Ball ×5":"poke-ball",
  "Great Ball":"great-ball","Ultra Ball":"ultra-ball","Master Ball":"master-ball",
  "Town Map":"town-map","Oak's Parcel":"oaks-parcel","Teachy TV":"teachy-tv",
  "HP Up":"hp-up","Old Amber":"old-amber",
  "TM28 Dig":"tm-ground","TM39 Rock Tomb":"tm-rock",
  "Oran Berry":"oran-berry","Persim Berry":"persim-berry","Razz Berry":"razz-berry",
  "Pecha Berry":"pecha-berry","Bluk Berry":"bluk-berry",
  "Elixir":"elixir","Ether":"ether","Revive":"revive","Rare Candy":"rare-candy",
  "Star Piece":"star-piece","Escape Rope":"escape-rope",
  "Paralyze Heal":"paralyze-heal","Awakening":"awakening","Ice Heal":"ice-heal","Burn Heal":"burn-heal",
  "Tiny Mushroom":"tiny-mushroom","Big Mushroom":"big-mushroom","Moon Stone":"moon-stone",
  "TM09 Bullet Seed":"tm-grass","TM46 Thief":"tm-dark","TM05 Roar":"tm-normal",
  "TM45 Attract":"tm-normal","TM43 Secret Power":"tm-normal","TM03 Water Pulse":"tm-water",
  "Bicycle":"bicycle","Nugget":"nugget",
  "Dome Fossil":"dome-fossil","Helix Fossil":"helix-fossil",
  "Powder Jar":"powder-jar","Fame Checker":"fame-checker","S.S. Ticket":"ss-ticket",
  "Sitrus Berry":"sitrus-berry","Cheri Berry":"cheri-berry","Chesto Berry":"chesto-berry",
  "Max Ether":"max-ether","Vs. Seeker":"vs-seeker","Old Rod":"old-rod",
  "Bike Voucher":"bike-voucher","TM34 Shock Wave":"tm-electric","TM31 Brick Break":"tm-fighting",
  "TM44 Rest":"tm-normal","Hyper Potion":"hyper-potion","Super Potion":"super-potion",
  "X Attack":"x-attack","HM01 Cut":"hm01","Lava Cookie":"lava-cookie","Stardust":"stardust",
  "X Defend":"x-defend","Itemfinder":"itemfinder","HM05 Flash":"hm05",
  "TM40 Aerial Ace":"tm-flying","Everstone":"everstone",
  "Repel":"repel","Pearl":"pearl","Full Heal":"full-heal","PP Up":"pp-up",
  "Coin Case":"coin-case","Tea":"tea","Silph Scope":"silph-scope",
  "Poké Flute":"poke-flute","Cleanse Tag":"cleanse-tag",
  "TM16 Light Screen":"tm-psychic","TM20 Safeguard":"tm-normal","TM33 Reflect":"tm-psychic",
  "TM18 Rain Dance":"tm-water","TM19 Giga Drain":"tm-grass",
  "TM12 Taunt":"tm-dark","TM49 Snatch":"tm-dark","TM21 Frustration":"tm-normal",
  "Black Glasses":"black-glasses","Net Ball":"net-ball","Nest Ball":"nest-ball",
  "Calcium":"calcium","Protein":"protein","Lift Key":"lift-key",
  "X Speed":"x-speed","X Sp. Atk":"x-sp-atk","TM24 Thunderbolt":"tm-electric","TM35 Flamethrower":"tm-fire",
  "TM01 Focus Punch":"tm-fighting","TM04 Calm Mind":"tm-psychic","TM08 Bulk Up":"tm-fighting",
  "TM29 Psychic":"tm-psychic","TM41 Torment":"tm-dark","Card Key":"card-key",
  "TM27 Return":"tm-normal","TM48 Skill Swap":"tm-psychic",
  "TM06 Toxic":"tm-poison","TM32 Double Team":"tm-normal",
  "Good Rod":"good-rod","Super Rod":"super-rod",
  "HM03 Surf":"hm03","HM04 Strength":"hm04",
  "Gold Teeth":"gold-teeth","Iron":"iron","Max Revive":"max-revive",
  "Zinc":"zinc","Nanab Berry":"nanab-berry","Wepear Berry":"wepear-berry",
  "Lum Berry":"lum-berry","Leppa Berry":"leppa-berry","Rawst Berry":"rawst-berry",
  "Pinap Berry":"pinap-berry",
  "Amulet Coin":"amulet-coin","Leftovers":"leftovers",
  "Full Restore":"full-restore","Max Elixir":"max-elixir","Max Potion":"max-potion",
  "X Accuracy":"x-accuracy","Soothe Bell":"soothe-bell",
  "HM02 Fly":"hm02",
  "TM11 Sunny Day":"tm-fire","TM37 Sandstorm":"tm-rock",
  "TM42 Facade":"tm-normal","TM47 Steel Wing":"tm-steel",
  "Quick Claw":"quick-claw","Leaf Stone":"leaf-stone","Carbos":"carbos",
  "Big Pearl":"big-pearl","Water Stone":"water-stone",
  "Secret Key":"secret-key","TM14 Blizzard":"tm-ice","TM22 SolarBeam":"tm-grass","TM38 Fire Blast":"tm-fire",
  "PP Max":"pp-max","Max Repel":"max-repel","Dire Hit":"dire-hit",
  "Fire Stone":"fire-stone","HM06 Rock Smash":"hm06",
  "Iapapa Berry":"iapapa-berry","Aspear Berry":"aspear-berry",
  "Thunder Stone":"thunder-stone","TM17 Protect":"tm-normal","TM25 Thunder":"tm-electric",
  "Macho Brace":"macho-brace",
  "TM02 Dragon Claw":"tm-dragon","TM07 Hail":"tm-ice","Guard Spec.":"guard-spec","TM50 Overheat":"tm-fire",
};
const itemSpriteUrl = name => { const s = ITEM_SPRITE[name]; return s ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${s}.png` : null; };
const METHOD_SPRITE_URL = {
  "Surf":      pokeSpriteUrl(131),
  "Old Rod":   itemSpriteUrl("Old Rod"),
  "Good Rod":  itemSpriteUrl("Good Rod"),
  "Super Rod": itemSpriteUrl("Super Rod"),
};

const TRAINER_CLASS_SPRITE = {
  "Bug Catcher":"bugcatcher","Camper":"camper","Lass":"lass","Youngster":"youngster",
  "Hiker":"hiker","Super Nerd":"supernerd","Team Rocket Grunt":"teamrocket",
  "Picnicker":"picnicker","Swimmer":"swimmer","Swimmer♂":"swimmer","Swimmer♀":"swimmerf",
  "Sis and Bro":"sisandbro-gen3",
  "Gentleman":"gentleman","Fisherman":"fisherman","Sailor":"sailor","Engineer":"engineer",
  "Gamer":"gamer-gen3","PokéManiac":"pokemaniac","Cue Ball":"cueball-gen3",
  "Biker":"biker","Twins":"twins-gen3","Channeler":"channeler-gen3",
  "Beauty":"beauty","Cooltrainer":"beauty","Bird Keeper":"birdkeeper",
  "Young Couple":"youngcouple","Rocker":"rocker-gen3",
  "Crush Kin":"crushkin-gen3","Juggler":"juggler","Tamer":"tamer-gen3",
  "Scientist":"scientist","Black Belt":"blackbelt-gen3","Psychic":"psychic-gen3",
  "Burglar":"burglar",
  "Crush Girl":"crushgirl-gen3","Pokémon Ranger":"pokemonranger-gen3",
  "Aroma Lady":"aromalady-gen3","Tuber♀":"tuberf-gen3",
  "Cool Couple":"coolcouple-gen3","Elite Four":"elite-four-gen3",
};
const TRAINER_NAME_SPRITE  = {"Brock":"brock","Misty":"misty","Lt. Surge":"lt-surge","Blue":"blue","Giovanni":"giovanni","Erika":"erika","Koga":"koga","Sabrina":"sabrina","Blaine":"blaine","Lorelei":"lorelei","Bruno":"bruno","Agatha":"agatha","Lance":"lance"};
const trainerSpriteUrl = (cls, name) => { const s = TRAINER_NAME_SPRITE[name] || TRAINER_CLASS_SPRITE[cls]; return s ? `https://play.pokemonshowdown.com/sprites/trainers/${s}.png` : null; };

function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }
function groupByPart(arr) { return arr.reduce((a, x) => { (a[x.part] = a[x.part]||[]).push(x); return a; }, {}); }

// ─── BADGE SVG ───────────────────────────────────────────────────────────────
function BadgeSVG({ shape, color, earned, size=24 }) {
  const s = size, h = s/2;
  const fill = earned ? color : "transparent";
  const stroke = color;
  const sw = 1.5;
  switch (shape) {
    case "octagon": return <svg viewBox="0 0 24 24" width={s} height={s}><polygon points="8,2 16,2 22,8 22,16 16,22 8,22 2,16 2,8" fill={fill} stroke={stroke} strokeWidth={sw}/></svg>;
    case "drop":    return <svg viewBox="0 0 24 24" width={s} height={s}><path d="M12,2 C12,2 4,10 4,15 A8,8 0 0 0 20,15 C20,10 12,2 12,2Z" fill={fill} stroke={stroke} strokeWidth={sw}/></svg>;
    case "bolt":    return <svg viewBox="0 0 24 24" width={s} height={s}><polygon points="14,2 8,13 12,13 10,22 18,10 13,10" fill={fill} stroke={stroke} strokeWidth={sw}/></svg>;
    case "flower":  return <svg viewBox="0 0 24 24" width={s} height={s}><circle cx="12" cy="12" r="4" fill={fill} stroke={stroke} strokeWidth={sw}/>{[0,60,120,180,240,300].map(a=><ellipse key={a} cx={12+Math.cos(a*Math.PI/180)*6} cy={12+Math.sin(a*Math.PI/180)*6} rx="3" ry="2.5" transform={`rotate(${a},${12+Math.cos(a*Math.PI/180)*6},${12+Math.sin(a*Math.PI/180)*6})`} fill={fill} stroke={stroke} strokeWidth={sw}/>)}</svg>;
    case "cross":   return <svg viewBox="0 0 24 24" width={s} height={s}><path d="M10,2 L14,2 L14,10 L22,10 L22,14 L14,14 L14,22 L10,22 L10,14 L2,14 L2,10 L10,10 Z" fill={fill} stroke={stroke} strokeWidth={sw}/></svg>;
    case "hex":     return <svg viewBox="0 0 24 24" width={s} height={s}><polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill={fill} stroke={stroke} strokeWidth={sw}/></svg>;
    case "tri":     return <svg viewBox="0 0 24 24" width={s} height={s}><polygon points="12,2 22,20 2,20" fill={fill} stroke={stroke} strokeWidth={sw}/></svg>;
    case "globe":   return <svg viewBox="0 0 24 24" width={s} height={s}><circle cx="12" cy="12" r="9" fill={fill} stroke={stroke} strokeWidth={sw}/><ellipse cx="12" cy="12" rx="4.5" ry="9" fill="none" stroke={stroke} strokeWidth={sw-0.5}/><line x1="3" y1="12" x2="21" y2="12" stroke={stroke} strokeWidth={sw-0.5}/></svg>;
    default: return null;
  }
}

function GymBadgeStrip({ earned, toggleBadge }) {
  const earnedCount = BADGES.filter(b => earned[b.id]).length;
  return (
    <div style={{ display:"flex", alignItems:"center", gap:4, margin:"10px 0 2px", flexWrap:"wrap" }}>
      <span style={{ fontSize:9, color:C.muted, letterSpacing:1.5, textTransform:"uppercase", marginRight:4, flexShrink:0 }}>Badges</span>
      {BADGES.map(b => {
        const isEarned = !!earned[b.id];
        return (
          <button key={b.id} onClick={() => toggleBadge(b.id)}
            title={`${b.name} — ${b.city}${isEarned ? " ✓" : ""}`}
            style={{ background:"none", border:"none", cursor:"pointer", padding:"2px", lineHeight:0,
              opacity: isEarned ? 1 : 0.22,
              filter: isEarned ? `drop-shadow(0 0 4px ${b.color}88)` : "none",
              transition:"all 0.2s", transform: isEarned ? "scale(1.05)" : "scale(1)" }}>
            <BadgeSVG shape={b.shape} color={b.color} earned={isEarned} size={22} />
          </button>
        );
      })}
      <span style={{ fontSize:10, color:C.muted, marginLeft:2 }}>{earnedCount}/8</span>
    </div>
  );
}

// ─── KANTO MAP ────────────────────────────────────────────────────────────────
function KantoMap({ areaId, setAreaId }) {
  const auditedIds = useMemo(() => new Set(AREAS.filter(a => AUDITED_PARTS.has(a.part)).map(a => a.id)), []);
  // De-duplicate overlapping node positions — prefer audited area
  const uniqueNodes = useMemo(() => {
    const seen = {};
    MAP_NODES.forEach(n => {
      const key = `${n.x},${n.y}`;
      if (!seen[key] || auditedIds.has(n.id)) seen[key] = n;
    });
    return Object.values(seen);
  }, [auditedIds]);

  return (
    <div style={{ display:"flex", flexDirection:"column", borderBottom:`1px solid ${C.border}` }}>
      <div style={{ padding:"6px 10px 2px", fontSize:9, color:C.muted, letterSpacing:1.5, textTransform:"uppercase" }}>Kanto Map</div>
      <svg viewBox="10 45 175 145" style={{ width:"100%", height:"auto", display:"block" }}>
        {/* Water background */}
        <rect x="10" y="45" width="175" height="145" fill="#0d1e2e" />
        {/* Land */}
        <polygon points="20,185 20,95 50,65 75,55 90,55 130,55 175,60 185,75 185,130 165,175 120,185" fill="#151e10" />

        {/* Connections */}
        {MAP_CONNECTIONS.map(([aid, bid], i) => {
          const a = MAP_NODES.find(n => n.id === aid);
          const b = MAP_NODES.find(n => n.id === bid);
          if (!a || !b) return null;
          return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#2e3e24" strokeWidth="1.2" />;
        })}

        {/* Nodes */}
        {uniqueNodes.map(node => {
          const isAudited = auditedIds.has(node.id);
          const isSel = areaId === node.id;
          const isCity = node.type === "city";
          const r = isCity ? 4.5 : 2.8;
          const color = isSel ? "var(--frlg-accent)" : isAudited ? (isCity ? "#c4a888" : "#6a8858") : "#2e2e2e";
          const clickable = isAudited;
          return (
            <g key={node.id} style={{ cursor: clickable ? "pointer" : "default" }}
               onClick={() => clickable && setAreaId(node.id)}>
              {clickable && <circle cx={node.x} cy={node.y} r={r+5} fill="transparent" />}
              {isSel && <circle cx={node.x} cy={node.y} r={r+3} fill="var(--frlg-accent)" opacity="0.2" />}
              <circle cx={node.x} cy={node.y} r={r}
                fill={color}
                stroke={isSel ? "var(--frlg-accent)" : isCity && isAudited ? "#8a7060" : "transparent"}
                strokeWidth="1" />
              {node.label && isCity && isAudited && (
                <text x={node.x} y={node.y - 6} textAnchor="middle"
                  fill={isSel ? "var(--frlg-accent)" : "#b0987a"}
                  fontSize="5.2" fontFamily="'DM Sans',sans-serif" fontWeight={isSel?"700":"400"}>{node.label}</text>
              )}
              {node.label && !isCity && isAudited && node.type === "dungeon" && (
                <text x={node.x+4} y={node.y+1} textAnchor="start"
                  fill="#6a8858" fontSize="4.5" fontFamily="'DM Sans',sans-serif">{node.label}</text>
              )}
            </g>
          );
        })}
      </svg>
      <div style={{ display:"flex", gap:12, padding:"2px 10px 8px", fontSize:9, color:C.muted }}>
        <span><span style={{ color:"#c4a888" }}>●</span> City</span>
        <span><span style={{ color:"#6a8858" }}>●</span> Area</span>
        <span><span style={{ color:"#2e2e2e" }}>●</span> Pending</span>
      </div>
    </div>
  );
}

// ─── LIVING DEX PANEL ────────────────────────────────────────────────────────
function LivingDexPanel({ caught }) {
  const [open, setOpen] = useState(false);
  const tradeEvo   = ["Alakazam","Gengar","Machamp","Golem"];
  const fossilPair = [["Kabuto","Omanyte"],["Kabutops","Omastar"]];
  const dojo       = ["Hitmonlee","Hitmonchan"];
  const versionEx  = DEX.filter(p => p.frOnly || p.lgOnly);
  const eventOnly  = DEX.filter(p => p.event);

  const needTrade  = tradeEvo.filter(n => !caught[n]);
  const needVersion= versionEx.filter(p => !caught[p.name]);
  const needEvent  = eventOnly.filter(p => !caught[p.name]);
  const fossilMissing = ["Kabuto","Omanyte","Kabutops","Omastar"].filter(n=>!caught[n]);
  const dojoMissing   = dojo.filter(n => !caught[n]);

  const issues = needTrade.length + needVersion.length + needEvent.length + fossilMissing.length + dojoMissing.length;

  return (
    <div style={{ margin:"16px 16px 0", background:C.card, border:`1px solid ${C.border}`, borderRadius:10, overflow:"hidden" }}>
      <div onClick={() => setOpen(o=>!o)} style={{ padding:"10px 14px", cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"center", background:"rgba(0,0,0,0.12)" }}>
        <span style={{ fontSize:12, fontWeight:"600" }}>Living Dex Checklist</span>
        <div style={{ display:"flex", gap:8, alignItems:"center" }}>
          {issues > 0 && <span style={{ fontSize:10, color:C.gold, background:"rgba(200,150,10,0.12)", border:`1px solid rgba(200,150,10,0.3)`, padding:"1px 8px", borderRadius:99 }}>{issues} remaining</span>}
          <span style={{ color:C.muted, fontSize:11 }}>{open ? "▲" : "▼"}</span>
        </div>
      </div>
      {open && (
        <div style={{ padding:"12px 14px", display:"flex", flexDirection:"column", gap:12 }}>
          <LDexSection title="Trade Evolutions" color="#a87acc" items={tradeEvo.map(n=>({ name:n, done:!!caught[n], note:"Requires trade to evolve" }))} />
          <LDexSection title="Fossil Choice (one per file)" color={C.gold} items={[
            { name:"Kabuto",   done:!!caught["Kabuto"],   note:"Dome Fossil → Cinnabar Lab" },
            { name:"Omanyte",  done:!!caught["Omanyte"],  note:"Helix Fossil → Cinnabar Lab" },
            { name:"Kabutops", done:!!caught["Kabutops"], note:"Evolve Kabuto Lv.40" },
            { name:"Omastar",  done:!!caught["Omastar"],  note:"Evolve Omanyte Lv.40" },
          ]} note="⚠ Only one fossil per save — trade for the other." />
          <LDexSection title="Fighting Dojo (one per file)" color={C.gold} items={[
            { name:"Hitmonlee",  done:!!caught["Hitmonlee"],  note:"Left choice at Fighting Dojo" },
            { name:"Hitmonchan", done:!!caught["Hitmonchan"], note:"Right choice at Fighting Dojo" },
          ]} note="⚠ Only one per save — trade for the other." />
          <LDexSection title="Version Exclusives (FR)" color="#d46060" items={DEX.filter(p=>p.frOnly).map(p=>({ name:p.name, done:!!caught[p.name], note:"FireRed only — trade from LG" }))} />
          <LDexSection title="Version Exclusives (LG)" color="#3fa84a" items={DEX.filter(p=>p.lgOnly).map(p=>({ name:p.name, done:!!caught[p.name], note:"LeafGreen only — trade from FR" }))} />
          <LDexSection title="Event / Special" color="#a87acc" items={eventOnly.map(p=>({ name:p.name, done:!!caught[p.name], note:"Event-only — not obtainable in normal gameplay" }))} />
        </div>
      )}
    </div>
  );
}

function LDexSection({ title, color, items, note }) {
  const done = items.filter(i=>i.done).length;
  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
        <span style={{ fontSize:11, fontWeight:"600", color }}>{title}</span>
        <span style={{ fontSize:10, color: done===items.length ? C.green : C.muted }}>{done}/{items.length}</span>
      </div>
      {note && <div style={{ fontSize:10, color:C.gold, marginBottom:6, lineHeight:1.5 }}>{note}</div>}
      <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
        {items.map(item => (
          <div key={item.name} title={item.note} style={{
            display:"flex", alignItems:"center", gap:5, padding:"3px 8px",
            background: item.done ? "rgba(74,175,116,0.08)" : "rgba(0,0,0,0.2)",
            border:`1px solid ${item.done ? C.green : C.border}`,
            borderRadius:6, fontSize:11, color: item.done ? C.green : C.muted,
            textDecoration: item.done ? "line-through" : "none",
          }}>
            <img src={pokeSpriteUrl(DEX_ID[item.name])} alt={item.name} style={{ width:20, height:20, imageRendering:"pixelated", opacity: item.done ? 1 : 0.4, filter: item.done ? "none" : "brightness(0)" }} />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── ROOT COMPONENT ───────────────────────────────────────────────────────────
function FireRedTracker() {
  const isMobile = useIsMobile();
  const [tab, setTab]           = useState("areas");
  const [caught, setCaught]     = useState({});
  const [items, setItems]       = useState({});
  const [trainers, setTrainers] = useState({});
  const [areaId, setAreaId]     = useState(null);
  const [dexFilter, setDexFilter] = useState("all");
  const [dexSelected, setDexSelected] = useState(null);
  const [search, setSearch]     = useState("");
  const [booted, setBooted]     = useState(false);
  const [version, setVersion]   = useState("fr");   // "fr" | "lg"
  const [badges, setBadges]     = useState({});      // {badgeId: true}
  const [checklist, setChecklist] = useState({});   // {itemId: true}


  useEffect(() => {
    (async () => {
      try { const r = localStorage.getItem("fr-caught5");   if (r) setCaught(JSON.parse(r));   } catch {}
      try { const r = localStorage.getItem("fr-items5");    if (r) setItems(JSON.parse(r));    } catch {}
      try { const r = localStorage.getItem("fr-trainers1"); if (r) setTrainers(JSON.parse(r)); } catch {}
      try { const r = localStorage.getItem("frlg-version"); if (r) setVersion(r);              } catch {}
      try { const r = localStorage.getItem("frlg-badges");     if (r) setBadges(JSON.parse(r));    } catch {}
      try { const r = localStorage.getItem("frlg-checklist"); if (r) setChecklist(JSON.parse(r)); } catch {}

      setBooted(true);
    })();
  }, []);

  const handleSetVersion = (v) => {
    setVersion(v);
    try { localStorage.setItem("frlg-version", v); } catch {}
  };

  const handleExport = () => {
    const data = {
      caught:    localStorage.getItem("fr-caught5"),
      items:     localStorage.getItem("fr-items5"),
      trainers:  localStorage.getItem("fr-trainers1"),
      version:   localStorage.getItem("frlg-version"),
      badges:    localStorage.getItem("frlg-badges"),
      checklist: localStorage.getItem("frlg-checklist"),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type:"application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `firered-save-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        try {
          const data = JSON.parse(ev.target.result);
          if (data.caught)   localStorage.setItem("fr-caught5",   data.caught);
          if (data.items)    localStorage.setItem("fr-items5",    data.items);
          if (data.trainers) localStorage.setItem("fr-trainers1", data.trainers);
          if (data.version)    localStorage.setItem("frlg-version",   data.version);
          if (data.badges)     localStorage.setItem("frlg-badges",    data.badges);
          if (data.checklist)  localStorage.setItem("frlg-checklist", data.checklist);
          window.location.reload();
        } catch { alert("Invalid save file — could not restore data."); }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const toggleBadge = useCallback((id) => {
    setBadges(prev => {
      const next = { ...prev };
      if (next[id]) delete next[id]; else next[id] = true;
      try { localStorage.setItem("frlg-badges", JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const toggleChecklist = useCallback((id) => {
    setChecklist(prev => {
      const next = { ...prev };
      if (next[id]) delete next[id]; else next[id] = true;
      try { localStorage.setItem("frlg-checklist", JSON.stringify(next)); } catch {}
      return next;
    });
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

  const { completionDone, completionTotal } = useMemo(() => {
    const kdc = DEX.filter(p => !p.event && caught[p.name]).length;
    const as = {
      "kanto-dex": kdc >= 150,
      "farfetchd":  !!caught["Farfetch'd"],
      "jynx":       !!caught["Jynx"],
      "mr-mime":    !!caught["Mr. Mime"],
      "lickitung":  !!caught["Lickitung"],
    };
    let total = 0, done = 0;
    for (const sec of COMPLETION_SECTIONS) {
      for (const item of sec.items) {
        if (item.disabled || item.optional) continue;
        total++;
        if (item.auto ? as[item.auto] : !!checklist[item.id]) done++;
      }
    }
    return { completionDone: done, completionTotal: total };
  }, [caught, checklist]);
  const accent = version === "lg" ? C.lgGreen : C.frRed;

  if (!booted) return <div style={{ background:C.bg, minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", color:C.text, fontFamily:"'DM Sans',system-ui,sans-serif" }}>Loading…</div>;

  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100vh", background:C.bg, fontFamily:"'DM Sans',system-ui,sans-serif", color:C.text, overflow:"hidden", "--frlg-accent":accent }}>
      {/* ── Top bar ── */}
      <div style={{
        background: version === "lg"
          ? "linear-gradient(135deg,#080f08 0%,#0e1a0d 45%,#0a120a 100%)"
          : "linear-gradient(135deg,#1a0806 0%,#2a1208 45%,#1a0c06 100%)",
        borderBottom:`1px solid ${C.border}`, padding:"12px 20px 0", flexShrink:0,
        boxShadow:"0 2px 12px rgba(0,0,0,0.5)", transition:"background 0.4s"
      }}>
        {/* Title row */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:8, flexWrap:"wrap" }}>
          <div>
            <div style={{ fontSize:10, letterSpacing:2.5, textTransform:"uppercase", marginBottom:3, display:"flex", gap:6, alignItems:"center" }}>
              <span style={{ color:C.frRed, fontWeight:"700", opacity: version==="fr" ? 1 : 0.4, transition:"opacity 0.2s" }}>FireRed</span>
              <span style={{ color:C.muted }}>·</span>
              <span style={{ color:C.lgGreen, fontWeight:"700", opacity: version==="lg" ? 1 : 0.4, transition:"opacity 0.2s" }}>LeafGreen</span>
            </div>
            <div style={{ fontSize:18, fontWeight:"700", letterSpacing:0.5, color:"#f5e8dc" }}>Complete Tracker</div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:7 }}>
            {/* FR / LG version toggle */}
            <div style={{ display:"flex", gap:1, background:"rgba(0,0,0,0.35)", borderRadius:8, padding:2, border:`1px solid ${C.border}` }}>
              {[["fr","FireRed",C.frRed],["lg","LeafGreen",C.lgGreen]].map(([v,label,col]) => (
                <button key={v} onClick={() => handleSetVersion(v)} style={{
                  padding:"4px 14px", border:"none", borderRadius:6, cursor:"pointer",
                  fontFamily:"'DM Sans',sans-serif", fontSize:11, fontWeight:"700",
                  background: version===v ? col : "transparent",
                  color: version===v ? "#fff" : C.muted,
                  transition:"all 0.2s",
                }}>{label}</button>
              ))}
            </div>
            {/* Stats */}
            <div style={{ display:"flex", gap:18, fontSize:11, alignItems:"center" }}>
              <span><span style={{ color:C.green, fontWeight:"700", fontSize:13 }}>{caughtCount}</span><span style={{ color:C.muted }}> / 151 caught</span></span>
              <span><span style={{ color:C.gold, fontWeight:"700", fontSize:13 }}>{Object.keys(items).length}</span><span style={{ color:C.muted }}> items</span></span>
              <span onClick={() => setTab("completion")}
                title="View 100% checklist"
                style={{ cursor:"pointer" }}>
                <span style={{ color:"var(--frlg-accent)", fontWeight:"700", fontSize:13 }}>{completionDone}/{completionTotal}</span>
                <span style={{ color:C.muted }}> goals</span>
              </span>
              <div style={{ display:"flex", gap:4 }}>
                {[["↓ Export", handleExport, "Export save data to a JSON file"],
                  ["↑ Import", handleImport, "Import save data from a JSON file"]].map(([label, fn, title]) => (
                  <button key={label} onClick={fn} title={title} style={{
                    padding:"2px 8px", fontSize:10, fontWeight:"600", cursor:"pointer",
                    background:"rgba(0,0,0,0.3)", color:C.muted,
                    border:`1px solid ${C.border}`, borderRadius:4,
                    fontFamily:"'DM Sans',sans-serif", transition:"all 0.15s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color=C.text; e.currentTarget.style.borderColor="var(--frlg-accent)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color=C.muted; e.currentTarget.style.borderColor=C.border; }}
                  >{label}</button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gym badge strip */}
        <GymBadgeStrip earned={badges} toggleBadge={toggleBadge} />

        {/* Tabs */}
        <div style={{ display:"flex", gap:2, marginTop:10 }}>
          {[["areas","Areas"],["dex","Pokédex"],["calc","Catch Calc"],["hunt","Hunt"],["completion","100%"]].map(([t,label]) => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding:"8px 20px", border:"none", borderRadius:"6px 6px 0 0", cursor:"pointer",
              fontFamily:"'DM Sans',system-ui,sans-serif", fontSize:13, fontWeight:"600",
              background: tab===t ? C.bg : "transparent",
              color: tab===t ? C.text : C.muted,
              borderBottom: tab===t ? `2px solid var(--frlg-accent)` : "2px solid transparent",
              transition:"color 0.15s",
            }}>{label}</button>
          ))}
        </div>
      </div>

      {/* ── Tab: Pokédex ── */}
      {tab === "dex" && <DexTab caught={caught} toggleCaught={toggleCaught} dexFilter={dexFilter} setDexFilter={setDexFilter} dexSelected={dexSelected} setDexSelected={setDexSelected} version={version} isMobile={isMobile} />}

      {/* ── Tab: Areas ── */}
      {tab === "areas" && <AreasTab caught={caught} toggleCaught={toggleCaught} items={items} toggleItem={toggleItem} trainers={trainers} toggleTrainer={toggleTrainer} areaId={areaId} setAreaId={setAreaId} area={area} search={search} setSearch={setSearch} version={version} isMobile={isMobile} />}

      {/* ── Tab: Catch Calc ── */}
      {tab === "calc" && <CatchCalcTab isMobile={isMobile} />}

      {/* ── Tab: Hunt ── */}
      {tab === "hunt" && <HuntTab version={version} isMobile={isMobile} />}

      {/* ── Tab: 100% Completion ── */}
      {tab === "completion" && <CompletionTab caught={caught} checklist={checklist} toggleChecklist={toggleChecklist} isMobile={isMobile} />}
    </div>
  );
}

// ─── CATCH CALC TAB ───────────────────────────────────────────────────────────
function CatchCalcTab({ isMobile }) {
  const [selected, setSelected] = useState(CATCH_RATE_DATA[0]);
  const [hpPct, setHpPct]       = useState(100);
  const [status, setStatus]     = useState("none");
  const [ballKey, setBallKey]   = useState("poke");
  const [search, setSearch]     = useState("");

  const BALLS = [
    {key:"poke",  label:"Poké Ball",  bonus:1},
    {key:"great", label:"Great Ball", bonus:1.5},
    {key:"ultra", label:"Ultra Ball", bonus:2},
  ];
  const STATUS_OPTS = [
    {key:"none", label:"None",       mult:1},
    {key:"par",  label:"PAR / BRN / PSN", mult:1.5},
    {key:"slp",  label:"SLP / FRZ",  mult:2},
  ];

  const ball   = BALLS.find(b => b.key === ballKey);
  const stOpt  = STATUS_OPTS.find(s => s.key === status);

  const calcA = (catchRate, hpFraction, statusMult, ballBonus) => {
    // Gen III formula: a = floor(((3×HP_max − 2×HP_current) / (3×HP_max)) × catchRate × ballBonus × statusMult)
    // Expressed in terms of hpFraction (0..1 = current/max):
    return Math.min(255, Math.floor(((3 - 2 * hpFraction) / 3) * catchRate * ballBonus * statusMult));
  };

  const hpFraction = hpPct / 100;
  const a = calcA(selected.rate, hpFraction, stOpt.mult, ball.bonus);
  const p = a / 255;

  // Cumulative probability: P(catch within n throws) = 1 − (1−p)^n
  // Solve for n: n = ceil(log(1 − target) / log(1 − p))
  const throwsFor = (target) => {
    if (p >= 1) return 1;
    if (p <= 0) return Infinity;
    return Math.ceil(Math.log(1 - target) / Math.log(1 - p));
  };

  const milestones = [
    {label:"50%",  n:throwsFor(0.50)},
    {label:"75%",  n:throwsFor(0.75)},
    {label:"90%",  n:throwsFor(0.90)},
    {label:"95%",  n:throwsFor(0.95)},
    {label:"99%",  n:throwsFor(0.99)},
  ];

  const expected = p > 0 ? (1 / p) : Infinity;

  const filteredPokemon = CATCH_RATE_DATA.filter(pk =>
    pk.name.toLowerCase().includes(search.toLowerCase())
  );

  const pill = (active, label, onClick) => (
    <button key={label} onClick={onClick} style={{
      padding:"5px 12px", border:`1px solid ${active ? "var(--frlg-accent)" : C.border}`,
      borderRadius:20, cursor:"pointer", fontSize:12, fontWeight:"600",
      background: active ? "var(--frlg-accent)" : "rgba(0,0,0,0.3)",
      color: active ? "#fff" : C.muted, transition:"all 0.15s",
      fontFamily:"'DM Sans',sans-serif",
    }}>{label}</button>
  );

  const sectionLabel = (text) => (
    <div style={{ fontSize:10, fontWeight:"700", letterSpacing:"0.08em", color:C.muted,
                  textTransform:"uppercase", marginBottom:6 }}>{text}</div>
  );

  return (
    <div style={{ flex:1, overflowY:"auto" }}>
    <div style={{ display:"flex", flexDirection:isMobile?"column":"row", gap:16,
                  padding:"16px", maxWidth:960, margin:"0 auto" }}>

      {/* ── Left: Pokémon picker ── */}
      <div style={{ flex:"0 0 auto", width:isMobile?"100%":280 }}>
        <div style={{ background:C.card, borderRadius:10, border:`1px solid ${C.border}`,
                      overflow:"hidden" }}>
          <div style={{ padding:"10px 12px", borderBottom:`1px solid ${C.border}` }}>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search Pokémon…"
              style={{
                width:"100%", boxSizing:"border-box",
                padding:"6px 10px", borderRadius:6,
                border:`1px solid ${C.border}`, background:"rgba(0,0,0,0.3)",
                color:C.text, fontSize:12, fontFamily:"'DM Sans',sans-serif", outline:"none",
              }}
            />
          </div>
          <div style={{ overflowY:"auto", maxHeight:isMobile?200:480 }}>
            {filteredPokemon.map(pk => {
              const isSelected = pk.id === selected.id;
              return (
                <div key={pk.id} onClick={() => setSelected(pk)}
                  style={{
                    display:"flex", alignItems:"center", gap:8,
                    padding:"6px 12px", cursor:"pointer",
                    background: isSelected ? "rgba(var(--frlg-accent-rgb,212,98,26),0.18)" : "transparent",
                    borderLeft: isSelected ? "3px solid var(--frlg-accent)" : "3px solid transparent",
                    transition:"background 0.1s",
                  }}
                  onMouseEnter={e => { if (!isSelected) e.currentTarget.style.background="rgba(255,255,255,0.04)"; }}
                  onMouseLeave={e => { if (!isSelected) e.currentTarget.style.background="transparent"; }}
                >
                  <img src={pokeSpriteUrl(pk.id)} alt={pk.name} width={32} height={32}
                    style={{ imageRendering:"pixelated" }} />
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontSize:12, fontWeight:"600", color:C.text,
                                  whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{pk.name}</div>
                    <div style={{ fontSize:10, color:C.muted }}>Catch rate: {pk.rate}</div>
                  </div>
                </div>
              );
            })}
            {filteredPokemon.length === 0 && (
              <div style={{ padding:16, textAlign:"center", color:C.muted, fontSize:12 }}>No Pokémon found</div>
            )}
          </div>
        </div>
      </div>

      {/* ── Right: Calculator ── */}
      <div style={{ flex:1, display:"flex", flexDirection:"column", gap:12 }}>

        {/* Selected Pokémon header */}
        <div style={{ background:C.card, borderRadius:10, border:`1px solid ${C.border}`,
                      padding:"16px 20px", display:"flex", alignItems:"center", gap:16 }}>
          <img src={pokeSpriteUrl(selected.id)} alt={selected.name} width={64} height={64}
            style={{ imageRendering:"pixelated" }} />
          <div>
            <div style={{ fontSize:18, fontWeight:"700", color:C.text }}>{selected.name}</div>
            <div style={{ fontSize:13, color:C.muted, marginTop:2 }}>
              Base catch rate: <span style={{ color:C.text, fontWeight:"600" }}>{selected.rate}</span>
              <span style={{ color:C.muted }}> / 255</span>
            </div>
            <div style={{ fontSize:11, color:C.muted, marginTop:2 }}>
              {selected.rate <= 3 ? "Legendary — extremely hard to catch" :
               selected.rate <= 45 ? "Uncommon catch rate" :
               selected.rate <= 100 ? "Moderate catch rate" : "Common catch rate"}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div style={{ background:C.card, borderRadius:10, border:`1px solid ${C.border}`,
                      padding:"16px 20px", display:"flex", flexDirection:"column", gap:16 }}>

          {/* HP % slider */}
          <div>
            {sectionLabel("Current HP")}
            <div style={{ display:"flex", alignItems:"center", gap:12 }}>
              <input type="range" min={1} max={100} value={hpPct}
                onChange={e => setHpPct(Number(e.target.value))}
                style={{ flex:1, accentColor:"var(--frlg-accent)" }} />
              <div style={{
                width:52, textAlign:"center", padding:"3px 6px",
                background:"rgba(0,0,0,0.3)", border:`1px solid ${C.border}`,
                borderRadius:6, fontSize:13, fontWeight:"700", color:C.text,
              }}>{hpPct}%</div>
            </div>
            <div style={{ display:"flex", gap:6, marginTop:8 }}>
              {[100,75,50,25,12,1].map(v => pill(hpPct===v, `${v}%`, () => setHpPct(v)))}
            </div>
          </div>

          {/* Status */}
          <div>
            {sectionLabel("Status Condition")}
            <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
              {STATUS_OPTS.map(s => pill(status===s.key, s.label, () => setStatus(s.key)))}
            </div>
          </div>

          {/* Ball type */}
          <div>
            {sectionLabel("Poké Ball")}
            <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
              {BALLS.map(b => pill(ballKey===b.key, b.label, () => setBallKey(b.key)))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div style={{ background:C.card, borderRadius:10, border:`1px solid ${C.border}`,
                      padding:"16px 20px" }}>
          {sectionLabel("Results")}

          {/* Formula line */}
          <div style={{ fontSize:11, color:C.muted, fontFamily:"'Courier New',monospace",
                        marginBottom:12, padding:"6px 10px",
                        background:"rgba(0,0,0,0.3)", borderRadius:6, border:`1px solid ${C.border}` }}>
            a = floor(((3×HP_max − 2×HP_current) / (3×HP_max)) × {selected.rate} × {ball.bonus} × {stOpt.mult}) = <strong style={{color:C.text}}>{a}</strong>
          </div>

          {/* Catch probability */}
          <div style={{ display:"flex", gap:12, marginBottom:16, flexWrap:"wrap" }}>
            {[
              ["Catch chance / ball", `${(p * 100).toFixed(2)}%`, p >= 0.5 ? "#4caf50" : p >= 0.2 ? "#ff9800" : "#ef5350"],
              ["Expected balls", p > 0 ? (expected < 1000 ? expected.toFixed(1) : ">1000") : "∞", C.text],
            ].map(([label, value, color]) => (
              <div key={label} style={{
                flex:1, minWidth:120, padding:"12px 16px",
                background:"rgba(0,0,0,0.3)", borderRadius:8, border:`1px solid ${C.border}`,
                textAlign:"center",
              }}>
                <div style={{ fontSize:10, color:C.muted, marginBottom:4, textTransform:"uppercase",
                               letterSpacing:"0.06em", fontWeight:"700" }}>{label}</div>
                <div style={{ fontSize:22, fontWeight:"700", color }}>{value}</div>
              </div>
            ))}
          </div>

          {/* Milestone table */}
          <div>
            {sectionLabel("Cumulative catch probability")}
            <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
              {milestones.map(({label, n}) => (
                <div key={label} style={{
                  flex:1, minWidth:80, padding:"8px 10px",
                  background:"rgba(0,0,0,0.3)", borderRadius:8, border:`1px solid ${C.border}`,
                  textAlign:"center",
                }}>
                  <div style={{ fontSize:11, fontWeight:"700", color:"var(--frlg-accent)" }}>{label}</div>
                  <div style={{ fontSize:16, fontWeight:"700", color:C.text, marginTop:2 }}>
                    {n === Infinity ? "∞" : `${n}`}
                  </div>
                  <div style={{ fontSize:9, color:C.muted, marginTop:1 }}>
                    {n === 1 ? "ball" : "balls"}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ fontSize:10, color:C.muted, marginTop:10 }}>
              Number of Poké Balls needed to have at least that cumulative chance of catching.
              {selected.rate <= 3 && (
                <span style={{ color:"#ef5350" }}> Tip: use Ultra Ball + Sleep/Freeze for legendaries.</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

// ─── HUNT TAB ─────────────────────────────────────────────────────────────────
function HuntTab({ version, isMobile }) {
  const [search,   setSearch]   = useState("");
  const [selected, setSelected] = useState(null);

  // All Pokémon that appear in any area, ordered by dex number
  const allNames = useMemo(() =>
    Object.keys(LOCATION_MAP).sort((a, b) => (DEX_ID[a] || 999) - (DEX_ID[b] || 999)),
    []
  );
  const filteredNames = search.trim()
    ? allNames.filter(n => n.toLowerCase().includes(search.toLowerCase().trim()))
    : allNames;

  // Enriched & sorted locations for the selected Pokémon
  const locs = useMemo(() => {
    if (!selected) return [];
    return (LOCATION_MAP[selected] || [])
      .filter(loc => {
        if (version === "fr" && loc.lgOnly) return false;
        if (version === "lg" && loc.frOnly) return false;
        return true;
      })
      .map(loc => {
        const splitMatch = loc.rate && loc.rate.match(/^(\S+)\s+FR\s*\/\s*(\S+)\s+LG$/i);
        let pct;
        if (splitMatch) {
          pct = version === "fr" ? parseRatePct(splitMatch[1]) : parseRatePct(splitMatch[2]);
        } else {
          pct = parseRatePct(loc.rate);
        }
        return { ...loc, pct, math: pct ? encMath(pct) : null };
      })
      .sort((a, b) => (b.pct || -1) - (a.pct || -1));
  }, [selected, version]);

  const dexId = selected ? DEX_ID[selected] : null;
  const noMathMethods = new Set(["Gift","Trade","Fossil","Event","Game Corner"]);

  const listPanel = (
    <div style={{ display:"flex", flexDirection:"column", gap:0,
                  background:C.card, borderRadius:8, border:`1px solid ${C.border}`,
                  overflow:"hidden", flexShrink:0,
                  width: isMobile ? "100%" : 200 }}>
      <div style={{ padding:"8px 10px", borderBottom:`1px solid ${C.border}`, flexShrink:0 }}>
        <input value={search} onChange={e => { setSearch(e.target.value); setSelected(null); }}
          placeholder="Search Pokémon…"
          style={{ width:"100%", boxSizing:"border-box", background:"rgba(0,0,0,0.3)",
                   border:`1px solid ${C.border}`, borderRadius:6, color:C.text,
                   fontFamily:"'DM Sans',system-ui,sans-serif", fontSize:12,
                   padding:"5px 8px", outline:"none" }} />
      </div>
      <div style={{ overflowY:"auto", maxHeight: isMobile ? 180 : "calc(100vh - 220px)" }}>
        {filteredNames.length === 0 && (
          <div style={{ padding:16, fontSize:12, color:C.muted, textAlign:"center" }}>No results</div>
        )}
        {filteredNames.map(name => {
          const id = DEX_ID[name];
          const isSel = name === selected;
          return (
            <button key={name} onClick={() => setSelected(name)}
              style={{ width:"100%", display:"flex", alignItems:"center", gap:8,
                       padding:"6px 10px", background: isSel ? "rgba(var(--frlg-accent-rgb,212,98,26),0.15)" : "transparent",
                       border:"none", borderBottom:`1px solid ${C.border}30`, cursor:"pointer",
                       borderLeft: isSel ? "3px solid var(--frlg-accent)" : "3px solid transparent",
                       textAlign:"left" }}>
              {id && <img src={pokeSpriteUrl(id)} alt={name}
                style={{ width:28, height:28, imageRendering:"pixelated", flexShrink:0 }} />}
              <span style={{ fontSize:12, fontWeight: isSel ? "700" : "400",
                             color: isSel ? C.text : C.muted }}>{name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  const resultsPanel = (
    <div style={{ flex:1, minWidth:0 }}>
      {!selected ? (
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center",
                      height:200, color:C.muted, fontSize:12, textAlign:"center", padding:24,
                      background:C.card, borderRadius:8, border:`1px solid ${C.border}` }}>
          Select a Pokémon to see where to find it and how many encounters to expect.
        </div>
      ) : (
        <>
          {/* Header */}
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:12 }}>
            {dexId && <img src={pokeSpriteUrl(dexId)} alt={selected}
              style={{ width:48, height:48, imageRendering:"pixelated" }} />}
            <div>
              <div style={{ fontSize:18, fontWeight:"700", color:C.text }}>{selected}</div>
              {dexId && <div style={{ fontSize:10, color:C.muted, fontFamily:"'Courier New',monospace" }}>
                #{String(dexId).padStart(3,"0")}
              </div>}
            </div>
          </div>

          {/* Results */}
          {locs.length === 0 ? (
            <div style={{ padding:16, background:C.card, borderRadius:8,
                          border:`1px solid ${C.border}`, fontSize:12, color:C.muted }}>
              Not found as a wild encounter in any tracked area for {version === "fr" ? "FireRed" : "LeafGreen"}.
              Obtain via evolution, trading, or breeding.
            </div>
          ) : (
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {locs.map((loc, i) => {
                const accentLeft = loc.math
                  ? (loc.pct >= 30 ? "#5ab0d8" : loc.pct >= 10 ? "#d4b840" : "#9878cc")
                  : C.border;
                return (
                  <div key={i} style={{ padding:"10px 14px", background:C.card,
                                        borderRadius:8, border:`1px solid ${C.border}`,
                                        borderLeft:`4px solid ${accentLeft}` }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:8 }}>
                      <div>
                        <div style={{ fontSize:13, fontWeight:"700", color:C.text }}>{loc.areaName}</div>
                        <div style={{ fontSize:10, color:C.muted, marginTop:1 }}>{loc.part}</div>
                      </div>
                      <div style={{ textAlign:"right", flexShrink:0 }}>
                        <RateDisplay rate={loc.rate} />
                      </div>
                    </div>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center",
                                  marginTop:6, flexWrap:"wrap", gap:4 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:4 }}>
                        {METHOD_SPRITE_URL[loc.method]
                          ? <img src={METHOD_SPRITE_URL[loc.method]} alt="" style={{ width:14, height:14, imageRendering:"pixelated" }} />
                          : null}
                        <span style={{ fontSize:11, color:C.muted }}>
                          {loc.method}{loc.levels ? ` · Lv.${loc.levels}` : ""}
                        </span>
                        {loc.frOnly && <Tag color="#c85252">FR</Tag>}
                        {loc.lgOnly && <Tag color={C.lgGreen}>LG</Tag>}
                      </div>
                      {loc.math && (
                        <div style={{ fontSize:11, color:C.muted, textAlign:"right" }}>
                          <span style={{ color:C.text, fontWeight:"600" }}>~{loc.math.avg}</span> avg ·{" "}
                          <span style={{ color:C.text, fontWeight:"600" }}>≤{loc.math.conf95}</span> for 95%
                        </div>
                      )}
                      {!loc.math && !noMathMethods.has(loc.method) && loc.rate && (
                        <div style={{ fontSize:11, color:C.muted }}>—</div>
                      )}
                      {noMathMethods.has(loc.method) && (
                        <div style={{ fontSize:11, color:C.muted, fontStyle:"italic" }}>one-time obtain</div>
                      )}
                    </div>
                  </div>
                );
              })}
              <div style={{ fontSize:10, color:C.muted, padding:"4px 2px" }}>
                Sorted by highest encounter rate · Hover rate badge for per-encounter odds
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );

  return (
    <div style={{ flex:1, overflowY:"auto" }}>
      <div style={{ display:"flex", flexDirection: isMobile ? "column" : "row", gap:16,
                    padding:"16px", maxWidth:960, margin:"0 auto" }}>
        {listPanel}
        {resultsPanel}
      </div>
    </div>
  );
}

// ─── COMPLETION TAB ───────────────────────────────────────────────────────────
function CompletionTab({ caught, checklist, toggleChecklist, isMobile }) {
  const kantoDexCount = useMemo(() =>
    DEX.filter(p => !p.event && caught[p.name]).length, [caught]);

  const autoState = {
    "kanto-dex": kantoDexCount >= 150,
    "farfetchd":  !!caught["Farfetch'd"],
    "jynx":       !!caught["Jynx"],
    "mr-mime":    !!caught["Mr. Mime"],
    "lickitung":  !!caught["Lickitung"],
  };

  let totalItems = 0, doneItems = 0;
  for (const sec of COMPLETION_SECTIONS) {
    for (const item of sec.items) {
      if (item.disabled || item.optional) continue;
      totalItems++;
      if (item.auto ? autoState[item.auto] : !!checklist[item.id]) doneItems++;
    }
  }

  const overallPct = totalItems ? Math.round((doneItems / totalItems) * 100) : 0;

  return (
    <div style={{ flex:1, overflowY:"auto" }}>
      <div style={{ maxWidth:680, margin:"0 auto", padding:"16px" }}>

        {/* Overall progress */}
        <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:10,
                      padding:"14px 18px", marginBottom:16 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:8 }}>
            <span style={{ fontSize:13, fontWeight:"700", color:C.text }}>Overall Completion</span>
            <span style={{ fontSize:12, color: doneItems===totalItems ? C.green : C.muted }}>
              <span style={{ fontWeight:"700", color: doneItems===totalItems ? C.green : C.text }}>{doneItems}</span>
              /{totalItems} · {overallPct}%
            </span>
          </div>
          <div style={{ height:7, background:"rgba(0,0,0,0.3)", borderRadius:99, overflow:"hidden" }}>
            <div style={{ height:"100%", width:`${overallPct}%`,
                          background: doneItems===totalItems ? C.green : "var(--frlg-accent)",
                          borderRadius:99, transition:"width 0.3s" }} />
          </div>
          {doneItems===totalItems && totalItems>0 && (
            <div style={{ marginTop:8, fontSize:11, color:C.green, fontWeight:"600", textAlign:"center" }}>
              ✓ 100% complete!
            </div>
          )}
        </div>

        {/* Sections */}
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {COMPLETION_SECTIONS.map(sec => {
            const countable = sec.items.filter(i => !i.disabled && !i.optional);
            const secDone   = countable.filter(i => i.auto ? autoState[i.auto] : !!checklist[i.id]).length;
            const allDone   = secDone === countable.length && countable.length > 0;

            return (
              <div key={sec.id} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:10, overflow:"hidden" }}>
                <div style={{ padding:"9px 14px", background:"rgba(0,0,0,0.15)",
                              borderBottom:`1px solid ${C.border}`,
                              display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <span style={{ fontSize:12, fontWeight:"700", color:sec.color }}>{sec.title}</span>
                  <span style={{ fontSize:11, color: allDone ? C.green : C.muted }}>
                    {secDone}/{countable.length}
                  </span>
                </div>
                <div style={{ padding:"4px 0" }}>
                  {sec.items.map(item => {
                    const isDone     = !item.disabled && (item.auto ? autoState[item.auto] : !!checklist[item.id]);
                    const isAuto     = !!item.auto;
                    const isDisabled = !!item.disabled;
                    const isOptional = !!item.optional;
                    const clickable  = !isAuto && !isDisabled;

                    return (
                      <div key={item.id}
                        onClick={clickable ? () => toggleChecklist(item.id) : undefined}
                        style={{ display:"flex", alignItems:"flex-start", gap:10,
                                 padding:"8px 14px", cursor: clickable ? "pointer" : "default",
                                 opacity: isDisabled ? 0.4 : 1 }}
                        onMouseEnter={clickable ? e => e.currentTarget.style.background="rgba(255,255,255,0.04)" : undefined}
                        onMouseLeave={clickable ? e => e.currentTarget.style.background="transparent" : undefined}
                      >
                        {/* Checkbox */}
                        <div style={{ width:17, height:17, borderRadius:4, flexShrink:0, marginTop:2,
                                      border: isDone ? `2px solid ${C.green}` : `2px solid ${isDisabled ? C.border : C.muted}`,
                                      background: isDone ? C.green : "transparent",
                                      display:"flex", alignItems:"center", justifyContent:"center" }}>
                          {isDone && <span style={{ color:"#0d0a07", fontSize:10, fontWeight:"900", lineHeight:1 }}>✓</span>}
                        </div>

                        {/* Text */}
                        <div style={{ flex:1, minWidth:0 }}>
                          <div style={{ fontSize:12, fontWeight:"600",
                                        color: isDone ? C.muted : C.text,
                                        textDecoration: isDone ? "line-through" : "none",
                                        display:"flex", alignItems:"center", flexWrap:"wrap", gap:6 }}>
                            {item.label}
                            {item.reward && (
                              <span style={{ fontSize:10, fontWeight:"700", color:C.gold,
                                             background:"rgba(200,150,10,0.12)",
                                             border:"1px solid rgba(200,150,10,0.3)",
                                             padding:"1px 6px", borderRadius:4, whiteSpace:"nowrap" }}>
                                → {item.reward}
                              </span>
                            )}
                            {isAuto && !isDisabled && (
                              <span style={{ fontSize:9, color:C.muted, fontStyle:"italic", fontWeight:"400" }}>auto</span>
                            )}
                            {isOptional && (
                              <span style={{ fontSize:9, color:C.muted, fontStyle:"italic", fontWeight:"400" }}>optional</span>
                            )}
                          </div>
                          <div style={{ fontSize:10, color:C.muted, marginTop:2, lineHeight:1.5 }}>
                            {item.note}
                            {item.auto === "kanto-dex" && (
                              <span style={{ marginLeft:5, fontWeight:"600",
                                             color: kantoDexCount >= 150 ? C.green : C.gold }}>
                                ({kantoDexCount}/150)
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop:12, fontSize:10, color:C.muted, textAlign:"center", lineHeight:1.7 }}>
          Items marked <em>auto</em> update automatically from your Pokédex data.
          Disabled items (★★★ and ★★★★) are out of scope for this tracker.
        </div>
      </div>
    </div>
  );
}

// ─── POKÉDEX TAB ──────────────────────────────────────────────────────────────
function DexTab({ caught, toggleCaught, dexFilter, setDexFilter, dexSelected, setDexSelected, version, isMobile }) {
  const caughtCount = Object.keys(caught).length;
  const filters = [["all","All"],["caught","Caught"],["missing","Missing"],["fr","FR Only"],["lg","LG Only"],["event","Event"],["noball","No Poké Ball"]];
  const isOtherVersionDex = (p) => (version === "fr" && p.lgOnly) || (version === "lg" && p.frOnly);

  const filtered = DEX.filter(p => {
    if (dexFilter === "caught")  return caught[p.name];
    if (dexFilter === "missing") return !caught[p.name] && !isOtherVersionDex(p);
    if (dexFilter === "fr")      return p.frOnly;
    if (dexFilter === "lg")      return p.lgOnly;
    if (dexFilter === "event")   return p.event;
    if (dexFilter === "noball")  return !!CATCH_CONSTRAINT_MAP[p.name];
    return !isOtherVersionDex(p);
  });

  const selected = dexSelected ? DEX.find(p => p.name === dexSelected) : null;
  const locs = dexSelected ? (LOCATION_MAP[dexSelected] || []) : [];

  return (
    <div style={{ flex:1, overflow:"hidden", display:"flex", flexDirection:"column" }}>
      {/* Filter + stats */}
      <div style={{ padding:"10px 18px", borderBottom:`1px solid ${C.border}`, background:C.card, flexShrink:0 }}>
        <div style={{ display:"flex", gap:16, alignItems:"center", flexWrap:"wrap" }}>
          <div style={{ display:"flex", gap:5, flexWrap:"wrap" }}>
            {filters.map(([f,label]) => (
              <button key={f} onClick={() => setDexFilter(f)} style={{
                padding:"4px 12px", fontFamily:"'DM Sans',system-ui,sans-serif", fontSize:11, cursor:"pointer",
                background: dexFilter===f ? "var(--frlg-accent)" : "rgba(0,0,0,0.25)",
                color: dexFilter===f ? "#fff" : C.muted,
                border:`1px solid ${dexFilter===f ? "var(--frlg-accent)" : C.border}`, borderRadius:20,
                fontWeight: dexFilter===f ? "600" : "400",
                transition:"all 0.12s",
              }}>{label}</button>
            ))}
          </div>
          <div style={{ marginLeft:"auto", fontSize:12, color:C.muted, display:"flex", alignItems:"center", gap:8 }}>
            <span style={{ color:C.green, fontWeight:"600" }}>{caughtCount}</span><span>/ 151</span>
            <div style={{ width:80, height:5, background:"rgba(0,0,0,0.3)", borderRadius:99, overflow:"hidden" }}>
              <div style={{ height:"100%", width:`${pct(caughtCount,151)}%`, background:C.green, borderRadius:99, transition:"width 0.3s" }} />
            </div>
            <span style={{ fontWeight:"600", color:C.text }}>{pct(caughtCount,151)}%</span>
          </div>
        </div>
      </div>

      <div style={{ display:"flex", flex:1, overflow:"hidden" }}>
        {/* Grid */}
        <div style={{ flex:1, overflowY:"auto", padding:"12px 16px", paddingBottom: isMobile && selected ? 220 : 12 }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(86px,1fr))", gap:6 }}>
            {filtered.map(p => {
              const isCaught = !!caught[p.name];
              const isSel = dexSelected === p.name;
              return (
                <div key={p.id} onClick={() => { toggleCaught(p.name); setDexSelected(p.name); }}
                  style={{
                    background: isCaught ? "rgba(74,175,116,0.10)" : isSel ? "rgba(0,0,0,0.15)" : C.card,
                    border:`1px solid ${isSel ? "var(--frlg-accent)" : isCaught ? C.green : p.event ? "#a87acc" : p.lgOnly ? C.lgGreen : p.frOnly ? "#c85252" : C.border}`,
                    borderRadius:8, padding:"8px 5px 6px", cursor:"pointer", textAlign:"center",
                    transition:"all 0.12s", position:"relative",
                    boxShadow: isSel ? "0 0 0 2px rgba(var(--frlg-accent-rgb,212,98,26),0.2)" : "none",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = isCaught ? C.green : "var(--frlg-accent)"; e.currentTarget.style.background = isCaught ? "rgba(74,175,116,0.15)" : "rgba(0,0,0,0.2)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = isSel ? "var(--frlg-accent)" : isCaught ? C.green : p.event ? "#a87acc" : p.lgOnly ? C.lgGreen : p.frOnly ? "#c85252" : C.border; e.currentTarget.style.background = isCaught ? "rgba(74,175,116,0.10)" : isSel ? "rgba(0,0,0,0.15)" : C.card; }}
                >
                  {isCaught && <div style={{ position:"absolute", top:4, left:5, fontSize:9, color:C.green, fontWeight:"700" }}>✓</div>}
                  {p.frOnly && <div style={{ position:"absolute", top:4, right:4, fontSize:8, color:"#c85252", fontWeight:"600" }}>FR</div>}
                  {p.lgOnly && <div style={{ position:"absolute", top:4, right:4, fontSize:8, color:C.lgGreen, fontWeight:"600" }}>LG</div>}
                  {p.event  && <div style={{ position:"absolute", top:4, right:4, fontSize:8, color:"#a87acc", fontWeight:"600" }}>✦</div>}
                  <img src={pokeSpriteUrl(p.id)} alt={p.name} style={{ width:48, height:48, imageRendering:"pixelated", display:"block", margin:"0 auto", opacity: isCaught ? 1 : 0.7, filter: isCaught ? "none" : "brightness(0)" }} />
                  <div style={{ fontSize:9, color:C.muted, marginBottom:1, fontFamily:"'Courier New',monospace" }}>#{String(p.id).padStart(3,"0")}</div>
                  <div style={{ fontSize:10, color: isCaught ? C.green : C.text, fontWeight:isCaught?"600":"400", lineHeight:1.3, wordBreak:"break-word" }}>{p.name}</div>
                  {(() => { const cs = CONSTRAINT_STYLE[CATCH_CONSTRAINT_MAP[p.name]]; return cs ? <div style={{ fontSize:8, fontWeight:"700", color:cs.color, marginTop:1, letterSpacing:"0.02em" }}>{cs.label.toUpperCase()}</div> : null; })()}
                </div>
              );
            })}
          </div>
          {filtered.length === 0 && <div style={{ textAlign:"center", padding:40, color:C.muted, fontSize:12 }}>No Pokémon match this filter.</div>}
          <LivingDexPanel caught={caught} />
        </div>

        {/* Detail panel — desktop only */}
        {!isMobile && (
          <div style={{ width:220, flexShrink:0, borderLeft:`1px solid ${C.border}`, background:C.card, overflowY:"auto", padding:16 }}>
            {!selected ? (
              <div style={{ color:C.muted, fontSize:12, textAlign:"center", marginTop:48, lineHeight:1.9, padding:"0 12px" }}>
                Click any Pokémon to toggle caught and see where to find it.
              </div>
            ) : (
              <DexDetail selected={selected} caught={caught} locs={locs} />
            )}
          </div>
        )}
      </div>

      {/* Bottom sheet — mobile only */}
      {isMobile && selected && (
        <div style={{ position:"fixed", bottom:0, left:0, right:0, zIndex:200, background:C.card, borderTop:`2px solid var(--frlg-accent)`, boxShadow:"0 -6px 24px rgba(0,0,0,0.6)", maxHeight:"44vh", display:"flex", flexDirection:"column" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 16px 8px", borderBottom:`1px solid ${C.border}`, flexShrink:0 }}>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <img src={pokeSpriteUrl(selected.id)} alt={selected.name} style={{ width:36, height:36, imageRendering:"pixelated" }} />
              <div>
                <div style={{ fontSize:13, fontWeight:"700", color: caught[selected.name] ? C.green : C.text }}>
                  {caught[selected.name] ? "✓ " : ""}{selected.name}
                </div>
                {selected.frOnly && <div style={{ fontSize:10, color:"#c85252", fontWeight:"500" }}>FireRed exclusive</div>}
                {selected.lgOnly && <div style={{ fontSize:10, color:C.lgGreen, fontWeight:"500" }}>LeafGreen exclusive</div>}
                {(() => { const cs = CONSTRAINT_STYLE[CATCH_CONSTRAINT_MAP[selected.name]]; return cs ? <div style={{ fontSize:10, color:cs.color, fontWeight:"500" }}>⚠ {cs.label}</div> : null; })()}
              </div>
            </div>
            <button onClick={() => setDexSelected(null)} style={{ background:"transparent", border:`1px solid ${C.border}`, color:C.muted, borderRadius:6, cursor:"pointer", padding:"4px 12px", fontSize:15 }}>✕</button>
          </div>
          <div style={{ overflowY:"auto", padding:"8px 16px 16px" }}>
            <DexDetail selected={selected} caught={caught} locs={locs} compact />
          </div>
        </div>
      )}
    </div>
  );
}

function DexDetail({ selected, caught, locs, compact }) {
  return (
    <>
      {!compact && (
        <div style={{ marginBottom:14 }}>
          <img src={pokeSpriteUrl(selected.id)} alt={selected.name} style={{ width:80, height:80, imageRendering:"pixelated", display:"block", margin:"0 auto 8px" }} />
          <div style={{ fontSize:10, color:C.muted, marginBottom:2, fontFamily:"'Courier New',monospace" }}>#{String(selected.id).padStart(3,"0")}</div>
          <div style={{ fontSize:17, fontWeight:"700", color: caught[selected.name] ? C.green : C.text }}>{selected.name}</div>
          <div style={{ fontSize:11, color: caught[selected.name] ? C.green : C.muted, marginTop:3 }}>
            {caught[selected.name] ? "✓ Caught" : "Not yet caught"}
          </div>
          {selected.frOnly && <div style={{ fontSize:10, color:"#c85252", marginTop:4, fontWeight:"500" }}>FireRed exclusive</div>}
          {selected.lgOnly && <div style={{ fontSize:10, color:C.lgGreen, marginTop:4, fontWeight:"500" }}>LeafGreen exclusive</div>}
          {selected.event  && <div style={{ fontSize:10, color:"#a87acc", marginTop:4, fontWeight:"500" }}>Event — not in-game obtainable</div>}
          {(() => { const cs = CONSTRAINT_STYLE[CATCH_CONSTRAINT_MAP[selected.name]]; return cs ? <div style={{ fontSize:10, color:cs.color, marginTop:4, fontWeight:"500" }}>⚠ {cs.desc}</div> : null; })()}
        </div>
      )}
      <div style={{ fontSize:10, letterSpacing:2, color:C.muted, marginBottom:6, textTransform:"uppercase" }}>Where to find</div>
      {locs.length === 0 ? (
        <div style={{ fontSize:11, color:C.muted, lineHeight:1.8 }}>
          Not found as a wild encounter or gift in any tracked area.<br/>
          Obtain via <span style={{ color:C.text, fontWeight:"500" }}>evolution, trading, or breeding</span>.
        </div>
      ) : compact ? (
        locs.map((l, i) => (
          <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", padding:"5px 0", borderBottom:`1px solid ${C.border}30` }}>
            <span style={{ fontSize:12, color:C.text, fontWeight:"600" }}>{l.areaName}</span>
            <span style={{ fontSize:10, color:C.muted, marginLeft:8, whiteSpace:"nowrap" }}>{l.method} · Lv.{l.levels}{l.rate ? ` · ${l.rate}` : ""}</span>
          </div>
        ))
      ) : (
        locs.map((l, i) => (
          <div key={i} style={{ marginBottom:8, padding:"8px 10px", background:"rgba(0,0,0,0.2)", borderRadius:6, borderLeft:`3px solid ${C.border}` }}>
            <div style={{ fontSize:11, color:C.text, fontWeight:"600", marginBottom:1 }}>{l.areaName}</div>
            <div style={{ fontSize:10, color:C.muted }}>{l.part}</div>
            <div style={{ fontSize:10, color:C.muted, marginTop:2 }}>
              {l.method} · Lv.{l.levels}{l.rate ? ` · ${l.rate}` : ""}
            </div>
          </div>
        ))
      )}
    </>
  );
}

// ─── FLOOR-AWARE HELPERS ──────────────────────────────────────────────────────
// Areas with a `floors` array organise data per floor; flat areas use top-level arrays.
const flattenPokemon  = a => a.floors ? a.floors.flatMap(f => f.pokemon  || []) : (a.pokemon  || []);
const flattenItems    = a => a.floors ? a.floors.flatMap(f => f.items    || []) : (a.items    || []);
const flattenTrainers = a => a.floors ? a.floors.flatMap(f => f.trainers || []) : (a.trainers || []);
// All items are keyed by index to handle duplicate names (e.g. two Antidotes in Viridian Forest).
const floorItemKey = (aId, label, idx) => `${aId}|${label}|${idx}`;
const flatItemKey  = (aId, idx) => `${aId}|${idx}`;
function countItemsDone(area, areaId, itemsState) {
  if (!area) return 0;
  if (area.floors) return area.floors.reduce((n, f) =>
    n + (f.items || []).filter((_, i) => itemsState[floorItemKey(areaId, f.label, i)]).length, 0);
  return (area.items || []).filter((_, i) => itemsState[flatItemKey(areaId, i)]).length;
}

// ─── AREAS TAB ────────────────────────────────────────────────────────────────
function AreasTab({ caught, toggleCaught, items, toggleItem, trainers, toggleTrainer, areaId, setAreaId, area, search, setSearch, version, isMobile }) {
  const visibleAreas = useMemo(() => AREAS.filter(a => AUDITED_PARTS.has(a.part)), []);
  const groups = useMemo(() => groupByPart(visibleAreas), [visibleAreas]);
  const filtered = useMemo(() => search.trim() ? visibleAreas.filter(a => a.name.toLowerCase().includes(search.toLowerCase())) : null, [search, visibleAreas]);
  const [collapsedFloors, setCollapsedFloors] = useState(new Set());
  const toggleFloor = (key) => setCollapsedFloors(prev => { const n = new Set(prev); n.has(key) ? n.delete(key) : n.add(key); return n; });

  const areaPokemon  = area ? flattenPokemon(area)  : [];
  const areaItems    = area ? flattenItems(area)    : [];
  const areaTrainers = area ? flattenTrainers(area) : [];
  const verPokemon   = areaPokemon.filter(p => !(version === "fr" && p.lgOnly) && !(version === "lg" && p.frOnly));
  const pokeDone    = verPokemon.filter(p => caught[p.name]).length;
  const itemDone    = countItemsDone(area, areaId, items);
  const trainerDone = areaTrainers.filter(t => trainers[`${areaId}|${t.class}|${t.name}`]).length;

  // Prev / Next navigation
  const currentIdx = areaId ? visibleAreas.findIndex(a => a.id === areaId) : -1;
  const prevArea = currentIdx > 0 ? visibleAreas[currentIdx - 1] : null;
  const nextArea = currentIdx >= 0 && currentIdx < visibleAreas.length - 1 ? visibleAreas[currentIdx + 1] : null;

  // Mark-all helpers
  const markAllPokemon = (poks) => poks.forEach(p => { if (!caught[p.name]) toggleCaught(p.name); });
  const clearAllPokemon = (poks) => poks.forEach(p => { if (caught[p.name]) toggleCaught(p.name); });
  const markAllItems = (its, keyFn) => its.forEach((it, i) => { const k = keyFn(it, i); if (!items[k]) toggleItem(k); });
  const clearAllItems = (its, keyFn) => its.forEach((it, i) => { const k = keyFn(it, i); if (items[k]) toggleItem(k); });
  const markAllTrainers = (trns) => trns.forEach(t => { const k = `${areaId}|${t.class}|${t.name}`; if (!trainers[k]) toggleTrainer(k); });
  const clearAllTrainers = (trns) => trns.forEach(t => { const k = `${areaId}|${t.class}|${t.name}`; if (trainers[k]) toggleTrainer(k); });

  // On mobile: show sidebar when no area selected, detail when area selected
  const showSidebar = !isMobile || !areaId;
  const showMain    = !isMobile || !!areaId;

  return (
    <div style={{ display:"flex", flex:1, overflow:"hidden", flexDirection: isMobile ? "column" : "row" }}>
      {/* Sidebar */}
      {showSidebar && (
      <div style={{ width: isMobile ? "100%" : 210, flexShrink:0, borderRight: isMobile ? "none" : `1px solid ${C.border}`, borderBottom: isMobile ? `1px solid ${C.border}` : "none", background:C.card, display:"flex", flexDirection:"column", overflowY:"auto", flex: isMobile ? "1" : "unset" }}>
        <div style={{ padding:"10px 12px", borderBottom:`1px solid ${C.border}`, position:"sticky", top:0, background:C.card, zIndex:1 }}>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search areas…"
            style={{ width:"100%", background:"rgba(0,0,0,0.25)", border:`1px solid ${C.border}`, color:C.text, padding:"8px 12px", fontFamily:"'DM Sans',system-ui,sans-serif", fontSize:14, borderRadius:6, boxSizing:"border-box", outline:"none" }} />
        </div>
        {filtered
          ? filtered.map(a => <AreaRow key={a.id} area={a} areaId={areaId} setAreaId={setAreaId} caught={caught} items={items} trainers={trainers} />)
          : Object.entries(groups).map(([part, list]) => (
              <div key={part}>
                <div style={{ padding:"6px 12px", fontSize:10, letterSpacing:2, color:C.muted, textTransform:"uppercase", background:"rgba(0,0,0,0.2)", borderBottom:`1px solid ${C.border}` }}>{part}</div>
                {list.map(a => <AreaRow key={a.id} area={a} areaId={areaId} setAreaId={setAreaId} caught={caught} items={items} trainers={trainers} />)}
              </div>
            ))
        }
        {filtered?.length === 0 && <div style={{ padding:20, fontSize:12, color:C.muted, textAlign:"center" }}>No matches</div>}
      </div>
      )}

      {/* Main */}
      {showMain && (
      <div style={{ flex:1, overflowY:"auto", padding:0 }} id="area-main-scroll">
        {!area ? (
          <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height:"100%", color:C.muted, textAlign:"center", gap:12 }}>
            <div style={{ fontSize:36, opacity:0.4 }}>🗺</div>
            <div style={{ fontSize:14, fontWeight:"600", color:C.text, opacity:0.5 }}>Select an area</div>
            <div style={{ fontSize:12, maxWidth:320, lineHeight:1.8, color:C.muted }}>
              Pokémon are tracked <span style={{ color:C.text }}>globally by name</span> — catching Pikachu here marks it caught everywhere.
            </div>
          </div>
        ) : (
          <>
            {/* ── Sticky area header ── */}
            {(() => {
              const atype = getAreaType(area);
              const tint = AREA_TINT[atype];
              const typeLabel = { route:"Route", cave:"Cave / Dungeon", water:"Water / Ship", safari:"Safari Zone", special:"Special", city:"City / Town" }[atype] || atype;
              const allDone = verPokemon.length + areaItems.length + areaTrainers.length > 0 &&
                pokeDone === verPokemon.length && itemDone === areaItems.length && trainerDone === areaTrainers.length;
              return (
                <div style={{ position:"sticky", top:0, zIndex:10, background:C.bg, borderBottom:`1px solid ${C.border}`, padding:"12px 20px 10px", boxShadow:"0 2px 8px rgba(0,0,0,0.3)" }}>
                  {/* Mobile back button */}
                  {isMobile && (
                    <button onClick={() => setAreaId(null)} style={{ background:"transparent", border:"none", color:C.muted, fontSize:13, cursor:"pointer", padding:"0 0 8px", display:"flex", alignItems:"center", gap:5, fontFamily:"'DM Sans',system-ui,sans-serif" }}>
                      <span style={{ fontSize:16 }}>←</span> All Areas
                    </button>
                  )}
                  {/* Nav + title row */}
                  <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:8 }}>
                    <div style={{ flex:1 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:3, flexWrap:"wrap" }}>
                        <span style={{ fontSize:9, color:C.muted, letterSpacing:2, textTransform:"uppercase" }}>{area.part}</span>
                        <span style={{ fontSize:9, color:tint.bar, background:`${tint.bar}22`, border:`1px solid ${tint.bar}55`, padding:"1px 7px", borderRadius:99, letterSpacing:0.5, textTransform:"uppercase", fontWeight:"700" }}>{typeLabel}</span>
                        {allDone && <span style={{ fontSize:9, color:C.green, background:"rgba(74,175,116,0.12)", border:`1px solid ${C.green}55`, padding:"1px 7px", borderRadius:99, fontWeight:"700", letterSpacing:0.5 }}>✓ COMPLETE</span>}
                      </div>
                      <h2 style={{ margin:0, fontSize:19, fontWeight:"700" }}>{area.name}</h2>
                    </div>
                    {/* Prev / Next arrows */}
                    <div style={{ display:"flex", gap:4, flexShrink:0, marginTop:2 }}>
                      <button onClick={() => prevArea && setAreaId(prevArea.id)} disabled={!prevArea}
                        title={prevArea ? prevArea.name : ""}
                        style={{ width:30, height:30, border:`1px solid ${C.border}`, borderRadius:6, cursor:prevArea?"pointer":"default", background:"transparent", color:prevArea?C.text:C.border, fontSize:14, display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.1s" }}>←</button>
                      <button onClick={() => nextArea && setAreaId(nextArea.id)} disabled={!nextArea}
                        title={nextArea ? nextArea.name : ""}
                        style={{ width:30, height:30, border:`1px solid ${C.border}`, borderRadius:6, cursor:nextArea?"pointer":"default", background:"transparent", color:nextArea?C.text:C.border, fontSize:14, display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.1s" }}>→</button>
                    </div>
                  </div>
                  {/* Progress bars */}
                  <div style={{ display:"flex", gap:10, marginTop:10, flexWrap:"wrap" }}>
                    <MiniBar label="Pokémon"  done={pokeDone}    total={verPokemon.length}    color={C.green} />
                    <MiniBar label="Items"    done={itemDone}    total={areaItems.length}     color={C.gold} />
                    {areaTrainers.length > 0 && <MiniBar label="Trainers" done={trainerDone} total={areaTrainers.length} color="#a87acc" />}
                  </div>
                </div>
              );
            })()}

            {/* ── Scrollable content ── */}
            <div style={{ padding:"14px 20px 20px" }}>
              {area.note && (
                <div style={{ background:"rgba(200,150,10,0.07)", border:`1px solid rgba(200,150,10,0.2)`, borderRadius:8, padding:"10px 14px", fontSize:12, color:"#c8b070", marginBottom:14, lineHeight:1.7 }}>
                  {area.note}
                </div>
              )}

              <div style={{ fontSize:11, color:C.muted, marginBottom:12, display:"flex", gap:16, flexWrap:"wrap" }}>
                <span><span style={{ color:"#c85252", fontWeight:"600" }}>FR</span> = FireRed exclusive</span>
                <span><span style={{ color:C.lgGreen, fontWeight:"600" }}>LG</span> = LeafGreen exclusive</span>
                <span><span style={{ color:C.gold }}>★</span> = Hidden (Itemfinder)</span>
              </div>

              {area.floors ? (
                // ── Floor-by-floor layout ─────────────────────────────────
                area.floors.map(floor => {
                  const hasPoks = (floor.pokemon  || []).length > 0;
                  const hasItms = (floor.items    || []).length > 0;
                  const hasTrns = (floor.trainers || []).length > 0;
                  if (!hasPoks && !hasItms && !hasTrns) return null;
                  const floorVerPoks = (floor.pokemon || []).filter(p => !(version === "fr" && p.lgOnly) && !(version === "lg" && p.frOnly));
                  const pokDone = floorVerPoks.filter(p => caught[p.name]).length;
                  const itmDone = (floor.items    || []).filter((_, i) => items[floorItemKey(areaId, floor.label, i)]).length;
                  const trnDone = (floor.trainers || []).filter(t => trainers[`${areaId}|${t.class}|${t.name}`]).length;
                  const floorTotal = floorVerPoks.length + (floor.items||[]).length + (floor.trainers||[]).length;
                  const floorDone  = pokDone + itmDone + trnDone;
                  const floorKey = `${areaId}|${floor.label}`;
                  const isCollapsed = collapsedFloors.has(floorKey);
                  return (
                    <div key={floor.label}>
                      {/* Collapsible floor divider */}
                      <div onClick={() => toggleFloor(floorKey)} style={{ display:"flex", alignItems:"center", gap:8, margin:"16px 0 10px", cursor:"pointer" }}>
                        <div style={{ padding:"2px 10px", background:"rgba(var(--frlg-accent-rgb,212,98,26),0.15)", border:`1px solid var(--frlg-accent)`, borderRadius:5, fontSize:11, fontWeight:"700", color:"var(--frlg-accent)", letterSpacing:1, flexShrink:0, opacity:0.85 }}>{floor.label}</div>
                        <div style={{ flex:1, height:1, background:C.border }} />
                        <span style={{ fontSize:10, color: floorDone===floorTotal && floorTotal>0 ? C.green : C.muted, flexShrink:0 }}>{floorDone}/{floorTotal}</span>
                        <span style={{ fontSize:11, color:C.muted, flexShrink:0 }}>{isCollapsed ? "▶" : "▼"}</span>
                      </div>
                      {!isCollapsed && (
                        <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap:12, marginBottom:12 }}>
                          {/* Wild Pokémon left */}
                          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                            <Section title="Wild Pokémon" count={`${pokDone}/${floorVerPoks.length}`} color={C.green}
                              allDone={pokDone===floorVerPoks.length && floorVerPoks.length>0}
                              onMarkAll={() => pokDone===floorVerPoks.length ? clearAllPokemon(floorVerPoks) : markAllPokemon(floorVerPoks)}>
                              {!hasPoks ? <Empty text="No wild Pokémon here" /> : renderPokemonList(floor.pokemon, caught, toggleCaught, version)}
                            </Section>
                            <Section title="Items" count={`${itmDone}/${(floor.items||[]).length}`} color={C.gold}
                              allDone={itmDone===(floor.items||[]).length && (floor.items||[]).length>0}
                              onMarkAll={() => { const kfn = (it,i) => floorItemKey(areaId,floor.label,i); itmDone===(floor.items||[]).length ? clearAllItems(floor.items||[],kfn) : markAllItems(floor.items||[],kfn); }}>
                              {!hasItms ? <Empty text="No items here" /> : floor.items.map((it,i) => {
                                const key = floorItemKey(areaId, floor.label, i);
                                return <ItemEntry key={i} it={it} itemKey={key} done={!!items[key]} toggleItem={toggleItem} isMobile={isMobile} />;
                              })}
                            </Section>
                          </div>
                          {/* Trainers right */}
                          <Section title="Trainers" count={`${trnDone}/${(floor.trainers||[]).length}`} color="#a87acc"
                            allDone={trnDone===(floor.trainers||[]).length && (floor.trainers||[]).length>0}
                            onMarkAll={() => trnDone===(floor.trainers||[]).length ? clearAllTrainers(floor.trainers||[]) : markAllTrainers(floor.trainers||[])}>
                            {!hasTrns ? <Empty text="No trainers here" /> : floor.trainers.map((t,i) => (
                              <TrainerEntry key={i} t={t} areaId={areaId} done={!!trainers[`${areaId}|${t.class}|${t.name}`]} toggleTrainer={toggleTrainer} />
                            ))}
                          </Section>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                // ── Flat layout (single-level areas) ─────────────────────
                <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap:12 }}>
                  {/* Wild Pokémon + Items left */}
                  <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                    <Section title="Wild Pokémon" count={`${pokeDone}/${verPokemon.length}`} color={C.green}
                      allDone={pokeDone===verPokemon.length && verPokemon.length>0}
                      onMarkAll={() => pokeDone===verPokemon.length ? clearAllPokemon(verPokemon) : markAllPokemon(verPokemon)}>
                      {areaPokemon.length === 0 ? <Empty text="No wild Pokémon here" /> :
                        renderPokemonList(areaPokemon, caught, toggleCaught, version)
                      }
                    </Section>
                    <Section title="Items" count={`${itemDone}/${areaItems.length}`} color={C.gold}
                      allDone={itemDone===areaItems.length && areaItems.length>0}
                      onMarkAll={() => { const kfn = (_,i) => flatItemKey(areaId,i); itemDone===areaItems.length ? clearAllItems(areaItems,kfn) : markAllItems(areaItems,kfn); }}>
                      {areaItems.length === 0 ? <Empty text="No items here" /> :
                        areaItems.map((it,i) => {
                          const key = flatItemKey(areaId, i);
                          return <ItemEntry key={i} it={it} itemKey={key} done={!!items[key]} toggleItem={toggleItem} isMobile={isMobile} />;
                        })
                      }
                    </Section>
                  </div>
                  {/* Trainers right */}
                  <Section title="Trainers" count={`${trainerDone}/${areaTrainers.length}`} color="#a87acc"
                    allDone={trainerDone===areaTrainers.length && areaTrainers.length>0}
                    onMarkAll={() => trainerDone===areaTrainers.length ? clearAllTrainers(areaTrainers) : markAllTrainers(areaTrainers)}>
                    {areaTrainers.length === 0 ? <Empty text="No trainers here" /> :
                      areaTrainers.map((t,i) => (
                        <TrainerEntry key={i} t={t} areaId={areaId} done={!!trainers[`${areaId}|${t.class}|${t.name}`]} toggleTrainer={toggleTrainer} />
                      ))
                    }
                  </Section>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      )}
    </div>
  );
}

// ─── Shared sub-components ────────────────────────────────────────────────────
function AreaRow({ area, areaId, setAreaId, caught, items, trainers }) {
  const isSel  = areaId === area.id;
  const allPoks = flattenPokemon(area);
  const allItms = flattenItems(area);
  const allTrns = flattenTrainers(area);
  const pd  = allPoks.filter(p => caught[p.name]).length;
  const id_ = countItemsDone(area, area.id, items);
  const td  = allTrns.filter(t => trainers[`${area.id}|${t.class}|${t.name}`]).length;
  const total = allPoks.length + allItms.length + allTrns.length;
  const allDone = total > 0 && (pd + id_ + td) === total;
  const tint = AREA_TINT[getAreaType(area)];
  return (
    <div onClick={() => setAreaId(area.id)} style={{
        padding:"8px 12px", cursor:"pointer",
        borderBottom:`1px solid rgba(58,42,28,0.5)`,
        borderLeft: isSel ? `3px solid var(--frlg-accent)` : `3px solid ${tint.bar}`,
        background: isSel ? "rgba(var(--frlg-accent-rgb,212,98,26),0.10)" : tint.bg,
        transition:"background 0.1s" }}
      onMouseEnter={e => { if (!isSel) e.currentTarget.style.background="rgba(255,255,255,0.04)"; }}
      onMouseLeave={e => { if (!isSel) e.currentTarget.style.background=tint.bg; }}>
      <div style={{ fontSize:12, fontWeight: isSel ? "600" : "400", color: allDone ? C.green : isSel ? C.text : "#c4a888", lineHeight:1.4 }}>{allDone ? "✓ " : ""}{area.name}</div>
      {total > 0 && (
        <div style={{ display:"flex", gap:10, marginTop:3, fontSize:10, color:C.muted }}>
          <span style={{ color: pd===allPoks.length && allPoks.length>0 ? C.green : C.muted }}>{pd}/{allPoks.length} pkm</span>
          <span style={{ color: id_===allItms.length && allItms.length>0 ? C.gold : C.muted }}>{id_}/{allItms.length} itm</span>
          {allTrns.length > 0 && <span style={{ color: td===allTrns.length ? "#a87acc" : C.muted }}>{td}/{allTrns.length} tr</span>}
        </div>
      )}
    </div>
  );
}



const METHOD_GROUP = m => {
  if (m === "Surf" || m === "Old Rod" || m === "Good Rod" || m === "Super Rod") return m;
  return null;
};

function MethodDivider({ label }) {
  const color = label === "Surf" ? "#4a8fc4" : "#4a9fa0";
  const sprite = METHOD_SPRITE_URL[label];
  return (
    <div style={{ display:"flex", alignItems:"center", gap:7, margin:"6px 0 2px" }}>
      <div style={{ flex:1, height:1, background:C.border }} />
      <div style={{ display:"flex", alignItems:"center", gap:4 }}>
        {sprite && <img src={sprite} alt="" style={{ width:16, height:16, imageRendering:"pixelated" }} />}
        <span style={{ fontSize:10, fontWeight:"700", letterSpacing:"0.1em", textTransform:"uppercase", color }}>{label}</span>
      </div>
      <div style={{ flex:1, height:1, background:C.border }} />
    </div>
  );
}

function renderPokemonList(pokemon, caught, toggleCaught, version) {
  // Sort within each consecutive method block by effective rate descending.
  // Method block order is preserved; only intra-group ordering changes.
  const getPct = p => {
    const m = p.rate && p.rate.match(/^(\S+)\s+FR\s*\/\s*(\S+)\s+LG$/i);
    if (m) return (version === "fr" ? parseRatePct(m[1]) : parseRatePct(m[2])) || 0;
    return parseRatePct(p.rate) || 0;
  };
  const sorted = [];
  let i = 0;
  while (i < pokemon.length) {
    const method = pokemon[i].method;
    let j = i;
    while (j < pokemon.length && pokemon[j].method === method) j++;
    sorted.push(...pokemon.slice(i, j).slice().sort((a, b) => getPct(b) - getPct(a)));
    i = j;
  }

  const items = [];
  let lastGroup = null;
  sorted.forEach((p, idx) => {
    const group = METHOD_GROUP(p.method);
    if (group && group !== lastGroup) items.push({ type:"divider", label:group, key:`div-${idx}` });
    lastGroup = group;
    items.push({ type:"pokemon", p, key:`${idx}-${p.name}` });
  });
  return items.map(item =>
    item.type === "divider"
      ? <MethodDivider key={item.key} label={item.label} />
      : <PokemonEntry key={item.key} p={item.p} caught={caught} toggleCaught={toggleCaught} version={version} />
  );
}

function PokemonEntry({ p, caught, toggleCaught, version }) {
  const isCaught = !!caught[p.name];
  if ((version === "fr" && p.lgOnly) || (version === "lg" && p.frOnly)) return null;

  // Determine if a better-rate area exists for this Pokémon
  const splitMatch = p.rate && p.rate.match(/^(\S+)\s+FR\s*\/\s*(\S+)\s+LG$/i);
  const currentPct = splitMatch
    ? parseRatePct(version === "fr" ? splitMatch[1] : splitMatch[2])
    : parseRatePct(p.rate);
  const best = BEST_AREA_MAP[version][p.name];
  const hasBetter = !isCaught && currentPct && best && best.pct > currentPct;

  return (
    <Row done={isCaught} onClick={() => toggleCaught(p.name)}>
      {DEX_ID[p.name] && <img src={pokeSpriteUrl(DEX_ID[p.name])} alt={p.name} style={{ width:36, height:36, imageRendering:"pixelated", flexShrink:0, opacity:isCaught?1:0.65, filter:isCaught?"none":"brightness(0)" }} />}
      <div style={{ flex:1 }}>
        <span style={{ color:isCaught?C.green:p.lgOnly?C.lgGreen:p.frOnly?"#c85252":C.text, fontWeight:"600", fontSize:12 }}>
          {p.name}{p.frOnly&&<Tag color="#c85252">FR</Tag>}{p.lgOnly&&<Tag color={C.lgGreen}>LG</Tag>}
        </span>
        {METHOD_SPRITE_URL[p.method]
          ? <span style={{ display:"inline-flex", alignItems:"center", gap:3, marginLeft:6 }}>
              <img src={METHOD_SPRITE_URL[p.method]} alt="" style={{ width:16, height:16, imageRendering:"pixelated", flexShrink:0 }} />
              <span style={{ fontSize:10, color:C.muted }}>{p.method}</span>
            </span>
          : <span style={{ fontSize:10, color:C.muted, marginLeft:6 }}>{p.method}</span>
        }
        {p.note&&<div style={{ fontSize:10, color:"#b87030", marginTop:2 }}>{p.note}</div>}
        {hasBetter&&<div style={{ fontSize:9, color:"#7ab4d4", marginTop:2 }}>↑ {best.pct}% in {best.areaName}</div>}
      </div>
      <div style={{ textAlign:"right", flexShrink:0, paddingLeft:8, display:"flex", flexDirection:"column", alignItems:"flex-end", gap:3 }}>
        <RateDisplay rate={p.rate} />
        {p.levels&&<div style={{ fontSize:10, color:C.muted }}>Lv.{p.levels}</div>}
      </div>
    </Row>
  );
}

function ItemEntry({ it, itemKey, done, toggleItem, isMobile }) {
  const [showLightbox, setShowLightbox] = React.useState(false);
  const [hoverPos, setHoverPos]         = React.useState(null);
  const btnRef = React.useRef(null);

  const openLightbox  = e => { e.stopPropagation(); setShowLightbox(true); };
  const closeLightbox = () => setShowLightbox(false);

  const onPinEnter = () => {
    if (!btnRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    setHoverPos({
      right: window.innerWidth - r.left + 8,
      top:   Math.min(Math.max(r.top + r.height / 2, 80), window.innerHeight - 80),
    });
  };
  const onPinLeave = () => setHoverPos(null);

  return (
    <>
      <Row done={done} onClick={() => toggleItem(itemKey)}>
        {itemSpriteUrl(it.name)&&<img src={itemSpriteUrl(it.name)} alt={it.name} style={{ width:24, height:24, imageRendering:"pixelated", flexShrink:0 }} />}
        <div style={{ flex:1 }}>
          <span style={{ fontSize:12, fontWeight:"600", color:it.hidden?C.gold:C.text }}>
            {it.hidden&&<span style={{ color:C.gold, marginRight:4 }}>★</span>}{it.name}
          </span>
          {it.note&&<div style={{ fontSize:10, color:C.muted, marginTop:2, lineHeight:1.5 }}>{it.note}</div>}
        </div>
        {it.img&&(
          <button ref={btnRef}
            onClick={isMobile ? openLightbox : e => e.stopPropagation()}
            onMouseEnter={isMobile ? undefined : onPinEnter}
            onMouseLeave={isMobile ? undefined : onPinLeave}
            style={{ background:"transparent", border:"none", cursor:"pointer", color:C.muted,
                     fontSize:14, padding:"0 4px", flexShrink:0, alignSelf:"center" }}
            title="View location screenshot">📍</button>
        )}
      </Row>

      {/* Desktop hover popover */}
      {hoverPos&&(
        <div style={{ position:"fixed", right:hoverPos.right, top:hoverPos.top,
                      transform:"translateY(-50%)", zIndex:300, pointerEvents:"none",
                      background:C.card, border:`1px solid ${C.border}`, borderRadius:8,
                      padding:8, boxShadow:"0 8px 32px rgba(0,0,0,0.7)", maxWidth:300 }}>
          <div style={{ fontSize:11, fontWeight:"600", color:C.text, marginBottom:6 }}>
            {it.hidden&&"★ "}{it.name}
          </div>
          <img src={it.img} alt={`${it.name} location`}
            style={{ width:"100%", display:"block", borderRadius:4 }} />
        </div>
      )}

      {/* Mobile tap lightbox */}
      {showLightbox&&(
        <div onClick={closeLightbox}
          style={{ position:"fixed", inset:0, zIndex:300, background:"rgba(0,0,0,0.88)",
                   display:"flex", alignItems:"center", justifyContent:"center" }}>
          <div onClick={e=>e.stopPropagation()} style={{ position:"relative", maxWidth:"92vw" }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:8 }}>
              <span style={{ color:C.text, fontSize:13, fontWeight:"600" }}>
                {it.hidden&&"★ "}{it.name}
              </span>
              <button onClick={closeLightbox}
                style={{ background:"transparent", border:`1px solid ${C.border}`, color:C.muted,
                         borderRadius:6, cursor:"pointer", padding:"2px 10px", fontSize:14, marginLeft:16 }}>✕</button>
            </div>
            <img src={it.img} alt={`${it.name} location`}
              style={{ maxWidth:"100%", maxHeight:"80vh", display:"block",
                       borderRadius:6, border:`1px solid ${C.border}` }} />
          </div>
        </div>
      )}
    </>
  );
}

function TrainerEntry({ t, areaId, done, toggleTrainer }) {
  const key = `${areaId}|${t.class}|${t.name}`;
  const tSprite = trainerSpriteUrl(t.class, t.name);
  return (
    <Row done={done} onClick={() => toggleTrainer(key)}>
      {tSprite&&<img src={tSprite} alt={t.class} style={{ width:48, height:48, imageRendering:"pixelated", flexShrink:0 }} />}
      <div style={{ flex:1 }}>
        <div style={{ fontSize:12, fontWeight:"600", marginBottom:2 }}>{t.class} {t.name}</div>
        {t.note&&<div style={{ fontSize:10, color:C.muted, marginBottom:5, lineHeight:1.4 }}>{t.note}</div>}
        {t.team?.length>0&&(
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            {t.team.map((p,j)=>{
              const pid=DEX_ID[p.name];
              return (
                <div key={j} style={{ textAlign:"center" }}>
                  {pid&&<img src={pokeSpriteUrl(pid)} alt={p.name} style={{ width:32, height:32, imageRendering:"pixelated", display:"block", margin:"0 auto" }} />}
                  <div style={{ fontSize:9, color:C.muted, lineHeight:1.3 }}>{p.name}</div>
                  <div style={{ fontSize:9, color:C.muted }}>Lv.{p.level}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Row>
  );
}

function Section({ title, count, color, children, onMarkAll, allDone }) {
  return (
    <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:10, overflow:"hidden" }}>
      <div style={{ padding:"9px 14px", background:"rgba(0,0,0,0.15)", borderBottom:`1px solid ${C.border}`, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <span style={{ fontSize:12, fontWeight:"600" }}>{title}</span>
        <div style={{ display:"flex", gap:6, alignItems:"center" }}>
          <span style={{ fontSize:11, color, padding:"2px 9px", background:"rgba(0,0,0,0.25)", borderRadius:99, fontWeight:"600" }}>{count}</span>
          {onMarkAll && (
            <button onClick={e => { e.stopPropagation(); onMarkAll(); }}
              title={allDone ? "Clear all" : "Mark all done"}
              style={{ fontSize:9, fontWeight:"700", padding:"2px 7px", border:`1px solid ${allDone ? C.muted : color}`, borderRadius:99, cursor:"pointer", background:"transparent", color: allDone ? C.muted : color, letterSpacing:0.5, transition:"all 0.12s" }}>
              {allDone ? "CLEAR" : "ALL ✓"}
            </button>
          )}
        </div>
      </div>
      <div style={{ maxHeight:460, overflowY:"auto" }}>{children}</div>
    </div>
  );
}

function Row({ done, onClick, children }) {
  return (
    <div onClick={onClick} style={{ display:"flex", alignItems:"flex-start", gap:10, padding:"10px 14px", minHeight:44, cursor:"pointer", borderBottom:`1px solid ${C.border}20`, background: done?"rgba(74,175,116,0.05)":"transparent", transition:"background 0.1s" }}
      onMouseEnter={e => e.currentTarget.style.background = done?"rgba(74,175,116,0.09)":"rgba(255,255,255,0.025)"}
      onMouseLeave={e => e.currentTarget.style.background = done?"rgba(74,175,116,0.05)":"transparent"}>
      <div style={{ width:18, height:18, border:`2px solid ${done ? C.green : C.border}`, background:done?C.green:"transparent", borderRadius:4, flexShrink:0, marginTop:1, display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.12s" }}>
        {done && <span style={{ color:"#000", fontSize:10, fontWeight:"700", lineHeight:1 }}>✓</span>}
      </div>
      <div style={{ display:"flex", justifyContent:"space-between", flex:1, opacity:done?0.4:1, textDecoration:done?"line-through":"none" }}>{children}</div>
    </div>
  );
}

function Tag({ color, children }) {
  return <span style={{ marginLeft:5, fontSize:9, color, border:`1px solid ${color}`, padding:"0 4px", borderRadius:3, verticalAlign:"middle", fontWeight:"600" }}>{children}</span>;
}

// ─── ENCOUNTER MATH ──────────────────────────────────────────────────────────
function parseRatePct(str) {
  if (!str) return null;
  const m = str.match(/^(\d+(?:\.\d+)?)%/);
  return m ? parseFloat(m[1]) : null;
}
function encMath(pct) {
  if (!pct || pct <= 0) return null;
  const p = pct / 100;
  return {
    avg:    Math.ceil(1 / p),
    conf95: Math.ceil(Math.log(0.05) / Math.log(1 - p)),
  };
}

// Parses rate strings like "5% FR / 10% LG" into split FR/LG pills,
// or renders a plain rate badge for simple values like "50%" or "×1".
// Hover (desktop) or tap (mobile) shows encounter math tooltip.
function RateDisplay({ rate }) {
  const [pos, setPos] = useState(null);
  const ref = React.useRef(null);
  if (!rate) return null;

  const splitMatch = rate.match(/^(\S+)\s+FR\s*\/\s*(\S+)\s+LG$/i);
  const isOneTime  = rate === "×1";

  const frPct     = splitMatch ? parseRatePct(splitMatch[1]) : null;
  const lgPct     = splitMatch ? parseRatePct(splitMatch[2]) : null;
  const simplePct = (!splitMatch && !isOneTime) ? parseRatePct(rate) : null;
  const frMath    = frPct     ? encMath(frPct)     : null;
  const lgMath    = lgPct     ? encMath(lgPct)     : null;
  const simpleMath = simplePct ? encMath(simplePct) : null;
  const hasMath   = !!(frMath || lgMath || simpleMath);

  const show = e => {
    if (!ref.current || !hasMath) return;
    e.stopPropagation();
    const r = ref.current.getBoundingClientRect();
    setPos({ x: r.left + r.width / 2, y: r.top });
  };
  const hide   = ()  => setPos(null);
  const toggle = e   => { e.stopPropagation(); pos ? hide() : show(e); };

  const badge = splitMatch ? (
    <div style={{ display:"flex", flexDirection:"column", gap:3, alignItems:"flex-end" }}>
      <span style={{ fontSize:11, fontWeight:"700", color:"#c85252", background:"rgba(200,82,82,0.12)", border:"1px solid rgba(200,82,82,0.3)", padding:"1px 6px", borderRadius:4, whiteSpace:"nowrap" }}>FR {splitMatch[1]}</span>
      <span style={{ fontSize:11, fontWeight:"700", color:C.lgGreen, background:"rgba(63,168,74,0.12)", border:"1px solid rgba(63,168,74,0.3)", padding:"1px 6px", borderRadius:4, whiteSpace:"nowrap" }}>LG {splitMatch[2]}</span>
    </div>
  ) : isOneTime ? (
    <span style={{ fontSize:11, fontWeight:"700", color:"#c8960a", background:"rgba(200,150,10,0.12)", border:"1px solid rgba(200,150,10,0.3)", padding:"1px 6px", borderRadius:4, whiteSpace:"nowrap" }}>×1</span>
  ) : (() => {
    const num = simplePct || 0;
    const rateColor = num >= 30 ? "#5ab0d8" : num >= 10 ? "#d4b840" : "#9878cc";
    return <span style={{ fontSize:12, fontWeight:"700", color:rateColor, whiteSpace:"nowrap" }}>{rate}</span>;
  })();

  return (
    <>
      <span ref={ref}
        onMouseEnter={show} onMouseLeave={hide} onClick={toggle}
        style={{ cursor: hasMath ? "help" : "default", display:"inline-flex" }}>
        {badge}
      </span>
      {pos && hasMath && (
        <div style={{ position:"fixed", left:pos.x, top:pos.y - 8,
                      transform:"translate(-50%,calc(-100% - 4px))", zIndex:400,
                      background:C.card, border:`1px solid ${C.border}`, borderRadius:8,
                      padding:"8px 12px", boxShadow:"0 8px 32px rgba(0,0,0,0.75)",
                      pointerEvents:"none", minWidth:170 }}>
          {splitMatch ? (
            <>
              {frMath && <div style={{ fontSize:11, color:"#c85252", marginBottom:3 }}>
                <b>FR</b> — ~{frMath.avg} avg · ≤{frMath.conf95} for 95%
              </div>}
              {lgMath && <div style={{ fontSize:11, color:C.lgGreen }}>
                <b>LG</b> — ~{lgMath.avg} avg · ≤{lgMath.conf95} for 95%
              </div>}
            </>
          ) : (
            <div style={{ fontSize:11, color:C.text }}>
              ~{simpleMath.avg} avg · ≤{simpleMath.conf95} for 95%
            </div>
          )}
          <div style={{ fontSize:10, color:C.muted, marginTop:4 }}>encounters to see this Pokémon</div>
        </div>
      )}
    </>
  );
}

function Empty({ text }) {
  return <div style={{ padding:20, textAlign:"center", fontSize:12, color:C.muted }}>{text}</div>;
}

function MiniBar({ label, done, total, color }) {
  const p = pct(done, total);
  return (
    <div style={{ flex:1, minWidth:130 }}>
      <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, marginBottom:4 }}>
        <span style={{ color:C.muted }}>{label}</span>
        <span style={{ color, fontWeight:"600" }}>{done}/{total}{total?` (${p}%)`:""}</span>
      </div>
      <div style={{ height:5, background:"rgba(0,0,0,0.3)", borderRadius:99, overflow:"hidden" }}>
        <div style={{ height:"100%", width:`${p}%`, background:color, borderRadius:99, transition:"width 0.3s" }} />
      </div>
    </div>
  );
}
