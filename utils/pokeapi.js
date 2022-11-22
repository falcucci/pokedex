const fetch = require("node-fetch");

const API_ROOT = "https://pokeapi.co/api/v2";

/**
 * Make an API call and return the response
 *
 * @param {String} endpoint - The API endpoint name.
 * @param {String} method - The HTTP method to use (i.e. GET)
 * @param {Object} body - The request body for POST or PUT
 */
async function api(
  endpoint,
  method = "GET",
  body = undefined,
  headers = {}
) {
  const res = await fetch(API_ROOT + endpoint, {
    method,
    body,
    headers,
  });
  return res.json();
}

module.exports = {
  api,
};
