var assert = require("assert"),
    time = require("../src/index");


describe("time", function() {
    describe("#now()", function() {
        it("should return time in ms from start of session", function() {
            assert.equal(typeof(time.now()), "number");
        });
    });
    describe("#stamp()", function() {
        it("should return time in ms from 1970", function() {
            assert.equal(Math.round(time.stamp()), (new Date()).getTime());
        });
    });
});
