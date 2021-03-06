var ncp = require('ncp').ncp;
var async = require('async');
var fs = require('fs');

var libDirectories = [
  'node_modules/bootstrap',
  'node_modules/fitvids',
  'node_modules/highlightjs',
  'node_modules/jquery',
  'node_modules/masonry-layout',
  'node_modules/sweetalert'
]
var dest = 'public/lib';

try {
  fs.mkdirSync(dest);
} catch(e){
  //directory already created
}

async.each(libDirectories, function(directory, callback) {
  ncp(directory, dest + "/" + directory.split("/")[1], function (err) {
   if (err) {
     return console.error(err);
   }
  });
});

