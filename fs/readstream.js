'use strict';

var fs = require('fs');

var rs = fs.createReadStream('sample.txt','utf-8');

rs.on('data',function(chunk){
    console.log('data:');
    console.log(chunk);
});

rs.on('end',function(){
    console.log('END');
});

rs.on('error',function(err){
    console.log('error:'+err);
})