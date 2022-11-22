const {
  StatusCodes,
} = require("http-status-codes");

const Pokedex = require("../../../../utils/Pokedex");

module.exports = async function handler(req, res) {
  const name = req.query.name;
  const pokedex = new Pokedex()
  const pokemon = await pokedex.get({ name, translate: true })
  res.status(StatusCodes.OK).json(pokemon);
};
