const os = require('os');
const {byteToGigabyte} = require('./memoryUtils');

const ans = byteToGigabyte(os.totalmem());
const ans2 = byteToGigabyte(os.freemem());
console.log(ans + " GB");
console.log(ans2 + " GB");