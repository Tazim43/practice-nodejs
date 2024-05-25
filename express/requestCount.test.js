const request = require("supertest");
const assert = require("assert");
const app = require("./requestCount");

describe("Request Count Middleware", function () {
  it("should increment request count", function (done) {
    // First request
    request(app)
      .get("/requestCount")
      .then((response) => {
        assert.strictEqual(response.body.requestCount, 1);

        // Make 10 requests to /user
        const promises = [];
        for (let i = 0; i < 10; i++) {
          promises.push(request(app).get("/user"));
        }

        return Promise.all(promises);
      })
      .then(() => {
        // Check the request count again
        return request(app).get("/requestCount");
      })
      .then((response) => {
        assert.strictEqual(response.body.requestCount, 12);
        done();
      })
      .catch(done);
  });
});
