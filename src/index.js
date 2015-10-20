var now = require("now");


var time = exports,
    START_TIME = now.getStartTime();


time.now = now;


time.stamp = function stamp() {
    return START_TIME + now();
};
