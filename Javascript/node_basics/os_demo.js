const os = require('os');

console.log(os.platform());

// Architecture CPU
console.log(os.arch(), os.cpus());

// Free memory
console.log(os.freemem(), os.totalmem());

//home dir

console.log(os.homedir());

console.log(os.uptime());
