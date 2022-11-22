"use strict";

const chai = require("chai");
const expect = require("unexpected");
const chaiHttp = require("chai-http");
const HttpStatus = require("http-status-codes");
const { app } = require("../../server");

const pokeInterceptor = require("../../../__interceptors__/poke-api.interceptor");

const mock = require("../../../__mock__");

const server = app;

chai.use(chaiHttp);
chai.should();

describe("route api/pokemon", () => {
  describe("GET pokemon details /<name>", () => {
    it("should respond with OK", async function () {
      pokeInterceptor.HQ4IAPYPY();
      const url = "/api/pokemon/ditto";
      const headers = { Accept: "application/json" };
      const res = await chai.request(server).get(url).set(headers);
      const bodyAssert = mock.pokemon.get;
      res.should.have.status(HttpStatus.OK);
      expect(res.body, "to satisfy", bodyAssert);
    }).timeout(5000);

    it("should fail to retrieve a pokemon", async function () {
      pokeInterceptor.VDOW3VGDYBYM();
      const url = "/api/pokemon/ditto";
      const headers = { Accept: "application/json" };
      const res = await chai.request(server).get(url).set(headers);
      res.should.have.status(HttpStatus.INTERNAL_SERVER_ERROR);
    }).timeout(5000);
  });

  describe("GET pokemon details translated /<name>", () => {
    it("should translate in shakespeare mode", async function () {
      pokeInterceptor.MQRCD01BBZ3();
      const url = "/api/pokemon/translated/ditto";
      const headers = { Accept: "application/json" };
      const res = await chai.request(server).get(url).set(headers);
      const bodyAssert = mock.pokemon.translate.shakespeare;
      res.should.have.status(HttpStatus.OK);
      expect(res.body, "to satisfy", bodyAssert);
    }).timeout(5000);

    it.only("should translate in yoga mode", async function () {
      pokeInterceptor.M1ZXQBAKHDUO();
      const url = "/api/pokemon/translated/mewtwo";
      const headers = { Accept: "application/json" };
      const res = await chai.request(server).get(url).set(headers);
      const bodyAssert = mock.pokemon.translate.yoda;
      res.should.have.status(HttpStatus.OK);
      expect(res.body, "to satisfy", bodyAssert);
    }).timeout(5000);

  });
});
