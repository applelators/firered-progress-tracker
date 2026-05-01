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
  {id:52, name:"Meowth"},               {id:53, name:"Persian"},
  {id:54, name:"Psyduck",  frOnly:true},{id:55, name:"Golduck",  frOnly:true},
  {id:56, name:"Mankey"},              {id:57, name:"Primeape"},
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
  {id:109,name:"Koffing"},               {id:110,name:"Weezing"},
  {id:111,name:"Rhyhorn"},     {id:112,name:"Rhydon"},
  {id:113,name:"Chansey"},     {id:114,name:"Tangela"},      {id:115,name:"Kangaskhan"},
  {id:116,name:"Horsea"},               {id:117,name:"Seadra"},
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

// ─── NATIONAL DEX (Gen II Pokémon obtainable in FRLG post-game) ──────────────
// Not counted toward 100% completion. Shown in a separate section of the Pokédex tab.
const NATIONAL_DEX = [
  {id:161,name:"Sentret"},
  {id:162,name:"Furret"},
  {id:165,name:"Ledyba"},
  {id:166,name:"Ledian"},
  {id:167,name:"Spinarak"},
  {id:168,name:"Ariados"},
  {id:169,name:"Crobat"},
  {id:175,name:"Togepi"},
  {id:176,name:"Togetic"},
  {id:177,name:"Natu"},
  {id:178,name:"Xatu"},
  {id:182,name:"Bellossom",  frOnly:true},
  {id:183,name:"Marill",    lgOnly:true},
  {id:184,name:"Azumarill", lgOnly:true},
  {id:186,name:"Politoed"},
  {id:187,name:"Hoppip"},
  {id:188,name:"Skiploom"},
  {id:189,name:"Jumpluff"},
  {id:193,name:"Yanma"},
  {id:194,name:"Wooper",    frOnly:true},
  {id:195,name:"Quagsire",  frOnly:true},
  {id:198,name:"Murkrow",   frOnly:true},
  {id:199,name:"Slowking",  lgOnly:true},
  {id:200,name:"Misdreavus",lgOnly:true},
  {id:201,name:"Unown"},
  {id:202,name:"Wobbuffet"},
  {id:208,name:"Steelix"},
  {id:211,name:"Qwilfish",  frOnly:true},
  {id:212,name:"Scizor",    frOnly:true},
  {id:214,name:"Heracross"},
  {id:215,name:"Sneasel",   lgOnly:true},
  {id:220,name:"Swinub"},
  {id:221,name:"Piloswine"},
  {id:223,name:"Remoraid",  lgOnly:true},
  {id:224,name:"Octillery", lgOnly:true},
  {id:225,name:"Delibird",  frOnly:true},
  {id:226,name:"Mantine",   lgOnly:true},
  {id:227,name:"Skarmory",  frOnly:true},
  {id:230,name:"Kingdra",   frOnly:true},
  {id:231,name:"Phanpy"},
  {id:232,name:"Donphan"},
  {id:233,name:"Porygon2"},
  {id:239,name:"Elekid",    frOnly:true},
  {id:240,name:"Magby",     lgOnly:true},
  {id:242,name:"Blissey"},
  {id:246,name:"Larvitar"},
  {id:247,name:"Pupitar"},
  {id:248,name:"Tyranitar"},
  {id:298,name:"Azurill",   lgOnly:true},
];

