"use strict";

const chai = require("chai");
const chaiHttp = require("chai-http");
const HttpStatus = require("http-status-codes");
const { app } = require("../../server");

chai.use(chaiHttp);
chai.should();

const server = app;

describe("route api/pokemon", () => {
  describe("GET pokemon details /<name>", () => {
    it("should respond with OK", async function () {
      const url = "/api/pokemon/ditto";
      const headers = { Accept: "application/json" };
      const res = await chai.request(server).get(url).set(headers);
      res.should.have.status(HttpStatus.OK);
    }).timeout(5000);
  });

  describe("GET pokemon details translated /<name>", () => {
    it.only("should respond with OK", async function () {
      const url = "/api/pokemon/translated/ditto";
      const headers = { Accept: "application/json" };
      const res = await chai.request(server).get(url).set(headers);
      res.should.have.status(HttpStatus.OK);
    }).timeout(5000);
  });
});
