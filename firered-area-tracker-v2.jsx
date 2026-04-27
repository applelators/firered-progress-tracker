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
    note:"Worth visiting early — Mankey is useful against Brock.",
    pokemon:[{name:"Rattata",method:"Grass",levels:"2–5",rate:"45%"},{name:"Mankey",method:"Grass",levels:"2–5",rate:"45%"},{name:"Spearow",method:"Grass",levels:"3–5",rate:"10%"}],
    items:[],
    trainers:[{class:"Rival",name:"Blue",note:"Pidgey + whichever starter counters yours, both Lv.9.",team:[{name:"Pidgey",level:9}]}] },

  { part:"Part 2", id:"route2-west", name:"Route 2 (West)",
    note:"Pass-through on the way to Viridian Forest. Wild Pokémon are available on first visit.",
    pokemon:[{name:"Pidgey",method:"Grass",levels:"2–5",rate:"45%"},{name:"Rattata",method:"Grass",levels:"2–5",rate:"45%"},{name:"Caterpie",method:"Grass",levels:"4–5",rate:"5%"},{name:"Weedle",method:"Grass",levels:"4–5",rate:"5%"}],
    items:[] },

  { part:"Part 3", id:"viridian-forest", name:"Viridian Forest",
    note:"Pikachu is rare but catchable here (5%). Metapod and Kakuna both appear in both versions at different rates — Kakuna is more common in FireRed, Metapod in LeafGreen.",
    pokemon:[{name:"Caterpie",method:"Grass",levels:"3–5",rate:"40%"},{name:"Weedle",method:"Grass",levels:"3–5",rate:"40%"},{name:"Metapod",method:"Grass",levels:"4–6",rate:"5% FR / 10% LG"},{name:"Kakuna",method:"Grass",levels:"4–6",rate:"10% FR / 5% LG"},{name:"Pikachu",method:"Grass",levels:"3–5",rate:"5%"}],
    items:[{name:"Poké Ball",hidden:false,note:"Dead-end grassy path northwest of south entrance"},{name:"Antidote",hidden:true,note:"West side of lone tree near south entrance"},{name:"Antidote",hidden:false,note:"Northeast area past Trainer Tips sign"},{name:"Potion",hidden:false,note:"Tall grass east of southern entrance"},{name:"Potion",hidden:false,note:"Dead-end path southeast of north exit"},{name:"Potion",hidden:true,note:"In front of Bug Catcher Sammy near north exit"}],
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
    items:[{name:"Poké Ball",hidden:true,note:"West of Pewter Museum on lighter-colored grass"},{name:"TM39 Rock Tomb",hidden:false,note:"Reward from Brock after defeating him"},{name:"Running Shoes",hidden:false,note:"From Professor Oak's aide on east side of town after defeating Brock"},{name:"Old Amber",hidden:false,note:"Scientist in back of Museum (requires Cut) — bring to Cinnabar Lab to revive Aerodactyl"}],
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
    items:[{name:"Oran Berry",hidden:true,note:"Between ledges near Youngster Calvin (★ Itemfinder)"}],
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
    items:[{name:"Persim Berry",hidden:true,note:"West of Pokémon Center, between rocks (★ Itemfinder)"}],
    trainers:[] },

  { part:"Part 4", id:"mt-moon", name:"Mt. Moon",
    note:"⚠ CHOOSE ONE fossil at the end of B2F — Dome→Kabuto or Helix→Omanyte. Only one per file; trade for the other. Pokémon availability varies significantly by floor.",
    pokemon:[
      {name:"Zubat",    method:"Cave (1F)",  levels:"7–10", rate:"69%"},
      {name:"Geodude",  method:"Cave (1F)",  levels:"7–9",  rate:"25%"},
      {name:"Paras",    method:"Cave (1F)",  levels:"8",    rate:"5%"},
      {name:"Clefairy", method:"Cave (1F)",  levels:"8",    rate:"1%"},
      {name:"Paras",    method:"Cave (B1F)", levels:"5–10", rate:"100%"},
      {name:"Zubat",    method:"Cave (B2F)", levels:"8–11", rate:"49%"},
      {name:"Geodude",  method:"Cave (B2F)", levels:"9–10", rate:"30%"},
      {name:"Paras",    method:"Cave (B2F)", levels:"10–12",rate:"15%"},
      {name:"Clefairy", method:"Cave (B2F)", levels:"10–12",rate:"6%"},
      {name:"Kabuto",   method:"Fossil",     levels:"5",    note:"Restore Dome Fossil at Cinnabar Lab (if you chose Dome)"},
      {name:"Omanyte",  method:"Fossil",     levels:"5",    note:"Restore Helix Fossil at Cinnabar Lab (if you chose Helix)"},
    ],
    items:[
      {name:"TM09 Bullet Seed",hidden:false,note:"1F, west chamber"},
      {name:"Paralyze Heal",   hidden:false,note:"1F, west chamber"},
      {name:"Potion",          hidden:false,note:"1F, southeast area"},
      {name:"Rare Candy",      hidden:false,note:"1F, southeast corner"},
      {name:"Escape Rope",     hidden:false,note:"1F, east-central area"},
      {name:"Moon Stone",      hidden:false,note:"1F, northwest corner"},
      {name:"Tiny Mushroom",   hidden:true, note:"B1F — recurring hidden items throughout B1F/B2F (★ Itemfinder)"},
      {name:"Big Mushroom",    hidden:true, note:"B1F — recurring hidden items (★ Itemfinder)"},
      {name:"Star Piece",      hidden:false,note:"B2F, south section"},
      {name:"TM46 Thief",      hidden:false,note:"B2F, northeast platform"},
      {name:"Ether",           hidden:true, note:"B2F, northeast section (★ Itemfinder)"},
      {name:"Moon Stone",      hidden:true, note:"B2F, near fossils (★ Itemfinder)"},
      {name:"Revive",          hidden:false,note:"B2F, north of center ladder"},
      {name:"Antidote",        hidden:false,note:"B2F, southwest of northwest ladder"},
      {name:"Dome Fossil",     hidden:false,note:"⚠ B2F — choose Dome OR Helix, not both! (Dome→Kabuto)"},
      {name:"Helix Fossil",    hidden:false,note:"⚠ B2F — choose Dome OR Helix, not both! (Helix→Omanyte)"},
    ],
    trainers:[
      {class:"Bug Catcher",      name:"Kent",   team:[{name:"Weedle",   level:11},{name:"Kakuna",   level:11}]},
      {class:"Lass",             name:"Iris",   team:[{name:"Clefairy", level:14}]},
      {class:"Super Nerd",       name:"Jovan",  team:[{name:"Magnemite",level:11},{name:"Voltorb",  level:11}]},
      {class:"Bug Catcher",      name:"Robby",  team:[{name:"Caterpie", level:10},{name:"Metapod",  level:10},{name:"Caterpie",level:10}]},
      {class:"Lass",             name:"Miriam", team:[{name:"Oddish",   level:11},{name:"Bellsprout",level:11}]},
      {class:"Youngster",        name:"Josh",   team:[{name:"Rattata",  level:10},{name:"Rattata",  level:10},{name:"Zubat",   level:10}]},
      {class:"Hiker",            name:"Marcos", team:[{name:"Geodude",  level:10},{name:"Geodude",  level:10},{name:"Onix",    level:10}]},
      {class:"Team Rocket Grunt",name:"Grunt 1",team:[{name:"Sandshrew",level:11},{name:"Rattata",  level:11},{name:"Zubat",   level:11}]},
      {class:"Team Rocket Grunt",name:"Grunt 2",team:[{name:"Zubat",    level:11},{name:"Ekans",    level:11}]},
      {class:"Team Rocket Grunt",name:"Grunt 3",team:[{name:"Rattata",  level:13},{name:"Sandshrew",level:13}]},
      {class:"Team Rocket Grunt",name:"Grunt 4",team:[{name:"Rattata",  level:13},{name:"Zubat",    level:13}]},
      {class:"Super Nerd",       name:"Miguel", team:[{name:"Grimer",   level:12},{name:"Voltorb",  level:12},{name:"Koffing",level:12}]},
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
      {name:"Great Ball",  hidden:true, note:"Corner west of northwest hill (★ Itemfinder)"},
      {name:"Razz Berry",  hidden:true, note:"South-central area (★ Itemfinder)"},
      {name:"TM05 Roar",   hidden:false,note:"Eastern hill — from the man by the hill"},
    ],
    trainers:[] },

  { part:"Part 5", id:"cerulean-city", name:"Cerulean City",
    note:"Defeat Misty for TM03 Water Pulse. Blue battles you near the south bridge. A trade NPC offers Jynx for Poliwhirl.",
    pokemon:[{name:"Jynx",method:"Trade",levels:"any",note:"Trade Poliwhirl to the man near the Pokémon Center"}],
    items:[
      {name:"Rare Candy",      hidden:true, note:"Backyard of northwest house (★ Itemfinder)"},
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
      {name:"Pecha Berry",  hidden:true, note:"Northeast hill, accessible via Route 25 (★ Itemfinder)"},
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
      {name:"Elixir",          hidden:true, note:"Northwest maze near Hiker Franklin (★ Itemfinder)"},
      {name:"TM43 Secret Power",hidden:false,note:"Northeast maze"},
      {name:"Oran Berry",      hidden:true, note:"Southeast of maze (★ Itemfinder)"},
      {name:"Bluk Berry",      hidden:true, note:"Northeast maze near fence end (★ Itemfinder)"},
      {name:"Ether",           hidden:true, note:"Near Sea Cottage entrance (★ Itemfinder)"},
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
      {name:"Rare Candy",  hidden:true,note:"Northeast hill, two steps north of gap between ledges (★ Itemfinder)"},
      {name:"Sitrus Berry",hidden:true,note:"Northwest hill (★ Itemfinder)"},
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
      {name:"Max Ether",      hidden:true, note:"Four steps south, one step west of Pokémon Center entrance (★ Itemfinder)"},
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
    note:"⚠ ONE-TIME EVENT — ship leaves permanently after receiving HM01 Cut. Defeat Blue on 2F and sweep all cabins before talking to the Captain! A hidden Lava Cookie in the harbour requires Surf — missable if you skip it.",
    pokemon:[],
    items:[
      {name:"TM31 Brick Break",hidden:false,note:"1F, second cabin from left"},
      {name:"Great Ball",      hidden:false,note:"1F, kitchen"},
      {name:"Pecha Berry",     hidden:true, note:"1F, kitchen — nearest trash can to doorway (★ Itemfinder)"},
      {name:"Cheri Berry",     hidden:true, note:"1F, kitchen — middle trash can (★ Itemfinder)"},
      {name:"Chesto Berry",    hidden:true, note:"1F, kitchen — farthest trash can from doorway (★ Itemfinder)"},
      {name:"Hyper Potion",    hidden:true, note:"B1F, hallway trash can near stairs to 1F (★ Itemfinder)"},
      {name:"Super Potion",    hidden:false,note:"B1F, rightmost cabin"},
      {name:"Ether",           hidden:false,note:"B1F, middle cabin"},
      {name:"TM44 Rest",       hidden:false,note:"B1F, second cabin from left"},
      {name:"Stardust",        hidden:false,note:"2F, second cabin from left"},
      {name:"X Attack",        hidden:false,note:"2F, fourth cabin from left"},
      {name:"HM01 Cut",        hidden:false,note:"2F, Captain's quarters — from the Captain after helping him"},
      {name:"Lava Cookie",     hidden:true, note:"⚠ Harbour SE corner near the truck — requires Surf, only while ship is moored (★ Itemfinder)"},
    ],
    trainers:[
      {class:"Gentleman",name:"Thomas", team:[{name:"Growlithe",level:18},{name:"Growlithe",level:18}]},
      {class:"Gentleman",name:"Arthur", team:[{name:"Nidoran♂", level:19},{name:"Nidoran♀", level:19}]},
      {class:"Lass",     name:"Ann",    team:[{name:"Pidgey",   level:18},{name:"Nidoran♀", level:18}]},
      {class:"Youngster",name:"Tyler",  team:[{name:"Nidoran♂", level:21}]},
      {class:"Fisherman",name:"Barny",  team:[{name:"Tentacool",level:17},{name:"Staryu",   level:17},{name:"Shellder",level:17}]},
      {class:"Sailor",   name:"Phillip",team:[{name:"Machop",   level:20}]},
      {class:"Sailor",   name:"Huey",   team:[{name:"Tentacool",level:18},{name:"Staryu",   level:18}]},
      {class:"Sailor",   name:"Dylan",  team:[{name:"Horsea",   level:17},{name:"Horsea",   level:17},{name:"Horsea",  level:17}]},
      {class:"Sailor",   name:"Duncan", team:[{name:"Horsea",   level:17},{name:"Shellder",  level:17},{name:"Tentacool",level:17}]},
      {class:"Sailor",   name:"Leonard",team:[{name:"Shellder", level:21}]},
      {class:"Sailor",   name:"Trevor", team:[{name:"Machop",   level:17},{name:"Tentacool",level:17}]},
      {class:"Sailor",   name:"Edmond", team:[{name:"Machop",   level:18},{name:"Shellder",  level:18}]},
      {class:"Fisherman",name:"Dale",   team:[{name:"Goldeen",  level:17},{name:"Goldeen",   level:17},{name:"Tentacool",level:17}]},
      {class:"Gentleman",name:"Brooks", team:[{name:"Pikachu",  level:23}]},
      {class:"Lass",     name:"Dawn",   team:[{name:"Rattata",  level:18},{name:"Pikachu",   level:18}]},
      {class:"Gentleman",name:"Lamar",  team:[{name:"Growlithe",level:17},{name:"Ponyta",    level:17}]},
      {class:"Rival",    name:"Blue",   note:"4th Pokémon is the starter strong against yours.",
        team:[{name:"Pidgeotto",level:19},{name:"Raticate",level:16},{name:"Kadabra",level:18}]},
    ] },

  { part:"Part 7", id:"digletts-cave", name:"Diglett's Cave",
    note:"Simple cave between Route 2 and Route 11. Two Pokémon only.",
    pokemon:[{name:"Diglett",method:"Cave",levels:"15–22",rate:"95%"},{name:"Dugtrio",method:"Cave",levels:"29–31",rate:"5%"}],
    items:[] },

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
      {name:"Escape Rope", hidden:true, note:"On a rock just north of the east gate (★ Itemfinder)"},
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
      {name:"Ether",          hidden:true, note:"Northwest part of the route, on a rock (★ Itemfinder)"},
      {name:"Burn Heal",      hidden:false,note:"Southeast corner of the route"},
      {name:"Chesto Berry",   hidden:true, note:"Northeast part of the route (★ Itemfinder)"},
      {name:"Rare Candy",     hidden:true, note:"Northeast part of the route, one step west and south from corner (★ Itemfinder)"},
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
      {name:"Persim Berry",hidden:true, note:"Southeast of Pokémon Center, corner of fencing (★ Itemfinder)"},
      {name:"Cheri Berry", hidden:true, note:"Southwest of Pokémon Center, edge of dirt patch (★ Itemfinder)"},
      {name:"Super Potion",hidden:true, note:"One step east of Rock Tunnel north entrance — requires Cut (★ Itemfinder)"},
    ],
    trainers:[
      {class:"Picnicker", name:"Heidi",team:[{name:"Pikachu", level:20},{name:"Clefairy",level:20}]},
      {class:"PokéManiac",name:"Mark", team:[{name:"Rhyhorn", level:29},{name:"Lickitung",level:29}]},
    ] },

  { part:"Part 8", id:"rock-tunnel", name:"Rock Tunnel",
    note:"Two floors. Flash isn't required but helps. Mankey is FR-only; Slowpoke is LG-only.",
    pokemon:[{name:"Zubat",method:"Cave",levels:"17–22",rate:"50%"},{name:"Geodude",method:"Cave",levels:"16–23",rate:"15%"},{name:"Machop",method:"Cave",levels:"16–20",rate:"15%"},{name:"Onix",method:"Cave",levels:"16–20",rate:"10%"},{name:"Mankey",method:"Cave",levels:"17–22",rate:"5%",frOnly:true},{name:"Slowpoke",method:"Cave",levels:"16–20",rate:"5%",lgOnly:true}],
    items:[{name:"Revive",hidden:false,note:"1F"},{name:"Max Ether",hidden:false,note:"1F"},{name:"Escape Rope",hidden:false,note:"1F"},{name:"Potion",hidden:false,note:"1F"},{name:"Hyper Potion",hidden:false,note:"B1F"},{name:"Full Heal",hidden:false,note:"B1F"},{name:"TM28 Dig",hidden:false,note:"B1F"},{name:"Antidote",hidden:true,note:"Itemfinder, 1F"},{name:"Potion",hidden:true,note:"Itemfinder, B1F"}] },

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
  bg:"#110d08", card:"#1c1510", border:"#3a2a1c", accent:"#d4621a",
  gold:"#c8960a", green:"#4aaf74", lgBlue:"#52b860", text:"#ede0d4",
  muted:"#8a7a6a", panel:"#231a12",
};