// ─── AREA DATA ────────────────────────────────────────────────────────────────
// Pokémon are tracked GLOBALLY by name. Items are tracked per-area.
// Gift/Trade/Fossil Pokémon are included in pokemon arrays so they sync to the Pokédex.
const AREAS = [
  { part:"Part 1", id:"pallet-town", name:"Pallet Town",
    note:"Choose one starter from Professor Oak — Blue takes the one with a type advantage over yours.",
    pokemon:[{name:"Bulbasaur",method:"Gift",levels:"5",note:"Choose one of three from Professor Oak",choiceGroup:"starter",choiceId:"bulbasaur"},{name:"Charmander",method:"Gift",levels:"5",note:"Choose one of three from Professor Oak",choiceGroup:"starter",choiceId:"charmander"},{name:"Squirtle",method:"Gift",levels:"5",note:"Choose one of three from Professor Oak",choiceGroup:"starter",choiceId:"squirtle"}],
    items:[{name:"Potion",hidden:false,note:"From the PC in your bedroom"},{name:"Pokédex",hidden:false,note:"From Professor Oak after choosing your starter"},{name:"Poké Ball ×5",hidden:false,note:"From Oak's aide after receiving the Pokédex"},{name:"Town Map",hidden:false,note:"From Daisy (Blue's sister) after receiving the Pokédex"}],
    trainers:[{class:"Rival",name:"Blue",note:"Has the starter with a type advantage over yours — one of these three.",team:[{name:"Charmander",level:5},{name:"Squirtle",level:5},{name:"Bulbasaur",level:5}]}] },

  { part:"Part 2", id:"route1", name:"Route 1",
    note:"Can't catch on first visit — no Poké Balls yet. Return from Viridian City.",
    pokemon:[{name:"Pidgey",method:"Grass",levels:"2–5",rate:"50%"},{name:"Rattata",method:"Grass",levels:"2–4",rate:"50%"}],
    items:[{name:"Potion",hidden:false,note:"From the Viridian Mart employee near the signpost"}] },

  { part:"Part 2", id:"viridian-city", name:"Viridian City",
    note:"Deliver Oak's Parcel to unlock the old man's Pokémon-catching tutorial on Route 2.",
    pokemon:[],
    items:[{name:"Oak's Parcel",hidden:false,note:"From the Poké Mart shopkeeper — deliver to Professor Oak in Pallet Town"},{name:"Potion",hidden:false,note:"Near the city's north exit, west of the small tree"},{name:"Teachy TV",hidden:false,note:"From the old man after delivering Oak's Parcel"}] },

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
          {name:"Tiny Mushroom",hidden:true,recurring:true,note:"Spawns throughout B1F/B2F (★ Itemfinder)"},
          {name:"Big Mushroom", hidden:true,recurring:true,note:"Spawns throughout B1F/B2F (★ Itemfinder)"},
        ],
        trainers:[]},
      { label:"B2F",
        pokemon:[
          {name:"Zubat",   method:"Cave",levels:"8–11", rate:"49%"},
          {name:"Geodude", method:"Cave",levels:"9–10", rate:"30%"},
          {name:"Paras",   method:"Cave",levels:"10–12",rate:"15%"},
          {name:"Clefairy",method:"Cave",levels:"10–12",rate:"6%"},
          {name:"Kabuto",  method:"Fossil",levels:"5",  note:"Restore Dome Fossil at Cinnabar Lab",  choiceGroup:"fossil",choiceId:"dome"},
          {name:"Omanyte", method:"Fossil",levels:"5",  note:"Restore Helix Fossil at Cinnabar Lab", choiceGroup:"fossil",choiceId:"helix"},
        ],
        items:[
          {name:"Star Piece",  hidden:false,note:"South section"},
          {name:"TM46 Thief",  hidden:false,note:"Northeast platform"},
          {name:"Ether",       hidden:true, note:"Northeast section (★ Itemfinder)",img:"screenshots/hidden/mt-moon-b2f-2.png"},
          {name:"Moon Stone",  hidden:true, note:"Near fossils (★ Itemfinder)",img:"screenshots/hidden/mt-moon-b2f-3.png"},
          {name:"Revive",      hidden:false,note:"North of center ladder"},
          {name:"Antidote",    hidden:false,note:"Southwest of northwest ladder"},
          {name:"Dome Fossil", hidden:false,note:"Pick one — Dome Fossil → Kabuto", choiceGroup:"fossil",choiceId:"dome"},
          {name:"Helix Fossil",hidden:false,note:"Pick one — Helix Fossil → Omanyte",choiceGroup:"fossil",choiceId:"helix"},
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
          {name:"Lava Cookie",hidden:true,optional:true,surf:true,note:"⚠ SE corner near the truck — requires Surf, only accessible via glitch (★ Itemfinder)"},
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
      {class:"PokéManiac",name:"Mark", note:"Requires Surf — only accessible on the Part 15 return trip to reach the Power Plant.", team:[{name:"Rhyhorn", level:29},{name:"Lickitung",level:29}]},
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
      {name:"10 Coins",  hidden:false,note:"From the Fisherman"},
      {name:"20 Coins",  hidden:false,note:"From the Gentleman"},
      {name:"20 Coins",  hidden:false,note:"From the Scientist"},
      {name:"10 Coins",  hidden:true, note:"Three squares south and two squares east of the old man"},
      {name:"10 Coins",  hidden:true, note:"One square west of the old man"},
      {name:"100 Coins", hidden:true, note:"Two squares to the west of the Pokémon Printer"},
      {name:"10 Coins",  hidden:true, note:"Two squares north and two squares east of the Scientist"},
      {name:"40 Coins",  hidden:true, note:"Two squares north and four squares east of the Scientist"},
      {name:"10 Coins",  hidden:true, note:"Four squares north of the Scientist"},
      {name:"10 Coins",  hidden:true, note:"Three squares north and three squares west of the Scientist"},
      {name:"20 Coins",  hidden:true, note:"One square east and three squares north of the woman in the center aisle"},
      {name:"10 Coins",  hidden:true, note:"Two squares south and one square west of the Gym guide"},
      {name:"20 Coins",  hidden:true, note:"One square east and three squares south of the woman in the west aisle"},
      {name:"10 Coins",  hidden:true, note:"One square west and one square south of the Fisherman"},
      {name:"10 Coins",  hidden:true, note:"One square east and two squares north of the man in the west aisle"},
      {name:"TM13 Ice Beam",      hidden:false,note:"Prize Corner — 4,000 coins"},
      {name:"TM23 Iron Tail",     hidden:false,note:"Prize Corner — 3,500 coins"},
      {name:"TM24 Thunderbolt",   hidden:false,note:"Prize Corner — 4,000 coins"},
      {name:"TM30 Shadow Ball",   hidden:false,note:"Prize Corner — 4,500 coins"},
      {name:"TM35 Flamethrower",  hidden:false,note:"Prize Corner — 4,000 coins"},
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
    note:"Requires Silph Scope (from Rocket Hideout) to reveal and catch Ghost-types on floors 3–7. Rescue Mr. Fuji on 7F to receive the Poké Flute.",
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
          {name:"Escape Rope",hidden:false,note:"Near the north wall"},
        ],
        trainers:[
          {class:"Channeler",name:"Hope",    team:[{name:"Gastly",level:23}]},
          {class:"Channeler",name:"Patricia",team:[{name:"Gastly",level:22}]},
          {class:"Channeler",name:"Carly",   team:[{name:"Gastly",level:24}]},
        ]},
      { label:"4F",
        pokemon:[
          {name:"Gastly", method:"Cave",levels:"20–22",rate:"86%"},
          {name:"Cubone", method:"Cave",levels:"19–21",rate:"9%"},
          {name:"Haunter",method:"Cave",levels:"20–22",rate:"5%"},
        ],
        items:[
          {name:"Elixir",    hidden:false,note:"West of the stairway from 3F"},
          {name:"Awakening", hidden:false,note:"In the center of the room"},
          {name:"Great Ball",hidden:false,note:"Near the south wall"},
        ],
        trainers:[
          {class:"Channeler",name:"Laurel",team:[{name:"Gastly",level:23},{name:"Gastly",level:23}]},
          {class:"Channeler",name:"Jody",  team:[{name:"Gastly",level:22}]},
          {class:"Channeler",name:"Paula", team:[{name:"Gastly",level:24}]},
        ]},
      { label:"5F",
        pokemon:[
          {name:"Gastly", method:"Cave",levels:"20–22",rate:"86%"},
          {name:"Cubone", method:"Cave",levels:"19–21",rate:"9%"},
          {name:"Haunter",method:"Cave",levels:"20–22",rate:"5%"},
        ],
        items:[
          {name:"Big Mushroom",hidden:true, note:"One step north, four steps west of Channeler Ruth",img:"screenshots/hidden/pokemon-tower-4f-5f-6.png"},
          {name:"Cleanse Tag", hidden:false,note:"Middle of the healing area"},
          {name:"Nugget",      hidden:false,note:"Near the south wall"},
        ],
        trainers:[
          {class:"Channeler",name:"Ruth", team:[{name:"Gastly",level:22}]},
          {class:"Channeler",name:"Tammy",team:[{name:"Haunter",level:23}]},
        ]},
      { label:"6F",
        pokemon:[
          {name:"Gastly", method:"Cave",levels:"22–23",rate:"85%"},
          {name:"Cubone", method:"Cave",levels:"21–22",rate:"9%"},
          {name:"Haunter",method:"Cave",levels:"22–23",rate:"6%"},
        ],
        items:[
          {name:"X Accuracy",hidden:false,note:"Southwest of the stairway from 5F"},
          {name:"Rare Candy", hidden:false,note:"West-central part of the room"},
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
          {name:"Soothe Bell",hidden:true, note:"On the spot where Mr. Fuji was standing (★ Itemfinder)"},
          {name:"Poké Flute", hidden:false,note:"From Mr. Fuji after rescuing him — wakes both Snorlax"},
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
      {name:"Krabby",   method:"Good Rod",levels:"5–15", rate:"20% FR / 60% LG"},
      {name:"Magikarp", method:"Good Rod",levels:"5–15", rate:"20%"},
      {name:"Horsea",   method:"Super Rod",levels:"15–35",rate:"84%",frOnly:true},
      {name:"Krabby",   method:"Super Rod",levels:"15–35",rate:"84%",lgOnly:true},
      {name:"Gyarados", method:"Super Rod",levels:"15–25",rate:"15%"},
      {name:"Psyduck",  method:"Super Rod",levels:"25–35",rate:"1%", frOnly:true},
      {name:"Slowpoke", method:"Super Rod",levels:"25–35",rate:"1%", lgOnly:true},
    ],
    items:[
      {name:"TM27 Return",    hidden:false,note:"From the girl on the second floor of the Lavender Town gate"},
      {name:"TM48 Skill Swap",hidden:false,surf:true,note:"Southeast of the Lavender Town gate (requires Surf)"},
      {name:"Hyper Potion",   hidden:true, note:"Five steps east, two steps north of Fisherman Elliot",img:"screenshots/hidden/route12-3.png"},
      {name:"Super Rod",      hidden:false,note:"From the Fishing Guru's younger brother"},
      {name:"Net Ball",       hidden:false,optional:true,note:"From the Fishing Guru's younger brother, for showing him a record-breaking Magikarp (repeatable)"},
      {name:"Iron",           hidden:false,note:"Southwest of the Fishing Guru's house (requires Cut)"},
      {name:"Rare Candy",     hidden:true, note:"In the tall grass patch (requires Cut)",img:"screenshots/hidden/route12-5.png"},
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
      {name:"Krabby",    method:"Good Rod",levels:"5–15", rate:"20% FR / 60% LG"},
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
          {name:"Nidorino", method:"Grass",levels:"31",   rate:"10% FR / 5% LG"},
          {name:"Nidorina", method:"Grass",levels:"31",   rate:"5% FR / 10% LG"},
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
          {name:"Nugget",    hidden:false,surf:true,note:"Central island (requires Surf)"},
          {name:"Leaf Stone",hidden:true, surf:true,note:"Central island, three steps east of the Nugget (★ Itemfinder, requires Surf)",img:"screenshots/hidden/safari-zone-center-1.png"},
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
          {name:"Nidorino", method:"Grass",levels:"30",   rate:"10% FR / 5% LG"},
          {name:"Nidorina", method:"Grass",levels:"30",   rate:"5% FR / 10% LG"},
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
          {name:"Venomoth", method:"Grass",levels:"32",   rate:"5%"},
          {name:"Tauros",   method:"Grass",levels:"25",   rate:"4%"},
          {name:"Kangaskhan",method:"Grass",levels:"28",  rate:"1%"},
        ],
        items:[
          {name:"Gold Teeth",      hidden:false,note:"Northeast of the rocky ridge — return to the Warden in Fuchsia City for HM04 Strength"},
          {name:"TM32 Double Team",hidden:false,note:"Southeast of the Secret House"},
          {name:"Revive",          hidden:true, note:"In the dirt patch in front of the Secret House (★ Itemfinder)",img:"screenshots/hidden/safari-zone-area-3-2.png"},
          {name:"HM03 Surf",       hidden:false,note:"Secret House — received from a safari official"},
          {name:"Max Potion",      hidden:false,surf:true,note:"In the tall grass patch (requires Surf)"},
          {name:"Max Revive",      hidden:false,surf:true,note:"Southeast side of the rocky ridge (requires Surf)"},
        ],
        trainers:[]},
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
      {name:"Hitmonlee", method:"Gift",levels:"25",note:"⚠ One-time choice — pick Hitmonlee OR Hitmonchan",warn:true,choiceGroup:"dojo",choiceId:"hitmonlee"},
      {name:"Hitmonchan",method:"Gift",levels:"25",note:"⚠ One-time choice — pick Hitmonlee OR Hitmonchan",warn:true,choiceGroup:"dojo",choiceId:"hitmonchan"},
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
      {name:"Horsea",   method:"Good Rod", levels:"5–15", rate:"60% FR / 20% LG"},
      {name:"Krabby",   method:"Good Rod", levels:"5–15", rate:"20% FR / 60% LG"},
      {name:"Magikarp", method:"Good Rod", levels:"5–15", rate:"20%"},
      {name:"Horsea",    method:"Super Rod",levels:"15–25",rate:"80%", frOnly:true},
      {name:"Krabby",    method:"Super Rod",levels:"15–25",rate:"80%", lgOnly:true},
      {name:"Gyarados",  method:"Super Rod",levels:"15–25",rate:"15%"},
      {name:"Seadra",    method:"Super Rod",levels:"25–35",rate:"4%",  frOnly:true},
      {name:"Kingler",   method:"Super Rod",levels:"25–35",rate:"4%",  lgOnly:true},
      {name:"Psyduck",   method:"Super Rod",levels:"25–35",rate:"1%",  frOnly:true},
      {name:"Slowpoke",  method:"Super Rod",levels:"25–35",rate:"1%",  lgOnly:true},
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
      {name:"Horsea",   method:"Good Rod", levels:"5–15", rate:"60% FR / 20% LG"},
      {name:"Krabby",   method:"Good Rod", levels:"5–15", rate:"20% FR / 60% LG"},
      {name:"Magikarp", method:"Good Rod", levels:"5–15", rate:"20%"},
      {name:"Horsea",    method:"Super Rod",levels:"15–25",rate:"80%", frOnly:true},
      {name:"Krabby",    method:"Super Rod",levels:"15–25",rate:"80%", lgOnly:true},
      {name:"Gyarados",  method:"Super Rod",levels:"15–25",rate:"15%"},
      {name:"Seadra",    method:"Super Rod",levels:"25–35",rate:"4%",  frOnly:true},
      {name:"Kingler",   method:"Super Rod",levels:"25–35",rate:"4%",  lgOnly:true},
      {name:"Psyduck",   method:"Super Rod",levels:"25–35",rate:"1%",  frOnly:true},
      {name:"Slowpoke",  method:"Super Rod",levels:"25–35",rate:"1%",  lgOnly:true},
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
          {name:"Horsea",  method:"Good Rod",levels:"5–15", rate:"60% FR / 20% LG"},
          {name:"Krabby",  method:"Good Rod",levels:"5–15", rate:"20% FR / 60% LG"},
          {name:"Magikarp",method:"Good Rod",levels:"5–15", rate:"20%"},
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
          {name:"Horsea",  method:"Good Rod",levels:"5–15", rate:"60% FR / 20% LG"},
          {name:"Krabby",  method:"Good Rod",levels:"5–15", rate:"20% FR / 60% LG"},
          {name:"Magikarp",method:"Good Rod",levels:"5–15", rate:"20%"},
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
      {name:"Horsea",   method:"Good Rod", levels:"5–15", rate:"60% FR / 20% LG"},
      {name:"Krabby",   method:"Good Rod", levels:"5–15", rate:"20% FR / 60% LG"},
      {name:"Magikarp", method:"Good Rod", levels:"5–15", rate:"20%"},
      {name:"Horsea",    method:"Super Rod",levels:"15–25",rate:"80%", frOnly:true},
      {name:"Krabby",    method:"Super Rod",levels:"15–25",rate:"80%", lgOnly:true},
      {name:"Gyarados",  method:"Super Rod",levels:"15–25",rate:"15%"},
      {name:"Seadra",    method:"Super Rod",levels:"25–35",rate:"4%",  frOnly:true},
      {name:"Kingler",   method:"Super Rod",levels:"25–35",rate:"4%",  lgOnly:true},
      {name:"Psyduck",   method:"Super Rod",levels:"25–35",rate:"1%",  frOnly:true},
      {name:"Slowpoke",  method:"Super Rod",levels:"25–35",rate:"1%",  lgOnly:true},
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
      {name:"Omanyte",   method:"Fossil",   note:"Restore Helix Fossil at Cinnabar Lab",  warn:true,choiceGroup:"fossil",choiceId:"helix"},
      {name:"Kabuto",    method:"Fossil",   note:"Restore Dome Fossil at Cinnabar Lab",   warn:true,choiceGroup:"fossil",choiceId:"dome"},
      {name:"Aerodactyl",method:"Fossil",   note:"Restore Old Amber at Cinnabar Lab",                     warn:true},
      {name:"Electrode", method:"Trade",    note:"Trade Raichu with Old man in Cinnabar Lab",              warn:true},
      {name:"Tangela",   method:"Trade",    note:"Trade Venonat with woman in Cinnabar Lab (holds Stardust)", warn:true},
      {name:"Seel",      method:"Trade",    note:"Trade Ponyta with Scientist in Cinnabar Lab",            warn:true},
      {name:"Tentacool", method:"Surf",      levels:"5–40",  rate:"90%"},
      {name:"Tentacruel",method:"Surf",      levels:"30–40", rate:"10%"},
      {name:"Magikarp",  method:"Old Rod",   levels:"5",     rate:"100%"},
      {name:"Horsea",   method:"Good Rod",  levels:"5–15",  rate:"60% FR / 20% LG"},
      {name:"Krabby",   method:"Good Rod",  levels:"5–15",  rate:"20% FR / 60% LG"},
      {name:"Magikarp", method:"Good Rod",  levels:"5–15",  rate:"20%"},
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
      {name:"Ultra Ball", hidden:true,recurring:true,  note:"East of northernmost grass"},
      {name:"Ultra Ball", hidden:true,recurring:true,  note:"Southeast corner"},
      {name:"Pearl",      hidden:true,recurring:true,  note:"West side, southernmost sandy patch"},
      {name:"Pearl",      hidden:true,recurring:true,  note:"Two steps east/north of first Pearl"},
      {name:"Big Pearl",  hidden:true,recurring:true,  note:"Middle northwest sandy patch"},
      {name:"Stardust",   hidden:true,recurring:true,  note:"Middle shore"},
      {name:"Stardust",   hidden:true,recurring:true,  note:"Southwest corner northwest patch"},
      {name:"Star Piece", hidden:true,recurring:true,  note:"Four steps north, one west of southeast corner"},
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
      {name:"Max Repel",       hidden:false, surf:true,note:"East rocky ridge (requires Surf)"},
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
      {name:"PP Max",     hidden:true, surf:true,note:"East lake sandy spot (requires Surf and Itemfinder)",img:"screenshots/hidden/cape-brink-0.png"},
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
      {name:"Pearl",     hidden:true,recurring:true, note:"Southwest corner near Tuber Alexis"},
      {name:"Stardust",  hidden:true,recurring:true, note:"One square west, two north of bridge's northwest corner"},
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
      {name:"Razz Berry",  hidden:true,recurring:true, note:"Southwest of first cuttable tree"},
      {name:"Oran Berry",  hidden:true,recurring:true, note:"Northwest of first cuttable tree",img:"screenshots/hidden/berry-forest-1.png"},
      {name:"Persim Berry",hidden:true,recurring:true, note:"Northeast of ledge near entrance",img:"screenshots/hidden/berry-forest-2.png"},
      {name:"Pinap Berry", hidden:true,recurring:true, note:"Northeast of Oran Berry",img:"screenshots/hidden/berry-forest-3.png"},
      {name:"Chesto Berry",hidden:true,recurring:true, note:"Northeastern corner"},
      {name:"Aspear Berry",hidden:true,recurring:true, note:"Northeast of northernmost water",img:"screenshots/hidden/berry-forest-5.png"},
      {name:"Rawst Berry", hidden:true,recurring:true, note:"Northwest of Aspear Berry"},
      {name:"Bluk Berry",  hidden:true,recurring:true, note:"Southeast of cuttable tree",img:"screenshots/hidden/berry-forest-7.png"},
      {name:"Nanab Berry", hidden:true,recurring:true, note:"Northeast of middle water"},
      {name:"Cheri Berry", hidden:true,recurring:true, note:"North of middle water",img:"screenshots/hidden/berry-forest-9.png"},
      {name:"Wepear Berry",hidden:true,recurring:true, note:"North of middle water",img:"screenshots/hidden/berry-forest-10.png"},
      {name:"Pecha Berry", hidden:true,recurring:true, note:"North of southernmost water"},
      {name:"Lum Berry",   hidden:true,recurring:true, note:"Northwest area"},
      {name:"Full Heal",   hidden:false,note:"North of northernmost water"},
      {name:"Max Ether",   hidden:false,note:"West of Rawst Berry"},
      {name:"Max Elixir",  hidden:false,surf:true,note:"Southeast dead-end (requires Cut and Surf)"},
      {name:"Iapapa Berry",hidden:false,note:"From Lostelle after rescue"},
    ],
    trainers:[]},

  { part:"Part 15", id:"route21", name:"Route 21",
    note:"Connects Cinnabar Island to Pallet Town. Tangela is the only grass encounter.",
    pokemon:[
      {name:"Tangela",    method:"Grass",    levels:"17–28", rate:"100%"},
      {name:"Tentacool",  method:"Surf",      levels:"5–40",  rate:"100%"},
      {name:"Magikarp",   method:"Old Rod",   levels:"5",     rate:"100%"},
      {name:"Horsea",   method:"Good Rod",  levels:"5–15",  rate:"60% FR / 20% LG"},
      {name:"Krabby",   method:"Good Rod",  levels:"5–15",  rate:"20% FR / 60% LG"},
      {name:"Magikarp", method:"Good Rod",  levels:"5–15",  rate:"20%"},
      {name:"Horsea",     method:"Super Rod", levels:"15–25", rate:"80%", frOnly:true},
      {name:"Krabby",     method:"Super Rod", levels:"15–25", rate:"80%", lgOnly:true},
      {name:"Gyarados",   method:"Super Rod", levels:"15–25", rate:"15%"},
      {name:"Seadra",     method:"Super Rod", levels:"25–35", rate:"4%",  frOnly:true},
      {name:"Kingler",    method:"Super Rod", levels:"25–35", rate:"4%",  lgOnly:true},
      {name:"Psyduck",    method:"Super Rod", levels:"25–35", rate:"1%",  frOnly:true},
      {name:"Slowpoke",   method:"Super Rod", levels:"25–35", rate:"1%",  lgOnly:true},
    ],
    items:[
      {name:"Pearl", hidden:true,recurring:true, note:"Small island near Swimmer Spencer"},
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
    note:"Giovanni's Ground-type gym — spinner tile maze. Defeating Giovanni earns the Earth Badge.",
    pokemon:[],
    items:[
      {name:"TM26 Earthquake", hidden:false, note:"Reward for defeating Giovanni"},
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

// ─── PART 18 — Four Island · Icefall Cave · Six Island ───────────────────────

  { part:"Part 18", id:"four-island", name:"Four Island",
    note:"Kinnow Island — hub of the second set of Sevii Islands. Surf and fish off the beaches for Kanto and Johto Pokémon. Blue appears here but does not battle.",
    pokemon:[
      {name:"Wooper",    method:"Surf",      levels:"5–25",  rate:"70%", frOnly:true},
      {name:"Marill",    method:"Surf",      levels:"5–25",  rate:"70%", lgOnly:true},
      {name:"Psyduck",   method:"Surf",      levels:"5–35",  rate:"30%", frOnly:true},
      {name:"Slowpoke",  method:"Surf",      levels:"5–35",  rate:"30%", lgOnly:true},
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
      {name:"Ultra Ball",  hidden:true,  note:"Beach north of the port"},
      {name:"Star Piece",  hidden:false, note:"Northernmost beach (requires Rock Smash)"},
      {name:"Pearl",       hidden:true,  note:"Beach east of the port"},
      {name:"Stardust",    hidden:true,  note:"South of Icefall Cave entrance (requires Surf)"},
    ],
    trainers:[] },

  { part:"Part 18", id:"icefall-cave", name:"Icefall Cave",
    note:"Icy cave on Four Island's northwest coast. HM07 Waterfall is obtained here. Lorelei appears in the Back Cave for a cutscene.",
    floors:[
      { label:"Entrance",
        pokemon:[
          {name:"Seel",     method:"Cave", levels:"43–47", rate:"40%"},
          {name:"Golbat",   method:"Cave", levels:"45–48", rate:"25%"},
          {name:"Dewgong",  method:"Cave", levels:"49–53", rate:"20%"},
          {name:"Zubat",    method:"Cave", levels:"40",    rate:"10%"},
          {name:"Psyduck",  method:"Cave", levels:"41",    rate:"5%",  frOnly:true},
          {name:"Slowpoke", method:"Cave", levels:"41",    rate:"5%",  lgOnly:true},
          {name:"Seel",     method:"Surf", levels:"5–35",  rate:"60%"},
          {name:"Psyduck",  method:"Surf", levels:"5–35",  rate:"30%", frOnly:true},
          {name:"Slowpoke", method:"Surf", levels:"5–35",  rate:"30%", lgOnly:true},
          {name:"Dewgong",  method:"Surf", levels:"35–40", rate:"5%"},
          {name:"Wooper",   method:"Surf", levels:"5–15",  rate:"5%",  frOnly:true},
          {name:"Marill",   method:"Surf", levels:"5–15",  rate:"5%",  lgOnly:true},
        ],
        items:[],
        trainers:[
          {class:"Team Rocket Grunt",name:"Grunt 1",team:[{name:"Zubat",level:38},{name:"Zubat",level:38},{name:"Golbat",level:38}]},
        ] },
      { label:"1F",
        pokemon:[
          {name:"Swinub",   method:"Cave", levels:"23–31", rate:"50%"},
          {name:"Golbat",   method:"Cave", levels:"45–48", rate:"25%"},
          {name:"Zubat",    method:"Cave", levels:"40",    rate:"10%"},
          {name:"Seel",     method:"Cave", levels:"45",    rate:"10%"},
          {name:"Delibird", method:"Cave", levels:"30",    rate:"5%",  frOnly:true},
          {name:"Sneasel",  method:"Cave", levels:"30",    rate:"5%",  lgOnly:true},
        ],
        items:[
          {name:"Ultra Ball",     hidden:false, note:"Center area, northeast of the ice patch"},
          {name:"HM07 Waterfall", hidden:false, note:"Southern ledge, accessed via the frozen waterfall in B1F"},
        ],
        trainers:[] },
      { label:"Back Cave",
        pokemon:[
          {name:"Tentacool",  method:"Surf",      levels:"5–45",  rate:"95%"},
          {name:"Tentacruel", method:"Surf",      levels:"35–45", rate:"4%"},
          {name:"Lapras",     method:"Surf",      levels:"30–45", rate:"1%"},
          {name:"Magikarp",   method:"Old Rod",   levels:"5",     rate:"100%"},
          {name:"Horsea",     method:"Good Rod",  levels:"5–15",  rate:"80%", frOnly:true},
          {name:"Krabby",     method:"Good Rod",  levels:"5–15",  rate:"80%", lgOnly:true},
          {name:"Magikarp",   method:"Good Rod",  levels:"5–15",  rate:"20%"},
          {name:"Shellder",   method:"Super Rod", levels:"15–25", rate:"40%", frOnly:true},
          {name:"Horsea",     method:"Super Rod", levels:"15–25", rate:"40%", frOnly:true},
          {name:"Krabby",     method:"Super Rod", levels:"15–25", rate:"40%", lgOnly:true},
          {name:"Staryu",     method:"Super Rod", levels:"15–25", rate:"40%", lgOnly:true},
          {name:"Gyarados",   method:"Super Rod", levels:"15–25", rate:"15%"},
          {name:"Seadra",     method:"Super Rod", levels:"25–35", rate:"4%",  frOnly:true},
          {name:"Kingler",    method:"Super Rod", levels:"25–35", rate:"4%",  lgOnly:true},
          {name:"Psyduck",    method:"Super Rod", levels:"25–35", rate:"1%",  frOnly:true},
          {name:"Slowpoke",   method:"Super Rod", levels:"25–35", rate:"1%",  lgOnly:true},
        ],
        items:[
          {name:"Never-Melt Ice", hidden:false, note:"East side of B1F"},
          {name:"Full Restore",   hidden:false, note:"Near the southern ladder in B1F"},
        ],
        trainers:[] },
    ] },

  { part:"Part 18", id:"water-path", name:"Water Path",
    note:"Coastal route on Six Island connecting the Pokémon Center to the rest of the island. Grass encounters include Johto Pokémon.",
    pokemon:[
      {name:"Spearow",    method:"Grass",     levels:"44",    rate:"20%"},
      {name:"Sentret",    method:"Grass",     levels:"10–15", rate:"30%"},
      {name:"Meowth",     method:"Grass",     levels:"41",    rate:"10%"},
      {name:"Oddish",     method:"Grass",     levels:"44",    rate:"10%", frOnly:true},
      {name:"Gloom",      method:"Grass",     levels:"48",    rate:"5%",  frOnly:true},
      {name:"Bellsprout", method:"Grass",     levels:"44",    rate:"10%", lgOnly:true},
      {name:"Weepinbell", method:"Grass",     levels:"48",    rate:"5%",  lgOnly:true},
      {name:"Fearow",     method:"Grass",     levels:"48–50", rate:"15%"},
      {name:"Persian",    method:"Grass",     levels:"47–50", rate:"5%"},
      {name:"Psyduck",    method:"Grass",     levels:"41",    rate:"5%",  frOnly:true},
      {name:"Slowpoke",   method:"Grass",     levels:"41",    rate:"5%",  lgOnly:true},
      {name:"Tentacool",  method:"Surf",      levels:"5–40",  rate:"95%"},
      {name:"Tentacruel", method:"Surf",      levels:"35–40", rate:"5%"},
      {name:"Magikarp",   method:"Old Rod",   levels:"5",     rate:"100%"},
      {name:"Horsea",     method:"Good Rod",  levels:"5–15",  rate:"80%", frOnly:true},
      {name:"Krabby",     method:"Good Rod",  levels:"5–15",  rate:"80%", lgOnly:true},
      {name:"Magikarp",   method:"Good Rod",  levels:"5–15",  rate:"20%"},
      {name:"Horsea",     method:"Super Rod", levels:"15–25", rate:"40%", frOnly:true},
      {name:"Krabby",     method:"Super Rod", levels:"15–25", rate:"40%", lgOnly:true},
      {name:"Qwilfish",   method:"Super Rod", levels:"15–25", rate:"40%", frOnly:true},
      {name:"Remoraid",   method:"Super Rod", levels:"15–25", rate:"40%", lgOnly:true},
      {name:"Gyarados",   method:"Super Rod", levels:"15–25", rate:"15%"},
      {name:"Seadra",     method:"Super Rod", levels:"25–35", rate:"4%",  frOnly:true},
      {name:"Kingler",    method:"Super Rod", levels:"25–35", rate:"4%",  lgOnly:true},
      {name:"Psyduck",    method:"Super Rod", levels:"25–35", rate:"1%",  frOnly:true},
      {name:"Slowpoke",   method:"Super Rod", levels:"25–35", rate:"1%",  lgOnly:true},
    ],
    items:[
      {name:"Pinap Berry",  hidden:true,  note:"Grassy area southeast of Six Island entrance"},
      {name:"Aspear Berry", hidden:true,  note:"Grassy area, southeast of Pinap Berry"},
      {name:"Dragon Scale", hidden:false, note:"Small land mass southeast of Aspear Berry (requires Surf)"},
      {name:"Oran Berry",   hidden:true,  note:"Northwest of northern house (requires Surf)"},
      {name:"Elixir",       hidden:false, note:"Small land east of southern house (requires Surf)"},
    ],
    trainers:[
      {class:"Juggler",    name:"Edward",   team:[{name:"Voltorb",level:46},{name:"Voltorb",level:46},{name:"Electrode",level:47},{name:"Mr. Mime",level:48}]},
      {class:"Hiker",      name:"Earl",     team:[{name:"Onix",level:49},{name:"Machoke",level:49}]},
      {class:"Swimmer♀",   name:"Denise",   team:[{name:"Chinchou",level:49},{name:"Lanturn",level:49}]},
      {class:"Swimmer♂",   name:"Samir",    team:[{name:"Gyarados",level:50}]},
      {class:"Twins",      name:"Miu & Mia",team:[{name:"Pikachu",level:50},{name:"Pikachu",level:50}]},
      {class:"Aroma Lady", name:"Rose",     team:[{name:"Sunkern",level:49},{name:"Sunflora",level:49}]},
    ] },

  { part:"Part 18", id:"green-path", name:"Green Path",
    note:"Short water route on Six Island's northeastern coast connecting Water Path to Outcast Island. Only surf and fishing encounters.",
    pokemon:[
      {name:"Tentacool",  method:"Surf",      levels:"5–40",  rate:"95%"},
      {name:"Tentacruel", method:"Surf",      levels:"35–40", rate:"5%"},
      {name:"Magikarp",   method:"Old Rod",   levels:"5",     rate:"100%"},
      {name:"Horsea",     method:"Good Rod",  levels:"5–15",  rate:"80%", frOnly:true},
      {name:"Krabby",     method:"Good Rod",  levels:"5–15",  rate:"80%", lgOnly:true},
      {name:"Magikarp",   method:"Good Rod",  levels:"5–15",  rate:"20%"},
      {name:"Horsea",     method:"Super Rod", levels:"15–25", rate:"40%", frOnly:true},
      {name:"Qwilfish",   method:"Super Rod", levels:"15–25", rate:"40%", frOnly:true},
      {name:"Krabby",     method:"Super Rod", levels:"15–25", rate:"40%", lgOnly:true},
      {name:"Remoraid",   method:"Super Rod", levels:"15–25", rate:"40%", lgOnly:true},
      {name:"Gyarados",   method:"Super Rod", levels:"15–25", rate:"15%"},
      {name:"Seadra",     method:"Super Rod", levels:"25–35", rate:"4%",  frOnly:true},
      {name:"Kingler",    method:"Super Rod", levels:"25–35", rate:"4%",  lgOnly:true},
    ],
    items:[
      {name:"Ultra Ball", hidden:true, note:"One step south and east of Psychic Jaclyn"},
    ],
    trainers:[
      {class:"Psychic",name:"Jaclyn",team:[{name:"Natu",level:48},{name:"Slowbro",level:48},{name:"Kadabra",level:49}]},
    ] },

  { part:"Part 18", id:"pattern-bush", name:"Pattern Bush",
    note:"Dense forest on Six Island. Ledyba is far more common in LeafGreen (30%) than FireRed (5%); Spinarak is the reverse. Heracross appears at a steady 20% in both.",
    pokemon:[
      {name:"Heracross",  method:"Grass", levels:"15–30", rate:"20%"},
      {name:"Caterpie",   method:"Grass", levels:"6",     rate:"10%"},
      {name:"Weedle",     method:"Grass", levels:"6",     rate:"10%"},
      {name:"Kakuna",     method:"Grass", levels:"9",     rate:"20%"},
      {name:"Metapod",    method:"Grass", levels:"9",     rate:"5%"},
      {name:"Spinarak",   method:"Grass", levels:"9–14",  rate:"30% FR / 5% LG"},
      {name:"Ledyba",     method:"Grass", levels:"9–14",  rate:"5% FR / 30% LG"},
    ],
    items:[],
    trainers:[
      {class:"Youngster",       name:"Cordell", team:[{name:"Farfetch'd",level:48},{name:"Farfetch'd",level:48}]},
      {class:"Pokémon Breeder", name:"Bethany", team:[{name:"Chansey",level:50}]},
      {class:"Bug Catcher",     name:"Garret",  team:[{name:"Heracross",level:49}]},
      {class:"Lass",            name:"Joana",   team:[{name:"Snubbull",level:49}]},
      {class:"Youngster",       name:"Nash",    team:[{name:"Weepinbell",level:47},{name:"Weepinbell",level:47},{name:"Victreebel",level:49}]},
      {class:"Bug Catcher",     name:"Vance",   team:[{name:"Venonat",level:48},{name:"Venomoth",level:48}]},
      {class:"Ruin Maniac",     name:"Layton",  team:[{name:"Sandslash",level:48},{name:"Onix",level:48},{name:"Sandslash",level:48}]},
      {class:"Picnicker",       name:"Marcy",   team:[{name:"Paras",level:48},{name:"Paras",level:48},{name:"Parasect",level:49}]},
      {class:"Bug Catcher",     name:"Jonah",   team:[{name:"Yanma",level:45},{name:"Beedrill",level:45},{name:"Yanma",level:46},{name:"Beedrill",level:47}]},
      {class:"Lass",            name:"Dalia",   team:[{name:"Hoppip",level:46},{name:"Hoppip",level:47},{name:"Skiploom",level:47},{name:"Skiploom",level:48}]},
      {class:"Pokémon Breeder", name:"Allison", team:[{name:"Clefairy",level:48},{name:"Clefairy",level:48},{name:"Clefable",level:48}]},
      {class:"Camper",          name:"Riley",   team:[{name:"Pinsir",level:49},{name:"Heracross",level:50}]},
    ] },

  { part:"Part 18", id:"altering-cave", name:"Altering Cave",
    note:"Mysterious cave on Outcast Island. The planned Mystery Gift event distributions (Mareep, Smeargle, and others) were never officially released, so only Zubat appears in any unmodified game.",
    pokemon:[
      {name:"Zubat", method:"Cave", levels:"6–16", rate:"100%"},
    ],
    items:[],
    trainers:[] },

  { part:"Part 18", id:"ruin-valley", name:"Ruin Valley",
    note:"Archaeological site on Six Island featuring rare Johto Pokémon. Natu and Yanma appear in the grass. Strength is required to reach all items.",
    pokemon:[
      {name:"Natu",      method:"Grass",     levels:"15–20", rate:"25%"},
      {name:"Spearow",   method:"Grass",     levels:"44",    rate:"20%"},
      {name:"Yanma",     method:"Grass",     levels:"18",    rate:"10%"},
      {name:"Meowth",    method:"Grass",     levels:"43",    rate:"10%"},
      {name:"Wooper",    method:"Grass",     levels:"15",    rate:"10%", frOnly:true},
      {name:"Marill",    method:"Grass",     levels:"15",    rate:"10%", lgOnly:true},
      {name:"Wobbuffet", method:"Grass",     levels:"25",    rate:"5%"},
      {name:"Fearow",    method:"Grass",     levels:"49",    rate:"10%"},
      {name:"Persian",   method:"Grass",     levels:"49–52", rate:"5%"},
      {name:"Psyduck",   method:"Grass",     levels:"41",    rate:"5%",  frOnly:true},
      {name:"Slowpoke",  method:"Grass",     levels:"41",    rate:"5%",  lgOnly:true},
      {name:"Wooper",    method:"Surf",      levels:"5–25",  rate:"100%",frOnly:true},
      {name:"Marill",    method:"Surf",      levels:"5–25",  rate:"100%",lgOnly:true},
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
      {name:"Sun Stone",    hidden:false, note:"Southeastern corner (requires Strength)"},
      {name:"HP Up",        hidden:false, note:"Southwestern corner (requires Strength)"},
      {name:"Full Restore", hidden:false, note:"Southeast of Hiker Daryl (requires Strength)"},
    ],
    trainers:[
      {class:"Hiker",       name:"Daryl",  team:[{name:"Sudowoodo",level:50}]},
      {class:"PokéManiac",  name:"Hector", team:[{name:"Rhyhorn",level:49},{name:"Kangaskhan",level:49}]},
      {class:"Ruin Maniac", name:"Stanly", team:[{name:"Graveler",level:48},{name:"Onix",level:48},{name:"Graveler",level:48}]},
      {class:"Ruin Maniac", name:"Foster", team:[{name:"Golem",level:50}]},
      {class:"Ruin Maniac", name:"Larry",  team:[{name:"Machoke",level:49},{name:"Machoke",level:49}]},
    ] },

  { part:"Part 18", id:"dotted-hole", name:"Dotted Hole",
    note:"Puzzle dungeon on Six Island — solve the Braille-inscribed doors on each of four floors with the right directional push to reach the pedestal. Gideon steals the Sapphire the moment you claim it.",
    pokemon:[],
    items:[
      {name:"Sapphire", hidden:false, note:"At the bottom of the puzzle — stolen by Gideon immediately; recovered later from the Rocket Warehouse", warn:true},
    ],
    trainers:[] },

// ─── PART 19 — Five Island · Seven Island ────────────────────────────────────

  { part:"Part 19", id:"five-isle-meadow", name:"Five Isle Meadow",
    note:"Grassy meadow on Five Island north of the Rocket Warehouse. Sentret and Hoppip appear at a high rate.",
    pokemon:[
      {name:"Sentret",    method:"Grass",     levels:"10–15", rate:"30%"},
      {name:"Pidgey",     method:"Grass",     levels:"44",    rate:"20%"},
      {name:"Pidgeotto",  method:"Grass",     levels:"48–50", rate:"15%"},
      {name:"Hoppip",     method:"Grass",     levels:"10–15", rate:"15%"},
      {name:"Meowth",     method:"Grass",     levels:"41",    rate:"10%"},
      {name:"Persian",    method:"Grass",     levels:"47–50", rate:"5%"},
      {name:"Psyduck",    method:"Grass",     levels:"41",    rate:"5%",  frOnly:true},
      {name:"Slowpoke",   method:"Grass",     levels:"41",    rate:"5%",  lgOnly:true},
      {name:"Tentacool",  method:"Surf",      levels:"5–40",  rate:"65%"},
      {name:"Hoppip",     method:"Surf",      levels:"5–15",  rate:"30%"},
      {name:"Tentacruel", method:"Surf",      levels:"35–40", rate:"5%"},
      {name:"Magikarp",   method:"Old Rod",   levels:"5",     rate:"100%"},
      {name:"Horsea",     method:"Good Rod",  levels:"5–15",  rate:"80%", frOnly:true},
      {name:"Krabby",     method:"Good Rod",  levels:"5–15",  rate:"80%", lgOnly:true},
      {name:"Magikarp",   method:"Good Rod",  levels:"5–15",  rate:"20%"},
      {name:"Horsea",     method:"Super Rod", levels:"15–25", rate:"40%", frOnly:true},
      {name:"Qwilfish",   method:"Super Rod", levels:"15–25", rate:"40%", frOnly:true},
      {name:"Krabby",     method:"Super Rod", levels:"15–25", rate:"40%", lgOnly:true},
      {name:"Remoraid",   method:"Super Rod", levels:"15–25", rate:"40%", lgOnly:true},
      {name:"Gyarados",   method:"Super Rod", levels:"15–25", rate:"15%"},
      {name:"Seadra",     method:"Super Rod", levels:"25–35", rate:"4%",  frOnly:true},
      {name:"Kingler",    method:"Super Rod", levels:"25–35", rate:"4%",  lgOnly:true},
      {name:"Psyduck",    method:"Super Rod", levels:"25–35", rate:"1%",  frOnly:true},
      {name:"Slowpoke",   method:"Super Rod", levels:"25–35", rate:"1%",  lgOnly:true},
    ],
    items:[
      {name:"Max Potion", hidden:false, note:"Clearing north of the Rocket Warehouse (requires Cut)"},
      {name:"PP Up",      hidden:false, note:"Southwest of the Rocket Warehouse (requires Surf)"},
    ],
    trainers:[
      {class:"Team Rocket Grunt",name:"Grunt 1",team:[{name:"Rattata",level:48},{name:"Grimer",level:48},{name:"Muk",level:48}]},
      {class:"Team Rocket Grunt",name:"Grunt 2",team:[{name:"Ekans",level:48},{name:"Gloom",level:48},{name:"Gloom",level:48}]},
      {class:"Team Rocket Grunt",name:"Grunt 3",team:[{name:"Koffing",level:49},{name:"Weezing",level:49}]},
    ] },

  { part:"Part 19", id:"rocket-warehouse", name:"Rocket Warehouse",
    note:"Team Rocket's secret base on Five Island. Defeat Admins Ariana and Archer, then Scientist Gideon, to recover the stolen Sapphire and deliver it to Celio.",
    pokemon:[],
    items:[
      {name:"Up-Grade",         hidden:false, note:"Northwest room"},
      {name:"Pearl",            hidden:false, note:"West-central edge of the maze"},
      {name:"Net Ball",         hidden:true,  note:"Lone box west of maze center"},
      {name:"Big Pearl",        hidden:false, note:"South-central edge of the maze"},
      {name:"TM36 Sludge Bomb", hidden:false, note:"North-central room, on a table"},
      {name:"Nest Ball",        hidden:true,  note:"Northeast room, on a box"},
      {name:"Sapphire",         hidden:false, note:"Recovered from Gideon in the northeast room — deliver to Celio on One Island", warn:true},
    ],
    trainers:[
      {class:"Team Rocket Grunt",name:"Grunt 1",team:[{name:"Houndour",level:49},{name:"Houndour",level:49}]},
      {class:"Team Rocket Grunt",name:"Grunt 2",team:[{name:"Machop",level:48},{name:"Machop",level:48},{name:"Machoke",level:48}]},
      {class:"Team Rocket Grunt",name:"Grunt 3",team:[{name:"Hypno",level:49},{name:"Hypno",level:49}]},
      {class:"Rocket Admin",name:"Ariana",team:[{name:"Muk",level:52},{name:"Arbok",level:53},{name:"Vileplume",level:54}]},
      {class:"Rocket Admin",name:"Archer", team:[{name:"Golbat",level:53},{name:"Weezing",level:54},{name:"Houndoom",level:55}]},
      {class:"Scientist",  name:"Gideon", team:[{name:"Voltorb",level:46},{name:"Electrode",level:46},{name:"Magnemite",level:46},{name:"Magneton",level:46},{name:"Porygon",level:46}]},
    ] },

  { part:"Part 19", id:"memorial-pillar", name:"Memorial Pillar",
    note:"Small island chain between Five Island and Resort Gorgeous. Bird Keeper trainers roam the northern island. Metal Coat is found on the southern island.",
    pokemon:[
      {name:"Hoppip",     method:"Grass",     levels:"6–16",  rate:"100%"},
      {name:"Tentacool",  method:"Surf",      levels:"5–40",  rate:"65%"},
      {name:"Hoppip",     method:"Surf",      levels:"5–15",  rate:"30%"},
      {name:"Tentacruel", method:"Surf",      levels:"35–40", rate:"5%"},
      {name:"Magikarp",   method:"Old Rod",   levels:"5",     rate:"100%"},
      {name:"Horsea",     method:"Good Rod",  levels:"5–15",  rate:"80%", frOnly:true},
      {name:"Krabby",     method:"Good Rod",  levels:"5–15",  rate:"80%", lgOnly:true},
      {name:"Magikarp",   method:"Good Rod",  levels:"5–15",  rate:"20%"},
      {name:"Horsea",     method:"Super Rod", levels:"15–25", rate:"40%", frOnly:true},
      {name:"Qwilfish",   method:"Super Rod", levels:"15–25", rate:"40%", frOnly:true},
      {name:"Krabby",     method:"Super Rod", levels:"15–25", rate:"40%", lgOnly:true},
      {name:"Remoraid",   method:"Super Rod", levels:"15–25", rate:"40%", lgOnly:true},
      {name:"Gyarados",   method:"Super Rod", levels:"15–25", rate:"15%"},
      {name:"Seadra",     method:"Super Rod", levels:"25–35", rate:"4%",  frOnly:true},
      {name:"Kingler",    method:"Super Rod", levels:"25–35", rate:"4%",  lgOnly:true},
      {name:"Psyduck",    method:"Super Rod", levels:"25–35", rate:"1%",  frOnly:true},
      {name:"Slowpoke",   method:"Super Rod", levels:"25–35", rate:"1%",  lgOnly:true},
    ],
    items:[
      {name:"Razz Berry",  hidden:true,  note:"Northern island, east of Bird Keeper Milo"},
      {name:"Sitrus Berry",hidden:true,  note:"Northern island, southeast of Bird Keeper Chaz"},
      {name:"Bluk Berry",  hidden:true,  note:"Northern island, south of Bird Keeper Chaz"},
      {name:"TM42 Facade", hidden:false, note:"Southern island — given by NPC after sharing Lemonade"},
      {name:"Metal Coat",  hidden:false, note:"Southern island, grassy area southwest of the memorial"},
      {name:"Big Pearl",   hidden:true,  note:"Southern island, southwest beach"},
    ],
    trainers:[
      {class:"Bird Keeper",name:"Milo",  team:[{name:"Pidgey",level:47},{name:"Pidgeotto",level:49}]},
      {class:"Bird Keeper",name:"Chaz",  team:[{name:"Spearow",level:47},{name:"Fearow",level:49}]},
      {class:"Bird Keeper",name:"Harold",team:[{name:"Hoothoot",level:47},{name:"Noctowl",level:49}]},
    ] },

  { part:"Part 19", id:"water-labyrinth", name:"Water Labyrinth",
    note:"Maze of water channels on Five Island. Pokémon Breeder Alize gives a Togepi Egg if your lead Pokémon has maximum friendship.",
    pokemon:[
      {name:"Tentacool",  method:"Surf",     levels:"5–40",  rate:"65%"},
      {name:"Hoppip",     method:"Surf",     levels:"5–15",  rate:"30%"},
      {name:"Tentacruel", method:"Surf",     levels:"35–40", rate:"5%"},
      {name:"Magikarp",   method:"Old Rod",  levels:"5",     rate:"100%"},
      {name:"Horsea",     method:"Good Rod", levels:"5–15",  rate:"80%", frOnly:true},
      {name:"Krabby",     method:"Good Rod", levels:"5–15",  rate:"80%", lgOnly:true},
      {name:"Magikarp",   method:"Good Rod", levels:"5–15",  rate:"20%"},
      {name:"Togepi",     method:"Gift",     levels:"5",     note:"Egg from Breeder Alize — requires max friendship on lead Pokémon"},
    ],
    items:[],
    trainers:[
      {class:"Pokémon Breeder",name:"Alize",team:[{name:"Pikachu",level:48},{name:"Clefairy",level:48},{name:"Marill",level:48}]},
    ] },

  { part:"Part 19", id:"resort-gorgeous", name:"Resort Gorgeous",
    note:"Exclusive resort on Five Island. Lady Selphy is hiding in Lost Cave — find her and escort her back here for rare item rewards. Painters train with Smeargle.",
    pokemon:[
      {name:"Tentacool",  method:"Surf",     levels:"5–40",  rate:"65%"},
      {name:"Hoppip",     method:"Surf",     levels:"5–15",  rate:"30%"},
      {name:"Tentacruel", method:"Surf",     levels:"35–40", rate:"5%"},
      {name:"Magikarp",   method:"Old Rod",  levels:"5",     rate:"100%"},
      {name:"Horsea",     method:"Good Rod", levels:"5–15",  rate:"80%", frOnly:true},
      {name:"Krabby",     method:"Good Rod", levels:"5–15",  rate:"80%", lgOnly:true},
      {name:"Magikarp",   method:"Good Rod", levels:"5–15",  rate:"20%"},
    ],
    items:[
      {name:"Nest Ball",  hidden:true,  note:"Western island, west of a rock (recurring)"},
      {name:"Stardust",   hidden:true,  note:"Center island, northwest area — two patches (recurring)"},
      {name:"Star Piece", hidden:true,  note:"South of Selphy's house (recurring)"},
    ],
    trainers:[
      {class:"Painter",   name:"Rayna",   team:[{name:"Smeargle",level:50}]},
      {class:"Lady",      name:"Jacki",   team:[{name:"Hoppip",level:48},{name:"Skiploom",level:50}]},
      {class:"Painter",   name:"Celina",  team:[{name:"Smeargle",level:50}]},
      {class:"Lady",      name:"Gillian", team:[{name:"Mareep",level:47},{name:"Mareep",level:48},{name:"Flaaffy",level:49}]},
      {class:"Youngster", name:"Destin",  team:[{name:"Raticate",level:48},{name:"Pidgeotto",level:48}]},
      {class:"Swimmer♂",  name:"Toby",   team:[{name:"Poliwhirl",level:48},{name:"Tentacool",level:48},{name:"Tentacruel",level:48}]},
    ] },

  { part:"Part 19", id:"lost-cave", name:"Lost Cave",
    note:"Fourteen-room maze cave south of Resort Gorgeous on Five Island. Navigate through the rooms to find Lady Selphy. Ghost-type Pokémon throughout. Murkrow appears in FireRed; Misdreavus in LeafGreen.",
    pokemon:[
      {name:"Gastly",     method:"Cave", levels:"25–35", rate:"35%"},
      {name:"Zubat",      method:"Cave", levels:"25–35", rate:"25%"},
      {name:"Haunter",    method:"Cave", levels:"35–45", rate:"21%"},
      {name:"Golbat",     method:"Cave", levels:"35–40", rate:"14%"},
      {name:"Murkrow",    method:"Cave", levels:"28–32", rate:"5%",  frOnly:true},
      {name:"Misdreavus", method:"Cave", levels:"23–27", rate:"5%",  lgOnly:true},
    ],
    items:[],
    trainers:[] },

  { part:"Part 19", id:"seven-island", name:"Seven Island",
    note:"Navel Rock Island — hub for Seven Island. Sevault Canyon, Tanoby Key, and Trainer Tower are all accessed from here.",
    pokemon:[],
    items:[],
    trainers:[] },

  { part:"Part 19", id:"canyon-entrance", name:"Canyon Entrance",
    note:"Gateway route to Sevault Canyon on Seven Island. Phanpy appears in the grass.",
    pokemon:[
      {name:"Spearow",  method:"Grass", levels:"44",    rate:"20%"},
      {name:"Sentret",  method:"Grass", levels:"10–15", rate:"30%"},
      {name:"Phanpy",   method:"Grass", levels:"10–15", rate:"15%"},
      {name:"Fearow",   method:"Grass", levels:"48–50", rate:"15%"},
      {name:"Meowth",   method:"Grass", levels:"41",    rate:"10%"},
      {name:"Persian",  method:"Grass", levels:"47–50", rate:"5%"},
      {name:"Psyduck",  method:"Grass", levels:"41",    rate:"5%",  frOnly:true},
      {name:"Slowpoke", method:"Grass", levels:"41",    rate:"5%",  lgOnly:true},
    ],
    items:[
      {name:"Rawst Berry", hidden:true, note:"Northeast of Young Couple Eve & Jon"},
    ],
    trainers:[
      {class:"Aroma Lady",    name:"Miah",    team:[{name:"Bellossom",level:50},{name:"Bellossom",level:50}]},
      {class:"Juggler",       name:"Mason",   team:[{name:"Voltorb",level:47},{name:"Voltorb",level:47},{name:"Pineco",level:47},{name:"Pineco",level:47}]},
      {class:"Pokémon Ranger",name:"Nicolas", team:[{name:"Weepinbell",level:51},{name:"Victreebel",level:51}]},
      {class:"Pokémon Ranger",name:"Madeline",team:[{name:"Gloom",level:51},{name:"Vileplume",level:51}]},
      {class:"Young Couple",  name:"Eve & Jon",team:[{name:"Golduck",level:50},{name:"Psyduck",level:50}]},
    ] },

  { part:"Part 19", id:"sevault-canyon", name:"Sevault Canyon",
    note:"Deep canyon on Seven Island with rare Johto Pokémon. Skarmory is FireRed-only. Larvitar is the rarest encounter. Strength and Rock Smash open shortcuts.",
    pokemon:[
      {name:"Geodude",  method:"Grass",      levels:"46",    rate:"20%"},
      {name:"Fearow",   method:"Grass",      levels:"50",    rate:"10% FR / 15% LG"},
      {name:"Phanpy",   method:"Grass",      levels:"15–20", rate:"20%"},
      {name:"Cubone",   method:"Grass",      levels:"46",    rate:"10%"},
      {name:"Marowak",  method:"Grass",      levels:"52",    rate:"10%"},
      {name:"Meowth",   method:"Grass",      levels:"43",    rate:"10%"},
      {name:"Onix",     method:"Grass",      levels:"54",    rate:"5%"},
      {name:"Skarmory", method:"Grass",      levels:"30",    rate:"5%",  frOnly:true},
      {name:"Larvitar", method:"Grass",      levels:"15–20", rate:"5%"},
      {name:"Persian",  method:"Grass",      levels:"49–52", rate:"5%"},
      {name:"Geodude",  method:"Rock Smash", levels:"25–40", rate:"65%"},
      {name:"Graveler", method:"Rock Smash", levels:"30–50", rate:"35%"},
    ],
    items:[
      {name:"Nugget",      hidden:false, note:"Southeast of the Tanoby Key entrance"},
      {name:"Max Elixir",  hidden:false, note:"Tall grass halfway through the canyon"},
      {name:"King's Rock", hidden:false, note:"Behind three boulders (requires Strength and Rock Smash)"},
      {name:"Lucky Punch", hidden:false, note:"Inside the Chansey Dance house"},
      {name:"Cheri Berry", hidden:true,  note:"South of the Chansey Dance house"},
    ],
    trainers:[
      {class:"Cool Couple",   name:"Lex & Nya", team:[{name:"Tauros",level:52},{name:"Miltank",level:52}]},
      {class:"Tamer",         name:"Evan",      team:[{name:"Sandslash",level:48},{name:"Lickitung",level:48},{name:"Ursaring",level:49}]},
      {class:"Pokémon Ranger",name:"Jackson",   team:[{name:"Tangela",level:49},{name:"Exeggcute",level:49},{name:"Exeggutor",level:49}]},
      {class:"Pokémon Ranger",name:"Katelyn",   team:[{name:"Chansey",level:52}]},
      {class:"Crush Girl",    name:"Cyndy",     team:[{name:"Primeape",level:48},{name:"Hitmontop",level:48},{name:"Machoke",level:48}]},
      {class:"Cooltrainer",   name:"Leroy",     team:[{name:"Rhydon",level:47},{name:"Slowbro",level:48},{name:"Machoke",level:48},{name:"Kangaskhan",level:47},{name:"Ursaring",level:50}]},
      {class:"Cooltrainer",   name:"Michelle",  team:[{name:"Persian",level:47},{name:"Dewgong",level:47},{name:"Ninetales",level:48},{name:"Rapidash",level:48},{name:"Girafarig",level:50}]},
    ] },

  { part:"Part 19", id:"tanoby-key", name:"Tanoby Key",
    note:"Small puzzle area at the base of Sevault Canyon. Push seven boulders into the holes using Strength to unlock the Tanoby Chambers across the sea.",
    pokemon:[],
    items:[],
    trainers:[] },

  { part:"Part 19", id:"tanoby-ruins", name:"Tanoby Ruins",
    note:"Seven chambers (Monean · Liptoo · Weepth · Dilford · Scufib · Rixy · Viapois) scattered across the sea south of Seven Island. All 26 Unown letter forms plus ! are distributed across the chambers. Requires completing the Tanoby Key puzzle first.",
    pokemon:[
      {name:"Unown", method:"Cave", levels:"25", rate:"1–99%", note:"All 26 letter forms + ! distributed across the seven chambers"},
    ],
    items:[],
    trainers:[] },

  { part:"Part 19", id:"trainer-tower", name:"Trainer Tower",
    note:"Challenge facility on Seven Island with four modes: Single, Double, Knockout, and Mixed. All trainer Pokémon are scaled to the player's party level. Surf the waters nearby to find Mantine. Complete each mode for held-item prizes.",
    pokemon:[
      {name:"Tentacool",  method:"Surf", levels:"5–40",  rate:"60%"},
      {name:"Tentacruel", method:"Surf", levels:"35–40", rate:"35%"},
      {name:"Mantine",    method:"Surf", levels:"5–40",  rate:"5%",  lgOnly:true},
    ],
    items:[
      {name:"Up-Grade",     hidden:false, note:"Single mode completion reward"},
      {name:"Dragon Scale", hidden:false, note:"Double mode completion reward"},
      {name:"Metal Coat",   hidden:false, note:"Knockout mode completion reward"},
      {name:"King's Rock",  hidden:false, note:"Mixed mode completion reward"},
      {name:"Nanab Berry",  hidden:true,  note:"Exterior, near the entrance"},
      {name:"Pearl",        hidden:true,  note:"Exterior (recurring)"},
      {name:"Big Pearl",    hidden:true,  note:"Exterior (recurring)"},
    ],
    trainers:[] },

// ─── PART 20 — Cerulean Cave · Indigo Plateau Round 2 ────────────────────────

  { part:"Part 20", id:"cerulean-cave", name:"Cerulean Cave",
    note:"Unlocked after becoming Champion. Three floors packed with high-level Pokémon including Ditto, Wobbuffet, and Kadabra. Mewtwo waits at the deepest point of B1F.",
    floors:[
      { label:"1F",
        pokemon:[
          {name:"Parasect",  method:"Cave",       levels:"49–58", rate:"25%"},
          {name:"Magneton",  method:"Cave",       levels:"49",    rate:"20%"},
          {name:"Golbat",    method:"Cave",       levels:"46–55", rate:"14%"},
          {name:"Primeape",  method:"Cave",       levels:"52–61", rate:"11%"},
          {name:"Ditto",     method:"Cave",       levels:"52–61", rate:"11%"},
          {name:"Machoke",   method:"Cave",       levels:"46",    rate:"10%"},
          {name:"Electrode", method:"Cave",       levels:"58",    rate:"5%"},
          {name:"Wobbuffet", method:"Cave",       levels:"55",    rate:"4%"},
          {name:"Psyduck",   method:"Surf",       levels:"30–50", rate:"65%", frOnly:true},
          {name:"Slowpoke",  method:"Surf",       levels:"30–50", rate:"65%", lgOnly:true},
          {name:"Golduck",   method:"Surf",       levels:"40–55", rate:"35%", frOnly:true},
          {name:"Slowbro",   method:"Surf",       levels:"40–55", rate:"35%", lgOnly:true},
          {name:"Magikarp",  method:"Old Rod",    levels:"5",     rate:"100%"},
          {name:"Poliwag",   method:"Good Rod",   levels:"5–15",  rate:"60%"},
          {name:"Goldeen",   method:"Good Rod",   levels:"5–15",  rate:"20%"},
          {name:"Magikarp",  method:"Good Rod",   levels:"5–15",  rate:"20%"},
          {name:"Poliwag",   method:"Super Rod",  levels:"15–25", rate:"40%"},
          {name:"Poliwhirl", method:"Super Rod",  levels:"20–30", rate:"40%"},
          {name:"Gyarados",  method:"Super Rod",  levels:"15–25", rate:"15%"},
          {name:"Psyduck",   method:"Super Rod",  levels:"15–35", rate:"5%",  frOnly:true},
          {name:"Slowpoke",  method:"Super Rod",  levels:"15–35", rate:"5%",  lgOnly:true},
          {name:"Geodude",   method:"Rock Smash", levels:"30–50", rate:"65%"},
          {name:"Graveler",  method:"Rock Smash", levels:"40–55", rate:"35%"},
        ],
        items:[
          {name:"Nugget",      hidden:false, note:"Western ridge, north side"},
          {name:"Ultra Ball",  hidden:true,  note:"Two steps east of the north ladder on the western ridge"},
          {name:"Max Elixir",  hidden:false, note:"Middle ridge, northwest of the eastern ladder"},
          {name:"Full Restore",hidden:false, note:"Southwest area"},
        ],
        trainers:[] },
      { label:"2F",
        pokemon:[
          {name:"Golbat",    method:"Cave",       levels:"49–58", rate:"25%"},
          {name:"Machoke",   method:"Cave",       levels:"49",    rate:"20%"},
          {name:"Parasect",  method:"Cave",       levels:"52–61", rate:"14%"},
          {name:"Kadabra",   method:"Cave",       levels:"55–64", rate:"11%"},
          {name:"Ditto",     method:"Cave",       levels:"55–64", rate:"11%"},
          {name:"Magneton",  method:"Cave",       levels:"52",    rate:"10%"},
          {name:"Wobbuffet", method:"Cave",       levels:"58",    rate:"5%"},
          {name:"Electrode", method:"Cave",       levels:"61",    rate:"4%"},
          {name:"Geodude",   method:"Rock Smash", levels:"35–55", rate:"65%"},
          {name:"Graveler",  method:"Rock Smash", levels:"45–60", rate:"35%"},
        ],
        items:[
          {name:"Full Restore",hidden:false, note:"Northeast section (via northeast 1F ladder, requires Rock Smash)"},
          {name:"PP Up",       hidden:false, note:"Southwest section (via southwest 1F ladder, requires Rock Smash)"},
          {name:"Ultra Ball",  hidden:false, note:"East section (via east 1F ladder, requires Rock Smash)"},
        ],
        trainers:[] },
      { label:"B1F",
        pokemon:[
          {name:"Kadabra",   method:"Cave",       levels:"58–67", rate:"25%"},
          {name:"Ditto",     method:"Cave",       levels:"58–67", rate:"25%"},
          {name:"Parasect",  method:"Cave",       levels:"55–64", rate:"14%"},
          {name:"Golbat",    method:"Cave",       levels:"52–61", rate:"11%"},
          {name:"Machoke",   method:"Cave",       levels:"52",    rate:"10%"},
          {name:"Magneton",  method:"Cave",       levels:"55",    rate:"10%"},
          {name:"Electrode", method:"Cave",       levels:"64",    rate:"4%"},
          {name:"Wobbuffet", method:"Cave",       levels:"61",    rate:"1%"},
          {name:"Mewtwo",    method:"Cave",       levels:"70",    rate:"—",   warn:true, note:"One-time encounter at the deepest point of B1F — save before approaching"},
          {name:"Psyduck",   method:"Surf",       levels:"40–60", rate:"65%", frOnly:true},
          {name:"Slowpoke",  method:"Surf",       levels:"40–60", rate:"65%", lgOnly:true},
          {name:"Golduck",   method:"Surf",       levels:"50–65", rate:"35%", frOnly:true},
          {name:"Slowbro",   method:"Surf",       levels:"50–65", rate:"35%", lgOnly:true},
          {name:"Magikarp",  method:"Old Rod",    levels:"5",     rate:"100%"},
          {name:"Poliwag",   method:"Good Rod",   levels:"5–15",  rate:"60%"},
          {name:"Goldeen",   method:"Good Rod",   levels:"5–15",  rate:"20%"},
          {name:"Magikarp",  method:"Good Rod",   levels:"5–15",  rate:"20%"},
          {name:"Poliwag",   method:"Super Rod",  levels:"15–25", rate:"40%"},
          {name:"Poliwhirl", method:"Super Rod",  levels:"20–30", rate:"40%"},
          {name:"Gyarados",  method:"Super Rod",  levels:"15–35", rate:"16%"},
          {name:"Psyduck",   method:"Super Rod",  levels:"15–25", rate:"4%",  frOnly:true},
          {name:"Slowpoke",  method:"Super Rod",  levels:"15–25", rate:"4%",  lgOnly:true},
          {name:"Geodude",   method:"Rock Smash", levels:"40–60", rate:"65%"},
          {name:"Graveler",  method:"Rock Smash", levels:"50–65", rate:"35%"},
        ],
        items:[
          {name:"Max Revive", hidden:false, note:"Northeast corner"},
          {name:"Ultra Ball", hidden:false, note:"Larger central ridge"},
        ],
        trainers:[] },
    ] },

  { part:"Part 20", id:"indigo-plateau-r2", name:"Indigo Plateau — Round 2",
    note:"Elite Four rematch, available after becoming Champion. All trainers field significantly stronger Pokémon including Johto species. Rematches can be repeated indefinitely.",
    pokemon:[],
    items:[],
    trainers:[
      {class:"Elite Four",name:"Lorelei",note:"Ice-type specialist — Round 2",
        team:[{name:"Dewgong",level:64},{name:"Cloyster",level:63},{name:"Piloswine",level:63},{name:"Jynx",level:66},{name:"Lapras",level:66}]},
      {class:"Elite Four",name:"Bruno",  note:"Fighting-type specialist — Round 2",
        team:[{name:"Steelix",level:65},{name:"Hitmonchan",level:65},{name:"Hitmonlee",level:65},{name:"Steelix",level:66},{name:"Machamp",level:68}]},
      {class:"Elite Four",name:"Agatha", note:"Ghost-type specialist — Round 2",
        team:[{name:"Gengar",level:66},{name:"Crobat",level:66},{name:"Misdreavus",level:65},{name:"Arbok",level:68},{name:"Gengar",level:70}]},
      {class:"Elite Four",name:"Lance",  note:"Dragon-type specialist — Round 2",
        team:[{name:"Gyarados",level:68},{name:"Dragonite",level:66},{name:"Kingdra",level:66},{name:"Aerodactyl",level:70},{name:"Dragonite",level:72}]},
      {class:"Rival",name:"Blue",note:"Champion Round 2 — vs Bulbasaur starter",
        team:[{name:"Heracross",level:72},{name:"Alakazam",level:73},{name:"Tyranitar",level:72},{name:"Exeggutor",level:72},{name:"Gyarados",level:72},{name:"Charizard",level:75}]},
      {class:"Rival",name:"Blue",note:"Champion Round 2 — vs Charmander starter",
        team:[{name:"Heracross",level:72},{name:"Alakazam",level:73},{name:"Tyranitar",level:72},{name:"Exeggutor",level:72},{name:"Gyarados",level:72},{name:"Blastoise",level:75}]},
      {class:"Rival",name:"Blue",note:"Champion Round 2 — vs Squirtle starter",
        team:[{name:"Heracross",level:72},{name:"Alakazam",level:73},{name:"Tyranitar",level:72},{name:"Exeggutor",level:72},{name:"Gyarados",level:72},{name:"Venusaur",level:75}]},
    ] },

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

// ─── EVOLUTION CHAINS ─────────────────────────────────────────────────────────
// Each entry is either a linear array ["Stage1","Stage2",...] or a branch object
// { pre:["Base"], post:[["Branch1"],["Branch2"],...] } for Eevee-style splits.
// EVO_MAP maps every Pokémon name → its chain entry for O(1) lookup in DexDetail.
const _EVO_CHAINS_RAW = [
  // No evolution (standalone)
  ["Farfetch'd"],["Onix"],["Hitmonlee"],["Hitmonchan"],["Lickitung"],["Chansey"],
  ["Tangela"],["Kangaskhan"],["Mr. Mime"],["Scyther"],["Jynx"],["Electabuzz"],
  ["Magmar"],["Pinsir"],["Tauros"],["Lapras"],["Ditto"],["Porygon"],
  ["Aerodactyl"],["Snorlax"],["Articuno"],["Zapdos"],["Moltres"],["Mewtwo"],["Mew"],
  // Two-stage
  ["Rattata","Raticate"],
  ["Spearow","Fearow"],
  ["Ekans","Arbok"],
  ["Pikachu","Raichu"],
  ["Sandshrew","Sandslash"],
  ["Clefairy","Clefable"],
  ["Vulpix","Ninetales"],
  ["Jigglypuff","Wigglytuff"],
  ["Zubat","Golbat"],
  ["Paras","Parasect"],
  ["Venonat","Venomoth"],
  ["Diglett","Dugtrio"],
  ["Meowth","Persian"],
  ["Psyduck","Golduck"],
  ["Mankey","Primeape"],
  ["Growlithe","Arcanine"],
  ["Ponyta","Rapidash"],
  ["Slowpoke","Slowbro"],
  ["Magnemite","Magneton"],
  ["Doduo","Dodrio"],
  ["Seel","Dewgong"],
  ["Grimer","Muk"],
  ["Shellder","Cloyster"],
  ["Drowzee","Hypno"],
  ["Krabby","Kingler"],
  ["Voltorb","Electrode"],
  ["Exeggcute","Exeggutor"],
  ["Cubone","Marowak"],
  ["Koffing","Weezing"],
  ["Rhyhorn","Rhydon"],
  ["Horsea","Seadra"],
  ["Goldeen","Seaking"],
  ["Staryu","Starmie"],
  ["Magikarp","Gyarados"],
  ["Omanyte","Omastar"],
  ["Kabuto","Kabutops"],
  ["Dratini","Dragonair","Dragonite"],
  // Three-stage
  ["Bulbasaur","Ivysaur","Venusaur"],
  ["Charmander","Charmeleon","Charizard"],
  ["Squirtle","Wartortle","Blastoise"],
  ["Caterpie","Metapod","Butterfree"],
  ["Weedle","Kakuna","Beedrill"],
  ["Pidgey","Pidgeotto","Pidgeot"],
  ["Nidoran♀","Nidorina","Nidoqueen"],
  ["Nidoran♂","Nidorino","Nidoking"],
  ["Oddish","Gloom","Vileplume"],
  ["Poliwag","Poliwhirl","Poliwrath"],
  ["Abra","Kadabra","Alakazam"],
  ["Machop","Machoke","Machamp"],
  ["Bellsprout","Weepinbell","Victreebel"],
  ["Tentacool","Tentacruel"],
  ["Geodude","Graveler","Golem"],
  ["Gastly","Haunter","Gengar"],
  // Branching
  { pre:["Eevee"], post:[["Vaporeon"],["Jolteon"],["Flareon"]] },
];
const EVO_MAP = {};
for (const chain of _EVO_CHAINS_RAW) {
  if (Array.isArray(chain)) {
    for (const name of chain) EVO_MAP[name] = chain;
  } else {
    for (const name of chain.pre) EVO_MAP[name] = chain;
    for (const branch of chain.post) for (const name of branch) EVO_MAP[name] = chain;
  }
}

// ─── LEARNSETS ────────────────────────────────────────────────────────────────
// Gen III FRLG level-up moves only. Source: Bulbapedia /Generation_III_learnset.
// Level-1 entries are inherited moves (available via Move Reminder after evolution).
const LEARNSETS = {
  "Bulbasaur":   [{lv:1,move:"Tackle"},{lv:4,move:"Growl"},{lv:7,move:"Leech Seed"},{lv:10,move:"Vine Whip"},{lv:15,move:"PoisonPowder"},{lv:15,move:"Sleep Powder"},{lv:20,move:"Razor Leaf"},{lv:25,move:"Sweet Scent"},{lv:32,move:"Growth"},{lv:39,move:"Synthesis"},{lv:46,move:"SolarBeam"}],
  "Ivysaur":     [{lv:1,move:"Tackle"},{lv:1,move:"Growl"},{lv:1,move:"Leech Seed"},{lv:10,move:"Vine Whip"},{lv:15,move:"PoisonPowder"},{lv:15,move:"Sleep Powder"},{lv:22,move:"Razor Leaf"},{lv:29,move:"Sweet Scent"},{lv:38,move:"Growth"},{lv:47,move:"Synthesis"},{lv:56,move:"SolarBeam"}],
  "Venusaur":    [{lv:1,move:"Tackle"},{lv:1,move:"Growl"},{lv:1,move:"Leech Seed"},{lv:1,move:"Vine Whip"},{lv:15,move:"PoisonPowder"},{lv:15,move:"Sleep Powder"},{lv:22,move:"Razor Leaf"},{lv:29,move:"Sweet Scent"},{lv:41,move:"Growth"},{lv:53,move:"Synthesis"},{lv:65,move:"SolarBeam"}],
  "Charmander":  [{lv:1,move:"Scratch"},{lv:1,move:"Growl"},{lv:7,move:"Ember"},{lv:13,move:"Metal Claw"},{lv:19,move:"SmokeScreen"},{lv:25,move:"Scary Face"},{lv:31,move:"Flamethrower"},{lv:37,move:"Slash"},{lv:43,move:"Dragon Rage"},{lv:49,move:"Fire Spin"}],
  "Charmeleon":  [{lv:1,move:"Scratch"},{lv:1,move:"Growl"},{lv:1,move:"Ember"},{lv:13,move:"Metal Claw"},{lv:20,move:"SmokeScreen"},{lv:27,move:"Scary Face"},{lv:34,move:"Flamethrower"},{lv:41,move:"Slash"},{lv:48,move:"Dragon Rage"},{lv:55,move:"Fire Spin"}],
  "Charizard":   [{lv:1,move:"Scratch"},{lv:1,move:"Growl"},{lv:1,move:"Ember"},{lv:1,move:"Metal Claw"},{lv:20,move:"SmokeScreen"},{lv:27,move:"Rage"},{lv:34,move:"Scary Face"},{lv:36,move:"Flamethrower"},{lv:36,move:"Wing Attack"},{lv:44,move:"Slash"},{lv:54,move:"Dragon Rage"},{lv:64,move:"Fire Spin"}],
  "Squirtle":    [{lv:1,move:"Tackle"},{lv:4,move:"Tail Whip"},{lv:7,move:"Bubble"},{lv:10,move:"Withdraw"},{lv:13,move:"Water Gun"},{lv:18,move:"Bite"},{lv:23,move:"Rapid Spin"},{lv:28,move:"Protect"},{lv:33,move:"Rain Dance"},{lv:40,move:"Skull Bash"},{lv:47,move:"Hydro Pump"}],
  "Wartortle":   [{lv:1,move:"Tackle"},{lv:1,move:"Tail Whip"},{lv:1,move:"Bubble"},{lv:10,move:"Withdraw"},{lv:13,move:"Water Gun"},{lv:19,move:"Bite"},{lv:25,move:"Rapid Spin"},{lv:31,move:"Protect"},{lv:37,move:"Rain Dance"},{lv:45,move:"Skull Bash"},{lv:53,move:"Hydro Pump"}],
  "Blastoise":   [{lv:1,move:"Tackle"},{lv:1,move:"Tail Whip"},{lv:1,move:"Bubble"},{lv:1,move:"Withdraw"},{lv:13,move:"Water Gun"},{lv:19,move:"Bite"},{lv:25,move:"Rapid Spin"},{lv:31,move:"Protect"},{lv:42,move:"Rain Dance"},{lv:55,move:"Skull Bash"},{lv:68,move:"Hydro Pump"}],
  "Caterpie":    [{lv:1,move:"Tackle"},{lv:1,move:"String Shot"}],
  "Metapod":     [{lv:1,move:"Harden"}],
  "Butterfree":  [{lv:1,move:"Confusion"},{lv:13,move:"PoisonPowder"},{lv:14,move:"Stun Spore"},{lv:15,move:"Sleep Powder"},{lv:18,move:"Supersonic"},{lv:23,move:"Whirlwind"},{lv:28,move:"Gust"},{lv:34,move:"Psybeam"},{lv:40,move:"Safeguard"},{lv:47,move:"Silver Wind"}],
  "Weedle":      [{lv:1,move:"Poison Sting"},{lv:1,move:"String Shot"}],
  "Kakuna":      [{lv:1,move:"Harden"}],
  "Beedrill":    [{lv:1,move:"Poison Sting"},{lv:1,move:"Fury Attack"},{lv:15,move:"Focus Energy"},{lv:20,move:"Twineedle"},{lv:25,move:"Rage"},{lv:30,move:"Pursuit"},{lv:35,move:"Pin Missile"},{lv:40,move:"Agility"},{lv:45,move:"Endeavor"}],
  "Pidgey":      [{lv:1,move:"Tackle"},{lv:5,move:"Sand-Attack"},{lv:9,move:"Gust"},{lv:13,move:"Quick Attack"},{lv:19,move:"Whirlwind"},{lv:25,move:"Wing Attack"},{lv:31,move:"FeatherDance"},{lv:39,move:"Agility"},{lv:47,move:"Mirror Move"}],
  "Pidgeotto":   [{lv:1,move:"Tackle"},{lv:1,move:"Sand-Attack"},{lv:1,move:"Gust"},{lv:13,move:"Quick Attack"},{lv:20,move:"Whirlwind"},{lv:27,move:"Wing Attack"},{lv:34,move:"FeatherDance"},{lv:43,move:"Agility"},{lv:52,move:"Mirror Move"}],
  "Pidgeot":     [{lv:1,move:"Tackle"},{lv:1,move:"Sand-Attack"},{lv:1,move:"Gust"},{lv:1,move:"Quick Attack"},{lv:20,move:"Whirlwind"},{lv:27,move:"Wing Attack"},{lv:34,move:"FeatherDance"},{lv:48,move:"Agility"},{lv:62,move:"Mirror Move"}],
  "Rattata":     [{lv:1,move:"Tackle"},{lv:1,move:"Tail Whip"},{lv:7,move:"Quick Attack"},{lv:13,move:"Hyper Fang"},{lv:20,move:"Focus Energy"},{lv:27,move:"Pursuit"},{lv:34,move:"Super Fang"},{lv:41,move:"Endeavor"}],
  "Raticate":    [{lv:1,move:"Tackle"},{lv:1,move:"Tail Whip"},{lv:1,move:"Quick Attack"},{lv:13,move:"Hyper Fang"},{lv:20,move:"Scary Face"},{lv:30,move:"Pursuit"},{lv:40,move:"Super Fang"},{lv:50,move:"Endeavor"}],
  "Spearow":     [{lv:1,move:"Peck"},{lv:1,move:"Growl"},{lv:7,move:"Leer"},{lv:13,move:"Fury Attack"},{lv:19,move:"Pursuit"},{lv:25,move:"Aerial Ace"},{lv:31,move:"Mirror Move"},{lv:37,move:"Drill Peck"},{lv:43,move:"Agility"}],
  "Fearow":      [{lv:1,move:"Peck"},{lv:1,move:"Growl"},{lv:1,move:"Leer"},{lv:1,move:"Fury Attack"},{lv:26,move:"Pursuit"},{lv:32,move:"Mirror Move"},{lv:40,move:"Drill Peck"},{lv:47,move:"Agility"}],
  "Ekans":       [{lv:1,move:"Wrap"},{lv:1,move:"Leer"},{lv:8,move:"Poison Sting"},{lv:13,move:"Bite"},{lv:20,move:"Glare"},{lv:25,move:"Screech"},{lv:32,move:"Acid"},{lv:37,move:"Stockpile"},{lv:37,move:"Swallow"},{lv:37,move:"Spit Up"},{lv:44,move:"Haze"}],
  "Arbok":       [{lv:1,move:"Wrap"},{lv:1,move:"Leer"},{lv:1,move:"Poison Sting"},{lv:1,move:"Bite"},{lv:20,move:"Glare"},{lv:28,move:"Screech"},{lv:38,move:"Acid"},{lv:46,move:"Stockpile"},{lv:46,move:"Swallow"},{lv:46,move:"Spit Up"},{lv:56,move:"Haze"}],
  "Pikachu":     [{lv:1,move:"ThunderShock"},{lv:1,move:"Growl"},{lv:6,move:"Tail Whip"},{lv:8,move:"Thunder Wave"},{lv:11,move:"Quick Attack"},{lv:15,move:"Double Team"},{lv:20,move:"Slam"},{lv:26,move:"Thunderbolt"},{lv:33,move:"Agility"},{lv:41,move:"Thunder"},{lv:50,move:"Light Screen"}],
  "Raichu":      [{lv:1,move:"ThunderShock"},{lv:1,move:"Tail Whip"},{lv:1,move:"Quick Attack"},{lv:1,move:"Thunderbolt"}],
  "Sandshrew":   [{lv:1,move:"Scratch"},{lv:6,move:"Defense Curl"},{lv:11,move:"Sand-Attack"},{lv:17,move:"Poison Sting"},{lv:23,move:"Slash"},{lv:30,move:"Swift"},{lv:37,move:"Fury Swipes"},{lv:45,move:"Sand Tomb"},{lv:53,move:"Sandstorm"}],
  "Sandslash":   [{lv:1,move:"Scratch"},{lv:1,move:"Defense Curl"},{lv:1,move:"Sand-Attack"},{lv:17,move:"Poison Sting"},{lv:24,move:"Slash"},{lv:33,move:"Swift"},{lv:42,move:"Fury Swipes"},{lv:52,move:"Sand Tomb"},{lv:62,move:"Sandstorm"}],
  "Nidoran♀":   [{lv:1,move:"Growl"},{lv:1,move:"Scratch"},{lv:8,move:"Tail Whip"},{lv:12,move:"Double Kick"},{lv:17,move:"Poison Sting"},{lv:20,move:"Bite"},{lv:23,move:"Helping Hand"},{lv:30,move:"Fury Swipes"},{lv:38,move:"Flatter"},{lv:47,move:"Crunch"}],
  "Nidorina":    [{lv:1,move:"Growl"},{lv:1,move:"Scratch"},{lv:8,move:"Tail Whip"},{lv:12,move:"Double Kick"},{lv:18,move:"Poison Sting"},{lv:22,move:"Bite"},{lv:26,move:"Helping Hand"},{lv:34,move:"Fury Swipes"},{lv:43,move:"Flatter"},{lv:53,move:"Crunch"}],
  "Nidoqueen":   [{lv:1,move:"Scratch"},{lv:1,move:"Tail Whip"},{lv:1,move:"Double Kick"},{lv:1,move:"Poison Sting"},{lv:23,move:"Body Slam"},{lv:43,move:"Superpower"}],
  "Nidoran♂":   [{lv:1,move:"Leer"},{lv:1,move:"Peck"},{lv:8,move:"Focus Energy"},{lv:12,move:"Double Kick"},{lv:17,move:"Poison Sting"},{lv:20,move:"Horn Attack"},{lv:23,move:"Helping Hand"},{lv:30,move:"Fury Attack"},{lv:38,move:"Flatter"},{lv:47,move:"Horn Drill"}],
  "Nidorino":    [{lv:1,move:"Leer"},{lv:1,move:"Peck"},{lv:8,move:"Focus Energy"},{lv:12,move:"Double Kick"},{lv:18,move:"Poison Sting"},{lv:22,move:"Horn Attack"},{lv:26,move:"Helping Hand"},{lv:34,move:"Fury Attack"},{lv:43,move:"Flatter"},{lv:53,move:"Horn Drill"}],
  "Nidoking":    [{lv:1,move:"Peck"},{lv:1,move:"Focus Energy"},{lv:1,move:"Double Kick"},{lv:1,move:"Poison Sting"},{lv:23,move:"Thrash"},{lv:43,move:"Megahorn"}],
  "Clefairy":    [{lv:1,move:"Pound"},{lv:1,move:"Growl"},{lv:5,move:"Encore"},{lv:9,move:"Sing"},{lv:13,move:"DoubleSlap"},{lv:17,move:"Follow Me"},{lv:21,move:"Minimize"},{lv:25,move:"Defense Curl"},{lv:29,move:"Metronome"},{lv:33,move:"Cosmic Power"},{lv:37,move:"Moonlight"},{lv:41,move:"Light Screen"},{lv:45,move:"Meteor Mash"}],
  "Clefable":    [{lv:1,move:"Sing"},{lv:1,move:"DoubleSlap"},{lv:1,move:"Minimize"},{lv:1,move:"Metronome"}],
  "Vulpix":      [{lv:1,move:"Ember"},{lv:5,move:"Tail Whip"},{lv:9,move:"Roar"},{lv:13,move:"Quick Attack"},{lv:17,move:"Will-O-Wisp"},{lv:21,move:"Confuse Ray"},{lv:25,move:"Imprison"},{lv:29,move:"Flamethrower"},{lv:33,move:"Safeguard"},{lv:37,move:"Grudge"},{lv:41,move:"Fire Spin"}],
  "Ninetales":   [{lv:1,move:"Ember"},{lv:1,move:"Quick Attack"},{lv:1,move:"Confuse Ray"},{lv:1,move:"Safeguard"},{lv:45,move:"Fire Spin"}],
  "Jigglypuff":  [{lv:1,move:"Sing"},{lv:4,move:"Defense Curl"},{lv:9,move:"Pound"},{lv:14,move:"Disable"},{lv:19,move:"Rollout"},{lv:24,move:"DoubleSlap"},{lv:29,move:"Rest"},{lv:34,move:"Body Slam"},{lv:39,move:"Mimic"},{lv:44,move:"Hyper Voice"},{lv:49,move:"Double-Edge"}],
  "Wigglytuff":  [{lv:1,move:"Sing"},{lv:1,move:"Disable"},{lv:1,move:"Defense Curl"},{lv:1,move:"DoubleSlap"}],
  "Zubat":       [{lv:1,move:"Leech Life"},{lv:6,move:"Supersonic"},{lv:6,move:"Astonish"},{lv:16,move:"Bite"},{lv:21,move:"Wing Attack"},{lv:26,move:"Confuse Ray"},{lv:36,move:"Air Cutter"},{lv:41,move:"Mean Look"},{lv:46,move:"Poison Fang"},{lv:46,move:"Haze"}],
  "Golbat":      [{lv:1,move:"Screech"},{lv:1,move:"Leech Life"},{lv:1,move:"Supersonic"},{lv:1,move:"Astonish"},{lv:16,move:"Bite"},{lv:21,move:"Wing Attack"},{lv:28,move:"Confuse Ray"},{lv:35,move:"Air Cutter"},{lv:42,move:"Mean Look"},{lv:49,move:"Poison Fang"},{lv:56,move:"Haze"}],
  "Oddish":      [{lv:1,move:"Absorb"},{lv:7,move:"Sweet Scent"},{lv:14,move:"PoisonPowder"},{lv:16,move:"Stun Spore"},{lv:18,move:"Sleep Powder"},{lv:23,move:"Acid"},{lv:32,move:"Moonlight"},{lv:39,move:"Petal Dance"}],
  "Gloom":       [{lv:1,move:"Absorb"},{lv:1,move:"Sweet Scent"},{lv:1,move:"PoisonPowder"},{lv:16,move:"Stun Spore"},{lv:18,move:"Sleep Powder"},{lv:24,move:"Acid"},{lv:35,move:"Moonlight"},{lv:44,move:"Petal Dance"}],
  "Vileplume":   [{lv:1,move:"Aromatherapy"},{lv:1,move:"Absorb"},{lv:1,move:"Mega Drain"},{lv:1,move:"Stun Spore"},{lv:44,move:"Petal Dance"}],
  "Paras":       [{lv:1,move:"Scratch"},{lv:7,move:"Stun Spore"},{lv:13,move:"PoisonPowder"},{lv:19,move:"Leech Life"},{lv:25,move:"Spore"},{lv:31,move:"Slash"},{lv:37,move:"Growth"},{lv:43,move:"Giga Drain"},{lv:49,move:"Aromatherapy"}],
  "Parasect":    [{lv:1,move:"Scratch"},{lv:1,move:"Stun Spore"},{lv:1,move:"PoisonPowder"},{lv:27,move:"Spore"},{lv:35,move:"Slash"},{lv:43,move:"Growth"},{lv:51,move:"Giga Drain"},{lv:59,move:"Aromatherapy"}],
  "Venonat":     [{lv:1,move:"Tackle"},{lv:1,move:"Disable"},{lv:1,move:"Foresight"},{lv:9,move:"Supersonic"},{lv:17,move:"Confusion"},{lv:20,move:"PoisonPowder"},{lv:25,move:"Leech Life"},{lv:28,move:"Stun Spore"},{lv:33,move:"Psybeam"},{lv:36,move:"Sleep Powder"},{lv:41,move:"Psychic"}],
  "Venomoth":    [{lv:1,move:"Silver Wind"},{lv:1,move:"Tackle"},{lv:1,move:"Disable"},{lv:1,move:"Foresight"},{lv:1,move:"Supersonic"},{lv:17,move:"Confusion"},{lv:20,move:"PoisonPowder"},{lv:25,move:"Leech Life"},{lv:28,move:"Stun Spore"},{lv:31,move:"Gust"},{lv:36,move:"Psybeam"},{lv:42,move:"Sleep Powder"},{lv:52,move:"Psychic"}],
  "Diglett":     [{lv:1,move:"Scratch"},{lv:1,move:"Sand-Attack"},{lv:5,move:"Growl"},{lv:21,move:"Fury Swipes"},{lv:25,move:"Mud-Slap"},{lv:33,move:"Slash"},{lv:41,move:"Earthquake"},{lv:49,move:"Fissure"}],
  "Dugtrio":     [{lv:1,move:"Tri Attack"},{lv:1,move:"Scratch"},{lv:1,move:"Sand-Attack"},{lv:1,move:"Growl"},{lv:9,move:"Magnitude"},{lv:17,move:"Dig"},{lv:21,move:"Fury Swipes"},{lv:25,move:"Mud-Slap"},{lv:26,move:"Sand Tomb"},{lv:38,move:"Slash"},{lv:51,move:"Earthquake"},{lv:64,move:"Fissure"}],
  "Meowth":      [{lv:1,move:"Scratch"},{lv:1,move:"Growl"},{lv:11,move:"Bite"},{lv:20,move:"Pay Day"},{lv:28,move:"Faint Attack"},{lv:35,move:"Screech"},{lv:41,move:"Fury Swipes"},{lv:46,move:"Slash"},{lv:50,move:"Fake Out"}],
  "Persian":     [{lv:1,move:"Scratch"},{lv:1,move:"Growl"},{lv:1,move:"Bite"},{lv:20,move:"Pay Day"},{lv:29,move:"Faint Attack"},{lv:38,move:"Screech"},{lv:46,move:"Fury Swipes"},{lv:53,move:"Slash"},{lv:59,move:"Fake Out"},{lv:61,move:"Swagger"}],
  "Psyduck":     [{lv:1,move:"Scratch"},{lv:1,move:"Water Sport"},{lv:5,move:"Tail Whip"},{lv:10,move:"Disable"},{lv:16,move:"Confusion"},{lv:23,move:"Screech"},{lv:31,move:"Psych Up"},{lv:40,move:"Fury Swipes"},{lv:50,move:"Hydro Pump"}],
  "Golduck":     [{lv:1,move:"Scratch"},{lv:1,move:"Water Sport"},{lv:1,move:"Tail Whip"},{lv:1,move:"Disable"},{lv:16,move:"Confusion"},{lv:23,move:"Screech"},{lv:31,move:"Psych Up"},{lv:44,move:"Fury Swipes"},{lv:58,move:"Hydro Pump"}],
  "Mankey":      [{lv:1,move:"Scratch"},{lv:1,move:"Leer"},{lv:6,move:"Karate Chop"},{lv:9,move:"Low Kick"},{lv:21,move:"Fury Swipes"},{lv:27,move:"Focus Energy"},{lv:33,move:"Seismic Toss"},{lv:39,move:"Cross Chop"},{lv:45,move:"Screech"},{lv:51,move:"Thrash"}],
  "Primeape":    [{lv:1,move:"Scratch"},{lv:1,move:"Leer"},{lv:1,move:"Low Kick"},{lv:1,move:"Rage"},{lv:15,move:"Karate Chop"},{lv:21,move:"Fury Swipes"},{lv:27,move:"Focus Energy"},{lv:36,move:"Seismic Toss"},{lv:45,move:"Cross Chop"},{lv:54,move:"Screech"},{lv:63,move:"Thrash"}],
  "Growlithe":   [{lv:1,move:"Bite"},{lv:1,move:"Roar"},{lv:7,move:"Ember"},{lv:13,move:"Leer"},{lv:19,move:"Odor Sleuth"},{lv:25,move:"Take Down"},{lv:31,move:"Flame Wheel"},{lv:37,move:"Helping Hand"},{lv:43,move:"Agility"},{lv:49,move:"Flamethrower"}],
  "Arcanine":    [{lv:1,move:"Bite"},{lv:1,move:"Roar"},{lv:1,move:"Ember"},{lv:1,move:"Odor Sleuth"},{lv:49,move:"ExtremeSpeed"}],
  "Poliwag":     [{lv:1,move:"Bubble"},{lv:7,move:"Hypnosis"},{lv:13,move:"Water Gun"},{lv:19,move:"DoubleSlap"},{lv:25,move:"Rain Dance"},{lv:31,move:"Body Slam"},{lv:37,move:"Belly Drum"},{lv:43,move:"Hydro Pump"}],
  "Poliwhirl":   [{lv:1,move:"Bubble"},{lv:1,move:"Hypnosis"},{lv:1,move:"Water Gun"},{lv:19,move:"DoubleSlap"},{lv:27,move:"Rain Dance"},{lv:35,move:"Body Slam"},{lv:43,move:"Belly Drum"},{lv:51,move:"Hydro Pump"}],
  "Poliwrath":   [{lv:1,move:"Water Gun"},{lv:1,move:"Hypnosis"},{lv:1,move:"DoubleSlap"},{lv:1,move:"Submission"},{lv:35,move:"Submission"},{lv:51,move:"Mind Reader"}],
  "Abra":        [{lv:1,move:"Teleport"}],
  "Kadabra":     [{lv:1,move:"Teleport"},{lv:1,move:"Kinesis"},{lv:1,move:"Confusion"},{lv:18,move:"Disable"},{lv:21,move:"Psybeam"},{lv:23,move:"Reflect"},{lv:25,move:"Recover"},{lv:30,move:"Future Sight"},{lv:33,move:"Role Play"},{lv:36,move:"Psychic"},{lv:43,move:"Trick"}],
  "Alakazam":    [{lv:1,move:"Teleport"},{lv:1,move:"Kinesis"},{lv:1,move:"Confusion"},{lv:18,move:"Disable"},{lv:21,move:"Psybeam"},{lv:23,move:"Reflect"},{lv:25,move:"Recover"},{lv:30,move:"Future Sight"},{lv:33,move:"Calm Mind"},{lv:36,move:"Psychic"},{lv:43,move:"Trick"}],
  "Machop":      [{lv:1,move:"Low Kick"},{lv:1,move:"Leer"},{lv:7,move:"Focus Energy"},{lv:13,move:"Karate Chop"},{lv:19,move:"Seismic Toss"},{lv:22,move:"Foresight"},{lv:25,move:"Revenge"},{lv:31,move:"Vital Throw"},{lv:37,move:"Submission"},{lv:40,move:"Cross Chop"},{lv:43,move:"Scary Face"},{lv:49,move:"DynamicPunch"}],
  "Machoke":     [{lv:1,move:"Low Kick"},{lv:1,move:"Leer"},{lv:1,move:"Focus Energy"},{lv:13,move:"Karate Chop"},{lv:19,move:"Seismic Toss"},{lv:22,move:"Foresight"},{lv:25,move:"Revenge"},{lv:33,move:"Vital Throw"},{lv:41,move:"Submission"},{lv:46,move:"Cross Chop"},{lv:51,move:"Scary Face"},{lv:59,move:"DynamicPunch"}],
  "Machamp":     [{lv:1,move:"Low Kick"},{lv:1,move:"Leer"},{lv:1,move:"Focus Energy"},{lv:13,move:"Karate Chop"},{lv:19,move:"Seismic Toss"},{lv:22,move:"Foresight"},{lv:25,move:"Revenge"},{lv:33,move:"Vital Throw"},{lv:41,move:"Submission"},{lv:46,move:"Cross Chop"},{lv:51,move:"Scary Face"},{lv:59,move:"DynamicPunch"}],
  "Bellsprout":  [{lv:1,move:"Vine Whip"},{lv:6,move:"Growth"},{lv:11,move:"Wrap"},{lv:15,move:"Sleep Powder"},{lv:17,move:"PoisonPowder"},{lv:19,move:"Stun Spore"},{lv:23,move:"Acid"},{lv:30,move:"Sweet Scent"},{lv:37,move:"Razor Leaf"},{lv:45,move:"Slam"}],
  "Weepinbell":  [{lv:1,move:"Vine Whip"},{lv:1,move:"Growth"},{lv:1,move:"Wrap"},{lv:15,move:"Sleep Powder"},{lv:17,move:"PoisonPowder"},{lv:19,move:"Stun Spore"},{lv:24,move:"Acid"},{lv:33,move:"Sweet Scent"},{lv:42,move:"Razor Leaf"},{lv:54,move:"Slam"}],
  "Victreebel":  [{lv:1,move:"Stockpile"},{lv:1,move:"Swallow"},{lv:1,move:"Spit Up"},{lv:1,move:"Vine Whip"},{lv:1,move:"Sweet Scent"},{lv:1,move:"Razor Leaf"},{lv:1,move:"Sleep Powder"}],
  "Tentacool":   [{lv:1,move:"Poison Sting"},{lv:6,move:"Supersonic"},{lv:12,move:"Constrict"},{lv:19,move:"Acid"},{lv:25,move:"BubbleBeam"},{lv:30,move:"Wrap"},{lv:36,move:"Barrier"},{lv:43,move:"Screech"},{lv:49,move:"Hydro Pump"}],
  "Tentacruel":  [{lv:1,move:"Poison Sting"},{lv:1,move:"Supersonic"},{lv:1,move:"Constrict"},{lv:19,move:"Acid"},{lv:25,move:"BubbleBeam"},{lv:30,move:"Wrap"},{lv:38,move:"Barrier"},{lv:47,move:"Screech"},{lv:55,move:"Hydro Pump"}],
  "Geodude":     [{lv:1,move:"Tackle"},{lv:1,move:"Defense Curl"},{lv:6,move:"Mud Sport"},{lv:11,move:"Rock Throw"},{lv:16,move:"Magnitude"},{lv:21,move:"Selfdestruct"},{lv:26,move:"Rollout"},{lv:31,move:"Rock Blast"},{lv:36,move:"Earthquake"},{lv:41,move:"Explosion"},{lv:46,move:"Double-Edge"}],
  "Graveler":    [{lv:1,move:"Tackle"},{lv:1,move:"Defense Curl"},{lv:1,move:"Mud Sport"},{lv:1,move:"Rock Throw"},{lv:16,move:"Magnitude"},{lv:21,move:"Selfdestruct"},{lv:29,move:"Rollout"},{lv:37,move:"Rock Blast"},{lv:45,move:"Earthquake"},{lv:53,move:"Explosion"},{lv:62,move:"Double-Edge"}],
  "Golem":       [{lv:1,move:"Tackle"},{lv:1,move:"Defense Curl"},{lv:1,move:"Mud Sport"},{lv:1,move:"Rock Throw"},{lv:16,move:"Magnitude"},{lv:21,move:"Selfdestruct"},{lv:29,move:"Rollout"},{lv:37,move:"Rock Blast"},{lv:45,move:"Earthquake"},{lv:53,move:"Explosion"},{lv:62,move:"Double-Edge"}],
  "Ponyta":      [{lv:1,move:"Tackle"},{lv:1,move:"Quick Attack"},{lv:5,move:"Growl"},{lv:9,move:"Tail Whip"},{lv:14,move:"Ember"},{lv:19,move:"Stomp"},{lv:25,move:"Fire Spin"},{lv:31,move:"Take Down"},{lv:38,move:"Agility"},{lv:45,move:"Bounce"},{lv:53,move:"Fire Blast"}],
  "Rapidash":    [{lv:1,move:"Tackle"},{lv:1,move:"Quick Attack"},{lv:1,move:"Growl"},{lv:1,move:"Tail Whip"},{lv:14,move:"Ember"},{lv:19,move:"Stomp"},{lv:25,move:"Fire Spin"},{lv:31,move:"Take Down"},{lv:38,move:"Agility"},{lv:40,move:"Fury Attack"},{lv:50,move:"Bounce"},{lv:63,move:"Fire Blast"}],
  "Slowpoke":    [{lv:1,move:"Curse"},{lv:1,move:"Tackle"},{lv:1,move:"Yawn"},{lv:6,move:"Growl"},{lv:15,move:"Water Gun"},{lv:20,move:"Confusion"},{lv:29,move:"Disable"},{lv:34,move:"Headbutt"},{lv:43,move:"Amnesia"},{lv:48,move:"Psychic"}],
  "Slowbro":     [{lv:1,move:"Curse"},{lv:1,move:"Tackle"},{lv:1,move:"Yawn"},{lv:1,move:"Growl"},{lv:15,move:"Water Gun"},{lv:20,move:"Confusion"},{lv:29,move:"Disable"},{lv:34,move:"Headbutt"},{lv:37,move:"Withdraw"},{lv:46,move:"Amnesia"},{lv:54,move:"Psychic"}],
  "Magnemite":   [{lv:1,move:"Metal Sound"},{lv:1,move:"Tackle"},{lv:6,move:"ThunderShock"},{lv:11,move:"Supersonic"},{lv:16,move:"SonicBoom"},{lv:21,move:"Thunder Wave"},{lv:26,move:"Spark"},{lv:32,move:"Lock-On"},{lv:38,move:"Swift"},{lv:44,move:"Screech"},{lv:50,move:"Zap Cannon"}],
  "Magneton":    [{lv:1,move:"Tackle"},{lv:1,move:"Metal Sound"},{lv:1,move:"ThunderShock"},{lv:1,move:"Supersonic"},{lv:16,move:"SonicBoom"},{lv:21,move:"Thunder Wave"},{lv:26,move:"Spark"},{lv:35,move:"Lock-On"},{lv:44,move:"Tri Attack"},{lv:53,move:"Screech"},{lv:62,move:"Zap Cannon"}],
  "Farfetch'd":  [{lv:1,move:"Peck"},{lv:6,move:"Sand-Attack"},{lv:6,move:"Leer"},{lv:16,move:"Fury Attack"},{lv:21,move:"Knock Off"},{lv:26,move:"Fury Cutter"},{lv:31,move:"Swords Dance"},{lv:36,move:"Agility"},{lv:41,move:"Slash"},{lv:46,move:"False Swipe"}],
  "Doduo":       [{lv:1,move:"Peck"},{lv:1,move:"Growl"},{lv:9,move:"Pursuit"},{lv:13,move:"Fury Attack"},{lv:21,move:"Tri Attack"},{lv:25,move:"Rage"},{lv:33,move:"Uproar"},{lv:37,move:"Drill Peck"},{lv:45,move:"Agility"}],
  "Dodrio":      [{lv:1,move:"Peck"},{lv:1,move:"Growl"},{lv:1,move:"Pursuit"},{lv:1,move:"Fury Attack"},{lv:21,move:"Tri Attack"},{lv:25,move:"Rage"},{lv:38,move:"Uproar"},{lv:47,move:"Drill Peck"},{lv:60,move:"Agility"}],
  "Seel":        [{lv:1,move:"Headbutt"},{lv:9,move:"Growl"},{lv:17,move:"Icy Wind"},{lv:21,move:"Aurora Beam"},{lv:29,move:"Rest"},{lv:37,move:"Take Down"},{lv:41,move:"Ice Beam"},{lv:49,move:"Safeguard"}],
  "Dewgong":     [{lv:1,move:"Signal Beam"},{lv:1,move:"Headbutt"},{lv:1,move:"Growl"},{lv:1,move:"Icy Wind"},{lv:1,move:"Aurora Beam"},{lv:29,move:"Rest"},{lv:34,move:"Sheer Cold"},{lv:42,move:"Take Down"},{lv:51,move:"Ice Beam"},{lv:64,move:"Safeguard"}],
  "Grimer":      [{lv:1,move:"Poison Gas"},{lv:1,move:"Pound"},{lv:4,move:"Harden"},{lv:8,move:"Disable"},{lv:13,move:"Sludge"},{lv:19,move:"Minimize"},{lv:26,move:"Screech"},{lv:34,move:"Acid Armor"},{lv:43,move:"Sludge Bomb"},{lv:53,move:"Memento"}],
  "Muk":         [{lv:1,move:"Poison Gas"},{lv:1,move:"Pound"},{lv:1,move:"Harden"},{lv:13,move:"Sludge"},{lv:19,move:"Minimize"},{lv:26,move:"Screech"},{lv:34,move:"Acid Armor"},{lv:47,move:"Sludge Bomb"},{lv:61,move:"Memento"}],
  "Shellder":    [{lv:1,move:"Tackle"},{lv:1,move:"Withdraw"},{lv:8,move:"Icicle Spear"},{lv:9,move:"Supersonic"},{lv:17,move:"Aurora Beam"},{lv:25,move:"Protect"},{lv:33,move:"Leer"},{lv:41,move:"Clamp"},{lv:49,move:"Ice Beam"}],
  "Cloyster":    [{lv:1,move:"Withdraw"},{lv:1,move:"Supersonic"},{lv:1,move:"Aurora Beam"},{lv:1,move:"Protect"},{lv:33,move:"Spikes"},{lv:41,move:"Spike Cannon"}],
  "Gastly":      [{lv:1,move:"Hypnosis"},{lv:1,move:"Lick"},{lv:8,move:"Spite"},{lv:13,move:"Mean Look"},{lv:16,move:"Curse"},{lv:21,move:"Night Shade"},{lv:28,move:"Confuse Ray"},{lv:33,move:"Dream Eater"},{lv:36,move:"Destiny Bond"},{lv:36,move:"Shadow Ball"},{lv:41,move:"Nightmare"}],
  "Haunter":     [{lv:1,move:"Hypnosis"},{lv:1,move:"Lick"},{lv:1,move:"Spite"},{lv:13,move:"Mean Look"},{lv:16,move:"Curse"},{lv:21,move:"Night Shade"},{lv:25,move:"Shadow Punch"},{lv:31,move:"Confuse Ray"},{lv:39,move:"Dream Eater"},{lv:48,move:"Destiny Bond"}],
  "Gengar":      [{lv:1,move:"Hypnosis"},{lv:1,move:"Lick"},{lv:1,move:"Spite"},{lv:13,move:"Mean Look"},{lv:16,move:"Curse"},{lv:21,move:"Night Shade"},{lv:25,move:"Shadow Punch"},{lv:31,move:"Confuse Ray"},{lv:39,move:"Dream Eater"},{lv:48,move:"Destiny Bond"}],
  "Onix":        [{lv:1,move:"Tackle"},{lv:1,move:"Screech"},{lv:9,move:"Bind"},{lv:13,move:"Rock Throw"},{lv:21,move:"Harden"},{lv:25,move:"Rage"},{lv:30,move:"DragonBreath"},{lv:33,move:"Sandstorm"},{lv:37,move:"Slam"},{lv:45,move:"Iron Tail"},{lv:49,move:"Sand Tomb"},{lv:57,move:"Double-Edge"}],
  "Drowzee":     [{lv:1,move:"Pound"},{lv:1,move:"Hypnosis"},{lv:10,move:"Disable"},{lv:18,move:"Confusion"},{lv:25,move:"Headbutt"},{lv:31,move:"Poison Gas"},{lv:36,move:"Meditate"},{lv:40,move:"Psychic"},{lv:41,move:"Swagger"},{lv:43,move:"Psych Up"},{lv:45,move:"Future Sight"}],
  "Hypno":       [{lv:1,move:"Nightmare"},{lv:1,move:"Pound"},{lv:1,move:"Hypnosis"},{lv:1,move:"Disable"},{lv:18,move:"Confusion"},{lv:25,move:"Headbutt"},{lv:33,move:"Poison Gas"},{lv:40,move:"Meditate"},{lv:49,move:"Psychic"},{lv:55,move:"Psych Up"},{lv:60,move:"Future Sight"}],
  "Krabby":      [{lv:1,move:"Bubble"},{lv:5,move:"Leer"},{lv:12,move:"ViceGrip"},{lv:16,move:"Harden"},{lv:23,move:"Mud Shot"},{lv:27,move:"Stomp"},{lv:34,move:"Guillotine"},{lv:41,move:"Protect"},{lv:45,move:"Crabhammer"},{lv:49,move:"Flail"}],
  "Kingler":     [{lv:1,move:"Bubble"},{lv:1,move:"Leer"},{lv:1,move:"ViceGrip"},{lv:16,move:"Harden"},{lv:23,move:"Mud Shot"},{lv:27,move:"Stomp"},{lv:38,move:"Guillotine"},{lv:49,move:"Protect"},{lv:57,move:"Crabhammer"}],
  "Voltorb":     [{lv:1,move:"Charge"},{lv:1,move:"Tackle"},{lv:8,move:"Screech"},{lv:15,move:"SonicBoom"},{lv:21,move:"Spark"},{lv:27,move:"Selfdestruct"},{lv:32,move:"Rollout"},{lv:37,move:"Light Screen"},{lv:42,move:"Swift"},{lv:46,move:"Explosion"},{lv:49,move:"Mirror Coat"}],
  "Electrode":   [{lv:1,move:"Charge"},{lv:1,move:"Tackle"},{lv:1,move:"Screech"},{lv:1,move:"SonicBoom"},{lv:8,move:"Screech"},{lv:15,move:"SonicBoom"},{lv:21,move:"Spark"},{lv:27,move:"Selfdestruct"},{lv:34,move:"Rollout"},{lv:41,move:"Light Screen"},{lv:48,move:"Swift"},{lv:54,move:"Explosion"},{lv:59,move:"Mirror Coat"}],
  "Exeggcute":   [{lv:1,move:"Uproar"},{lv:1,move:"Barrage"},{lv:1,move:"Hypnosis"},{lv:7,move:"Reflect"},{lv:13,move:"Leech Seed"},{lv:19,move:"Confusion"},{lv:25,move:"Stun Spore"},{lv:31,move:"PoisonPowder"},{lv:37,move:"Sleep Powder"},{lv:43,move:"SolarBeam"}],
  "Exeggutor":   [{lv:1,move:"Confusion"},{lv:1,move:"Barrage"},{lv:1,move:"Hypnosis"},{lv:19,move:"Stomp"},{lv:31,move:"Egg Bomb"}],
  "Cubone":      [{lv:1,move:"Growl"},{lv:5,move:"Tail Whip"},{lv:9,move:"Bone Club"},{lv:13,move:"Headbutt"},{lv:17,move:"Leer"},{lv:21,move:"Focus Energy"},{lv:25,move:"Bonemerang"},{lv:29,move:"Rage"},{lv:33,move:"False Swipe"},{lv:37,move:"Thrash"},{lv:41,move:"Bone Rush"},{lv:45,move:"Double-Edge"}],
  "Marowak":     [{lv:1,move:"Growl"},{lv:1,move:"Tail Whip"},{lv:1,move:"Bone Club"},{lv:1,move:"Headbutt"},{lv:5,move:"Tail Whip"},{lv:9,move:"Bone Club"},{lv:13,move:"Headbutt"},{lv:17,move:"Leer"},{lv:21,move:"Focus Energy"},{lv:25,move:"Bonemerang"},{lv:32,move:"Rage"},{lv:39,move:"False Swipe"},{lv:46,move:"Thrash"},{lv:53,move:"Bone Rush"},{lv:61,move:"Double-Edge"}],
  "Hitmonlee":   [{lv:1,move:"Double Kick"},{lv:1,move:"Revenge"},{lv:6,move:"Meditate"},{lv:11,move:"Rolling Kick"},{lv:16,move:"Jump Kick"},{lv:20,move:"Brick Break"},{lv:21,move:"Focus Energy"},{lv:26,move:"Hi Jump Kick"},{lv:31,move:"Mind Reader"},{lv:36,move:"Foresight"},{lv:41,move:"Endure"},{lv:46,move:"Mega Kick"},{lv:51,move:"Reversal"}],
  "Hitmonchan":  [{lv:1,move:"Comet Punch"},{lv:1,move:"Revenge"},{lv:7,move:"Agility"},{lv:13,move:"Pursuit"},{lv:20,move:"Mach Punch"},{lv:26,move:"ThunderPunch"},{lv:26,move:"Ice Punch"},{lv:26,move:"Fire Punch"},{lv:32,move:"Sky Uppercut"},{lv:38,move:"Mega Punch"},{lv:44,move:"Detect"},{lv:50,move:"Counter"}],
  "Lickitung":   [{lv:1,move:"Lick"},{lv:7,move:"Supersonic"},{lv:12,move:"Defense Curl"},{lv:18,move:"Knock Off"},{lv:23,move:"Stomp"},{lv:29,move:"Wrap"},{lv:34,move:"Disable"},{lv:40,move:"Slam"},{lv:45,move:"Screech"},{lv:51,move:"Refresh"}],
  "Koffing":     [{lv:1,move:"Poison Gas"},{lv:1,move:"Tackle"},{lv:9,move:"Smog"},{lv:17,move:"Selfdestruct"},{lv:21,move:"Sludge"},{lv:25,move:"SmokeScreen"},{lv:33,move:"Haze"},{lv:41,move:"Explosion"},{lv:45,move:"Destiny Bond"},{lv:49,move:"Memento"}],
  "Weezing":     [{lv:1,move:"Poison Gas"},{lv:1,move:"Tackle"},{lv:1,move:"Smog"},{lv:1,move:"Selfdestruct"},{lv:9,move:"Smog"},{lv:17,move:"Selfdestruct"},{lv:21,move:"Sludge"},{lv:25,move:"SmokeScreen"},{lv:33,move:"Haze"},{lv:44,move:"Explosion"},{lv:51,move:"Destiny Bond"},{lv:58,move:"Memento"}],
  "Rhyhorn":     [{lv:1,move:"Horn Attack"},{lv:1,move:"Tail Whip"},{lv:10,move:"Stomp"},{lv:15,move:"Fury Attack"},{lv:24,move:"Scary Face"},{lv:29,move:"Rock Blast"},{lv:38,move:"Horn Drill"},{lv:43,move:"Take Down"},{lv:52,move:"Earthquake"},{lv:57,move:"Megahorn"}],
  "Rhydon":      [{lv:1,move:"Horn Attack"},{lv:1,move:"Tail Whip"},{lv:1,move:"Stomp"},{lv:1,move:"Fury Attack"},{lv:10,move:"Stomp"},{lv:15,move:"Fury Attack"},{lv:24,move:"Scary Face"},{lv:29,move:"Rock Blast"},{lv:38,move:"Horn Drill"},{lv:46,move:"Take Down"},{lv:58,move:"Earthquake"},{lv:66,move:"Megahorn"}],
  "Chansey":     [{lv:1,move:"Pound"},{lv:1,move:"Growl"},{lv:5,move:"Tail Whip"},{lv:9,move:"Refresh"},{lv:13,move:"Softboiled"},{lv:17,move:"DoubleSlap"},{lv:23,move:"Minimize"},{lv:29,move:"Sing"},{lv:35,move:"Egg Bomb"},{lv:41,move:"Defense Curl"},{lv:49,move:"Light Screen"},{lv:57,move:"Double-Edge"}],
  "Tangela":     [{lv:1,move:"Ingrain"},{lv:1,move:"Constrict"},{lv:10,move:"Absorb"},{lv:13,move:"Growth"},{lv:19,move:"PoisonPowder"},{lv:22,move:"Vine Whip"},{lv:28,move:"Bind"},{lv:31,move:"Mega Drain"},{lv:37,move:"Stun Spore"},{lv:40,move:"Slam"},{lv:44,move:"Sleep Powder"},{lv:46,move:"Tickle"}],
  "Kangaskhan":  [{lv:1,move:"Comet Punch"},{lv:1,move:"Leer"},{lv:7,move:"Bite"},{lv:13,move:"Tail Whip"},{lv:19,move:"Fake Out"},{lv:25,move:"Mega Punch"},{lv:31,move:"Rage"},{lv:37,move:"Endure"},{lv:43,move:"Dizzy Punch"},{lv:49,move:"Reversal"}],
  "Horsea":      [{lv:1,move:"Bubble"},{lv:8,move:"SmokeScreen"},{lv:15,move:"Leer"},{lv:22,move:"Water Gun"},{lv:29,move:"Twister"},{lv:36,move:"Agility"},{lv:43,move:"Hydro Pump"},{lv:50,move:"Dragon Dance"}],
  "Seadra":      [{lv:1,move:"Bubble"},{lv:1,move:"SmokeScreen"},{lv:1,move:"Leer"},{lv:1,move:"Water Gun"},{lv:8,move:"SmokeScreen"},{lv:15,move:"Leer"},{lv:22,move:"Water Gun"},{lv:29,move:"Twister"},{lv:40,move:"Agility"},{lv:51,move:"Hydro Pump"},{lv:62,move:"Dragon Dance"}],
  "Goldeen":     [{lv:1,move:"Peck"},{lv:1,move:"Tail Whip"},{lv:1,move:"Water Sport"},{lv:10,move:"Supersonic"},{lv:15,move:"Horn Attack"},{lv:24,move:"Flail"},{lv:29,move:"Fury Attack"},{lv:38,move:"Waterfall"},{lv:43,move:"Horn Drill"},{lv:52,move:"Agility"},{lv:57,move:"Megahorn"}],
  "Seaking":     [{lv:1,move:"Peck"},{lv:1,move:"Tail Whip"},{lv:1,move:"Water Sport"},{lv:1,move:"Supersonic"},{lv:10,move:"Supersonic"},{lv:15,move:"Horn Attack"},{lv:24,move:"Flail"},{lv:29,move:"Fury Attack"},{lv:41,move:"Waterfall"},{lv:49,move:"Horn Drill"},{lv:61,move:"Agility"},{lv:69,move:"Megahorn"}],
  "Staryu":      [{lv:1,move:"Tackle"},{lv:1,move:"Harden"},{lv:6,move:"Water Gun"},{lv:10,move:"Rapid Spin"},{lv:15,move:"Recover"},{lv:19,move:"Camouflage"},{lv:24,move:"Swift"},{lv:28,move:"BubbleBeam"},{lv:33,move:"Minimize"},{lv:37,move:"Light Screen"},{lv:42,move:"Cosmic Power"},{lv:46,move:"Hydro Pump"}],
  "Starmie":     [{lv:1,move:"Water Gun"},{lv:1,move:"Rapid Spin"},{lv:1,move:"Recover"},{lv:1,move:"Swift"},{lv:33,move:"Confuse Ray"}],
  "Mr. Mime":    [{lv:1,move:"Barrier"},{lv:1,move:"Confusion"},{lv:13,move:"Meditate"},{lv:17,move:"DoubleSlap"},{lv:21,move:"Light Screen"},{lv:21,move:"Reflect"},{lv:25,move:"Encore"},{lv:29,move:"Psybeam"},{lv:33,move:"Recycle"},{lv:37,move:"Trick"},{lv:41,move:"Role Play"},{lv:45,move:"Psychic"},{lv:49,move:"Baton Pass"},{lv:53,move:"Safeguard"}],
  "Scyther":     [{lv:1,move:"Quick Attack"},{lv:1,move:"Leer"},{lv:1,move:"Pursuit"},{lv:6,move:"Focus Energy"},{lv:16,move:"False Swipe"},{lv:21,move:"Agility"},{lv:26,move:"Wing Attack"},{lv:31,move:"Slash"},{lv:36,move:"Swords Dance"},{lv:41,move:"Double Team"},{lv:46,move:"Fury Cutter"}],
  "Jynx":        [{lv:1,move:"Pound"},{lv:1,move:"Lick"},{lv:1,move:"Lovely Kiss"},{lv:1,move:"Powder Snow"},{lv:9,move:"Lovely Kiss"},{lv:13,move:"Powder Snow"},{lv:21,move:"DoubleSlap"},{lv:25,move:"Ice Punch"},{lv:35,move:"Mean Look"},{lv:41,move:"Fake Tears"},{lv:51,move:"Body Slam"},{lv:57,move:"Perish Song"},{lv:67,move:"Blizzard"}],
  "Electabuzz":  [{lv:1,move:"Quick Attack"},{lv:1,move:"Leer"},{lv:1,move:"ThunderPunch"},{lv:9,move:"ThunderPunch"},{lv:17,move:"Light Screen"},{lv:25,move:"Swift"},{lv:36,move:"Screech"},{lv:47,move:"Thunderbolt"},{lv:58,move:"Thunder"}],
  "Magmar":      [{lv:1,move:"Ember"},{lv:1,move:"Leer"},{lv:1,move:"Smog"},{lv:1,move:"Fire Punch"},{lv:7,move:"Leer"},{lv:13,move:"Smog"},{lv:19,move:"Fire Punch"},{lv:25,move:"SmokeScreen"},{lv:33,move:"Sunny Day"},{lv:41,move:"Flamethrower"},{lv:49,move:"Confuse Ray"},{lv:57,move:"Fire Blast"}],
  "Pinsir":      [{lv:1,move:"Vice Grip"},{lv:1,move:"Focus Energy"},{lv:7,move:"Bind"},{lv:13,move:"Seismic Toss"},{lv:19,move:"Harden"},{lv:25,move:"Revenge"},{lv:31,move:"Brick Break"},{lv:37,move:"Guillotine"},{lv:43,move:"Submission"},{lv:49,move:"Swords Dance"}],
  "Tauros":      [{lv:1,move:"Tackle"},{lv:1,move:"Tail Whip"},{lv:8,move:"Rage"},{lv:13,move:"Horn Attack"},{lv:19,move:"Scary Face"},{lv:26,move:"Pursuit"},{lv:26,move:"Swagger"},{lv:34,move:"Rest"},{lv:43,move:"Thrash"},{lv:53,move:"Take Down"}],
  "Magikarp":    [{lv:1,move:"Splash"},{lv:15,move:"Tackle"},{lv:30,move:"Flail"}],
  "Gyarados":    [{lv:1,move:"Thrash"},{lv:20,move:"Bite"},{lv:20,move:"Dragon Rage"},{lv:30,move:"Leer"},{lv:35,move:"Twister"},{lv:40,move:"Hydro Pump"},{lv:45,move:"Rain Dance"},{lv:50,move:"Dragon Dance"},{lv:55,move:"Hyper Beam"}],
  "Lapras":      [{lv:1,move:"Water Gun"},{lv:1,move:"Growl"},{lv:1,move:"Sing"},{lv:7,move:"Mist"},{lv:13,move:"Body Slam"},{lv:19,move:"Confuse Ray"},{lv:25,move:"Perish Song"},{lv:31,move:"Ice Beam"},{lv:37,move:"Rain Dance"},{lv:43,move:"Safeguard"},{lv:49,move:"Hydro Pump"},{lv:55,move:"Sheer Cold"}],
  "Ditto":       [{lv:1,move:"Transform"}],
  "Eevee":       [{lv:1,move:"Tackle"},{lv:1,move:"Tail Whip"},{lv:1,move:"Helping Hand"},{lv:8,move:"Sand-Attack"},{lv:16,move:"Growl"},{lv:23,move:"Quick Attack"},{lv:30,move:"Bite"},{lv:36,move:"Baton Pass"},{lv:42,move:"Take Down"}],
  "Vaporeon":    [{lv:1,move:"Tackle"},{lv:1,move:"Tail Whip"},{lv:1,move:"Helping Hand"},{lv:8,move:"Sand-Attack"},{lv:16,move:"Water Gun"},{lv:23,move:"Quick Attack"},{lv:30,move:"Bite"},{lv:36,move:"Aurora Beam"},{lv:42,move:"Haze"},{lv:47,move:"Acid Armor"},{lv:52,move:"Hydro Pump"}],
  "Jolteon":     [{lv:1,move:"Tackle"},{lv:1,move:"Tail Whip"},{lv:1,move:"Helping Hand"},{lv:8,move:"Sand-Attack"},{lv:16,move:"ThunderShock"},{lv:23,move:"Quick Attack"},{lv:30,move:"Double Kick"},{lv:36,move:"Pin Missile"},{lv:42,move:"Thunder Wave"},{lv:47,move:"Agility"},{lv:52,move:"Thunder"}],
  "Flareon":     [{lv:1,move:"Tackle"},{lv:1,move:"Tail Whip"},{lv:1,move:"Helping Hand"},{lv:8,move:"Sand-Attack"},{lv:16,move:"Ember"},{lv:23,move:"Quick Attack"},{lv:30,move:"Bite"},{lv:36,move:"Fire Spin"},{lv:42,move:"Smog"},{lv:47,move:"Leer"},{lv:52,move:"Flamethrower"}],
  "Porygon":     [{lv:1,move:"Tackle"},{lv:1,move:"Conversion"},{lv:1,move:"Conversion 2"},{lv:9,move:"Agility"},{lv:12,move:"Psybeam"},{lv:20,move:"Recover"},{lv:24,move:"Sharpen"},{lv:32,move:"Lock-On"},{lv:36,move:"Tri Attack"},{lv:44,move:"Recycle"},{lv:48,move:"Zap Cannon"}],
  "Omanyte":     [{lv:1,move:"Constrict"},{lv:1,move:"Withdraw"},{lv:13,move:"Bite"},{lv:19,move:"Water Gun"},{lv:25,move:"Mud Shot"},{lv:31,move:"Leer"},{lv:37,move:"Protect"},{lv:43,move:"Tickle"},{lv:49,move:"AncientPower"},{lv:55,move:"Hydro Pump"}],
  "Omastar":     [{lv:1,move:"Constrict"},{lv:1,move:"Withdraw"},{lv:1,move:"Bite"},{lv:13,move:"Bite"},{lv:19,move:"Water Gun"},{lv:25,move:"Mud Shot"},{lv:31,move:"Leer"},{lv:37,move:"Protect"},{lv:40,move:"Spike Cannon"},{lv:46,move:"Tickle"},{lv:55,move:"AncientPower"},{lv:65,move:"Hydro Pump"}],
  "Kabuto":      [{lv:1,move:"Scratch"},{lv:1,move:"Harden"},{lv:13,move:"Absorb"},{lv:19,move:"Leer"},{lv:25,move:"Mud Shot"},{lv:31,move:"Sand-Attack"},{lv:37,move:"Endure"},{lv:43,move:"Metal Sound"},{lv:49,move:"Mega Drain"},{lv:55,move:"AncientPower"}],
  "Kabutops":    [{lv:1,move:"Fury Cutter"},{lv:1,move:"Scratch"},{lv:1,move:"Harden"},{lv:1,move:"Absorb"},{lv:1,move:"Leer"},{lv:13,move:"Absorb"},{lv:19,move:"Leer"},{lv:25,move:"Mud Shot"},{lv:31,move:"Sand-Attack"},{lv:37,move:"Endure"},{lv:40,move:"Slash"},{lv:46,move:"Metal Sound"},{lv:55,move:"Mega Drain"},{lv:65,move:"AncientPower"}],
  "Aerodactyl":  [{lv:1,move:"Wing Attack"},{lv:8,move:"Agility"},{lv:15,move:"Bite"},{lv:22,move:"Supersonic"},{lv:29,move:"AncientPower"},{lv:36,move:"Scary Face"},{lv:43,move:"Take Down"},{lv:50,move:"Hyper Beam"}],
  "Snorlax":     [{lv:1,move:"Tackle"},{lv:6,move:"Amnesia"},{lv:10,move:"Defense Curl"},{lv:15,move:"Belly Drum"},{lv:19,move:"Headbutt"},{lv:24,move:"Yawn"},{lv:28,move:"Rest"},{lv:29,move:"Snore"},{lv:33,move:"Body Slam"},{lv:37,move:"Sleep Talk"},{lv:41,move:"Block"},{lv:42,move:"Covet"},{lv:46,move:"Rollout"},{lv:51,move:"Hyper Beam"}],
  "Articuno":    [{lv:1,move:"Gust"},{lv:1,move:"Powder Snow"},{lv:13,move:"Mist"},{lv:25,move:"Agility"},{lv:37,move:"Mind Reader"},{lv:49,move:"Ice Beam"},{lv:61,move:"Reflect"},{lv:73,move:"Blizzard"},{lv:85,move:"Sheer Cold"}],
  "Zapdos":      [{lv:1,move:"Peck"},{lv:1,move:"ThunderShock"},{lv:13,move:"Thunder Wave"},{lv:25,move:"Agility"},{lv:37,move:"Detect"},{lv:49,move:"Drill Peck"},{lv:61,move:"Charge"},{lv:73,move:"Light Screen"},{lv:85,move:"Thunder"}],
  "Moltres":     [{lv:1,move:"Wing Attack"},{lv:1,move:"Ember"},{lv:13,move:"Fire Spin"},{lv:25,move:"Agility"},{lv:37,move:"Endure"},{lv:49,move:"Flamethrower"},{lv:61,move:"Safeguard"},{lv:73,move:"Heat Wave"},{lv:85,move:"Sky Attack"}],
  "Dratini":     [{lv:1,move:"Wrap"},{lv:1,move:"Leer"},{lv:8,move:"Thunder Wave"},{lv:15,move:"Twister"},{lv:22,move:"Dragon Rage"},{lv:29,move:"Slam"},{lv:36,move:"Agility"},{lv:43,move:"Safeguard"},{lv:50,move:"Outrage"},{lv:57,move:"Hyper Beam"}],
  "Dragonair":   [{lv:1,move:"Wrap"},{lv:1,move:"Leer"},{lv:1,move:"Thunder Wave"},{lv:1,move:"Twister"},{lv:8,move:"Thunder Wave"},{lv:15,move:"Twister"},{lv:22,move:"Dragon Rage"},{lv:29,move:"Slam"},{lv:38,move:"Agility"},{lv:47,move:"Safeguard"},{lv:56,move:"Outrage"},{lv:65,move:"Hyper Beam"}],
  "Dragonite":   [{lv:1,move:"Wrap"},{lv:1,move:"Leer"},{lv:1,move:"Thunder Wave"},{lv:1,move:"Twister"},{lv:8,move:"Thunder Wave"},{lv:15,move:"Twister"},{lv:22,move:"Dragon Rage"},{lv:29,move:"Slam"},{lv:38,move:"Agility"},{lv:47,move:"Safeguard"},{lv:55,move:"Wing Attack"},{lv:61,move:"Outrage"},{lv:75,move:"Hyper Beam"}],
  "Mewtwo":      [{lv:1,move:"Confusion"},{lv:1,move:"Disable"},{lv:11,move:"Barrier"},{lv:22,move:"Swift"},{lv:33,move:"Psych Up"},{lv:44,move:"Future Sight"},{lv:55,move:"Mist"},{lv:66,move:"Psychic"},{lv:77,move:"Amnesia"},{lv:88,move:"Recover"},{lv:99,move:"Safeguard"}],
  "Mew":         [{lv:1,move:"Pound"},{lv:10,move:"Transform"},{lv:20,move:"Mega Punch"},{lv:30,move:"Metronome"},{lv:40,move:"Psychic"},{lv:50,move:"AncientPower"}],
};

// ─── MOVE TIERS ──────────────────────────────────────────────────────────────
// Advisory color-coding for the learnset display in DexDetail.
// "good"  → worth keeping / strong in a playthrough context (shown in green)
// "skip"  → early filler typically replaced soon (shown in muted)
// All labels are advisory — context always matters.
const MOVE_TIERS = {
  good: new Set([
    "Thunderbolt","Thunder","Flamethrower","Fire Blast","Surf","Hydro Pump",
    "Ice Beam","Blizzard","Earthquake","Psychic","SolarBeam","Razor Leaf",
    "Swords Dance","Amnesia","Agility","ExtremeSpeed","Hypnosis","Sleep Powder",
    "Spore","Toxic","Leech Seed","Crunch","Shadow Ball","Hyper Beam","Body Slam",
    "Dragon Rage","Tri Attack","Softboiled","Wing Attack","Drill Peck","Petal Dance",
    "Giga Drain","Silver Wind","Megahorn","High Jump Kick","Submission","Thrash",
    "Meteor Mash","Superpower","Skull Bash","Pin Missile","Twineedle","Air Cutter",
    "Confuse Ray","Will-O-Wisp","Stockpile","Swallow","Spit Up","Endeavor",
    "Super Fang","Hyper Fang","Horn Drill","Fissure","Guillotine","Sheer Cold",
    "Mean Look","Leech Life","Poison Fang","Psybeam","Vine Whip","Water Gun",
    "Bite","Rapid Spin","Protect","Rain Dance","Scary Face","Metal Claw",
    "Slash","Hyper Voice","Mirror Move","Aerial Ace","Pursuit","Focus Energy",
    "Dragon Dance","Ice Punch","ThunderPunch","Fire Punch","Waterfall","Outrage",
    "Hi Jump Kick","AncientPower","Brick Break","Sky Uppercut","Belly Drum",
  ]),
  skip: new Set([
    "Bide","Rage","Constrict","Splash","Bind","Wrap","String Shot",
    "Supersonic","Sand-Attack","Kinesis","Leer","Tail Whip","Growl",
    "Scratch","Pound","Tackle","Harden","Defense Curl","Uproar","Barrage",
    "Odor Sleuth","Foresight","Astonish","FeatherDance","Follow Me",
    "SmokeScreen","Fury Attack","Fury Swipes","Whirlwind","Minimize",
    "Quick Attack","Disable","Encore","Roar","Mean Look","Helping Hand",
    "Glare","Screech","Leech Life","Swift","Growl","Leer","Peck","Gust",
    "Absorb","Stun Spore","PoisonPowder","Acid","Moonlight","Sweet Scent",
    "Poison Sting","Double Kick","Sand Tomb","Mud-Slap","Sandstorm",
  ]),
};

// ─── EVOLUTION DELAY ADVISORIES ──────────────────────────────────────────────
// Shown in DexDetail for Pokémon whose pre-evolution form benefits from
// a delayed evolution stone or trade.
const EVO_DELAY = {
  "Pikachu":    "Delay Thunder Stone until Lv. 26 (Thunderbolt) — Raichu has no level-up moves and won't gain Thunderbolt naturally.",
  "Growlithe":  "Delay Fire Stone until Lv. 49 (Flamethrower) — Arcanine's level-up set has no Flamethrower. Arcanine gains ExtremeSpeed at Lv. 49 after evolving.",
  "Vulpix":     "Delay Fire Stone until Lv. 29 (Flamethrower) — Ninetales' level-up set is very sparse.",
  "Jigglypuff": "Consider delaying Moon Stone until Lv. 34 (Body Slam) or Lv. 44 (Hyper Voice).",
  "Clefairy":   "Consider delaying Moon Stone until Lv. 29 (Metronome) or Lv. 33 (Cosmic Power).",
  "Exeggcute":  "Optional: delay Leaf Stone until Lv. 43 (SolarBeam) to avoid using TM22.",
};

// ─── DREAM TEAM BUILDER DATA ──────────────────────────────────────────────────
const DT_LEGENDARY = new Set(["Articuno","Zapdos","Moltres","Mewtwo","Mew"]);

const DT_HM_COMPAT = {
  "Cut":        new Set(["Bulbasaur","Ivysaur","Venusaur","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Rattata","Raticate","Ekans","Arbok","Sandshrew","Sandslash","Oddish","Gloom","Vileplume","Paras","Parasect","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Tentacool","Tentacruel","Farfetch'd","Seel","Dewgong","Krabby","Kingler","Scyther","Pinsir","Kabuto","Kabutops","Charizard","Bellsprout","Weepinbell","Victreebel"]),
  "Fly":        new Set(["Charizard","Pidgey","Pidgeotto","Pidgeot","Spearow","Fearow","Zubat","Golbat","Doduo","Dodrio","Aerodactyl","Dragonite"]),
  "Surf":       new Set(["Squirtle","Wartortle","Blastoise","Psyduck","Golduck","Poliwag","Poliwhirl","Poliwrath","Tentacool","Tentacruel","Slowpoke","Slowbro","Seel","Dewgong","Shellder","Cloyster","Krabby","Kingler","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Lapras","Vaporeon","Dratini","Dragonair","Dragonite","Jynx","Omanyte","Omastar","Kabuto","Kabutops"]),
  "Strength":   new Set(["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Sandshrew","Sandslash","Nidorina","Nidoqueen","Nidorino","Nidoking","Mankey","Primeape","Poliwag","Poliwhirl","Poliwrath","Machop","Machoke","Geodude","Graveler","Golem","Slowpoke","Slowbro","Drowzee","Hypno","Krabby","Kingler","Marowak","Hitmonlee","Hitmonchan","Rhyhorn","Rhydon","Chansey","Kangaskhan","Starmie","Tauros","Gyarados","Lapras","Snorlax","Dratini","Dragonair","Dragonite","Arcanine","Dewgong","Cloyster","Seel"]),
  "Flash":      new Set(["Butterfree","Pikachu","Raichu","Clefairy","Clefable","Jigglypuff","Wigglytuff","Abra","Kadabra","Slowpoke","Slowbro","Gastly","Haunter","Gengar","Drowzee","Hypno","Magnemite","Magneton","Doduo","Dodrio","Electrode","Starmie","Jynx","Electabuzz","Porygon","Vaporeon","Jolteon","Flareon"]),
  "Rock Smash": new Set(["Squirtle","Wartortle","Blastoise","Poliwag","Poliwhirl","Poliwrath","Machop","Machoke","Geodude","Graveler","Golem","Primeape","Hitmonlee","Hitmonchan","Rhyhorn","Rhydon","Snorlax","Krabby","Kingler","Kabutops","Aerodactyl"]),
  "Waterfall":  new Set(["Squirtle","Wartortle","Blastoise","Psyduck","Golduck","Poliwag","Poliwhirl","Poliwrath","Tentacool","Tentacruel","Slowpoke","Slowbro","Seel","Dewgong","Shellder","Cloyster","Krabby","Kingler","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Lapras","Vaporeon","Dratini","Dragonair","Dragonite","Jynx","Omanyte","Omastar","Kabuto","Kabutops","Gyarados"]),
};

// Neutral Pokémon are listed first so they always outrank version-exclusive picks
// by pool-position score, even if the version check is somehow skipped.
// FR-exclusive follow neutral, LG-exclusive come last.
const DT_CANDIDATES = [
  // ── Neutral (catchable in both versions) ───────────────────────────────────
  {name:"Lapras",    types:["Water","Ice"],          hms:["Surf","Waterfall","Strength"]},
  {name:"Snorlax",   types:["Normal"],               hms:["Strength","Rock Smash"]},
  {name:"Gyarados",  types:["Water","Flying"],       hms:["Surf","Waterfall","Strength"]},
  {name:"Nidoking",  types:["Poison","Ground"],      hms:["Cut","Rock Smash","Strength"]},
  {name:"Nidoqueen", types:["Poison","Ground"],      hms:["Cut","Rock Smash","Strength"]},
  {name:"Vaporeon",  types:["Water"],                hms:["Surf"]},
  {name:"Jolteon",   types:["Electric"],             hms:[]},
  {name:"Charizard", types:["Fire","Flying"],        hms:["Cut","Fly","Strength"]},
  {name:"Blastoise", types:["Water"],                hms:["Surf","Waterfall","Strength"]},
  {name:"Venusaur",  types:["Grass","Poison"],       hms:["Cut","Strength"]},
  {name:"Exeggutor", types:["Grass","Psychic"],      hms:[]},
  {name:"Raichu",    types:["Electric"],             hms:[]},
  {name:"Aerodactyl",types:["Rock","Flying"],        hms:["Fly","Rock Smash","Strength"]},
  {name:"Poliwrath", types:["Water","Fighting"],     hms:["Surf","Waterfall","Strength","Rock Smash"]},
  {name:"Pidgeot",   types:["Normal","Flying"],      hms:["Fly"]},
  {name:"Fearow",    types:["Normal","Flying"],      hms:["Fly","Cut"]},
  {name:"Hypno",     types:["Psychic"],              hms:[]},
  {name:"Magneton",  types:["Electric","Steel"],     hms:[]},
  {name:"Electrode", types:["Electric"],             hms:[]},
  {name:"Hitmonlee", types:["Fighting"],             hms:["Strength","Rock Smash"]},
  {name:"Hitmonchan",types:["Fighting"],             hms:["Strength","Rock Smash"]},
  {name:"Dewgong",   types:["Water","Ice"],          hms:["Surf","Waterfall","Strength"]},
  {name:"Tentacruel",types:["Water","Poison"],       hms:["Surf","Waterfall","Cut"]},
  {name:"Kabutops",  types:["Rock","Water"],         hms:["Surf","Waterfall","Cut","Rock Smash","Strength"]},
  {name:"Omastar",   types:["Rock","Water"],         hms:["Surf","Waterfall","Strength"]},
  {name:"Rhydon",    types:["Ground","Rock"],        hms:["Strength","Rock Smash"]},
  {name:"Flareon",   types:["Fire"],                 hms:[]},
  {name:"Tauros",    types:["Normal"],               hms:["Strength"]},
  {name:"Kangaskhan",types:["Normal"],               hms:["Strength"]},
  {name:"Weezing",   types:["Poison"],               hms:[]},
  {name:"Kingler",   types:["Water"],                hms:["Surf","Waterfall","Cut","Strength","Rock Smash"]},
  {name:"Dodrio",    types:["Normal","Flying"],      hms:["Fly"]},
  // ── FireRed exclusive ──────────────────────────────────────────────────────
  {name:"Arcanine",  types:["Fire"],                 hms:["Strength"],                  frOnly:true},
  {name:"Electabuzz",types:["Electric"],             hms:[],                            frOnly:true},
  {name:"Cloyster",  types:["Water","Ice"],          hms:["Surf","Waterfall"],          frOnly:true},
  {name:"Golduck",   types:["Water"],                hms:["Surf","Waterfall","Cut","Strength"],frOnly:true},
  {name:"Scyther",   types:["Bug","Flying"],         hms:["Cut"],                       frOnly:true},
  {name:"Vileplume", types:["Grass","Poison"],       hms:[],                            frOnly:true},
  // ── LeafGreen exclusive ────────────────────────────────────────────────────
  {name:"Starmie",   types:["Water","Psychic"],      hms:["Surf","Waterfall","Strength"],lgOnly:true},
  {name:"Slowbro",   types:["Water","Psychic"],      hms:["Surf","Waterfall","Strength"],lgOnly:true},
  {name:"Sandslash", types:["Ground"],               hms:["Cut","Rock Smash","Strength"],lgOnly:true},
  {name:"Ninetales", types:["Fire"],                 hms:[],                            lgOnly:true},
  {name:"Victreebel",types:["Grass","Poison"],       hms:[],                            lgOnly:true},
];

const DT_TM_TIPS = {
  "Charizard":  [{move:"Flamethrower",src:"TM35 — Game Corner, Celadon City"},{move:"Earthquake",src:"TM26 — Viridian Gym reward",oneTime:true}],
  "Blastoise":  [{move:"Ice Beam",src:"TM13 — Game Corner, Celadon City"}],
  "Venusaur":   [{move:"Sludge Bomb",src:"TM36 — Rocket Hideout B4F",oneTime:true},{move:"SolarBeam",src:"TM22 — Safari Zone Area 3",oneTime:true}],
  "Nidoking":   [{move:"Thunderbolt",src:"TM24 — Game Corner, Celadon City"},{move:"Earthquake",src:"TM26 — Viridian Gym reward",oneTime:true}],
  "Nidoqueen":  [{move:"Ice Beam",src:"TM13 — Game Corner, Celadon City"},{move:"Earthquake",src:"TM26 — Viridian Gym reward",oneTime:true}],
  "Raichu":     [{move:"Thunderbolt",src:"TM24 — Game Corner, Celadon City"},{move:"Thunder",src:"TM25 — Game Corner, Celadon City"}],
  "Starmie":    [{move:"Thunderbolt",src:"TM24 — Game Corner, Celadon City"},{move:"Ice Beam",src:"TM13 — Game Corner, Celadon City"},{move:"Psychic",src:"TM29 — Game Corner or Route 7 (free copy)"}],
  "Lapras":     [{move:"Thunderbolt",src:"TM24 — Game Corner, Celadon City"},{move:"Ice Beam",src:"TM13 — Game Corner, Celadon City"}],
  "Gyarados":   [{move:"Thunderbolt",src:"TM24 — Game Corner, Celadon City"},{move:"Ice Beam",src:"TM13 — Game Corner, Celadon City"}],
  "Snorlax":    [{move:"Earthquake",src:"TM26 — Viridian Gym reward",oneTime:true}],
  "Vaporeon":   [{move:"Ice Beam",src:"TM13 — Game Corner, Celadon City"}],
  "Jolteon":    [{move:"Thunderbolt",src:"TM24 — Game Corner, Celadon City"},{move:"Thunder",src:"TM25 — Game Corner, Celadon City"}],
  "Flareon":    [{move:"Fire Blast",src:"TM38 — Celadon Dept. Store (buyable)"}],
  "Arcanine":   [{move:"Flamethrower",src:"TM35 — Game Corner, Celadon City"},{move:"ExtremeSpeed",src:"Lv. 49 as Growlithe — evolve after learning it"}],
  "Slowbro":    [{move:"Ice Beam",src:"TM13 — Game Corner, Celadon City"},{move:"Psychic",src:"TM29 — Game Corner or Route 7 (free copy)"}],
  "Exeggutor":  [{move:"Psychic",src:"TM29 — Game Corner or Route 7 (free copy)"},{move:"SolarBeam",src:"TM22 — Safari Zone Area 3",oneTime:true}],
  "Hypno":      [{move:"Psychic",src:"TM29 — Game Corner or Route 7 (free copy)"}],
  "Electabuzz": [{move:"Thunderbolt",src:"TM24 — Game Corner, Celadon City"},{move:"Thunder",src:"TM25 — Game Corner, Celadon City"}],
  "Magneton":   [{move:"Thunderbolt",src:"TM24 — Game Corner, Celadon City"},{move:"Thunder",src:"TM25 — Game Corner, Celadon City"}],
  "Electrode":  [{move:"Thunderbolt",src:"TM24 — Game Corner, Celadon City"},{move:"Thunder",src:"TM25 — Game Corner, Celadon City"}],
  "Sandslash":  [{move:"Earthquake",src:"TM26 — Viridian Gym reward",oneTime:true}],
  "Aerodactyl": [{move:"Iron Tail",src:"TM23 — Silph Co.",oneTime:true}],
  "Pidgeot":    [{move:"Hyper Beam",src:"TM15 — Game Corner, Celadon City"}],
  "Poliwrath":  [{move:"Brick Break",src:"TM31 — Silph Co. 7F",oneTime:true}],
  "Cloyster":   [{move:"Blizzard",src:"TM14 — Celadon Dept. Store (buyable)"}],
  "Omastar":    [{move:"Ice Beam",src:"TM13 — Game Corner, Celadon City"}],
  "Rhydon":     [{move:"Earthquake",src:"TM26 — Viridian Gym reward",oneTime:true}],
  "Golduck":    [{move:"Ice Beam",src:"TM13 — Game Corner, Celadon City"},{move:"Psychic",src:"TM29 — Game Corner or Route 7 (free copy)"}],
  "Ninetales":  [{move:"Flamethrower",src:"TM35 — Game Corner, Celadon City"}],
  "Vileplume":  [{move:"SolarBeam",src:"TM22 — Safari Zone Area 3",oneTime:true}],
  "Victreebel": [{move:"SolarBeam",src:"TM22 — Safari Zone Area 3",oneTime:true}],
  "Tauros":     [{move:"Earthquake",src:"TM26 — Viridian Gym reward",oneTime:true}],
  "Dewgong":    [{move:"Ice Beam",src:"TM13 — Game Corner, Celadon City"}],
  "Tentacruel": [{move:"Sludge Bomb",src:"TM36 — Rocket Hideout B4F",oneTime:true}],
  "Hitmonchan": [{move:"Ice Punch",src:"Level 46 (level-up)"}],
  "Hitmonlee":  [{move:"Hi Jump Kick",src:"Level 41 (level-up)"}],
};

const DT_FINAL_FORM = {
  "Bulbasaur":"Venusaur","Ivysaur":"Venusaur",
  "Charmander":"Charizard","Charmeleon":"Charizard",
  "Squirtle":"Blastoise","Wartortle":"Blastoise",
  "Caterpie":"Butterfree","Metapod":"Butterfree",
  "Weedle":"Beedrill","Kakuna":"Beedrill",
  "Pidgey":"Pidgeot","Pidgeotto":"Pidgeot",
  "Rattata":"Raticate","Spearow":"Fearow","Ekans":"Arbok",
  "Pikachu":"Raichu","Sandshrew":"Sandslash",
  "Nidoran♀":"Nidoqueen","Nidorina":"Nidoqueen",
  "Nidoran♂":"Nidoking","Nidorino":"Nidoking",
  "Clefairy":"Clefable","Vulpix":"Ninetales","Jigglypuff":"Wigglytuff",
  "Oddish":"Vileplume","Gloom":"Vileplume",
  "Paras":"Parasect","Venonat":"Venomoth",
  "Diglett":"Dugtrio","Meowth":"Persian","Psyduck":"Golduck","Mankey":"Primeape",
  "Growlithe":"Arcanine",
  "Poliwag":"Poliwhirl","Poliwhirl":"Poliwrath",
  "Bellsprout":"Weepinbell","Weepinbell":"Victreebel",
  "Tentacool":"Tentacruel","Ponyta":"Rapidash","Slowpoke":"Slowbro",
  "Magnemite":"Magneton","Doduo":"Dodrio","Seel":"Dewgong","Grimer":"Muk",
  "Shellder":"Cloyster","Drowzee":"Hypno","Krabby":"Kingler","Voltorb":"Electrode",
  "Exeggcute":"Exeggutor","Cubone":"Marowak",
  "Horsea":"Seadra","Goldeen":"Seaking","Staryu":"Starmie",
  "Magikarp":"Gyarados","Eevee":"Vaporeon",
  "Omanyte":"Omastar","Kabuto":"Kabutops",
  "Dratini":"Dragonite","Dragonair":"Dragonite",
};

function buildDreamTeam(favoriteName, version) {
  const finalFav = DT_FINAL_FORM[favoriteName] || favoriteName;
  const team = [favoriteName];
  const inTeam = new Set([finalFav]);
  const isDragoniteLine = ["Dratini","Dragonair","Dragonite"].includes(favoriteName);
  if (!isDragoniteLine) { team.push("Dragonite"); inTeam.add("Dragonite"); }
  const requiredHMs = ["Fly","Surf","Waterfall","Strength","Cut","Rock Smash"];
  const getCoverage = () => {
    const s = new Set();
    for (const n of team) {
      const form = DT_FINAL_FORM[n] || n;
      for (const [hm, learners] of Object.entries(DT_HM_COMPAT)) {
        if (learners.has(form)) s.add(hm);
      }
    }
    return s;
  };
  while (team.length < 6) {
    const covered = getCoverage();
    const missing = requiredHMs.filter(h => !covered.has(h));
    let best = null, bestScore = -Infinity;
    for (let ci = 0; ci < DT_CANDIDATES.length; ci++) {
      const cand = DT_CANDIDATES[ci];
      if (inTeam.has(cand.name)) continue;
      // Hard-exclude Pokémon exclusive to the other version from auto-selection
      if (version === "FR" && cand.lgOnly) continue;
      if (version === "LG" && cand.frOnly) continue;
      const hmScore  = cand.hms.filter(h => missing.includes(h)).length * 10;
      const poolScore = (DT_CANDIDATES.length - ci) * 0.1;
      const teamTypes = new Set(team.flatMap(n => {
        const f = DT_FINAL_FORM[n] || n;
        const c = DT_CANDIDATES.find(x => x.name === f);
        return c ? c.types : [];
      }));
      const typeScore = cand.types.some(t => !teamTypes.has(t)) ? 5 : 0;
      const score = hmScore + typeScore + poolScore;
      if (score > bestScore) { best = cand; bestScore = score; }
    }
    if (!best) break;
    team.push(best.name);
    inTeam.add(best.name);
  }
  return team;
}

function getDreamMoves(name, suppressedMoves, hms) {
  suppressedMoves = suppressedMoves || new Set();
  hms = hms || [];
  const finalForm = DT_FINAL_FORM[name] || name;
  const learnset = (LEARNSETS && (LEARNSETS[finalForm] || LEARNSETS[name])) || [];
  const tmTips   = DT_TM_TIPS[finalForm] || DT_TM_TIPS[name] || [];
  const result = [], used = new Set();
  // 1. HMs this Pokémon carries — fill slots first so they appear in the moveset
  for (const hm of hms) {
    if (result.length >= 4) break;
    result.push({ move:hm, src:"HM", kind:"hm" });
    used.add(hm);
  }
  // 2. TM tips — skip any one-time TM assigned to a different team member
  for (const t of tmTips) {
    if (result.length >= 4) break;
    if (suppressedMoves.has(t.move)) continue;
    result.push({ move:t.move, src:t.src, kind:"tm", oneTime:!!t.oneTime });
    used.add(t.move);
  }
  // 3. Strong level-up moves
  const goodMoves = [...learnset].filter(m => MOVE_TIERS && MOVE_TIERS.good && MOVE_TIERS.good.has(m.move)).sort((a,b) => b.lv - a.lv);
  for (const m of goodMoves) {
    if (result.length >= 4) break;
    if (!used.has(m.move)) { result.push({ move:m.move, src:`Level ${m.lv}`, kind:"level" }); used.add(m.move); }
  }
  // 4. Any remaining level-up moves to round out 4 slots
  const allMoves = [...learnset].sort((a,b) => b.lv - a.lv);
  for (const m of allMoves) {
    if (result.length >= 4) break;
    if (!used.has(m.move)) { result.push({ move:m.move, src:`Level ${m.lv}`, kind:"level" }); used.add(m.move); }
  }
  return result;
}

// For each contested one-time TM, pick the single best recipient on the team.
// Priority: (1) earlier position in DT_TM_TIPS for that Pokémon (it matters more to them),
// Move types used to evaluate STAB for assignment priority
const DT_MOVE_TYPE = {
  "Cut":"Normal","Fly":"Flying","Surf":"Water","Strength":"Normal",
  "Rock Smash":"Fighting","Waterfall":"Water",
  "Earthquake":"Ground","SolarBeam":"Grass","Sludge Bomb":"Poison",
  "Brick Break":"Fighting","Iron Tail":"Steel",
};
function hasSTAB(pokémonName, moveName) {
  const moveType = DT_MOVE_TYPE[moveName];
  if (!moveType) return false;
  const form = DT_FINAL_FORM[pokémonName] || pokémonName;
  const cand = DT_CANDIDATES.find(c => c.name === form);
  return cand ? cand.types.includes(moveType) : false;
}

// (2) fewer total TM tips (less flexibility), (3) earlier in team order.
function assignOneTimeTMs(team) {
  const wanted = {}; // moveName → [{name, tipIndex, totalTips}]
  team.forEach(pName => {
    const finalForm = DT_FINAL_FORM[pName] || pName;
    const tips = DT_TM_TIPS[finalForm] || DT_TM_TIPS[pName] || [];
    tips.forEach((t, tipIndex) => {
      if (!t.oneTime) return;
      if (!wanted[t.move]) wanted[t.move] = [];
      wanted[t.move].push({ name:pName, tipIndex, totalTips:tips.length });
    });
  });
  const winners = {};
  Object.entries(wanted).forEach(([move, candidates]) => {
    const sorted = [...candidates].sort((a, b) => {
      const aSTAB = hasSTAB(a.name, move), bSTAB = hasSTAB(b.name, move);
      if (aSTAB !== bSTAB) return aSTAB ? -1 : 1;
      if (a.tipIndex !== b.tipIndex) return a.tipIndex - b.tipIndex;
      if (a.totalTips !== b.totalTips) return a.totalTips - b.totalTips;
      return team.indexOf(a.name) - team.indexOf(b.name);
    });
    winners[move] = sorted[0].name;
  });
  return winners;
}

function getDreamHMs(name) {
  const form = DT_FINAL_FORM[name] || name;
  return Object.entries(DT_HM_COMPAT).filter(([,s]) => s.has(form)).map(([hm]) => hm);
}

// For each HM required by the team, assign it to exactly one Pokémon.
// Strategy: process rarest coverage first; consolidate onto whichever team member
// is already the HM carrier, tiebroken by total HM capability then team order.
function assignHMs(team) {
  const ALL_HMs = ["Fly","Surf","Waterfall","Strength","Cut","Rock Smash"];
  const canLearn = {};
  team.forEach(name => { canLearn[name] = new Set(getDreamHMs(name)); });

  const candidates = {};
  ALL_HMs.forEach(hm => { candidates[hm] = team.filter(n => canLearn[n].has(hm)); });

  const assignments = {};
  const load = {};
  team.forEach(n => { load[n] = 0; });

  // Priority override: Lapras always carries both water HMs when present
  for (const waterHM of ["Surf", "Waterfall"]) {
    if (team.includes("Lapras") && (candidates[waterHM] || []).includes("Lapras")) {
      assignments[waterHM] = "Lapras";
      load["Lapras"]++;
    }
  }

  // Process remaining HMs — fewest carriers first so forced assignments win
  const sorted = ALL_HMs.filter(hm => !assignments[hm] && candidates[hm] && candidates[hm].length > 0)
    .sort((a, b) => candidates[a].length - candidates[b].length);

  for (const hm of sorted) {
    const avail = candidates[hm];
    const winner = avail.reduce((best, cur) => {
      const curSTAB = hasSTAB(cur, hm), bestSTAB = hasSTAB(best, hm);
      if (curSTAB !== bestSTAB) return curSTAB ? cur : best;
      if (load[cur] !== load[best]) return load[cur] > load[best] ? cur : best;
      const curCap = canLearn[cur].size, bestCap = canLearn[best].size;
      if (curCap !== bestCap) return curCap > bestCap ? cur : best;
      return team.indexOf(cur) > team.indexOf(best) ? cur : best;
    });
    assignments[hm] = winner;
    load[winner]++;
  }
  return assignments;
}

function getDreamAcquisition(name) {
  const direct = LOCATION_MAP[name];
  if (direct && direct.length > 0) {
    const l = direct[0];
    return `${l.areaName}${l.levels ? ` — ${l.method}, Lv. ${l.levels}` : ` — ${l.method}`}`;
  }
  for (const [base, final] of Object.entries(DT_FINAL_FORM)) {
    if (final !== name) continue;
    const baseLocs = LOCATION_MAP[base];
    if (baseLocs && baseLocs.length > 0) {
      const l = baseLocs[0];
      return `Catch ${base} at ${l.areaName}${l.levels ? ` (${l.method}, Lv. ${l.levels})` : ` (${l.method})`} → evolve to ${name}`;
    }
  }
  return "See Pokédex for location details";
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
// ─── TM / HM DATA ─────────────────────────────────────────────────────────────
const TM_TYPE_COLOR = {
  Normal:"#8a8a70",Fire:"#d06828",Water:"#4870d8",Electric:"#c0a018",
  Grass:"#58a030",Ice:"#70b8b8",Fighting:"#a01818",Poison:"#8028a0",
  Ground:"#b09040",Flying:"#8070c0",Psychic:"#d03870",Bug:"#789018",
  Rock:"#908028",Ghost:"#504070",Dragon:"#5020c0",Dark:"#4c3830",
  Steel:"#8888a8",
};
const TM_DATA = [
  {id:"TM01",move:"Focus Punch", type:"Fighting",note:"Silph Co."},
  {id:"TM02",move:"Dragon Claw", type:"Dragon",  note:"Victory Road — north area (requires Strength)"},
  {id:"TM03",move:"Water Pulse", type:"Water",   note:"Cerulean City Gym — defeat Misty"},
  {id:"TM04",move:"Calm Mind",   type:"Psychic", note:"Saffron City Gym — defeat Sabrina"},
  {id:"TM05",move:"Roar",        type:"Normal",  note:"Route 22 — from the man by the hill"},
  {id:"TM06",move:"Toxic",       type:"Poison",  note:"Fuchsia City Gym — defeat Koga"},
  {id:"TM07",move:"Hail",        type:"Ice",     note:"Victory Road — northeast area"},
  {id:"TM08",move:"Bulk Up",     type:"Fighting",note:"Silph Co. — requires Card Key"},
  {id:"TM09",move:"Bullet Seed", type:"Grass",   note:"Mt. Moon — west chamber"},
  {id:"TM10",move:"Hidden Power",type:"Normal",  note:"Celadon Dept. Store — ₽3,000"},
  {id:"TM11",move:"Sunny Day",   type:"Fire",    note:"Safari Zone — in the tall grass"},
  {id:"TM12",move:"Taunt",       type:"Dark",    note:"Rocket Hideout"},
  {id:"TM13",move:"Ice Beam",    type:"Ice",     note:"Celadon Game Corner — 4,000 coins"},
  {id:"TM14",move:"Blizzard",    type:"Ice",     note:"Pokémon Mansion — B1F, north-central room"},
  {id:"TM15",move:"Hyper Beam",  type:"Normal",  note:"Celadon Dept. Store — ₽7,500"},
  {id:"TM16",move:"Light Screen",type:"Psychic", note:"Celadon City Rooftop — give Fresh Water"},
  {id:"TM17",move:"Protect",     type:"Normal",  note:"Power Plant — central corridor"},
  {id:"TM18",move:"Rain Dance",  type:"Water",   note:"Route 15 — western hill (requires Cut)"},
  {id:"TM19",move:"Giga Drain",  type:"Grass",   note:"Celadon City Gym — defeat Erika"},
  {id:"TM20",move:"Safeguard",   type:"Normal",  note:"Celadon City Rooftop — give Soda Pop"},
  {id:"TM21",move:"Frustration", type:"Normal",  note:"Rocket Hideout"},
  {id:"TM22",move:"SolarBeam",   type:"Grass",   note:"Pokémon Mansion — B1F, west-central room"},
  {id:"TM23",move:"Iron Tail",   type:"Steel",   note:"Silph Co."},
  {id:"TM24",move:"Thunderbolt", type:"Electric",note:"Celadon Game Corner — 4,000 coins"},
  {id:"TM25",move:"Thunder",     type:"Electric",note:"Power Plant — southeast room"},
  {id:"TM26",move:"Earthquake",  type:"Ground",  note:"Viridian City Gym — defeat Giovanni"},
  {id:"TM27",move:"Return",      type:"Normal",  note:"Route 12 gate — 2F"},
  {id:"TM28",move:"Dig",         type:"Ground",  note:"Cerulean City — defeat Team Rocket Grunt"},
  {id:"TM29",move:"Psychic",     type:"Psychic", note:"Saffron City — Mr. Psychic (SE house)"},
  {id:"TM30",move:"Shadow Ball",  type:"Ghost",   note:"Celadon Dept. Store — ₽3,000"},
  {id:"TM31",move:"Brick Break",  type:"Fighting",note:"S.S. Anne — second cabin from left"},
  {id:"TM32",move:"Double Team",  type:"Normal",  note:"Safari Zone — southeast of Secret House"},
  {id:"TM33",move:"Reflect",      type:"Psychic", note:"Celadon City Rooftop — give Lemonade"},
  {id:"TM34",move:"Shock Wave",   type:"Electric",note:"Vermilion City Gym — defeat Lt. Surge"},
  {id:"TM35",move:"Flamethrower", type:"Fire",    note:"Celadon Game Corner — 4,000 coins"},
  {id:"TM36",move:"Sludge Bomb",  type:"Poison",  note:"Rocket Warehouse — north-central room"},
  {id:"TM37",move:"Sandstorm",    type:"Rock",    note:"Victory Road — southwest"},
  {id:"TM38",move:"Fire Blast",   type:"Fire",    note:"Cinnabar Island Gym — defeat Blaine"},
  {id:"TM39",move:"Rock Tomb",    type:"Rock",    note:"Pewter City Gym — defeat Brock"},
  {id:"TM40",move:"Aerial Ace",   type:"Flying",  note:"Route 9 — southwest corner"},
  {id:"TM41",move:"Torment",      type:"Dark",    note:"Silph Co."},
  {id:"TM42",move:"Facade",       type:"Normal",  note:"Memorial Pillar — from NPC after sharing Lemonade"},
  {id:"TM43",move:"Secret Power", type:"Normal",  note:"Route 25 — northeast maze"},
  {id:"TM44",move:"Rest",         type:"Psychic", note:"S.S. Anne — second cabin from left"},
  {id:"TM45",move:"Attract",      type:"Normal",  note:"Route 24 — northwest hill"},
  {id:"TM46",move:"Thief",        type:"Dark",    note:"Mt. Moon — northeast platform"},
  {id:"TM47",move:"Steel Wing",   type:"Steel",   note:"Safari Zone — southwest of rest house"},
  {id:"TM48",move:"Skill Swap",   type:"Psychic", note:"Route 12 — requires Surf"},
  {id:"TM49",move:"Snatch",       type:"Dark",    note:"Rocket Hideout"},
  {id:"TM50",move:"Overheat",     type:"Fire",    note:"Victory Road — northwest area"},
];
const HM_DATA = [
  {id:"HM01",move:"Cut",       type:"Normal",  note:"S.S. Anne — from the Captain"},
  {id:"HM02",move:"Fly",       type:"Flying",  note:"Route 16 — woman in house behind Cut tree"},
  {id:"HM03",move:"Surf",      type:"Water",   note:"Safari Zone — Warden reward"},
  {id:"HM04",move:"Strength",  type:"Normal",  note:"Fuchsia City — Warden reward (return Gold Teeth)"},
  {id:"HM05",move:"Flash",     type:"Normal",  note:"Route 2 — Prof. Oak's aide (requires 10 Pokémon caught)"},
  {id:"HM06",move:"Rock Smash",type:"Fighting",note:"One Island — Ember Spa"},
  {id:"HM07",move:"Waterfall", type:"Water",   note:"One Island — Icefall Cave (back area)"},
];

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
const AUDITED_PARTS = new Set(["Part 1", "Part 2", "Part 3", "Part 4", "Part 5", "Part 6", "Part 7", "Part 8", "Part 9", "Part 10", "Part 11", "Part 12", "Part 13", "Part 14", "Part 15", "Part 16", "Part 17", "Part 18", "Part 19", "Part 20"]);

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
const NATIONAL_DEX_ID = Object.fromEntries(NATIONAL_DEX.map(p => [p.name, p.id]));
const allDexId = name => DEX_ID[name] || NATIONAL_DEX_ID[name] || null;
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
  "Ruin Maniac":"ruinmaniac","Lady":"lady-gen3",
  "Painter":"painter-gen3","Rocket Admin":"teamrocket",
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

// ─── TMs TAB ──────────────────────────────────────────────────────────────────
function TMsTab({ tmState }) {
  const [showTMs, setShowTMs] = useState(true);
  const [showHMs, setShowHMs] = useState(true);

  const tmDone  = TM_DATA.filter(t => tmState[t.id]).length;
  const hmDone  = HM_DATA.filter(h => tmState[h.id]).length;
  const total   = TM_DATA.length + HM_DATA.length;
  const done    = tmDone + hmDone;

  const renderRow = (entry) => {
    const obtained = tmState[entry.id];
    const tc  = TM_TYPE_COLOR[entry.type] || "#8a8a70";
    const isHM = entry.id.startsWith("HM");
    return (
      <div key={entry.id}
        style={{ display:"flex", alignItems:"center", gap:10, padding:"6px 20px",
                 cursor:"default", borderBottom:`1px solid ${C.border}`,
                 background: obtained ? "rgba(74,175,116,0.06)" : "transparent",
                 opacity: obtained ? 0.65 : 1 }}>
        {/* ID badge */}
        <span style={{ fontSize:10, fontWeight:"700", fontFamily:"'Courier New',monospace",
                       background: isHM ? "rgba(90,176,216,0.18)" : "rgba(255,255,255,0.08)",
                       color: isHM ? "#5ab0d8" : C.muted,
                       borderRadius:4, padding:"2px 6px", flexShrink:0, minWidth:38, textAlign:"center" }}>
          {entry.id}
        </span>
        {/* Move name */}
        <span style={{ fontSize:13, fontWeight:"600", flex:"0 0 130px",
                       color: obtained ? C.green : C.text }}>
          {entry.move}
        </span>
        {/* Type badge */}
        <span style={{ fontSize:10, fontWeight:"700", borderRadius:4, padding:"2px 8px",
                       background:`${tc}28`, color:tc, flexShrink:0, minWidth:68, textAlign:"center" }}>
          {entry.type}
        </span>
        {/* Location note */}
        <span style={{ fontSize:11, color:C.muted, flex:1, minWidth:0,
                       overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>
          {entry.note}
        </span>
        {/* Checkmark */}
        <span style={{ fontSize:14, color:C.green, flexShrink:0, width:18, textAlign:"center" }}>
          {obtained ? "✓" : ""}
        </span>
      </div>
    );
  };

  const SectionHeader = ({ label, count, total: tot, open, toggle }) => (
    <div style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 20px",
                  background:"rgba(0,0,0,0.25)", borderBottom:`1px solid ${C.border}`,
                  borderTop:`1px solid ${C.border}`, position:"sticky", top:52, zIndex:5 }}>
      <button onClick={toggle} style={{ background:"none", border:"none", color:C.muted,
                                        cursor:"pointer", fontSize:11, padding:0, flexShrink:0 }}>
        {open ? "▾" : "▸"}
      </button>
      <span style={{ fontWeight:"700", fontSize:12, color:C.text, flex:1 }}>{label}</span>
      <span style={{ fontSize:11, color: count===tot ? C.green : C.muted }}>
        <span style={{ color: count===tot ? C.green : "var(--frlg-accent)", fontWeight:"700" }}>{count}</span>
        <span> / {tot}</span>
      </span>
    </div>
  );

  return (
    <div style={{ flex:1, overflowY:"auto", display:"flex", flexDirection:"column" }}>
      {/* Tab header */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between",
                    padding:"12px 20px", borderBottom:`1px solid ${C.border}`,
                    background:C.card, position:"sticky", top:0, zIndex:10, flexShrink:0 }}>
        <div>
          <div style={{ fontSize:16, fontWeight:"700", color:C.text }}>TMs &amp; HMs</div>
          <div style={{ fontSize:11, color:C.muted, marginTop:2 }}>50 TMs · 7 HMs</div>
        </div>
        <div style={{ textAlign:"right" }}>
          <span style={{ color:"var(--frlg-accent)", fontWeight:"700", fontSize:18 }}>{done}</span>
          <span style={{ color:C.muted, fontSize:13 }}> / {total} obtained</span>
        </div>
      </div>

      {/* TMs section */}
      <SectionHeader label="Technical Machines (TM01–TM50)"
        count={tmDone} total={TM_DATA.length}
        open={showTMs} toggle={() => setShowTMs(v => !v)} />
      {showTMs && TM_DATA.map(renderRow)}

      {/* HMs section */}
      <SectionHeader label="Hidden Machines (HM01–HM07)"
        count={hmDone} total={HM_DATA.length}
        open={showHMs} toggle={() => setShowHMs(v => !v)} />
      {showHMs && HM_DATA.map(renderRow)}
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
  const [choiceGroups, setChoiceGroups] = useState({});  // {groupId: choiceId}
  const [tmState, setTmState]     = useState({});   // {TM01: true, HM03: true, ...}


  useEffect(() => {
    (async () => {
      try { const r = localStorage.getItem("fr-caught5");   if (r) setCaught(JSON.parse(r));   } catch {}
      try { const r = localStorage.getItem("fr-items5");    if (r) setItems(JSON.parse(r));    } catch {}
      try { const r = localStorage.getItem("fr-trainers1"); if (r) setTrainers(JSON.parse(r)); } catch {}
      try { const r = localStorage.getItem("frlg-version"); if (r) setVersion(r);              } catch {}
      try { const r = localStorage.getItem("frlg-badges");     if (r) setBadges(JSON.parse(r));       } catch {}
      try { const r = localStorage.getItem("frlg-checklist"); if (r) setChecklist(JSON.parse(r));    } catch {}
      try { const r = localStorage.getItem("frlg-choices");   if (r) setChoiceGroups(JSON.parse(r)); } catch {}
      try {
        const savedItems = JSON.parse(localStorage.getItem("fr-items5") || "{}");
        const savedTms   = JSON.parse(localStorage.getItem("frlg-tms")  || "{}");
        let changed = false;
        AREAS.forEach(area => {
          const sync = (its, keyFn) => its.forEach((it, i) => {
            const m = it.name.match(/^(TM\d{2}|HM\d{2})\b/);
            if (!m) return;
            if (savedItems[keyFn(i)] && !savedTms[m[1]]) { savedTms[m[1]] = true; changed = true; }
          });
          if (area.floors) area.floors.forEach(f => sync(f.items||[], i => `${area.id}|${f.label}|${i}`));
          else sync(area.items||[], i => `${area.id}|${i}`);
        });
        if (changed) localStorage.setItem("frlg-tms", JSON.stringify(savedTms));
        setTmState(savedTms);
      } catch {}

      setBooted(true);
    })();
  }, []);

  useEffect(() => {
    if (areaId) {
      try { localStorage.setItem("frlg-active-area", areaId); } catch {}
    }
  }, [areaId]);

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
      choices:   localStorage.getItem("frlg-choices"),
      tms:       localStorage.getItem("frlg-tms"),
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
          if (data.choices)    localStorage.setItem("frlg-choices",   data.choices);
          if (data.tms)        localStorage.setItem("frlg-tms",       data.tms);
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

  const toggleTm = useCallback((id) => {
    setTmState(prev => {
      const next = { ...prev };
      if (next[id]) delete next[id]; else next[id] = true;
      try { localStorage.setItem("frlg-tms", JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);



  const toggleCaught = useCallback((name, meta) => {
    const wasCaught = !!caught[name];
    setCaught(prev => {
      const next = { ...prev };
      if (next[name]) delete next[name]; else next[name] = true;
      try { localStorage.setItem("fr-caught5", JSON.stringify(next)); } catch {}
      return next;
    });
    if (meta?.choiceGroup && meta?.choiceId) {
      setChoiceGroups(prev => {
        const next = { ...prev };
        if (!wasCaught) { next[meta.choiceGroup] = meta.choiceId; }
        else if (prev[meta.choiceGroup] === meta.choiceId) { delete next[meta.choiceGroup]; }
        try { localStorage.setItem("frlg-choices", JSON.stringify(next)); } catch {}
        return next;
      });
    }
  }, [caught]);

  const toggleItem = useCallback((key, meta) => {
    const wasChecked = !!items[key];
    setItems(prev => {
      const next = { ...prev };
      if (next[key]) delete next[key]; else next[key] = true;
      try { localStorage.setItem("fr-items5", JSON.stringify(next)); } catch {}
      return next;
    });
    if (meta?.choiceGroup && meta?.choiceId) {
      setChoiceGroups(prev => {
        const next = { ...prev };
        if (!wasChecked) { next[meta.choiceGroup] = meta.choiceId; }
        else if (prev[meta.choiceGroup] === meta.choiceId) { delete next[meta.choiceGroup]; }
        try { localStorage.setItem("frlg-choices", JSON.stringify(next)); } catch {}
        return next;
      });
    }
    if (meta?.tmId) {
      setTmState(prev => {
        const next = { ...prev };
        if (wasChecked) { delete next[meta.tmId]; } else { next[meta.tmId] = true; }
        try { localStorage.setItem("frlg-tms", JSON.stringify(next)); } catch {}
        return next;
      });
    }
  }, [items]);

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
            <div style={{ fontSize:18, fontWeight:"700", letterSpacing:0.5, color:"#f5e8dc" }}>FRLG Tracker</div>
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
          {[["areas","Areas"],["dex","Pokédex"],["team","Dream Team"],["calc","Catch Calc"],["hunt","Hunt"],["tms","TMs"],["completion","100%"]].map(([t,label]) => (
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
      {tab === "areas" && <AreasTab caught={caught} toggleCaught={toggleCaught} items={items} toggleItem={toggleItem} trainers={trainers} toggleTrainer={toggleTrainer} areaId={areaId} setAreaId={setAreaId} area={area} search={search} setSearch={setSearch} version={version} isMobile={isMobile} choiceGroups={choiceGroups} />}

      {/* ── Tab: Dream Team ── */}
      {tab === "team" && <DreamTeamTab isMobile={isMobile} version={version} />}

      {/* ── Tab: Catch Calc ── */}
      {tab === "calc" && <CatchCalcTab isMobile={isMobile} />}

      {/* ── Tab: Hunt ── */}
      {tab === "hunt" && <HuntTab version={version} isMobile={isMobile} />}

      {/* ── Tab: TMs & HMs ── */}
      {tab === "tms" && <TMsTab tmState={tmState} />}

      {/* ── Tab: 100% Completion ── */}
      {tab === "completion" && <CompletionTab caught={caught} checklist={checklist} toggleChecklist={toggleChecklist} isMobile={isMobile} />}
    </div>
  );
}

// ─── DREAM TEAM TAB ───────────────────────────────────────────────────────────
function DreamTeamTab({ isMobile, version }) {
  const [favorite, setFavorite] = React.useState("");
  const [team, setTeam]         = React.useState(null);

  React.useEffect(() => {
    try {
      const r = localStorage.getItem("frlg-dream-team-v3");
      if (r) {
        const d = JSON.parse(r);
        setFavorite(d.favorite || "");
        const savedTeam = d.team || null;
        // Validate: discard if version mismatches OR if auto-selected members contain
        // a Pokémon exclusive to the other version (catches teams built by old code).
        const lgOnly = new Set(DT_CANDIDATES.filter(c => c.lgOnly).map(c => c.name));
        const frOnly = new Set(DT_CANDIDATES.filter(c => c.frOnly).map(c => c.name));
        const hasConflict = savedTeam && savedTeam.some(n => {
          if (n === d.favorite) return false; // user explicitly chose this
          const form = DT_FINAL_FORM[n] || n;
          return (version === "FR" && lgOnly.has(form)) ||
                 (version === "LG" && frOnly.has(form));
        });
        setTeam(d.version === version && !hasConflict ? savedTeam : null);
      }
    } catch {}
  }, []);

  // Clear stale team when the user switches version
  React.useEffect(() => {
    try {
      const r = localStorage.getItem("frlg-dream-team-v3");
      if (r) { const d = JSON.parse(r); if (d.version && d.version !== version) setTeam(null); }
    } catch {}
  }, [version]);

  const eligible = React.useMemo(() => DEX.filter(p => !DT_LEGENDARY.has(p.name)), []);

  const handleBuild = () => {
    if (!favorite) return;
    const t = buildDreamTeam(favorite, version);
    setTeam(t);
    try { localStorage.setItem("frlg-dream-team-v3", JSON.stringify({ favorite, team: t, version })); } catch {}
  };

  const versionLabel = (cand) => {
    if (cand.frOnly) return "FR";
    if (cand.lgOnly) return "LG";
    return null;
  };
  const needsTrade = (cand) => {
    if (!cand) return false;
    return (version === "FR" && cand.lgOnly) || (version === "LG" && cand.frOnly);
  };

  // Assign each contested one-time TM to a single best recipient
  const tmWinners   = team ? assignOneTimeTMs(team) : {};
  // Assign each HM to exactly one team member
  const hmAssignments = team ? assignHMs(team) : {};

  return (
    <div style={{ flex:1, overflowY:"auto", padding:"16px 20px" }}>
      <div style={{ marginBottom:16 }}>
        <div style={{ fontSize:10, letterSpacing:2, color:C.muted, marginBottom:4, textTransform:"uppercase" }}>Dream Team Builder</div>
        <div style={{ fontSize:12, color:C.muted, lineHeight:1.7 }}>Builds the best 6-Pokémon FireRed team around your favourite. Always includes Dragonite (the region pseudo-legendary), full HM coverage, no trade evolutions, Kanto only.</div>
      </div>
      <div style={{ display:"flex", gap:8, marginBottom:20, flexWrap:"wrap", alignItems:"center" }}>
        <select value={favorite} onChange={e => { setFavorite(e.target.value); setTeam(null); }}
          style={{ flex:1, minWidth:180, background:"rgba(0,0,0,0.3)", border:`1px solid ${C.border}`, color:favorite ? C.text : C.muted, padding:"9px 12px", fontFamily:"'DM Sans',system-ui,sans-serif", fontSize:13, borderRadius:6, outline:"none" }}>
          <option value="">Choose your favourite Pokémon…</option>
          {eligible.map(p => {
            const cand = DT_CANDIDATES.find(c => c.name === (DT_FINAL_FORM[p.name] || p.name));
            const vl = cand ? versionLabel(cand) : null;
            const trade = cand ? needsTrade(cand) : false;
            const suffix = trade ? ` (${vl} — needs trade)` : vl ? ` (${vl})` : "";
            return <option key={p.id} value={p.name}>#{String(p.id).padStart(3,"0")} {p.name}{suffix}</option>;
          })}
        </select>
        <button onClick={handleBuild} disabled={!favorite}
          style={{ padding:"9px 22px", background:favorite ? "var(--frlg-accent)" : "rgba(0,0,0,0.2)", color:favorite ? "#fff" : C.muted, border:"none", borderRadius:6, cursor:favorite ? "pointer" : "default", fontFamily:"'DM Sans',system-ui,sans-serif", fontSize:13, fontWeight:"700", whiteSpace:"nowrap" }}>
          Build Team
        </button>
      </div>
      {team ? (
        <div style={{ display:"grid", gridTemplateColumns:isMobile ? "1fr" : "repeat(3,1fr)", gap:12 }}>
          {team.map((name, idx) => {
            const isFav     = name === favorite;
            const isPseudo  = ["Dratini","Dragonair","Dragonite"].includes(name);
            const finalForm = DT_FINAL_FORM[name] || name;
            const dexEntry  = DEX.find(p => p.name === name);
            const candInfo  = DT_CANDIDATES.find(c => c.name === finalForm);
            const assignedHMs = Object.entries(hmAssignments)
              .filter(([,winner]) => winner === name).map(([hm]) => hm);
            const suppressedMoves = new Set(
              Object.entries(tmWinners).filter(([,winner]) => winner !== name).map(([move]) => move)
            );
            const moves     = getDreamMoves(name, suppressedMoves, assignedHMs);
            const acq       = getDreamAcquisition(name);
            const evoNote   = EVO_DELAY[name];
            const isPreEvo  = !!DT_FINAL_FORM[name];
            const vl        = candInfo ? versionLabel(candInfo) : null;
            const trade     = candInfo ? needsTrade(candInfo) : false;
            return (
              <div key={idx} style={{ background:C.card, border:`1px solid ${isFav ? "var(--frlg-accent)" : trade ? "#e07b3a" : isPseudo ? "#a87acc" : C.border}`, borderRadius:10, padding:"14px", display:"flex", flexDirection:"column", gap:9 }}>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                  {dexEntry && <img src={pokeSpriteUrl(dexEntry.id)} alt={name} style={{ width:48, height:48, imageRendering:"pixelated", flexShrink:0 }} />}
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:5, flexWrap:"wrap", marginBottom:2 }}>
                      <span style={{ fontSize:13, fontWeight:"700" }}>{name}</span>
                      {isFav   && <span style={{ fontSize:8, color:"var(--frlg-accent)", background:"rgba(var(--frlg-accent-rgb,212,98,26),0.12)", border:"1px solid rgba(var(--frlg-accent-rgb,212,98,26),0.4)", padding:"1px 5px", borderRadius:99, fontWeight:"700" }}>★ FAV</span>}
                      {isPseudo && !isFav && <span style={{ fontSize:8, color:"#a87acc", background:"rgba(168,122,204,0.12)", border:"1px solid #a87acc55", padding:"1px 5px", borderRadius:99, fontWeight:"700" }}>PSEUDO</span>}
                      {vl && !trade && <span style={{ fontSize:8, color: vl === "FR" ? "#d4621a" : "#3fa84a", background: vl === "FR" ? "rgba(212,98,26,0.12)" : "rgba(63,168,74,0.12)", border:`1px solid ${vl === "FR" ? "rgba(212,98,26,0.4)" : "rgba(63,168,74,0.4)"}`, padding:"1px 5px", borderRadius:99, fontWeight:"700" }}>{vl}</span>}
                      {trade && <span style={{ fontSize:8, color:"#e07b3a", background:"rgba(224,123,58,0.12)", border:"1px solid rgba(224,123,58,0.4)", padding:"1px 5px", borderRadius:99, fontWeight:"700" }}>⇄ TRADE ({vl})</span>}
                    </div>
                    <div style={{ fontSize:9, color:C.muted }}>
                      {dexEntry ? `#${String(dexEntry.id).padStart(3,"0")}` : ""}
                      {candInfo ? ` · ${candInfo.types.join("/")}` : (finalForm !== name ? ` · → ${finalForm}` : "")}
                    </div>
                  </div>
                </div>
                {assignedHMs.length > 0 && (
                  <div style={{ display:"flex", gap:3, flexWrap:"wrap" }}>
                    {assignedHMs.map(hm => <span key={hm} style={{ fontSize:8, color:"#4a8fc4", background:"rgba(74,143,196,0.10)", border:"1px solid rgba(74,143,196,0.3)", padding:"1px 6px", borderRadius:99, fontWeight:"700" }}>{hm}</span>)}
                  </div>
                )}
                <div>
                  <div style={{ fontSize:9, color:C.muted, letterSpacing:1.5, textTransform:"uppercase", marginBottom:5 }}>Moveset{isPreEvo ? ` (as ${finalForm})` : ""}</div>
                  {moves.map((m, i) => {
                    const isHM      = m.kind === "hm";
                    const isOneTime = m.kind === "tm" && m.oneTime;
                    const moveColor = isHM      ? "#4a8fc4"
                                    : isOneTime ? "#e8a020"
                                    : m.kind === "tm" ? C.gold
                                    : (MOVE_TIERS && MOVE_TIERS.good && MOVE_TIERS.good.has(m.move)) ? C.green
                                    : C.text;
                    return (
                      <div key={i} style={{ display:"flex", alignItems:"baseline", gap:6, marginBottom:3 }}>
                        <span style={{ fontSize:11, fontWeight:"600", minWidth:0, color:moveColor }}>{m.move}</span>
                        <span style={{ fontSize:9, color:C.muted, flex:1, lineHeight:1.4 }}>{m.src}</span>
                        {isOneTime && <span style={{ fontSize:8, color:"#e8a020", background:"rgba(232,160,32,0.12)", border:"1px solid rgba(232,160,32,0.3)", borderRadius:3, padding:"0 4px", flexShrink:0, whiteSpace:"nowrap" }}>1× only</span>}
                      </div>
                    );
                  })}
                  {moves.length === 0 && <div style={{ fontSize:10, color:C.muted }}>No moveset data available.</div>}
                </div>
                <div>
                  <div style={{ fontSize:9, color:C.muted, letterSpacing:1.5, textTransform:"uppercase", marginBottom:3 }}>Where to Get</div>
                  <div style={{ fontSize:10, color:C.text, lineHeight:1.5 }}>{acq}</div>
                </div>
                {evoNote && (
                  <div style={{ fontSize:10, color:"#c8960a", lineHeight:1.5, padding:"5px 8px", background:"rgba(200,150,10,0.08)", borderRadius:5, borderLeft:"2px solid #c8960a" }}>
                    ⏳ {evoNote}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ textAlign:"center", color:C.muted, padding:"60px 20px", display:"flex", flexDirection:"column", alignItems:"center", gap:12 }}>
          <div style={{ fontSize:40, opacity:0.25 }}>⚔</div>
          <div style={{ fontSize:14, fontWeight:"600", color:C.text, opacity:0.5 }}>Your dream team awaits</div>
          <div style={{ fontSize:12, maxWidth:380, lineHeight:1.8 }}>Pick your favourite and hit <strong style={{ color:C.text }}>Build Team</strong> to get a complete, HM-ready team with recommended movesets.</div>
        </div>
      )}
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

  const dexId = selected ? allDexId(selected) : null;
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
          const id = allDexId(name);
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
                        <RateDisplay rate={loc.rate} isMobile={isMobile} />
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

// ─── NATIONAL POKÉDEX PANEL ──────────────────────────────────────────────────
function NationalDexPanel({ caught, toggleCaught, setDexSelected, version }) {
  const [collapsed, setCollapsed] = React.useState(false);
  const caughtCount = NATIONAL_DEX.filter(p => caught[p.name]).length;
  const isOtherVer = p => (version === "fr" && p.lgOnly) || (version === "lg" && p.frOnly);

  return (
    <div style={{ marginTop:20, border:`1px solid ${C.border}`, borderRadius:8, overflow:"hidden" }}>
      <div onClick={() => setCollapsed(c => !c)}
        style={{ padding:"10px 14px", background:C.card, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"space-between", userSelect:"none" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <span style={{ fontWeight:"700", fontSize:13, color:C.text }}>National Pokédex (Post-Game)</span>
          <span style={{ fontSize:11, color:C.muted }}>{caughtCount} / {NATIONAL_DEX.length} — not counted toward completion</span>
        </div>
        <span style={{ color:C.muted, fontSize:11 }}>{collapsed ? "▶" : "▼"}</span>
      </div>
      {!collapsed && (
        <div style={{ padding:"10px 12px", background:"rgba(0,0,0,0.12)" }}>
          <div style={{ fontSize:10, color:C.muted, marginBottom:8, lineHeight:1.5 }}>
            Gen II Pokémon found in the Sevii Islands post-game. Includes wild catches, gifts, and evolutions of Kanto Pokémon achievable in FRLG.
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(72px,1fr))", gap:5 }}>
            {NATIONAL_DEX.map(p => {
              const isCaught = !!caught[p.name];
              const isDimmed = isOtherVer(p);
              return (
                <div key={p.id}
                  onClick={() => { if (!isDimmed) { toggleCaught(p.name); setDexSelected(p.name); } }}
                  style={{
                    background: isCaught ? "rgba(74,175,116,0.10)" : C.card,
                    border:`1px solid ${isCaught ? C.green : p.lgOnly ? C.lgGreen : p.frOnly ? "#c85252" : C.border}`,
                    borderRadius:7, padding:"6px 4px 5px", cursor:isDimmed?"default":"pointer",
                    textAlign:"center", opacity:isDimmed?0.3:1, position:"relative", transition:"all 0.1s",
                  }}>
                  {isCaught && <div style={{ position:"absolute", top:3, left:4, fontSize:8, color:C.green, fontWeight:"700" }}>✓</div>}
                  {p.frOnly && <div style={{ position:"absolute", top:3, right:3, fontSize:7, color:"#c85252", fontWeight:"600" }}>FR</div>}
                  {p.lgOnly && <div style={{ position:"absolute", top:3, right:3, fontSize:7, color:C.lgGreen, fontWeight:"600" }}>LG</div>}
                  <img src={pokeSpriteUrl(p.id)} alt={p.name}
                    style={{ width:36, height:36, imageRendering:"pixelated", display:"block", margin:"0 auto",
                             opacity:isCaught?1:0.7, filter:isCaught?"none":"brightness(0)" }} />
                  <div style={{ fontSize:8, color:C.muted, fontFamily:"'Courier New',monospace" }}>#{String(p.id).padStart(3,"0")}</div>
                  <div style={{ fontSize:9, color:isCaught?C.green:C.text, fontWeight:isCaught?"600":"400", lineHeight:1.2, wordBreak:"break-word" }}>{p.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── POKÉDEX TAB ──────────────────────────────────────────────────────────────
function DexTab({ caught, toggleCaught, dexFilter, setDexFilter, dexSelected, setDexSelected, version, isMobile }) {
  const caughtCount = Object.keys(caught).length;
  const filters = [["all","All"],["caught","Caught"],["missing","Missing"],["fr","FR Only"],["lg","LG Only"],["event","Event"],["noball","No Poké Ball"]];
  const isOtherVersionDex = (p) => (version === "fr" && p.lgOnly) || (version === "lg" && p.frOnly);
  const [dexSearch, setDexSearch] = React.useState("");

  const filtered = DEX.filter(p => {
    if (dexFilter === "caught")  return caught[p.name];
    if (dexFilter === "missing") return !caught[p.name] && !isOtherVersionDex(p);
    if (dexFilter === "fr")      return p.frOnly;
    if (dexFilter === "lg")      return p.lgOnly;
    if (dexFilter === "event")   return p.event;
    if (dexFilter === "noball")  return !!CATCH_CONSTRAINT_MAP[p.name];
    return !isOtherVersionDex(p);
  });

  const searchTerm = dexSearch.trim().toLowerCase();
  const displayed = searchTerm ? filtered.filter(p => p.name.toLowerCase().includes(searchTerm)) : filtered;

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
        {/* Search input */}
        <div style={{ marginTop:8, position:"relative" }}>
          <input value={dexSearch} onChange={e => setDexSearch(e.target.value)}
            placeholder="Search Pokémon…"
            style={{ width:"100%", background:"rgba(0,0,0,0.25)", border:`1px solid ${C.border}`, color:C.text,
                     padding:"7px 32px 7px 12px", fontFamily:"'DM Sans',system-ui,sans-serif", fontSize:13,
                     borderRadius:6, boxSizing:"border-box", outline:"none" }} />
          {dexSearch
            ? <button onClick={() => setDexSearch("")} style={{ position:"absolute", right:8, top:"50%", transform:"translateY(-50%)", background:"transparent", border:"none", color:C.muted, cursor:"pointer", fontSize:16, padding:"0 2px", lineHeight:1, fontFamily:"sans-serif" }}>×</button>
            : <span style={{ position:"absolute", right:10, top:"50%", transform:"translateY(-50%)", fontSize:13, color:C.muted, pointerEvents:"none" }}>🔍</span>
          }
        </div>
        {searchTerm && <div style={{ marginTop:5, fontSize:11, color:C.muted }}>{displayed.length} result{displayed.length !== 1 ? "s" : ""}</div>}
      </div>

      <div style={{ display:"flex", flex:1, overflow:"hidden" }}>
        {/* Grid */}
        <div style={{ flex:1, overflowY:"auto", padding:"12px 16px", paddingBottom: isMobile && selected ? 220 : 12 }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(86px,1fr))", gap:6 }}>
            {displayed.map(p => {
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
          {displayed.length === 0 && <div style={{ textAlign:"center", padding:40, color:C.muted, fontSize:12 }}>{searchTerm ? `No Pokémon match "${dexSearch}".` : "No Pokémon match this filter."}</div>}
          <LivingDexPanel caught={caught} />
          <NationalDexPanel caught={caught} toggleCaught={toggleCaught} setDexSelected={setDexSelected} version={version} />
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

function EvoNode({ name, isCurrent, caught }) {
  const id = allDexId(name);
  const isCaught = !!caught[name];
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:3,
                  padding:"5px 7px", borderRadius:7,
                  background: isCurrent ? "rgba(212,98,26,0.15)" : "rgba(0,0,0,0.18)",
                  border: `1px solid ${isCurrent ? "rgba(212,98,26,0.5)" : C.border}`,
                  minWidth:52 }}>
      {id && <img src={pokeSpriteUrl(id)} alt={name}
        style={{ width:36, height:36, imageRendering:"pixelated",
                 opacity: isCaught ? 1 : 0.55,
                 filter: isCaught ? "none" : "brightness(0)" }} />}
      <span style={{ fontSize:9, fontWeight:"600",
                     color: isCurrent ? C.accent : (isCaught ? C.green : C.muted),
                     textAlign:"center", lineHeight:1.2, maxWidth:56, wordBreak:"break-word" }}>
        {name}
      </span>
      {isCaught && <span style={{ fontSize:8, color:C.green, lineHeight:1 }}>✓</span>}
    </div>
  );
}

function EvoArrow() {
  return <span style={{ fontSize:14, color:C.border, flexShrink:0, alignSelf:"center" }}>›</span>;
}

function EvoChainDisplay({ name, caught }) {
  const chain = EVO_MAP[name];
  if (!chain) return null;
  // Single-stage Pokémon — no chain to show
  if (Array.isArray(chain) && chain.length === 1) return null;

  if (Array.isArray(chain)) {
    return (
      <div style={{ marginBottom:14 }}>
        <div style={{ fontSize:10, letterSpacing:2, color:C.muted, marginBottom:8, textTransform:"uppercase" }}>Evolution</div>
        <div style={{ display:"flex", alignItems:"center", gap:5, flexWrap:"nowrap", overflowX:"auto", paddingBottom:4 }}>
          {chain.map((n, i) => (
            <React.Fragment key={n}>
              {i > 0 && <EvoArrow />}
              <EvoNode name={n} isCurrent={n === name} caught={caught} />
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  // Branching chain (Eevee-style)
  const { pre, post } = chain;
  return (
    <div style={{ marginBottom:14 }}>
      <div style={{ fontSize:10, letterSpacing:2, color:C.muted, marginBottom:8, textTransform:"uppercase" }}>Evolution</div>
      <div style={{ display:"flex", alignItems:"flex-start", gap:5 }}>
        <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
          {pre.map((n, i) => (
            <React.Fragment key={n}>
              {i > 0 && <EvoArrow />}
              <EvoNode name={n} isCurrent={n === name} caught={caught} />
            </React.Fragment>
          ))}
        </div>
        <EvoArrow />
        <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
          {post.map(branch => (
            <div key={branch[0]} style={{ display:"flex", alignItems:"center", gap:5 }}>
              {branch.map((n, i) => (
                <React.Fragment key={n}>
                  {i > 0 && <EvoArrow />}
                  <EvoNode name={n} isCurrent={n === name} caught={caught} />
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
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
      {!compact && <EvoChainDisplay name={selected.name} caught={caught} />}
      {!compact && (() => {
        const moves = LEARNSETS[selected.name];
        const delay = EVO_DELAY[selected.name];
        if ((!moves || moves.length === 0) && !delay) return null;
        return (
          <div style={{ marginBottom:14 }}>
            <div style={{ fontSize:10, letterSpacing:2, color:C.muted, marginBottom:8, textTransform:"uppercase" }}>Level-up Moves</div>
            {moves && moves.length > 0 && (
              <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"2px 12px", marginBottom: delay ? 8 : 0 }}>
                {moves.map((m, i) => {
                  const isGood = MOVE_TIERS.good.has(m.move);
                  const isSkip = MOVE_TIERS.skip.has(m.move);
                  return (
                    <div key={i} style={{ display:"flex", alignItems:"baseline", gap:5, padding:"2px 0" }}>
                      <span style={{ fontSize:10, fontWeight:"700", color:C.gold, fontFamily:"'Courier New',monospace", minWidth:20, textAlign:"right" }}>{m.lv}</span>
                      <span style={{ fontSize:10, color: isGood ? C.green : isSkip ? C.muted : C.text }}>{m.move}</span>
                    </div>
                  );
                })}
              </div>
            )}
            {delay && (
              <div style={{ fontSize:10, color:"#c8960a", lineHeight:1.5, padding:"5px 8px", background:"rgba(200,150,10,0.08)", borderRadius:5, borderLeft:"2px solid #c8960a" }}>
                ⏳ {delay}
              </div>
            )}
          </div>
        );
      })()}
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
function AreasTab({ caught, toggleCaught, items, toggleItem, trainers, toggleTrainer, areaId, setAreaId, area, search, setSearch, version, isMobile, choiceGroups }) {
  const isPassedPokemon = p  => !!(p.choiceGroup  && choiceGroups?.[p.choiceGroup]  && choiceGroups[p.choiceGroup]  !== p.choiceId);
  const isPassedItem    = it => !!(it.choiceGroup && choiceGroups?.[it.choiceGroup] && choiceGroups[it.choiceGroup] !== it.choiceId);
  const visibleAreas = useMemo(() => AREAS.filter(a => AUDITED_PARTS.has(a.part)), []);
  const groups = useMemo(() => groupByPart(visibleAreas), [visibleAreas]);
  const filtered = useMemo(() => search.trim() ? visibleAreas.filter(a => a.name.toLowerCase().includes(search.toLowerCase())) : null, [search, visibleAreas]);
  const [collapsedFloors, setCollapsedFloors] = useState(() => {
    try { const r = localStorage.getItem("frlg-collapsed-floors"); return r ? new Set(Object.keys(JSON.parse(r))) : new Set(); } catch { return new Set(); }
  });
  const toggleFloor = (key) => setCollapsedFloors(prev => {
    const n = new Set(prev);
    n.has(key) ? n.delete(key) : n.add(key);
    try { const obj = {}; n.forEach(k => { obj[k] = true; }); localStorage.setItem("frlg-collapsed-floors", JSON.stringify(obj)); } catch {}
    return n;
  });

  const areaPokemon  = area ? flattenPokemon(area)  : [];
  const areaItems    = area ? flattenItems(area)    : [];
  const areaTrainers = area ? flattenTrainers(area) : [];
  const verPokemon      = areaPokemon.filter(p => !(version === "fr" && p.lgOnly) && !(version === "lg" && p.frOnly));
  const relevantPokemon = verPokemon.filter(p => !isPassedPokemon(p));
  const pokeDone        = relevantPokemon.filter(p => caught[p.name]).length;
  const nonTradePokemon  = relevantPokemon.filter(p => p.method !== "Trade");
  const pendingTrades    = relevantPokemon.filter(p => p.method === "Trade" && !caught[p.name]);
  const nonTradePokeDone = nonTradePokemon.filter(p => caught[p.name]).length;
  const relevantItems   = areaItems.filter(it => !isPassedItem(it));
  const itemDone        = area && !area.floors
    ? areaItems.reduce((n, it, i) => n + (!isPassedItem(it) && items[flatItemKey(areaId, i)] ? 1 : 0), 0)
    : area?.floors?.reduce((n, floor) => n + (floor.items||[]).reduce((m, it, i) => m + (!isPassedItem(it) && items[floorItemKey(areaId, floor.label, i)] ? 1 : 0), 0), 0) ?? 0;
  const nonOptionalItems    = relevantItems.filter(it => !it.optional && !it.recurring);
  const nonOptionalItemDone = area && !area.floors
    ? areaItems.reduce((n, it, i) => n + (!isPassedItem(it) && !it.optional && !it.recurring && items[flatItemKey(areaId, i)] ? 1 : 0), 0)
    : area?.floors?.reduce((n, floor) => n + (floor.items||[]).reduce((m, it, i) => m + (!isPassedItem(it) && !it.optional && !it.recurring && items[floorItemKey(areaId, floor.label, i)] ? 1 : 0), 0), 0) ?? 0;
  const trainerDone     = areaTrainers.filter(t => trainers[`${areaId}|${t.class}|${t.name}`]).length;

  // Prev / Next navigation
  const currentIdx = areaId ? visibleAreas.findIndex(a => a.id === areaId) : -1;
  const prevArea = currentIdx > 0 ? visibleAreas[currentIdx - 1] : null;
  const nextArea = currentIdx >= 0 && currentIdx < visibleAreas.length - 1 ? visibleAreas[currentIdx + 1] : null;

  // Mark-all helpers (skip passed choice-group entries)
  const markAllPokemon  = (poks) => { const seen = new Set(); poks.forEach(p => { if (seen.has(p.name)) return; seen.add(p.name); if (!caught[p.name] && !isPassedPokemon(p)) toggleCaught(p.name, p.choiceGroup ? {choiceGroup:p.choiceGroup, choiceId:p.choiceId} : undefined); }); };
  const clearAllPokemon = (poks) => { const seen = new Set(); poks.forEach(p => { if (seen.has(p.name)) return; seen.add(p.name); if (caught[p.name]  && !isPassedPokemon(p)) toggleCaught(p.name, p.choiceGroup ? {choiceGroup:p.choiceGroup, choiceId:p.choiceId} : undefined); }); };
  const markAllItems    = (its, keyFn) => its.forEach((it, i) => { if (isPassedItem(it)) return; const k = keyFn(it, i); const tmM = it.name.match(/^(TM\d{2}|HM\d{2})\b/); const tmId = tmM ? tmM[1] : undefined; if (!items[k]) toggleItem(k, { ...(it.choiceGroup ? {choiceGroup:it.choiceGroup, choiceId:it.choiceId} : {}), ...(tmId ? {tmId} : {}) }); });
  const clearAllItems   = (its, keyFn) => its.forEach((it, i) => { if (isPassedItem(it)) return; const k = keyFn(it, i); const tmM = it.name.match(/^(TM\d{2}|HM\d{2})\b/); const tmId = tmM ? tmM[1] : undefined; if (items[k])  toggleItem(k, { ...(it.choiceGroup ? {choiceGroup:it.choiceGroup, choiceId:it.choiceId} : {}), ...(tmId ? {tmId} : {}) }); });
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
          ? filtered.map(a => <AreaRow key={a.id} area={a} areaId={areaId} setAreaId={setAreaId} caught={caught} items={items} trainers={trainers} version={version} choiceGroups={choiceGroups} />)
          : Object.entries(groups).map(([part, list]) => (
              <div key={part}>
                <div style={{ padding:"6px 12px", fontSize:10, letterSpacing:2, color:C.muted, textTransform:"uppercase", background:"rgba(0,0,0,0.2)", borderBottom:`1px solid ${C.border}` }}>{part}</div>
                {list.map(a => <AreaRow key={a.id} area={a} areaId={areaId} setAreaId={setAreaId} caught={caught} items={items} trainers={trainers} version={version} choiceGroups={choiceGroups} />)}
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
              const allDone = nonTradePokemon.length + nonOptionalItems.length + areaTrainers.length > 0 &&
                nonTradePokeDone === nonTradePokemon.length && nonOptionalItemDone === nonOptionalItems.length && trainerDone === areaTrainers.length;
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
                        {pendingTrades.length > 0 && <span style={{ fontSize:9, color:"#c8960a", background:"rgba(200,150,10,0.10)", border:"1px solid rgba(200,150,10,0.4)", padding:"1px 7px", borderRadius:99, fontWeight:"700", letterSpacing:0.5 }}>⇄ TRADE</span>}
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
                    <MiniBar label="Pokémon"  done={pokeDone}    total={relevantPokemon.length} color={C.green} />
                    <MiniBar label="Items"    done={itemDone}    total={relevantItems.length}   color={C.gold} />
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
                  const floorVerPoks    = (floor.pokemon || []).filter(p => !(version === "fr" && p.lgOnly) && !(version === "lg" && p.frOnly));
                  const relevFloorPoks  = floorVerPoks.filter(p => !isPassedPokemon(p));
                  const pokDone         = relevFloorPoks.filter(p => caught[p.name]).length;
                  const relevFloorItems = (floor.items || []).filter(it => !isPassedItem(it));
                  const itmDone         = (floor.items || []).reduce((n, it, i) => n + (!isPassedItem(it) && items[floorItemKey(areaId, floor.label, i)] ? 1 : 0), 0);
                  const trnDone         = (floor.trainers || []).filter(t => trainers[`${areaId}|${t.class}|${t.name}`]).length;
                  const floorTotal = relevFloorPoks.length + relevFloorItems.length + (floor.trainers||[]).length;
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
                            <Section title="Wild Pokémon" count={`${pokDone}/${relevFloorPoks.length}`} color={C.green}
                              allDone={pokDone===relevFloorPoks.length && relevFloorPoks.length>0}
                              onMarkAll={() => pokDone===relevFloorPoks.length ? clearAllPokemon(floorVerPoks) : markAllPokemon(floorVerPoks)}>
                              {!hasPoks ? <Empty text="No wild Pokémon here" /> : renderPokemonList(floor.pokemon, caught, toggleCaught, version, isMobile, choiceGroups)}
                            </Section>
                            <Section title="Items" count={`${itmDone}/${relevFloorItems.length}`} color={C.gold}
                              allDone={itmDone===relevFloorItems.length && relevFloorItems.length>0}
                              onMarkAll={() => { const kfn = (it,i) => floorItemKey(areaId,floor.label,i); itmDone===relevFloorItems.length ? clearAllItems(floor.items||[],kfn) : markAllItems(floor.items||[],kfn); }}>
                              {!hasItms ? <Empty text="No items here" /> : floor.items.map((it,i) => {
                                const key = floorItemKey(areaId, floor.label, i);
                                return <ItemEntry key={i} it={it} itemKey={key} done={!!items[key]} toggleItem={toggleItem} isMobile={isMobile} choiceGroups={choiceGroups} />;
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
                    <Section title="Wild Pokémon" count={`${pokeDone}/${relevantPokemon.length}`} color={C.green}
                      allDone={pokeDone===relevantPokemon.length && relevantPokemon.length>0}
                      onMarkAll={() => pokeDone===relevantPokemon.length ? clearAllPokemon(verPokemon) : markAllPokemon(verPokemon)}>
                      {areaPokemon.length === 0 ? <Empty text="No wild Pokémon here" /> :
                        renderPokemonList(areaPokemon, caught, toggleCaught, version, isMobile, choiceGroups)
                      }
                    </Section>
                    <Section title="Items" count={`${itemDone}/${relevantItems.length}`} color={C.gold}
                      allDone={itemDone===relevantItems.length && relevantItems.length>0}
                      onMarkAll={() => { const kfn = (_,i) => flatItemKey(areaId,i); itemDone===relevantItems.length ? clearAllItems(areaItems,kfn) : markAllItems(areaItems,kfn); }}>
                      {areaItems.length === 0 ? <Empty text="No items here" /> :
                        areaItems.map((it,i) => {
                          const key = flatItemKey(areaId, i);
                          return <ItemEntry key={i} it={it} itemKey={key} done={!!items[key]} toggleItem={toggleItem} isMobile={isMobile} choiceGroups={choiceGroups} />;
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
function AreaRow({ area, areaId, setAreaId, caught, items, trainers, version, choiceGroups }) {
  const isSel  = areaId === area.id;
  const isPok  = p  => !!(p.choiceGroup  && choiceGroups?.[p.choiceGroup]  && choiceGroups[p.choiceGroup]  !== p.choiceId);
  const isItm  = it => !!(it.choiceGroup && choiceGroups?.[it.choiceGroup] && choiceGroups[it.choiceGroup] !== it.choiceId);
  const allPoksWithTrades = flattenPokemon(area).filter(p =>
    !(version === "fr" && p.lgOnly) && !(version === "lg" && p.frOnly) && !isPok(p));
  const tradePoks = allPoksWithTrades.filter(p => p.method === "Trade");
  const allPoks   = allPoksWithTrades.filter(p => p.method !== "Trade");
  const hasPendingTrades = tradePoks.some(p => !caught[p.name]);
  const hasPendingSurfItems = area.floors
    ? area.floors.some(f => (f.items||[]).some((it, i) => it.surf && !items[floorItemKey(area.id, f.label, i)]))
    : (area.items||[]).some((it, i) => it.surf && !items[flatItemKey(area.id, i)]);
  const allTrns = flattenTrainers(area);
  const pd  = allPoks.filter(p => caught[p.name]).length;
  // Item done/total excluding passed choice-group entries
  const { id_, itTotal } = (() => {
    let done = 0, total = 0;
    const countFloor = (its, keyFn) => its.forEach((it, i) => { if (isItm(it) || it.optional || it.recurring) return; total++; if (items[keyFn(i)]) done++; });
    if (area.floors) area.floors.forEach(f => countFloor(f.items || [], i => floorItemKey(area.id, f.label, i)));
    else countFloor(area.items || [], i => flatItemKey(area.id, i));
    return { id_: done, itTotal: total };
  })();
  const td  = allTrns.filter(t => trainers[`${area.id}|${t.class}|${t.name}`]).length;
  const total = allPoks.length + itTotal + allTrns.length;
  const allDone = total > 0 && (pd + id_ + td) === total;
  const tint = AREA_TINT[getAreaType(area)];
  return (
    <div onClick={() => setAreaId(area.id)} style={{
        padding:"8px 12px", cursor:"pointer",
        borderBottom:`1px solid rgba(58,42,28,0.5)`,
        borderLeft: isSel ? `3px solid var(--frlg-accent)` : `3px solid ${tint.bar}`,
        background: isSel ? "rgba(var(--frlg-accent-rgb,212,98,26),0.18)" : tint.bg,
        transition:"background 0.1s" }}
      onMouseEnter={e => { if (!isSel) e.currentTarget.style.background="rgba(255,255,255,0.04)"; }}
      onMouseLeave={e => { if (!isSel) e.currentTarget.style.background=tint.bg; }}>
      <div style={{ display:"flex", alignItems:"center", gap:5 }}>
        <span style={{ fontSize:12, fontWeight: isSel ? "700" : "400", color: allDone ? C.green : isSel ? "var(--frlg-accent)" : "#c4a888", lineHeight:1.4, flex:1 }}>{allDone ? "✓ " : ""}{area.name}</span>
        {hasPendingTrades && <span style={{ fontSize:9, color:"#c8960a", background:"rgba(200,150,10,0.12)", border:"1px solid rgba(200,150,10,0.35)", padding:"1px 5px", borderRadius:99, fontWeight:"700", flexShrink:0 }}>⇄</span>}
        {hasPendingSurfItems && <span style={{ fontSize:9, color:"#4a8fc4", background:"rgba(74,143,196,0.12)", border:"1px solid rgba(74,143,196,0.35)", padding:"1px 5px", borderRadius:99, fontWeight:"700", flexShrink:0 }}>≈</span>}
      </div>
      {total > 0 && (
        <div style={{ display:"flex", gap:10, marginTop:3, fontSize:10, color:C.muted }}>
          <span style={{ color: pd===allPoks.length && allPoks.length>0 ? C.green : C.muted }}>{pd}/{allPoks.length} pkm</span>
          <span style={{ color: id_===itTotal && itTotal>0 ? C.gold : C.muted }}>{id_}/{itTotal} itm</span>
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

function renderPokemonList(pokemon, caught, toggleCaught, version, isMobile, choiceGroups) {
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
      : <PokemonEntry key={item.key} p={item.p} caught={caught} toggleCaught={toggleCaught} version={version} isMobile={isMobile} choiceGroups={choiceGroups} />
  );
}

function PokemonEntry({ p, caught, toggleCaught, version, isMobile, choiceGroups }) {
  const isCaught = !!caught[p.name];
  if ((version === "fr" && p.lgOnly) || (version === "lg" && p.frOnly)) return null;

  const isPassed = !!(p.choiceGroup && choiceGroups?.[p.choiceGroup] && choiceGroups[p.choiceGroup] !== p.choiceId);

  // Determine if a better-rate area exists for this Pokémon
  const splitMatch = p.rate && p.rate.match(/^(\S+)\s+FR\s*\/\s*(\S+)\s+LG$/i);
  const currentPct = splitMatch
    ? parseRatePct(version === "fr" ? splitMatch[1] : splitMatch[2])
    : parseRatePct(p.rate);
  const best = BEST_AREA_MAP[version][p.name];
  const hasBetter = !isCaught && currentPct && best && best.pct > currentPct;

  return (
    <Row done={isCaught} passed={isPassed} onClick={isPassed ? undefined : () => toggleCaught(p.name, p.choiceGroup ? {choiceGroup:p.choiceGroup, choiceId:p.choiceId} : undefined)}>
      {allDexId(p.name) && <img src={pokeSpriteUrl(allDexId(p.name))} alt={p.name} style={{ width:36, height:36, imageRendering:"pixelated", flexShrink:0, opacity:isCaught?1:0.65, filter:isCaught?"none":"brightness(0)" }} />}
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
        <RateDisplay rate={p.rate} isMobile={isMobile} />
        {p.levels&&<div style={{ fontSize:10, color:C.muted }}>Lv.{p.levels}</div>}
      </div>
    </Row>
  );
}

function ItemEntry({ it, itemKey, done, toggleItem, isMobile, choiceGroups }) {
  const isPassed = !!(it.choiceGroup && choiceGroups?.[it.choiceGroup] && choiceGroups[it.choiceGroup] !== it.choiceId);
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
      <Row done={done} passed={isPassed} onClick={isPassed ? undefined : () => { const tmM = it.name.match(/^(TM\d{2}|HM\d{2})\b/); const tmId = tmM ? tmM[1] : undefined; toggleItem(itemKey, { ...(it.choiceGroup ? {choiceGroup:it.choiceGroup, choiceId:it.choiceId} : {}), ...(tmId ? {tmId} : {}) }); }}>
        {itemSpriteUrl(it.name)&&<img src={itemSpriteUrl(it.name)} alt={it.name} style={{ width:24, height:24, imageRendering:"pixelated", flexShrink:0 }} />}
        <div style={{ flex:1 }}>
          <span style={{ fontSize:12, fontWeight:"600", color:it.hidden?C.gold:C.text }}>
            {it.hidden&&<span style={{ color:C.gold, marginRight:4 }}>★</span>}{it.name}
            {it.recurring&&<span style={{ fontSize:9, color:"#6bb8d4", marginLeft:6, fontWeight:"700", letterSpacing:0.5 }}>↻</span>}
            {it.surf&&<span style={{ fontSize:9, color:"#4a8fc4", marginLeft:6, fontWeight:"700", letterSpacing:0.5 }}>≈</span>}
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
              const pid=allDexId(p.name);
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
      <div>{children}</div>
    </div>
  );
}

function Row({ done, passed, onClick, children }) {
  if (passed) return (
    <div style={{ display:"flex", alignItems:"flex-start", gap:10, padding:"10px 14px", minHeight:44, borderBottom:`1px solid ${C.border}20`, opacity:0.3, cursor:"default" }}>
      <div style={{ width:18, height:18, border:`2px solid ${C.border}`, borderRadius:4, flexShrink:0, marginTop:1, display:"flex", alignItems:"center", justifyContent:"center" }}>
        <span style={{ color:C.muted, fontSize:13, lineHeight:1, fontWeight:"700" }}>—</span>
      </div>
      <div style={{ display:"flex", justifyContent:"space-between", flex:1 }}>{children}</div>
    </div>
  );
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
function RateDisplay({ rate, isMobile }) {
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

  if (isMobile) {
    return (
      <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:2 }}>
        {badge}
        {hasMath && (
          <div style={{ fontSize:9, color:C.muted, textAlign:"right", lineHeight:1.3 }}>
            {splitMatch ? (
              <>
                {frMath && <span style={{ color:"rgba(200,82,82,0.7)" }}>FR ~{frMath.avg} / ≤{frMath.conf95}</span>}
                {frMath && lgMath && <br />}
                {lgMath && <span style={{ color:"rgba(63,168,74,0.7)" }}>LG ~{lgMath.avg} / ≤{lgMath.conf95}</span>}
              </>
            ) : (
              <span>~{simpleMath.avg} avg · ≤{simpleMath.conf95} for 95%</span>
            )}
          </div>
        )}
      </div>
    );
  }

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

// Expose data for overlay.html
if (typeof window !== 'undefined') {
  window.__FRLG_AREAS         = AREAS;
  window.__FRLG_DEX_ID        = DEX_ID;
  window.__FRLG_NATIONAL_DEX_ID = NATIONAL_DEX_ID;
  window.__FRLG_ITEM_SPRITE   = ITEM_SPRITE;
}
