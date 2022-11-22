const {
  StatusCodes,
  getReasonPhrase,
} = require("http-status-codes");

const _ = require("lodash");
const poke = require("../../../../utils/poke");
const yoda = require("../../../../utils/yoda");
const shakespare = require("../../../../utils/shakespare");

const pokemon = {
  habitat: {
    CAVE: "cave",
  },
};

module.exports = async function handler(req, res) {
  const path = `/pokemon-species/${req.query.name}`;
  const response = await poke.api(path);
  const pokemon = {};
  pokemon.name = _.get(response, "name");
  pokemon.description = _.chain(response.flavor_text_entries)
    .find({ language: { name: "en" } })
    .pick("flavor_text")
    .get("flavor_text")
    .value();
  pokemon.habitat = _.get(response, "habitat.name");
  pokemon.isLegendary = _.get(response, "is_legendary");

  const tr = await yoda.api({ body: { text: pokemon.description }, method: 'POST' });
  const isYoda = pokemon.habitat === pokemon.habitat.CAVE || pokemon.isLegendary

  const yodaTr = _.get(tr, 'contents.translated')

  const sha = await shakespare.api({ body: { text: pokemon.description }, method: 'POST' });
  console.log('sha: ', sha);
  pokemon.description = isYoda ? yodaTr ? (sha || pokemon.description)
  res.status(StatusCodes.OK).json(pokemon);
};
