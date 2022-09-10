const os = require('os');
const {helloPrint,
    add,
    generateRandomNumber} = require('./index');
console.log("Platform: " + os.platform());
console.log("Version: " + os.version());
console.log("Type: " + os.type());
console.log("Uptime: " + os.uptime());
console.log("Total Memory: " + os.totalmem());
// helloPrint();
console.log(add(1, 2));
for (let i = 0; i < 10; i++) {
    console.log(generateRandomNumber());
}
