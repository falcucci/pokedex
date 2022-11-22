const { StatusCodes, getReasonPhrase } = require("http-status-codes");

const Pokedex = require("../../../utils/pokedex");

module.exports = async function handler(req, res) {
  const name = req.query.name;
  const pokedex = new Pokedex();
  const pokemon = await pokedex.get({ name });
  const status = pokemon ? StatusCodes.OK : StatusCodes.NOT_FOUND;
  const data = pokemon || getReasonPhrase(StatusCodes.NOT_FOUND);
  res.status(status).json(data);
};