// Parts that have been fully audited against the Bulbapedia walkthrough — extend as each part is verified.
const AUDITED_PARTS = new Set(["Part 1", "Part 2", "Part 3", "Part 4", "Part 5", "Part 6", "Part 7"]);

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
};
const itemSpriteUrl = name => { const s = ITEM_SPRITE[name]; return s ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${s}.png` : null; };

const TRAINER_CLASS_SPRITE = {
  "Bug Catcher":"bugcatcher","Camper":"camper","Lass":"lass","Youngster":"youngster",
  "Hiker":"hiker","Super Nerd":"supernerd","Team Rocket Grunt":"teamrocket",
  "Picnicker":"picnicker","Swimmer":"swimmer",
  "Gentleman":"gentleman","Fisherman":"fisherman","Sailor":"sailor","Engineer":"engineer",
  "Gamer":"gamer-gen3","PokéManiac":"pokemaniac",
};
const TRAINER_NAME_SPRITE  = {"Brock":"brock","Misty":"misty","Lt. Surge":"lt-surge","Blue":"blue"};
const trainerSpriteUrl = (cls, name) => { const s = TRAINER_NAME_SPRITE[name] || TRAINER_CLASS_SPRITE[cls]; return s ? `https://play.pokemonshowdown.com/sprites/trainers/${s}.png` : null; };

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

  if (!booted) return <div style={{ background:C.bg, minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", color:C.text, fontFamily:"'DM Sans',system-ui,sans-serif" }}>Loading…</div>;

  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100vh", background:C.bg, fontFamily:"'DM Sans',system-ui,sans-serif", color:C.text, overflow:"hidden" }}>
      {/* ── Top bar ── */}
      <div style={{ background:"linear-gradient(160deg,#1e0f06 0%,#2e1a0a 50%,#1e0f06 100%)", borderBottom:`1px solid ${C.border}`, padding:"12px 20px 0", flexShrink:0, boxShadow:"0 2px 12px rgba(0,0,0,0.4)" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:8 }}>
          <div>
            <div style={{ fontSize:10, letterSpacing:3, color:C.gold, marginBottom:2, textTransform:"uppercase", opacity:0.8 }}>Pokémon FireRed</div>
            <div style={{ fontSize:18, fontWeight:"700", letterSpacing:0.5, color:"#f5e8dc" }}>Complete Tracker</div>
          </div>
          <div style={{ display:"flex", gap:24, fontSize:12, alignItems:"center" }}>
            <span><span style={{ color:C.green, fontWeight:"600", fontSize:14 }}>{caughtCount}</span><span style={{ color:C.muted }}> / 151 caught</span></span>
            <span><span style={{ color:C.gold, fontWeight:"600", fontSize:14 }}>{Object.keys(items).length}</span><span style={{ color:C.muted }}> items</span></span>
          </div>
        </div>
        {/* Tabs */}
        <div style={{ display:"flex", gap:2, marginTop:14 }}>
          {[["dex","Pokédex"],["areas","Areas"]].map(([t,label]) => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding:"8px 20px", border:"none", borderRadius:"6px 6px 0 0", cursor:"pointer",
              fontFamily:"'DM Sans',system-ui,sans-serif", fontSize:13, fontWeight:"600",
              background: tab===t ? C.bg : "transparent",
              color: tab===t ? C.text : C.muted,
              borderBottom: tab===t ? `2px solid ${C.accent}` : "2px solid transparent",
              transition:"color 0.15s",
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
          <div style={{ display:"flex", gap:5, flexWrap:"wrap" }}>
            {filters.map(([f,label]) => (
              <button key={f} onClick={() => setDexFilter(f)} style={{
                padding:"4px 12px", fontFamily:"'DM Sans',system-ui,sans-serif", fontSize:11, cursor:"pointer",
                background: dexFilter===f ? C.accent : "rgba(0,0,0,0.25)",
                color: dexFilter===f ? "#fff" : C.muted,
                border:`1px solid ${dexFilter===f ? C.accent : C.border}`, borderRadius:20,
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
        <div style={{ flex:1, overflowY:"auto", padding:"12px 16px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(86px,1fr))", gap:6 }}>
            {filtered.map(p => {
              const isCaught = !!caught[p.name];
              const isSel = dexSelected === p.name;
              return (
                <div key={p.id} onClick={() => { toggleCaught(p.name); setDexSelected(p.name); }}
                  style={{
                    background: isCaught ? "rgba(74,175,116,0.10)" : isSel ? `rgba(212,98,26,0.10)` : C.card,
                    border:`1px solid ${isSel ? C.accent : isCaught ? C.green : p.event ? "#a87acc" : p.lgOnly ? C.lgBlue : p.frOnly ? "#c85252" : C.border}`,
                    borderRadius:8, padding:"8px 5px 6px", cursor:"pointer", textAlign:"center",
                    transition:"all 0.12s", position:"relative",
                    boxShadow: isSel ? `0 0 0 2px ${C.accent}30` : "none",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = isCaught ? C.green : C.accent; e.currentTarget.style.background = isCaught ? "rgba(74,175,116,0.15)" : `rgba(212,98,26,0.07)`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = isSel ? C.accent : isCaught ? C.green : p.event ? "#a87acc" : p.lgOnly ? C.lgBlue : p.frOnly ? "#c85252" : C.border; e.currentTarget.style.background = isCaught ? "rgba(74,175,116,0.10)" : isSel ? `rgba(212,98,26,0.10)` : C.card; }}
                >
                  {isCaught && <div style={{ position:"absolute", top:4, left:5, fontSize:9, color:C.green, fontWeight:"700" }}>✓</div>}
                  {p.frOnly && <div style={{ position:"absolute", top:4, right:4, fontSize:8, color:"#c85252", fontWeight:"600" }}>FR</div>}
                  {p.lgOnly && <div style={{ position:"absolute", top:4, right:4, fontSize:8, color:C.lgBlue, fontWeight:"600" }}>LG</div>}
                  {p.event  && <div style={{ position:"absolute", top:4, right:4, fontSize:8, color:"#a87acc", fontWeight:"600" }}>✦</div>}
                  <img src={pokeSpriteUrl(p.id)} alt={p.name} style={{ width:48, height:48, imageRendering:"pixelated", display:"block", margin:"0 auto", opacity: isCaught ? 1 : 0.5, filter: isCaught ? "none" : "grayscale(30%)" }} />
                  <div style={{ fontSize:9, color:C.muted, marginBottom:1, fontFamily:"'Courier New',monospace" }}>#{String(p.id).padStart(3,"0")}</div>
                  <div style={{ fontSize:10, color: isCaught ? C.green : C.text, fontWeight:isCaught?"600":"400", lineHeight:1.3, wordBreak:"break-word" }}>{p.name}</div>
                </div>
              );
            })}
          </div>
          {filtered.length === 0 && <div style={{ textAlign:"center", padding:40, color:C.muted, fontSize:12 }}>No Pokémon match this filter.</div>}
        </div>

        {/* Detail panel */}
        <div style={{ width:220, flexShrink:0, borderLeft:`1px solid ${C.border}`, background:C.card, overflowY:"auto", padding:16 }}>
          {!selected ? (
            <div style={{ color:C.muted, fontSize:12, textAlign:"center", marginTop:48, lineHeight:1.9, padding:"0 12px" }}>
              Click any Pokémon to toggle caught and see where to find it.
            </div>
          ) : (
            <>
              <div style={{ marginBottom:14 }}>
                <img src={pokeSpriteUrl(selected.id)} alt={selected.name} style={{ width:80, height:80, imageRendering:"pixelated", display:"block", margin:"0 auto 8px" }} />
                <div style={{ fontSize:10, color:C.muted, marginBottom:2, fontFamily:"'Courier New',monospace" }}>#{String(selected.id).padStart(3,"0")}</div>
                <div style={{ fontSize:17, fontWeight:"700", color: caught[selected.name] ? C.green : C.text }}>{selected.name}</div>
                <div style={{ fontSize:11, color: caught[selected.name] ? C.green : C.muted, marginTop:3 }}>
                  {caught[selected.name] ? "✓ Caught" : "Not yet caught"}
                </div>
                {selected.frOnly && <div style={{ fontSize:10, color:"#c85252", marginTop:4, fontWeight:"500" }}>FireRed exclusive</div>}
                {selected.lgOnly && <div style={{ fontSize:10, color:C.lgBlue, marginTop:4, fontWeight:"500" }}>LeafGreen exclusive</div>}
                {selected.event  && <div style={{ fontSize:10, color:"#a87acc", marginTop:4, fontWeight:"500" }}>Event — not in-game obtainable</div>}
              </div>

              <div style={{ fontSize:10, letterSpacing:2, color:C.muted, marginBottom:8, textTransform:"uppercase" }}>Where to find</div>
              {locs.length === 0 ? (
                <div style={{ fontSize:11, color:C.muted, lineHeight:1.8 }}>
                  Not found as a wild encounter or gift in any tracked area.<br/>
                  Obtain via <span style={{ color:C.text, fontWeight:"500" }}>evolution, trading, or breeding</span>.
                </div>
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
        <div style={{ padding:"10px 12px", borderBottom:`1px solid ${C.border}`, position:"sticky", top:0, background:C.card, zIndex:1 }}>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search areas…"
            style={{ width:"100%", background:"rgba(0,0,0,0.25)", border:`1px solid ${C.border}`, color:C.text, padding:"6px 10px", fontFamily:"'DM Sans',system-ui,sans-serif", fontSize:12, borderRadius:6, boxSizing:"border-box", outline:"none" }} />
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

      {/* Main */}
      <div style={{ flex:1, overflowY:"auto", padding:"18px 20px" }}>
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
            <div style={{ marginBottom:16 }}>
              <div style={{ fontSize:10, color:C.muted, letterSpacing:2, marginBottom:4, textTransform:"uppercase" }}>{area.part}</div>
              <h2 style={{ margin:0, fontSize:20, fontWeight:"700", letterSpacing:0 }}>{area.name}</h2>
            </div>

            {area.note && (
              <div style={{ background:"rgba(200,150,10,0.07)", border:`1px solid rgba(200,150,10,0.2)`, borderRadius:8, padding:"10px 14px", fontSize:12, color:"#c8b070", marginBottom:14, lineHeight:1.7 }}>
                {area.note}
              </div>
            )}

            <div style={{ display:"flex", gap:10, marginBottom:14, flexWrap:"wrap" }}>
              <MiniBar label="Pokémon"  done={pokeDone}    total={area.pokemon.length}           color={C.green} />
              <MiniBar label="Items"    done={itemDone}    total={area.items.length}             color={C.gold} />
              {area.trainers?.length > 0 && <MiniBar label="Trainers" done={trainerDone} total={area.trainers.length} color="#a87acc" />}
            </div>

            <div style={{ fontSize:11, color:C.muted, marginBottom:12, display:"flex", gap:16, flexWrap:"wrap" }}>
              <span><span style={{ color:"#c85252", fontWeight:"600" }}>FR</span> = FireRed exclusive</span>
              <span><span style={{ color:C.lgBlue, fontWeight:"600" }}>LG</span> = LeafGreen exclusive</span>
              <span><span style={{ color:C.gold }}>★</span> = Hidden (Itemfinder)</span>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
              {/* Pokémon */}
              <Section title="Wild Pokémon" count={`${pokeDone}/${area.pokemon.length}`} color={C.green}>
                {area.pokemon.length === 0 ? <Empty text="No wild Pokémon here" /> :
                  area.pokemon.map((p, i) => {
                    const isCaught = !!caught[p.name];
                    return (
                      <Row key={i} done={isCaught} onClick={() => toggleCaught(p.name)}>
                        {DEX_ID[p.name] && <img src={pokeSpriteUrl(DEX_ID[p.name])} alt={p.name} style={{ width:36, height:36, imageRendering:"pixelated", flexShrink:0, opacity: isCaught ? 1 : 0.45, filter: isCaught ? "none" : "grayscale(40%)" }} />}
                        <div style={{ flex:1 }}>
                          <span style={{ color: isCaught ? C.green : p.lgOnly ? C.lgBlue : p.frOnly ? "#c85252" : C.text, fontWeight:"600", fontSize:12 }}>
                            {p.name}
                            {p.frOnly && <Tag color="#c85252">FR</Tag>}
                            {p.lgOnly && <Tag color={C.lgBlue}>LG</Tag>}
                          </span>
                          <span style={{ fontSize:10, color:C.muted, marginLeft:6 }}>{p.method}</span>
                          {p.note && <div style={{ fontSize:10, color:"#b87030", marginTop:2 }}>{p.note}</div>}
                        </div>
                        <div style={{ textAlign:"right", flexShrink:0, paddingLeft:8, display:"flex", flexDirection:"column", alignItems:"flex-end", gap:3 }}>
                          <RateDisplay rate={p.rate} />
                          <div style={{ fontSize:10, color:C.muted }}>Lv.{p.levels}</div>
                        </div>
                      </Row>
                    );
                  })
                }
              </Section>

              {/* Items */}
              <Section title="Items" count={`${itemDone}/${area.items.length}`} color={C.gold}>
                {area.items.length === 0 ? <Empty text="No items here" /> :
                  area.items.map((it, i) => {
                    const key = `${areaId}|${it.name}`;
                    return (
                      <Row key={i} done={!!items[key]} onClick={() => toggleItem(key)}>
                        {itemSpriteUrl(it.name) && <img src={itemSpriteUrl(it.name)} alt={it.name} style={{ width:24, height:24, imageRendering:"pixelated", flexShrink:0 }} />}
                        <div style={{ flex:1 }}>
                          <span style={{ fontSize:12, fontWeight:"600", color: it.hidden ? C.gold : C.text }}>
                            {it.hidden && <span style={{ color:C.gold, marginRight:4 }}>★</span>}
                            {it.name}
                          </span>
                          {it.note && <div style={{ fontSize:10, color:C.muted, marginTop:2, lineHeight:1.5 }}>{it.note}</div>}
                        </div>
                      </Row>
                    );
                  })
                }
              </Section>
            </div>

            {area.trainers?.length > 0 && (
              <div style={{ marginTop:12 }}>
                <Section title="Trainers" count={`${trainerDone}/${area.trainers.length}`} color="#a87acc">
                  {area.trainers.map((t, i) => {
                    const key = `${areaId}|${t.class}|${t.name}`;
                    const tSprite = trainerSpriteUrl(t.class, t.name);
                    return (
                      <Row key={i} done={!!trainers[key]} onClick={() => toggleTrainer(key)}>
                        {tSprite && <img src={tSprite} alt={t.class} style={{ width:48, height:48, imageRendering:"pixelated", flexShrink:0 }} />}
                        <div style={{ flex:1 }}>
                          <div style={{ fontSize:12, fontWeight:"600", marginBottom:2 }}>{t.class} {t.name}</div>
                          {t.note && <div style={{ fontSize:10, color:C.muted, marginBottom:5, lineHeight:1.4 }}>{t.note}</div>}
                          {t.team?.length > 0 && (
                            <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                              {t.team.map((p, j) => {
                                const pid = DEX_ID[p.name];
                                return (
                                  <div key={j} style={{ textAlign:"center" }}>
                                    {pid && <img src={pokeSpriteUrl(pid)} alt={p.name} style={{ width:32, height:32, imageRendering:"pixelated", display:"block", margin:"0 auto" }} />}
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
    <div onClick={() => setAreaId(area.id)} style={{ padding:"8px 12px", cursor:"pointer", borderBottom:`1px solid rgba(58,42,28,0.5)`, borderLeft:`3px solid ${isSel ? C.accent : "transparent"}`, background: isSel ? "rgba(212,98,26,0.10)" : "transparent", transition:"background 0.1s" }}
      onMouseEnter={e => { if (!isSel) e.currentTarget.style.background="rgba(255,255,255,0.03)"; }}
      onMouseLeave={e => { if (!isSel) e.currentTarget.style.background="transparent"; }}>
      <div style={{ fontSize:12, fontWeight: isSel ? "600" : "400", color: allDone ? C.green : isSel ? C.text : "#c4a888", lineHeight:1.4 }}>{allDone ? "✓ " : ""}{area.name}</div>
      {total > 0 && (
        <div style={{ display:"flex", gap:10, marginTop:3, fontSize:10, color:C.muted }}>
          <span style={{ color: pd===area.pokemon.length && area.pokemon.length>0 ? C.green : C.muted }}>{pd}/{area.pokemon.length} pkm</span>
          <span style={{ color: id_===area.items.length && area.items.length>0 ? C.gold : C.muted }}>{id_}/{area.items.length} itm</span>
          {area.trainers?.length > 0 && <span style={{ color: td===area.trainers.length ? "#a87acc" : C.muted }}>{td}/{area.trainers.length} tr</span>}
        </div>
      )}
    </div>
  );
}

function Section({ title, count, color, children }) {
  return (
    <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:10, overflow:"hidden" }}>
      <div style={{ padding:"9px 14px", background:"rgba(0,0,0,0.15)", borderBottom:`1px solid ${C.border}`, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <span style={{ fontSize:12, fontWeight:"600" }}>{title}</span>
        <span style={{ fontSize:11, color, padding:"2px 9px", background:"rgba(0,0,0,0.25)", borderRadius:99, fontWeight:"600" }}>{count}</span>
      </div>
      <div style={{ maxHeight:460, overflowY:"auto" }}>{children}</div>
    </div>
  );
}

function Row({ done, onClick, children }) {
  return (
    <div onClick={onClick} style={{ display:"flex", alignItems:"flex-start", gap:10, padding:"8px 14px", cursor:"pointer", borderBottom:`1px solid ${C.border}20`, background: done?"rgba(74,175,116,0.05)":"transparent", transition:"background 0.1s" }}
      onMouseEnter={e => e.currentTarget.style.background = done?"rgba(74,175,116,0.09)":"rgba(255,255,255,0.025)"}
      onMouseLeave={e => e.currentTarget.style.background = done?"rgba(74,175,116,0.05)":"transparent"}>
      <div style={{ width:14, height:14, border:`2px solid ${done ? C.green : C.border}`, background:done?C.green:"transparent", borderRadius:4, flexShrink:0, marginTop:2, display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.12s" }}>
        {done && <span style={{ color:"#000", fontSize:8, fontWeight:"700", lineHeight:1 }}>✓</span>}
      </div>
      <div style={{ display:"flex", justifyContent:"space-between", flex:1, opacity:done?0.4:1, textDecoration:done?"line-through":"none" }}>{children}</div>
    </div>
  );
}

function Tag({ color, children }) {
  return <span style={{ marginLeft:5, fontSize:9, color, border:`1px solid ${color}`, padding:"0 4px", borderRadius:3, verticalAlign:"middle", fontWeight:"600" }}>{children}</span>;
}

// Parses rate strings like "5% FR / 10% LG" into split FR/LG pills,
// or renders a plain rate badge for simple values like "50%" or "×1".
function RateDisplay({ rate }) {
  if (!rate) return null;
  // Detect FR/LG split pattern e.g. "5% FR / 10% LG"
  const splitMatch = rate.match(/^(\S+)\s+FR\s*\/\s*(\S+)\s+LG$/i);
  if (splitMatch) {
    return (
      <div style={{ display:"flex", flexDirection:"column", gap:3, alignItems:"flex-end" }}>
        <span style={{ fontSize:11, fontWeight:"700", color:"#c85252", background:"rgba(200,82,82,0.12)", border:"1px solid rgba(200,82,82,0.3)", padding:"1px 6px", borderRadius:4, whiteSpace:"nowrap" }}>
          FR {splitMatch[1]}
        </span>
        <span style={{ fontSize:11, fontWeight:"700", color:C.lgBlue, background:"rgba(82,184,96,0.12)", border:"1px solid rgba(82,184,96,0.3)", padding:"1px 6px", borderRadius:4, whiteSpace:"nowrap" }}>
          LG {splitMatch[2]}
        </span>
      </div>
    );
  }
  // One-time encounters
  if (rate === "×1") {
    return <span style={{ fontSize:11, fontWeight:"700", color:"#c8960a", background:"rgba(200,150,10,0.12)", border:"1px solid rgba(200,150,10,0.3)", padding:"1px 6px", borderRadius:4, whiteSpace:"nowrap" }}>×1</span>;
  }
  // Regular rate — colored by intensity
  const numMatch = rate.match(/^(\d+)%/);
  const num = numMatch ? parseInt(numMatch[1]) : 0;
  const rateColor = num >= 30 ? "#5ab0d8" : num >= 10 ? "#d4b840" : "#9878cc";
  return <span style={{ fontSize:12, fontWeight:"700", color:rateColor, whiteSpace:"nowrap" }}>{rate}</span>;
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
