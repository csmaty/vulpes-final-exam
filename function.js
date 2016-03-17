'use strict';

var fs = require('fs');


function DelayedFileWriter(alternativeFS) {
  var _this = this;

  this.fs = alternativeFS || fs;

  this.write = function(fileToWrite, object, cb) {
    setTimeout(function() {
      var stringifiedObject = JSON.stringify(object);
      _this.fs.writeFile(fileToWrite, stringifiedObject, function(err) {  
        if (err) {
          return cb(err);
        }
        cb(null, stringifiedObject);
      });
    }, 2000);
  };
}



var sampleObject = { mennyi: 'mi_mennyi' };
var file = './file-to-write.txt';
function logFunction(err, string) {
  console.log(string);
}
var delayedFileWriter = new DelayedFileWriter();
delayedFileWriter.write(file, sampleObject, logFunction);