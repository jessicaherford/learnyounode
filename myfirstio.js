var fs = require('fs');

var file = fs.readFileSync(process.argv[2]).toString().split('\n').length-1;

console.log(file);


// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
