const joi = require("joi");
const {
  StatusCodes,
  getReasonPhrase,
} = require("http-status-codes");

const Pokedex = require("../../../../utils/pokedex");

module.exports = async function handler(req, res) {
  const schema = joi
    .object()
    .keys({ name: joi.string() })
    .required();
  const vr = schema.validate(req.query, { allowUnknown: false });
  if (vr.error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: vr.error.message });
  }

  const name = req.query.name;
  const pokedex = new Pokedex();
  const pokemon = await pokedex.get({ name, translate: true });
  const status = pokemon ? StatusCodes.OK : StatusCodes.NOT_FOUND;
  const data = pokemon || getReasonPhrase(StatusCodes.NOT_FOUND);
  res.status(status).json(data);
};
