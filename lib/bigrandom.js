//
var os = require('os');

var md5 = require('MD5');

bigrandom = function bigrandom(salt) {
    // here may be room for improvement, at the time of this writing
    // this may or may not be short of 128 bits of entropy
    return md5("s" + Math.random() + new Date().getTime() +
               JSON.stringify(salt) +
               os.hostname() +
               os.freemem() +
               JSON.stringify(os.cpus()) +
               JSON.stringify(os.networkInterfaces()) +
               JSON.stringify(os.loadavg()) +
               process.pid +
               process.hrtime() +
               process.memoryUsage() +
               os.uptime());
}

module.exports = bigrandom;
