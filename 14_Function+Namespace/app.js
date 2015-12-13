// https://nodejs.org/api/globals.html
var uuid = require('node-uuid');
for (var i = 0; i < 1000; i++) {
    console.log(uuid.v1());
    console.log(uuid.v4());
}
