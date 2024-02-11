
const createNodes = (words: { label: string, count: number }[]) => {
  // Sort words by alphabetical label
  const sortedWords = words.sort((a, b) => a.label.localeCompare(b.label));
  // Merge words with the same label
  const mergedWords = sortedWords.reduce((acc, word) => {
    const existingWord = acc.find(w => w.label === word.label);
    if (existingWord) {
      existingWord.count += word.count;
    } else {
      acc.push({ ...word });
    }
    return acc;
  }, [] as typeof sortedWords);

  const columnWidth = 90;
  const rowHeight = 30;

  const nodes = [];

  let id = 0;
  let column = 0;
  let row = 0;
  const maxInColumn = 20;
  for(const wordData of mergedWords) {
    for (let i = 0; i < wordData.count; i++) {
      nodes.push({
        type: 'fridge',
        id: `${id}`,
        position: getRandomPosition(
          { x: column * columnWidth, y: row * rowHeight },
          { x: 10, y: 10 },
        ),
        data: { label: wordData.label },
      });
      id += 1;
      row += 1;
      if (row >= maxInColumn) {
        row = 0;
        column += 1;
      }
    }
  }

  return nodes;
}

const WORD_DATA = [
  {
    label: ",",
    count: 4
  },
  {
    label: "!",
    count: 4
  },
  {
    label: "?",
    count: 4
  },
  {
    label: ".",
    count: 4
  },
  {
    label: "a",
    count: 4
  },
  {
    label: "above",
    count: 1
  },
  {
    label: "after",
    count: 3
  },
  {
    label: "against",
    count: 1
  },
  {
    label: "along",
    count: 1
  },
  {
    label: "and",
    count: 4
  },
  {
    label: "angry",
    count: 1
  },
  {
    label: "are",
    count: 3
  },
  {
    label: "around",
    count: 2
  },
  {
    label: "as",
    count: 3
  },
  {
    label: "ask",
    count: 3
  },
  {
    label: "bad",
    count: 1
  },
  {
    label: "bee",
    count: 1
  },
  {
    label: "before",
    count: 2
  },
  {
    label: "begin",
    count: 2
  },
  {
    label: "below",
    count: 1
  },
  {
    label: "between",
    count: 1
  },
  {
    label: "big",
    count: 1
  },
  {
    label: "bird",
    count: 1
  },
  {
    label: "blend",
    count: 1
  },
  {
    label: "blossom",
    count: 1
  },
  {
    label: "blue",
    count: 1
  },
  {
    label: "brave",
    count: 1
  },
  {
    label: "bright",
    count: 1
  },
  {
    label: "build",
    count: 1
  },
  {
    label: "but",
    count: 2
  },
  {
    label: "butterfly",
    count: 1
  },
  {
    label: "buzz",
    count: 1
  },
  {
    label: "calm",
    count: 1
  },
  {
    label: "cherry",
    count: 1
  },
  {
    label: "clean",
    count: 1
  },
  {
    label: "clear",
    count: 1
  },
  {
    label: "cloud",
    count: 1
  },
  {
    label: "cold",
    count: 1
  },
  {
    label: "color",
    count: 1
  },
  {
    label: "cool",
    count: 1
  },
  {
    label: "cover",
    count: 1
  },
  {
    label: "crash",
    count: 1
  },
  {
    label: "create",
    count: 1
  },
  {
    label: "cry",
    count: 1
  },
  {
    label: "dance",
    count: 1
  },
  {
    label: "dangerous",
    count: 1
  },
  {
    label: "dark",
    count: 1
  },
  {
    label: "deep",
    count: 1
  },
  {
    label: "dirty",
    count: 1
  },
  {
    label: "dream",
    count: 1
  },
  {
    label: "dry",
    count: 1
  },
  {
    label: "during",
    count: 1
  },
  {
    label: "ed",
    count: 2
  },
  {
    label: "end",
    count: 2
  },
  {
    label: "er",
    count: 2
  },
  {
    label: "es",
    count: 2
  },
  {
    label: "est",
    count: 2
  },
  {
    label: "explore",
    count: 1
  },
  {
    label: "false",
    count: 1
  },
  {
    label: "far",
    count: 1
  },
  {
    label: "feel",
    count: 1
  },
  {
    label: "fill",
    count: 1
  },
  {
    label: "flower",
    count: 1
  },
  {
    label: "flutter",
    count: 1
  },
  {
    label: "fly",
    count: 1
  },
  {
    label: "for",
    count: 2
  },
  {
    label: "ful",
    count: 1
  },
  {
    label: "golden",
    count: 1
  },
  {
    label: "good",
    count: 1
  },
  {
    label: "grass",
    count: 1
  },
  {
    label: "greet",
    count: 1
  },
  {
    label: "greeting",
    count: 1
  },
  {
    label: "happy",
    count: 1
  },
  {
    label: "hard",
    count: 1
  },
  {
    label: "he",
    count: 2
  },
  {
    label: "hear",
    count: 1
  },
  {
    label: "heavy",
    count: 1
  },
  {
    label: "her",
    count: 2
  },
  {
    label: "high",
    count: 1
  },
  {
    label: "his",
    count: 2
  },
  {
    label: "honey",
    count: 1
  },
  {
    label: "horizon",
    count: 1
  },
  {
    label: "hot",
    count: 1
  },
  {
    label: "I",
    count: 2
  },
  {
    label: "if",
    count: 4
  },
  {
    label: "illuminate",
    count: 1
  },
  {
    label: "imagine",
    count: 1
  },
  {
    label: "in",
    count: 3
  },
  {
    label: "ing",
    count: 2
  },
  {
    label: "is",
    count: 3
  },
  {
    label: "it",
    count: 3
  },
  {
    label: "jump",
    count: 1
  },
  {
    label: "kind",
    count: 1
  },
  {
    label: "laugh",
    count: 1
  },
  {
    label: "leaf",
    count: 1
  },
  {
    label: "less",
    count: 2
  },
  {
    label: "light",
    count: 1
  },
  {
    label: "loud",
    count: 2
  },
  {
    label: "love",
    count: 1
  },
  {
    label: "ly",
    count: 3
  },
  {
    label: "mean",
    count: 2
  },
  {
    label: "ment",
    count: 1
  },
  {
    label: "moon",
    count: 1
  },
  {
    label: "morning",
    count: 1
  },
  {
    label: "my",
    count: 2
  },
  {
    label: "near",
    count: 1
  },
  {
    label: "ness",
    count: 2
  },
  {
    label: "new",
    count: 2
  },
  {
    label: "nice",
    count: 1
  },
  {
    label: "night",
    count: 2
  },
  {
    label: 'o',
    count: 1,
  },
  {
    label: "of",
    count: 2
  },
  {
    label: "old",
    count: 1
  },
  {
    label: "on",
    count: 2
  },
  {
    label: "or",
    count: 2
  },
  {
    label: "our",
    count: 2
  },
  {
    label: "over",
    count: 2
  },
  {
    label: "play",
    count: 1
  },
  {
    label: "poor",
    count: 1
  },
  {
    label: "pretty",
    count: 1
  },
  {
    label: "quick",
    count: 1
  },
  {
    label: "quiet",
    count: 1
  },
  {
    label: "read",
    count: 2
  },
  {
    label: "rest",
    count: 1
  },
  {
    label: "rich",
    count: 1
  },
  {
    label: "river",
    count: 1
  },
  {
    label: "run",
    count: 2
  },
  {
    label: "s",
    count: 4
  },
  {
    label: "sad",
    count: 1
  },
  {
    label: "safe",
    count: 1
  },
  {
    label: "said",
    count: 4
  },
  {
    label: "sand",
    count: 1
  },
  {
    label: "scared",
    count: 1
  },
  {
    label: "scent",
    count: 1
  },
  {
    label: "scorching",
    count: 1
  },
  {
    label: "see",
    count: 2
  },
  {
    label: "shallow",
    count: 1
  },
  {
    label: "she",
    count: 2
  },
  {
    label: "shore",
    count: 1
  },
  {
    label: "short",
    count: 1
  },
  {
    label: "shout",
    count: 1
  },
  {
    label: "silence",
    count: 1
  },
  {
    label: "silent",
    count: 2
  },
  {
    label: "sing",
    count: 1
  },
  {
    label: "sky",
    count: 1
  },
  {
    label: "slow",
    count: 1
  },
  {
    label: "small",
    count: 1
  },
  {
    label: "smell",
    count: 1
  },
  {
    label: "soft",
    count: 1
  },
  {
    label: "soil",
    count: 1
  },
  {
    label: "steady",
    count: 1
  },
  {
    label: "strong",
    count: 1
  },
  {
    label: "sun",
    count: 1
  },
  {
    label: "sweet",
    count: 1
  },
  {
    label: "swim",
    count: 1
  },
  {
    label: "tall",
    count: 1
  },
  {
    label: "taste",
    count: 1
  },
  {
    label: "tell",
    count: 4
  },
  {
    label: "the",
    count: 4
  },
  {
    label: "their",
    count: 2
  },
  {
    label: "there",
    count: 2
  },
  {
    label: "they",
    count: 2
  },
  {
    label: "thick",
    count: 1
  },
  {
    label: "thin",
    count: 1
  },
  {
    label: "this",
    count: 2
  },
  {
    label: "through",
    count: 2
  },
  {
    label: "time",
    count: 1
  },
  {
    label: "tion",
    count: 1
  },
  {
    label: "to",
    count: 4
  },
  {
    label: "touch",
    count: 1
  },
  {
    label: "true",
    count: 1
  },
  {
    label: "twilight",
    count: 1
  },
  {
    label: "ugly",
    count: 1
  },
  {
    label: "under",
    count: 1
  },
  {
    label: "vast",
    count: 1
  },
  {
    label: "walk",
    count: 2
  },
  {
    label: "water",
    count: 1
  },
  {
    label: "wave",
    count: 1
  },
  {
    label: "we",
    count: 2
  },
  {
    label: "weak",
    count: 1
  },
  {
    label: "wet",
    count: 1
  },
  {
    label: "whisper",
    count: 1
  },
  {
    label: "wide",
    count: 1
  },
  {
    label: "wind",
    count: 1
  },
  {
    label: "with",
    count: 2
  },
  {
    label: "without",
    count: 2
  },
  {
    label: "world",
    count: 1
  },
  {
    label: "write",
    count: 2
  },
  {
    label: "you",
    count: 3
  },
  {
    label: "your",
    count: 2
  }
]

const getRandomPosition = (min: {
  x: number;
  y: number;
} = {
  x: 0,
  y: 0,
}, max: {
  x: number;
  y: number;
} = {
  x: 1500,
  y: 1000,
}) => {
  return { x: min.x + Math.random() * max.x, y: min.y + Math.random() * max.y };
}

export const NODE_DATA = createNodes(WORD_DATA);
