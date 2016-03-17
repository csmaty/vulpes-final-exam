'use strict';

var fs = require('fs');

function delayedFileWriter() {

  this.writeToFile = function(fileToWrite, object, cb) {
    setTimeout(function(){
      var stringifiedObject = JSON.stringify(object);
      fs.writeFile(fileToWrite, function(err, object) {
        if (err) {
          return cb(err);
        }
        cb(null, object);
  });
    }, 2000);
  };
}