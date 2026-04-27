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
          {name:"Ether",       hidden:true, note:"Northeast section (★ Itemfinder)"},
          {name:"Moon Stone",  hidden:true, note:"Near fossils (★ Itemfinder)"},
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
          {name:"Pecha Berry",     hidden:true, note:"Kitchen — nearest trash can to doorway (★ Itemfinder)"},
          {name:"Cheri Berry",     hidden:true, note:"Kitchen — middle trash can (★ Itemfinder)"},
          {name:"Chesto Berry",    hidden:true, note:"Kitchen — farthest trash can from doorway (★ Itemfinder)"},
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
          {name:"Hyper Potion",hidden:true, note:"Hallway trash can near stairs to 1F (★ Itemfinder)"},
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
      {name:"Nanab Berry",hidden:true,note:"East of Rock Tunnel exit (★ Itemfinder)"},
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
      {name:"Leppa Berry", hidden:true, note:"Tall grass SE (requires Cut, ★ Itemfinder)"},
      {name:"Lum Berry",   hidden:true, note:"Tall grass NW (requires Cut, ★ Itemfinder)"},
      {name:"Rawst Berry", hidden:true, note:"Tall grass NE (requires Cut, ★ Itemfinder)"},
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
      {name:"Wepear Berry",hidden:true,note:"Southeast corner (★ Itemfinder)"},
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
      {name:"PP Up",            hidden:true, note:"Northeast of the small tree, east side of city (★ Itemfinder)"},
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
          {name:"PP Up",       hidden:true, note:"Southeastern planter (★ Itemfinder)"},
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
          {name:"Nugget",          hidden:true, note:"Northwest corner (★ Itemfinder)"},
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
          {name:"Net Ball",   hidden:true, note:"Between potted plants SW of Giovanni (★ Itemfinder)"},
          {name:"Nest Ball",  hidden:true, note:"Between potted plants SE of Giovanni (★ Itemfinder)"},
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
          {name:"Big Mushroom",hidden:true,note:"5F (★ Itemfinder)"},
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
      {name:"Horsea",   method:"Good Rod",levels:"5–15", rate:"60% FR / 20% LG"},
      {name:"Krabby",   method:"Good Rod",levels:"5–15", rate:"60% LG / 20% FR"},
      {name:"Magikarp", method:"Good Rod",levels:"5–15", rate:"20%"},
      {name:"Horsea",   method:"Super Rod",levels:"15–35",rate:"84%",frOnly:true},
      {name:"Krabby",   method:"Super Rod",levels:"15–35",rate:"84%",lgOnly:true},
      {name:"Gyarados", method:"Super Rod",levels:"15–25",rate:"15%"},
      {name:"Slowpoke", method:"Super Rod",levels:"25–35",rate:"1%", frOnly:true},
      {name:"Psyduck",  method:"Super Rod",levels:"25–35",rate:"1%", lgOnly:true},
    ],
    items:[
      {name:"TM27 Return",  hidden:false,note:"Girl on 2F of the Lavender Town gate building"},
      {name:"Super Rod",    hidden:false,note:"Fishing Guru's younger brother in the house on the route"},
      {name:"Net Ball",     hidden:false,note:"Gate building north of route"},
      {name:"Hyper Potion", hidden:true, note:"5 east, 2 north of Fisherman Elliot (★ Itemfinder)"},
      {name:"Iron",         hidden:false,note:"SW of Fishing Guru's house (requires Cut)"},
      {name:"Rare Candy",   hidden:true, note:"In the tall grass patch (requires Cut, ★ Itemfinder)"},
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
      {name:"Horsea",    method:"Good Rod",levels:"5–15", rate:"60% FR / 20% LG"},
      {name:"Krabby",    method:"Good Rod",levels:"5–15", rate:"60% LG / 20% FR"},
      {name:"Magikarp",  method:"Good Rod",levels:"5–15", rate:"20%"},
      {name:"Horsea",    method:"Super Rod",levels:"15–35",rate:"84%",frOnly:true},
      {name:"Krabby",    method:"Super Rod",levels:"15–35",rate:"84%",lgOnly:true},
      {name:"Gyarados",  method:"Super Rod",levels:"15–25",rate:"15%"},
      {name:"Slowpoke",  method:"Super Rod",levels:"25–35",rate:"1%", frOnly:true},
      {name:"Psyduck",   method:"Super Rod",levels:"25–35",rate:"1%", lgOnly:true},
    ],
    items:[
      {name:"PP Up",hidden:true,note:"Two steps east of the Trainer Tips sign (★ Itemfinder)"},
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
      {name:"Pinap Berry",hidden:true,note:"Southeast corner near Twins Kiri & Jan (★ Itemfinder)"},
      {name:"Zinc",      hidden:true,note:"In the tall grass patch (★ Itemfinder)"},
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
    note:"Return the Warden's Gold Teeth (found in the Safari Zone west area) to get HM04 Strength. Good Rod from the Fishing Guru here. Defeat Koga for the Soul Badge and TM06 Toxic.",
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
      {name:"Max Revive",  hidden:true, note:"Backyard of Fishing Guru's house, one step east of the southernmost flower (★ Itemfinder)"},
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
    note:"500 steps, 30 Safari Balls. Top Living Dex targets: Tauros (~4% all areas), Kangaskhan, Chansey, Scyther (FR, Area 1) or Pinsir (LG, Area 1), Dratini via Super Rod. Find Gold Teeth (Area 3 west) and HM03 Surf (Secret House, far west).",
    floors:[
      { label:"Center",
        pokemon:[
          {name:"Nidoran♂", method:"Grass",levels:"22",   rate:"20%",frOnly:true},
          {name:"Nidoran♀", method:"Grass",levels:"22",   rate:"20%",lgOnly:true},
          {name:"Exeggcute",method:"Grass",levels:"24–25",rate:"20%"},
          {name:"Rhyhorn",  method:"Grass",levels:"25",   rate:"20%"},
          {name:"Venonat",  method:"Grass",levels:"22",   rate:"15%"},
          {name:"Paras",    method:"Grass",levels:"27",   rate:"5%"},
          {name:"Parasect", method:"Grass",levels:"30",   rate:"5%"},
          {name:"Tangela",  method:"Grass",levels:"22",   rate:"4%"},
          {name:"Kangaskhan",method:"Grass",levels:"25",  rate:"4%"},
          {name:"Chansey",  method:"Grass",levels:"23",   rate:"1%"},
          {name:"Tauros",   method:"Grass",levels:"21–28",rate:"~4%",note:"Appears in all four areas"},
          {name:"Magikarp", method:"Old Rod",  levels:"5",  rate:"100%"},
          {name:"Poliwag",  method:"Good Rod", levels:"10", rate:"50%"},
          {name:"Goldeen",  method:"Good Rod", levels:"10", rate:"50%"},
          {name:"Krabby",   method:"Super Rod",levels:"15", rate:"40%"},
          {name:"Dratini",  method:"Super Rod",levels:"15", rate:"25%"},
          {name:"Psyduck",  method:"Super Rod",levels:"15", rate:"15%"},
          {name:"Dragonair",method:"Super Rod",levels:"15", rate:"10%"},
          {name:"Slowpoke", method:"Super Rod",levels:"15", rate:"10%"},
        ],
        items:[
          {name:"Nugget",    hidden:false,note:"Island platform (requires Surf)"},
          {name:"Leaf Stone",hidden:true, note:"Island platform (★ Itemfinder, requires Surf)"},
          {name:"Max Potion",hidden:false,note:""},
        ],
        trainers:[]},
      { label:"Area 1",
        pokemon:[
          {name:"Nidorina",  method:"Grass",levels:"28–33",rate:"10%",frOnly:true},
          {name:"Nidorino",  method:"Grass",levels:"28–33",rate:"10%",lgOnly:true},
          {name:"Doduo",     method:"Grass",levels:"26",   rate:"20%"},
          {name:"Paras",     method:"Grass",levels:"22",   rate:"15%"},
          {name:"Cubone",    method:"Grass",levels:"19",   rate:"10%"},
          {name:"Marowak",   method:"Grass",levels:"24",   rate:"5%"},
          {name:"Parasect",  method:"Grass",levels:"25",   rate:"5%"},
          {name:"Kangaskhan",method:"Grass",levels:"25",   rate:"4%"},
          {name:"Chansey",   method:"Grass",levels:"21",   rate:"4%"},
          {name:"Scyther",   method:"Grass",levels:"28",   rate:"~4%",frOnly:true},
          {name:"Pinsir",    method:"Grass",levels:"28",   rate:"~4%",lgOnly:true},
        ],
        items:[
          {name:"Leaf Stone",    hidden:false,note:""},
          {name:"Full Restore",  hidden:false,note:""},
          {name:"Carbos",        hidden:false,note:""},
          {name:"TM11 Sunny Day",hidden:false,note:""},
        ],
        trainers:[]},
      { label:"Area 2",
        pokemon:[
          {name:"Exeggcute", method:"Grass",levels:"20–27",rate:"25%"},
          {name:"Rhyhorn",   method:"Grass",levels:"25–26",rate:"20%"},
          {name:"Kangaskhan",method:"Grass",levels:"28",   rate:"15%"},
          {name:"Paras",     method:"Grass",levels:"23",   rate:"15%"},
          {name:"Venomoth",  method:"Grass",levels:"32",   rate:"5%"},
          {name:"Chansey",   method:"Grass",levels:"26",   rate:"4%"},
        ],
        items:[
          {name:"Quick Claw",      hidden:false,note:""},
          {name:"TM47 Steel Wing", hidden:false,note:""},
          {name:"Protein",         hidden:false,note:""},
        ],
        trainers:[]},
      { label:"Area 3",
        pokemon:[
          {name:"Doduo",     method:"Grass",levels:"26",   rate:"20%"},
          {name:"Exeggcute", method:"Grass",levels:"22–26",rate:"20%"},
          {name:"Cubone",    method:"Grass",levels:"19",   rate:"10%"},
          {name:"Venomoth",  method:"Grass",levels:"31",   rate:"5%"},
          {name:"Kangaskhan",method:"Grass",levels:"28",   rate:"1%"},
          {name:"Tangela",   method:"Grass",levels:"27",   rate:"1%"},
        ],
        items:[
          {name:"Max Revive",      hidden:false,note:""},
          {name:"Max Potion",      hidden:false,note:""},
          {name:"TM32 Double Team",hidden:false,note:""},
          {name:"TM37 Sandstorm",  hidden:false,note:""},
          {name:"Revive",          hidden:true, note:"★ Itemfinder"},
          {name:"Gold Teeth",      hidden:false,note:"West side — return to the Warden in Fuchsia City for HM04 Strength"},
          {name:"HM03 Surf",       hidden:false,note:"Secret House (far west)"},
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
      {name:"Leftovers",   hidden:true, note:"Where Snorlax was sleeping (★ Itemfinder)"},
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
      {name:"Full Restore",hidden:true,note:"1W, 6N of northernmost signboard (★ Itemfinder)"},
      {name:"PP Up",       hidden:true,note:"Middle bridge's west road, aligned with 2nd signboard from north (★ Itemfinder)"},
      {name:"Rare Candy",  hidden:true,note:"East road, aligned with 3rd signboard from north (★ Itemfinder)"},
      {name:"Max Revive",  hidden:true,note:"Small grass bridge connecting west and east segments (★ Itemfinder)"},
      {name:"Max Elixir",  hidden:true,note:"3E of southernmost sign (★ Itemfinder)"},
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
      {name:"Nugget",      hidden:true, note:"Copycat's house (NW) — on the desk in her room (★ Itemfinder)"},
      {name:"TM29 Psychic",hidden:false,note:"From Mr. Psychic in the SE house"},
    ],
    trainers:[] },

  { part:"Part 11", id:"silph-co", name:"Silph Co.",
    note:"⚠ Find Card Key on 5F to open all locked doors. Lapras gift on 7F — do not skip it! Master Ball from the president after defeating Giovanni on 11F.",
    floors:[
      { label:"2F",
        pokemon:[],
        items:[
          {name:"Ultra Ball",hidden:true,note:"SW room, southern potted plant (★ Itemfinder)"},
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
          {name:"Protein",     hidden:true, note:"SE corner, middle of three potted plants (★ Itemfinder)"},
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
          {name:"Iron",         hidden:true, note:"SE room, southern of three potted plants (★ Itemfinder)"},
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
          {name:"PP Up",            hidden:true, note:"Larger central room, potted plant (★ Itemfinder)"},
          {name:"Elixir",           hidden:true, note:"Smaller central room, potted plant (★ Itemfinder, requires Card Key)"},
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
          {name:"Carbos",    hidden:true, note:"NW room, western potted plant (★ Itemfinder)"},
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
          {name:"Zinc",        hidden:true, note:"East-central room, southern potted plant (★ Itemfinder)"},
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
          {name:"Nugget", hidden:true, note:"East-central room, northern potted plant (★ Itemfinder)"},
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
          {name:"Calcium",   hidden:true,note:"Western room, eastern potted plant (★ Itemfinder)"},
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
          {name:"HP Up",     hidden:true, note:"NE room, potted plant (★ Itemfinder)"},
        ],
        trainers:[
          {class:"Team Rocket Grunt",name:"Grunt 17", team:[{name:"Machoke",level:33}]},
          {class:"Scientist",        name:"Travis",   team:[{name:"Magnemite",level:29},{name:"Koffing",level:29}]},
        ]},
      { label:"11F",
        pokemon:[],
        items:[
          {name:"Zinc",       hidden:false,note:"East side, SE corner"},
          {name:"Revive",     hidden:true, note:"West side, middle of three potted plants outside president's office (★ Itemfinder)"},
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
      {name:"Krabby",    method:"Super Rod",levels:"15–35",rate:"80%", frOnly:true},
      {name:"Horsea",    method:"Super Rod",levels:"15–35",rate:"80%", lgOnly:true},
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
      {name:"Krabby",    method:"Super Rod",levels:"15–35",rate:"80%", frOnly:true},
      {name:"Horsea",    method:"Super Rod",levels:"15–35",rate:"80%", lgOnly:true},
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
          {name:"Nugget",hidden:true,note:"Southwest corner of the western rocky ridge (★ Itemfinder)"},
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
          {name:"Water Stone",hidden:true,  note:"On a rock near the western ladder (★ Itemfinder)"},
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
      {name:"Krabby",    method:"Super Rod",levels:"15–35",rate:"80%", frOnly:true},
      {name:"Horsea",    method:"Super Rod",levels:"15–35",rate:"80%", lgOnly:true},
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

];

// ─── BUILD LOCATION MAP ── (which areas each Pokémon appears in)
// Computed once at module level since AREAS is static
const _allPokemon = a => a.floors ? a.floors.flatMap(f => f.pokemon || []) : (a.pokemon || []);
const LOCATION_MAP = {};
for (const area of AREAS) {
  for (const p of _allPokemon(area)) {
    if (!LOCATION_MAP[p.name]) LOCATION_MAP[p.name] = [];
    LOCATION_MAP[p.name].push({ areaId: area.id, areaName: area.name, part: area.part, method: p.method, levels: p.levels, rate: p.rate });
  }
}

// ─── COLORS ──────────────────────────────────────────────────────────────────
const C = {
  bg:"#110d08", card:"#1c1510", border:"#3a2a1c",
  frRed:"#d4621a", lgGreen:"#3fa84a",
  accent:"#d4621a",  // static fallback; live version uses CSS var(--frlg-accent)
  gold:"#c8960a", green:"#4aaf74", lgGreen2:"#3fa84a",
  text:"#ede0d4", muted:"#8a7a6a", panel:"#231a12",
};

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
const AUDITED_PARTS = new Set(["Part 1", "Part 2", "Part 3", "Part 4", "Part 5", "Part 6", "Part 7", "Part 8", "Part 9", "Part 10", "Part 11", "Part 12"]);

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
};
const itemSpriteUrl = name => { const s = ITEM_SPRITE[name]; return s ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${s}.png` : null; };

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
};
const TRAINER_NAME_SPRITE  = {"Brock":"brock","Misty":"misty","Lt. Surge":"lt-surge","Blue":"blue","Giovanni":"giovanni","Erika":"erika","Koga":"koga","Sabrina":"sabrina"};
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


  useEffect(() => {
    (async () => {
      try { const r = localStorage.getItem("fr-caught5");   if (r) setCaught(JSON.parse(r));   } catch {}
      try { const r = localStorage.getItem("fr-items5");    if (r) setItems(JSON.parse(r));    } catch {}
      try { const r = localStorage.getItem("fr-trainers1"); if (r) setTrainers(JSON.parse(r)); } catch {}
      try { const r = localStorage.getItem("frlg-version"); if (r) setVersion(r);              } catch {}
      try { const r = localStorage.getItem("frlg-badges");  if (r) setBadges(JSON.parse(r));   } catch {}

      setBooted(true);
    })();
  }, []);

  const handleSetVersion = (v) => {
    setVersion(v);
    try { localStorage.setItem("frlg-version", v); } catch {}
  };

  const toggleBadge = useCallback((id) => {
    setBadges(prev => {
      const next = { ...prev };
      if (next[id]) delete next[id]; else next[id] = true;
      try { localStorage.setItem("frlg-badges", JSON.stringify(next)); } catch {}
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
            </div>
          </div>
        </div>

        {/* Gym badge strip */}
        <GymBadgeStrip earned={badges} toggleBadge={toggleBadge} />

        {/* Tabs */}
        <div style={{ display:"flex", gap:2, marginTop:10 }}>
          {[["areas","Areas"],["dex","Pokédex"]].map(([t,label]) => (
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
      {tab === "dex" && <DexTab caught={caught} toggleCaught={toggleCaught} dexFilter={dexFilter} setDexFilter={setDexFilter} dexSelected={dexSelected} setDexSelected={setDexSelected} version={version} />}

      {/* ── Tab: Areas ── */}
      {tab === "areas" && <AreasTab caught={caught} toggleCaught={toggleCaught} items={items} toggleItem={toggleItem} trainers={trainers} toggleTrainer={toggleTrainer} areaId={areaId} setAreaId={setAreaId} area={area} search={search} setSearch={setSearch} version={version} />}
    </div>
  );
}

// ─── POKÉDEX TAB ──────────────────────────────────────────────────────────────
function DexTab({ caught, toggleCaught, dexFilter, setDexFilter, dexSelected, setDexSelected, version }) {
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
        <div style={{ flex:1, overflowY:"auto", padding:"12px 16px" }}>
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
                </div>
              );
            })}
          </div>
          {filtered.length === 0 && <div style={{ textAlign:"center", padding:40, color:C.muted, fontSize:12 }}>No Pokémon match this filter.</div>}
          <LivingDexPanel caught={caught} />
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
                {selected.lgOnly && <div style={{ fontSize:10, color:C.lgGreen, marginTop:4, fontWeight:"500" }}>LeafGreen exclusive</div>}
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
function AreasTab({ caught, toggleCaught, items, toggleItem, trainers, toggleTrainer, areaId, setAreaId, area, search, setSearch, version }) {
  const visibleAreas = useMemo(() => AREAS.filter(a => AUDITED_PARTS.has(a.part)), []);
  const groups = useMemo(() => groupByPart(visibleAreas), [visibleAreas]);
  const filtered = useMemo(() => search.trim() ? visibleAreas.filter(a => a.name.toLowerCase().includes(search.toLowerCase())) : null, [search, visibleAreas]);
  const [collapsedFloors, setCollapsedFloors] = useState(new Set());
  const toggleFloor = (key) => setCollapsedFloors(prev => { const n = new Set(prev); n.has(key) ? n.delete(key) : n.add(key); return n; });

  const areaPokemon  = area ? flattenPokemon(area)  : [];
  const areaItems    = area ? flattenItems(area)    : [];
  const areaTrainers = area ? flattenTrainers(area) : [];
  const pokeDone    = areaPokemon.filter(p => caught[p.name]).length;
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
              const allDone = areaPokemon.length + areaItems.length + areaTrainers.length > 0 &&
                pokeDone === areaPokemon.length && itemDone === areaItems.length && trainerDone === areaTrainers.length;
              return (
                <div style={{ position:"sticky", top:0, zIndex:10, background:C.bg, borderBottom:`1px solid ${C.border}`, padding:"12px 20px 10px", boxShadow:"0 2px 8px rgba(0,0,0,0.3)" }}>
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
                    <MiniBar label="Pokémon"  done={pokeDone}    total={areaPokemon.length}   color={C.green} />
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
                  const pokDone = (floor.pokemon  || []).filter(p => caught[p.name]).length;
                  const itmDone = (floor.items    || []).filter((_, i) => items[floorItemKey(areaId, floor.label, i)]).length;
                  const trnDone = (floor.trainers || []).filter(t => trainers[`${areaId}|${t.class}|${t.name}`]).length;
                  const floorTotal = (floor.pokemon||[]).length + (floor.items||[]).length + (floor.trainers||[]).length;
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
                        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:12 }}>
                          {/* Wild Pokémon left */}
                          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                            <Section title="Wild Pokémon" count={`${pokDone}/${(floor.pokemon||[]).length}`} color={C.green}
                              allDone={pokDone===(floor.pokemon||[]).length && (floor.pokemon||[]).length>0}
                              onMarkAll={() => pokDone===(floor.pokemon||[]).length ? clearAllPokemon(floor.pokemon||[]) : markAllPokemon(floor.pokemon||[])}>
                              {!hasPoks ? <Empty text="No wild Pokémon here" /> : floor.pokemon.map((p,i) => (
                                <PokemonEntry key={i} p={p} caught={caught} toggleCaught={toggleCaught} version={version} />
                              ))}
                            </Section>
                            <Section title="Items" count={`${itmDone}/${(floor.items||[]).length}`} color={C.gold}
                              allDone={itmDone===(floor.items||[]).length && (floor.items||[]).length>0}
                              onMarkAll={() => { const kfn = (it,i) => floorItemKey(areaId,floor.label,i); itmDone===(floor.items||[]).length ? clearAllItems(floor.items||[],kfn) : markAllItems(floor.items||[],kfn); }}>
                              {!hasItms ? <Empty text="No items here" /> : floor.items.map((it,i) => {
                                const key = floorItemKey(areaId, floor.label, i);
                                return <ItemEntry key={i} it={it} itemKey={key} done={!!items[key]} toggleItem={toggleItem} />;
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
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                  {/* Wild Pokémon + Items left */}
                  <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                    <Section title="Wild Pokémon" count={`${pokeDone}/${areaPokemon.length}`} color={C.green}
                      allDone={pokeDone===areaPokemon.length && areaPokemon.length>0}
                      onMarkAll={() => pokeDone===areaPokemon.length ? clearAllPokemon(areaPokemon) : markAllPokemon(areaPokemon)}>
                      {areaPokemon.length === 0 ? <Empty text="No wild Pokémon here" /> :
                        areaPokemon.map((p,i) => <PokemonEntry key={i} p={p} caught={caught} toggleCaught={toggleCaught} version={version} />)
                      }
                    </Section>
                    <Section title="Items" count={`${itemDone}/${areaItems.length}`} color={C.gold}
                      allDone={itemDone===areaItems.length && areaItems.length>0}
                      onMarkAll={() => { const kfn = (_,i) => flatItemKey(areaId,i); itemDone===areaItems.length ? clearAllItems(areaItems,kfn) : markAllItems(areaItems,kfn); }}>
                      {areaItems.length === 0 ? <Empty text="No items here" /> :
                        areaItems.map((it,i) => {
                          const key = flatItemKey(areaId, i);
                          return <ItemEntry key={i} it={it} itemKey={key} done={!!items[key]} toggleItem={toggleItem} />;
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



function PokemonEntry({ p, caught, toggleCaught, version }) {
  const isCaught = !!caught[p.name];
  // Dim rows that don't apply to the selected version
  const isOtherVersion = (version === "fr" && p.lgOnly) || (version === "lg" && p.frOnly);
  return (
    <Row done={isCaught} onClick={() => toggleCaught(p.name)} style={isOtherVersion ? { opacity:0.35 } : {}}>
      {DEX_ID[p.name] && <img src={pokeSpriteUrl(DEX_ID[p.name])} alt={p.name} style={{ width:36, height:36, imageRendering:"pixelated", flexShrink:0, opacity:isCaught?1:0.65, filter:isCaught?"none":"brightness(0)" }} />}
      <div style={{ flex:1 }}>
        <span style={{ color:isCaught?C.green:p.lgOnly?C.lgGreen:p.frOnly?"#c85252":C.text, fontWeight:"600", fontSize:12 }}>
          {p.name}{p.frOnly&&<Tag color="#c85252">FR</Tag>}{p.lgOnly&&<Tag color={C.lgGreen}>LG</Tag>}
        </span>
        <span style={{ fontSize:10, color:C.muted, marginLeft:6 }}>{p.method}</span>
        {p.note&&<div style={{ fontSize:10, color:"#b87030", marginTop:2 }}>{p.note}</div>}
      </div>
      <div style={{ textAlign:"right", flexShrink:0, paddingLeft:8, display:"flex", flexDirection:"column", alignItems:"flex-end", gap:3 }}>
        <RateDisplay rate={p.rate} />
        {p.levels&&<div style={{ fontSize:10, color:C.muted }}>Lv.{p.levels}</div>}
      </div>
    </Row>
  );
}

function ItemEntry({ it, itemKey, done, toggleItem }) {
  return (
    <Row done={done} onClick={() => toggleItem(itemKey)}>
      {itemSpriteUrl(it.name)&&<img src={itemSpriteUrl(it.name)} alt={it.name} style={{ width:24, height:24, imageRendering:"pixelated", flexShrink:0 }} />}
      <div style={{ flex:1 }}>
        <span style={{ fontSize:12, fontWeight:"600", color:it.hidden?C.gold:C.text }}>
          {it.hidden&&<span style={{ color:C.gold, marginRight:4 }}>★</span>}{it.name}
        </span>
        {it.note&&<div style={{ fontSize:10, color:C.muted, marginTop:2, lineHeight:1.5 }}>{it.note}</div>}
      </div>
    </Row>
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
        <span style={{ fontSize:11, fontWeight:"700", color:C.lgGreen, background:"rgba(63,168,74,0.12)", border:"1px solid rgba(63,168,74,0.3)", padding:"1px 6px", borderRadius:4, whiteSpace:"nowrap" }}>
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
