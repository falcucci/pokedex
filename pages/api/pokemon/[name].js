const {
  StatusCodes,
  getReasonPhrase,
} = require("http-status-codes");

const _ = require("lodash");
const poke = require("../../../utils/poke");

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
  res.status(StatusCodes.OK).json(pokemon);
};
