"use strict";
const chai = require("chai");
const chaiHttp = require("chai-http");
const { StatusCodes } = require('http-status-codes');
const { app } = require("../server");

chai.use(chaiHttp);
chai.should();

const server = app;

describe("route api/health", () => {
  describe("GET Health Check /", () => {
    it("should respond with OK", async function () {
      const url = "/api/health";
      const headers = { Accept: "application/json" };
      const res = await chai.request(server).get(url).set(headers);
      res.should.have.status(StatusCodes.OK);
    }).timeout(5000);
  });
});
