// *************   Make it Modular *****************

var filterFunc = require("./modules.js");
var dir = process.argv[2];
var stringFilterFunc = process.argv[3];

filterFunc(dir, stringFilterFunc, function(err,files){
    if(err)
        return console.error("There was an error: ", err)

    files.forEach(function(file){
      console.log(file);
    })

});
