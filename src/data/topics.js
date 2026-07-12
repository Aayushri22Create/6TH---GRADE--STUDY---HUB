
Action: file_editor create /app/frontend/src/data/topics.js --file-text "// Content for each topic: kid-friendly explanation blocks + practice quiz.
// Written to feel like a friendly tutor for a struggling 6th grader.

export const SUBJECTS = [
  {
    id: \"math\",
    name: \"Math\",
    color: \"#A7F3D0\",
    tint: \"bg-emerald-100\",
    accent: \"text-emerald-900\",
    tag: \"Numbers & shapes\",
  },
  {
    id: \"science\",
    name: \"Science\",
    color: \"#E9D5FF\",
    tint: \"bg-violet-100\",
    accent: \"text-violet-900\",
    tag: \"How the world works\",
  },
  {
    id: \"english\",
    name: \"English\",
    color: \"#FDE047\",
    tint: \"bg-yellow-100\",
    accent: \"text-yellow-900\",
    tag: \"Words, stories, ideas\",
  },
];

export const TOPICS = {
  fractions: {
    id: \"fractions\",
    subjectId: \"math\",
    title: \"Fractions\",
    subtitle: \"Slices of a whole thing\",
    emoji: \"🍕\",
    cover:
      \"https://images.pexels.com/photos/5412100/pexels-photo-5412100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\",
    color: \"#A7F3D0\",
    intro:
      \"A fraction is just a way of saying 'a part of something whole'. If you cut a pizza into 8 slices and eat 3, you ate 3 out of 8 — written as 3/8. The top number (numerator) is what you HAVE. The bottom number (denominator) is how many EQUAL parts the whole was cut into.\",
    lessons: [
      {
        heading: \"1. The parts of a fraction\",
        body: \"Numerator = top = 'how many pieces you have'. Denominator = bottom = 'total equal pieces'. If both numbers are the same (like 4/4), you have the WHOLE thing.\",
        example: \"3/8 → 3 slices out of 8 total slices.\",
      },
      {
        heading: \"2. Equivalent fractions\",
        body: \"Two fractions can look different but mean the same amount. Multiply top and bottom by the SAME number and the value doesn't change.\",
        example: \"1/2 = 2/4 = 4/8 = 50/100 (they're all half of something).\",
      },
      {
        heading: \"3. Adding fractions with the same bottom\",
        body: \"When the denominators match, just add the tops. The bottom stays the same. Don't add the bottoms — that's the #1 trick your brain will try to play on you.\",
        example: \"2/7 + 3/7 = 5/7. Bottom stays 7.\",
      },
    ],
    quiz: [
      {
        q: \"Maya cut a cake into 8 equal slices. She ate 3. What fraction did she eat?\",
        options: [\"3/8\", \"8/3\", \"3/5\", \"5/8\"],
        answer: 0,
        why: \"3 slices out of 8 total slices = 3/8.\",
      },
      {
        q: \"Which fraction is equivalent to 1/2?\",
        options: [\"1/4\", \"2/3\", \"3/6\", \"4/10\"],
        answer: 2,
        why: \"3/6 = 1/2 because 3 is half of 6.\",
      },
      {
        q: \"2/9 + 5/9 = ?\",
        options: [\"7/18\", \"7/9\", \"10/9\", \"3/9\"],
        answer: 1,
        why: \"Same bottom — add the tops. 2 + 5 = 7. Bottom stays 9.\",
      },
      {
        q: \"Which fraction is the BIGGEST?\",
        options: [\"1/2\", \"1/4\", \"1/8\", \"1/10\"],
        answer: 0,
        why: \"When the top is 1, a smaller bottom means bigger pieces. 1/2 is a huge slice; 1/10 is a crumb.\",
      },
    ],
  },

  decimals: {
    id: \"decimals\",
    subjectId: \"math\",
    title: \"Decimals\",
    subtitle: \"Numbers with a dot in the middle\",
    emoji: \"💵\",
    cover:
      \"https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\",
    color: \"#BAE6FD\",
    intro:
      \"Decimals are just another way to write fractions — but using a dot instead of a slash. Think of MONEY: $1.50 means one whole dollar and fifty hundredths (50 cents). The dot separates the WHOLE from the PART.\",
    lessons: [
      {
        heading: \"1. Place value after the dot\",
        body: \"First spot after the dot = tenths (1/10). Second spot = hundredths (1/100). Third = thousandths (1/1000). Every step is 10× smaller.\",
        example: \"0.7 = seven tenths = 7/10. 0.07 = seven hundredths = 7/100.\",
      },
      {
        heading: \"2. Comparing decimals\",
        body: \"Line up the dots. Compare digit by digit LEFT to RIGHT. More digits after the dot ≠ bigger number! 0.5 is BIGGER than 0.35.\",
        example: \"0.9 vs 0.85 → 0.9 wins. Think: 90 cents vs 85 cents.\",
      },
      {
        heading: \"3. Adding decimals\",
        body: \"Line up the decimal points like buttons on a shirt. Add column by column. Bring the dot straight down in the answer.\",
        example: \"2.3 + 1.45 → line them up → 3.75.\",
      },
    ],
    quiz: [
      {
        q: \"What is 0.6 written as a fraction?\",
        options: [\"6/1\", \"6/10\", \"6/100\", \"1/6\"],
        answer: 1,
        why: \"One spot after the dot = tenths. So 0.6 = 6/10.\",
      },
      {
        q: \"Which is BIGGER: 0.4 or 0.35?\",
        options: [\"0.35\", \"0.4\", \"They are equal\", \"Can't tell\"],
        answer: 1,
        why: \"0.4 = 40 cents. 0.35 = 35 cents. 40 > 35.\",
      },
      {
        q: \"1.5 + 0.75 = ?\",
        options: [\"1.80\", \"2.25\", \"2.20\", \"8.25\"],
        answer: 1,
        why: \"Line up the dots: 1.50 + 0.75 = 2.25.\",
      },
      {
        q: \"How would you write 'three and two tenths' as a decimal?\",
        options: [\"3.02\", \"3.2\", \"0.32\", \"32\"],
        answer: 1,
        why: \"Whole = 3. Tenths spot = 2. So 3.2.\",
      },
    ],
  },

  \"water-cycle\": {
    id: \"water-cycle\",
    subjectId: \"science\",
    title: \"The Water Cycle\",
    subtitle: \"How water travels around Earth (forever)\",
    emoji: \"💧\",
    cover:
      \"https://images.pexels.com/photos/37062525/pexels-photo-37062525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\",
    color: \"#BAE6FD\",
    intro:
      \"Water on Earth doesn't get 'used up' — it just moves in a giant loop between the sky, land, and oceans. The same water a dinosaur drank might be in your glass right now (weird but true).\",
    lessons: [
      {
        heading: \"1. Evaporation — water goes UP\",
        body: \"The sun heats water in oceans, lakes, and puddles. Tiny water bits turn into invisible gas (water vapor) and float into the air. This is how puddles disappear.\",
        example: \"A wet towel drying on the line = evaporation in action.\",
      },
      {
        heading: \"2. Condensation — clouds form\",
        body: \"High in the cold sky, water vapor cools and clumps together into tiny droplets. Millions of droplets stuck together = a cloud.\",
        example: \"The 'fog' on a cold soda can is condensation.\",
      },
      {
        heading: \"3. Precipitation — water comes DOWN\",
        body: \"When droplets get heavy enough, gravity yanks them down. If it's warm, we get rain. If it's freezing, snow, sleet, or hail.\",
        example: \"Rain, snow, hail — all the same cycle, different temperatures.\",
      },
      {
        heading: \"4. Collection — starting over\",
        body: \"Water flows into rivers, lakes, and oceans, or soaks into the ground. Then… the sun starts warming it again. Loop repeats. Forever.\",
        example: \"Rain → river → ocean → sun → clouds → rain. On repeat.\",
      },
    ],
    quiz: [
      {
        q: \"What is the process of water turning into vapor called?\",
        options: [\"Condensation\", \"Precipitation\", \"Evaporation\", \"Collection\"],
        answer: 2,
        why: \"Evaporation is water going UP from liquid to gas.\",
      },
      {
        q: \"How do clouds form?\",
        options: [
          \"Water vapor cools and clumps into droplets\",
          \"The sun paints them\",
          \"Wind blows dust together\",
          \"Airplanes leave water behind\",
        ],
        answer: 0,
        why: \"Cold air makes vapor group into tiny droplets — that's condensation.\",
      },
      {
        q: \"Rain, snow, sleet, and hail are all types of…\",
        options: [\"Evaporation\", \"Precipitation\", \"Condensation\", \"Collection\"],
        answer: 1,
        why: \"Anything falling from the sky = precipitation.\",
      },
      {
        q: \"Why does the water cycle never end?\",
        options: [
          \"Because rivers make more water\",
          \"Because Earth adds new water each year\",
          \"The Sun keeps heating water, restarting the loop\",
          \"Because clouds refill from space\",
        ],
        answer: 2,
        why: \"The Sun is the engine. As long as it's shining, water keeps looping.\",
      },
    ],
  },

  cells: {
    id: \"cells\",
    subjectId: \"science\",
    title: \"Cells\",
    subtitle: \"The tiny building blocks of everything alive\",
    emoji: \"🔬\",
    cover:
      \"https://images.unsplash.com/photo-1616291969697-9f66ae119919?auto=format&fit=crop&w=1200&q=80\",
    color: \"#E9D5FF\",
    intro:
      \"Every single living thing — you, a mosquito, a redwood tree, a piece of moss — is made of CELLS. Cells are so tiny you need a microscope to see them, but they do EVERYTHING: eat, breathe, grow, and make more of themselves.\",
    lessons: [
      {
        heading: \"1. Two big teams: Plant cells vs Animal cells\",
        body: \"Both are cells, but plant cells have extras animal cells don't: a stiff CELL WALL (for support) and CHLOROPLASTS (for making food from sunlight). Animal cells are softer and rounder.\",
        example: \"You are made of animal cells. A leaf is made of plant cells.\",
      },
      {
        heading: \"2. Meet the parts (organelles)\",
        body: \"Nucleus = boss of the cell, holds DNA (the instructions). Mitochondria = the powerhouse that makes energy. Cell membrane = the security guard that decides what goes in/out.\",
        example: \"Think of a cell as a factory: nucleus = manager, mitochondria = generators.\",
      },
      {
        heading: \"3. Why cells matter\",
        body: \"When you scrape your knee, cells rush in to fix it. When you eat, cells break down food into energy. Everything your body does — cells did it first.\",
        example: \"Growing an inch taller? Cells split and made more of themselves.\",
      },
    ],
    quiz: [
      {
        q: \"Which part of a cell contains the DNA and acts as the 'boss'?\",
        options: [\"Mitochondria\", \"Nucleus\", \"Cell membrane\", \"Cell wall\"],
        answer: 1,
        why: \"The nucleus holds DNA and controls the cell.\",
      },
      {
        q: \"Which of these is found ONLY in plant cells (not animal cells)?\",
        options: [\"Nucleus\", \"Mitochondria\", \"Cell wall\", \"Cell membrane\"],
        answer: 2,
        why: \"Plant cells have a rigid cell wall for structure. Animal cells don't.\",
      },
      {
        q: \"What do mitochondria do?\",
        options: [
          \"Store DNA\",
          \"Make energy for the cell\",
          \"Digest food outside the body\",
          \"Give the cell color\",
        ],
        answer: 1,
        why: \"Mitochondria = powerhouse. They make the energy the cell runs on.\",
      },
      {
        q: \"Which of these is NOT made of cells?\",
        options: [\"A tree\", \"Your finger\", \"A rock\", \"A cat\"],
        answer: 2,
        why: \"Rocks aren't alive, so they aren't made of cells.\",
      },
    ],
  },

  english: {
    id: \"english\",
    subjectId: \"english\",
    title: \"English Essentials\",
    subtitle: \"Grammar & reading tricks that actually help\",
    emoji: \"📚\",
    cover:
      \"https://images.pexels.com/photos/10638213/pexels-photo-10638213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\",
    color: \"#FDE047\",
    intro:
      \"English isn't about memorizing every rule — it's about noticing patterns. Once you spot the pattern, spelling, grammar, and reading all get a LOT easier.\",
    lessons: [
      {
        heading: \"1. Nouns, verbs, adjectives (the big three)\",
        body: \"Noun = person/place/thing (dog, park, idea). Verb = an action (runs, thinks, sings). Adjective = describes a noun (fluffy dog, huge park, silly idea).\",
        example: \"The fluffy dog runs. → dog (noun), runs (verb), fluffy (adjective).\",
      },
      {
        heading: \"2. Their / They're / There\",
        body: \"They're = they are. There = a place. Their = belongs to them. When stuck, swap in 'they are' — if it fits, use they're.\",
        example: \"They're going to their favorite park over there.\",
      },
      {
        heading: \"3. Reading: find the main idea\",
        body: \"Every paragraph is trying to tell you ONE big thing. Ask yourself: 'If I could tell someone this paragraph in 5 words, what would I say?' That's the main idea.\",
        example: \"A whole paragraph about volcanoes? Main idea: 'Volcanoes are hot and dangerous.'\",
      },
    ],
    quiz: [
      {
        q: \"In the sentence 'The tiny puppy barked loudly', which word is the ADJECTIVE?\",
        options: [\"Puppy\", \"Barked\", \"Tiny\", \"Loudly\"],
        answer: 2,
        why: \"'Tiny' describes the puppy → adjective.\",
      },
      {
        q: \"Which sentence is correct?\",
        options: [
          \"There going to they're house.\",
          \"They're going to their house.\",
          \"Their going to there house.\",
          \"They're going to there house.\",
        ],
        answer: 1,
        why: \"They're = they are. Their house = the house belonging to them.\",
      },
      {
        q: \"A paragraph is mostly about a boy who saved a dog from a river. What is the main idea?\",
        options: [
          \"The river was cold\",
          \"A boy rescued a dog from a river\",
          \"Dogs like water\",
          \"Boys are brave\",
        ],
        answer: 1,
        why: \"The main idea captures the whole story in one line.\",
      },
      {
        q: \"Which word is a VERB?\",
        options: [\"Bike\", \"Quickly\", \"Ride\", \"Blue\"],
        answer: 2,
        why: \"'Ride' is an action. Verbs = actions.\",
      },
    ],
  },
};

export const getTopicsForSubject = (subjectId) =>
  Object.values(TOPICS).filter((t) => t.subjectId === subjectId);
"
Observation: Create successful: /app/frontend/src/data/topics.js
