function automatic()
const read =  require('read');
const fs = require('fs');
const readInterface = automatic.createInterface({
  input: fs.createReadStream('archive.txt'),
  output: process.stdout,
  console: false
  });
  
  readInterface.on('line', function(line) {
    console.log(line);
    
    });
    };
    
    //Archive this read a file to use a create new server.
    
