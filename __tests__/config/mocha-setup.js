const nock = require("nock");

beforeEach(done => {
  nock.cleanAll();
  done();
});
