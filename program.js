// ************ HTTP CLIENT ****************

require('http').get(process.argv[2], function(stream){
  stream.setEncoding('utf8')
  stream.on('data', console.log)
  stream.on('error', console.error)
})




// *************   Make it Modular *****************

// var filterFunc = require("./modules.js");
// var dir = process.argv[2];
// var stringFilterFunc = process.argv[3];
//
// filterFunc(dir, stringFilterFunc, function(err,files){
//     if(err)
//         return console.error("There was an error: ", err)
//
//     files.forEach(function(file){
//       console.log(file);
//     })
//
// });






// var fs = require('fs');





// var fs = require('fs')
// var path = require('path')
//
// fs.readdir(process.argv[2], function (err, list){
//   list.forEach(function(file){
//     if (path.extname(file) === '.' + process.argv[3])
//     console.log(file);
//   })
// })





// var fs = require('fs');
// var file = process.argv[2];
//
// fs.readFile(file, function(err, data){
//   var lines = data.toString().split('\n').length-1
//   console.log(lines);
// })







// var fs = require('fs');
//
//
// var contents = fs.readFileSync(process.argv[2]);
// var lines = contents.toString().split('\n').length - 1
// console.log(lines);








// var result = 0
//
//     for (var i = 2; i < process.argv.length; i++)
//       result += Number(process.argv[i])
//
//     console.log(result)
//
// var numbers = process.argv.slice(2);
//
// console.log(numbers.reduce(function(total, number){
//   return total += Number(number, 10);
// }, 0 ));
