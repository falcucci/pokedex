const _ = require("lodash");
const enums = require("./enums");

class Pokedex {
  constructor() {
    this.poke = enums.poke;
    this.habitat = enums.habitat;
    this.funtranslations = enums.funtranslations;
  }

  /**
   * Make an API call and return the response
   *
   * @param {String} endpoint - The API endpoint name.
   * @param {String} method - The HTTP method to use (i.e. GET)
   * @param {Object} body - The request body for POST or PUT
   */
  async api({ url, method = "GET", body, headers = {} }) {
    if (typeof body === "object") {
      body = JSON.stringify(body);
    }
    if (method === "POST") {
      headers["Content-Type"] = "application/json";
    }
    const res = await fetch(url, {
      method,
      body,
      headers,
    });
    return res.json();
  }

  async search(name) {
    let url = this.poke.root.url;
    url += "/pokemon-species/";
    url += name;
    return await this.api({ url });
  }

  async get({ name, translate = false }) {
    const response = await this.search(name);
    const pokemon = await this.values(response);
    pokemon.description = translate
      ? await this.translate(pokemon)
      : pokemon.description;
    return pokemon;
  }

  async values(response) {
    const name = _.get(response, "name");
    const habitat = _.get(response, "habitat.name");
    const isLegendary = _.get(response, "is_legendary");
    const description = _.chain(response.flavor_text_entries)
      .find({ language: { name: "en" } })
      .pick("flavor_text")
      .get("flavor_text")
      .value();

    return {
      name,
      description,
      habitat,
      isLegendary,
    };
  }

  async translate(pokemon) {
    const type =
      pokemon.habitat === this.habitat.CAVE || pokemon.isLegendary
        ? "yoda"
        : "shakespeare";
    let url = this.funtranslations.root.url;
    url += `/${type}.json`;
    const body = { text: pokemon.description };
    const response = await this.api({ url, method: "POST", body });
    const description =
      _.get(response, "contents.translated") ||
      pokemon.description;
    return description;
  }
}

module.exports = Pokedex;
