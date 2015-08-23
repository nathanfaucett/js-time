var tape = require("tape"),
    time = require("..");


tape("time #now() should return time in ms from start of session", function(assert) {
    assert.equal(typeof(time.now()), "number");
    assert.end();
});

tape("time #stamp() should return time in ms from 1970", function(assert) {
    assert.equal(Math.round(time.stamp()), (new Date()).getTime());
    assert.end();
});
