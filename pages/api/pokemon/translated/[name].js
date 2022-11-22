const {
  StatusCodes,
} = require("http-status-codes");

const _ = require("lodash");
const poke = require("../../../../utils/poke");
const yoda = require("../../../../utils/yoda");
const shakespare = require("../../../../utils/shakespare");
const Pokedex = require("../../../../utils/Pokedex");

const habitat = {
  CAVE: "cave",
};

module.exports = async function handler(req, res) {
  const name = req.query.name;
  const pokedex = new Pokedex()
  const pokemon = await pokedex.get({ name, translate: true })
  res.status(StatusCodes.OK).json(pokemon);
};
