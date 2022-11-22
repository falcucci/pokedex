const habitat = {
  CAVE: "cave",
};

const poke = {
  root: {
    url: process.env.POKE_API_URL || "https://pokeapi.co/api/v2",
  },
};

const funtranslations = {
  root: {
    url:
      process.env.FUNTRANSLATIONS_API_URL ||
      "https://api.funtranslations.com/translate",
    // url: "https://run.mocky.io/v3/e970aa4c-fb0c-4c6a-a8b5-d083a1925453",
  },
};

module.exports = {
  habitat,
  poke,
  funtranslations,
};
