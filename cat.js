const fs = require('fs')

function cat(path){
  fs.readFile(path, (err, data) =>{
    if(err) throw err;
    else{
      return data;
    }
  })
}

module.exports = cat;
