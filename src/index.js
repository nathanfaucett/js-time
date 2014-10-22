var time = module.exports,
    performance, HR_TIME, START_MS, now;


Date.now || (Date.now = function now() {
    return (new Date()).getTime();
});


if (!process.browser) {
    HR_TIME = process.hrtime();

    now = function now() {
        var hrtime = process.hrtime(HR_TIME),
            ms = hrtime[0] * 1e3,
            ns = hrtime[1] * 1e-6;

        return ms + ns;
    };
} else {
    performance = global.performance || {};

    performance.now = performance.now || (
        performance.webkitNow ||
        performance.mozNow ||
        performance.msNow ||
        performance.oNow ||
        function now() {
            return Date.now() - START_MS;
        }
    );

    now = function now() {
        return performance.now();
    };
}

START_MS = Date.now();

time.now = now;

time.stamp = function stamp() {

    return START_MS + now();
};
