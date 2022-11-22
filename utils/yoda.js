const fetch = require("node-fetch");

// const API_ROOT =
//   "https://api.funtranslations.com/translate/yoda.json";

const API_ROOT =
 "https://run.mocky.io/v3/e970aa4c-fb0c-4c6a-a8b5-d083a1925453"

/**
 * Make an API call and return the response
 *
 * @param {String} endpoint - The API endpoint name.
 * @param {String} method - The HTTP method to use (i.e. GET)
 * @param {Object} body - The request body for POST or PUT
 */
async function api({
  endpoint = API_ROOT,
  method = "GET",
  body = undefined,
  headers = {},
}) {
  if (typeof body === 'object') {
    body = JSON.stringify(body);
  }

  if (method === "POST") {
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(endpoint, {
    method,
    body,
    headers,
  });
  return res.json();
}

module.exports = {
  api,
};
