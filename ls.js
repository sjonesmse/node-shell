const fs = require('fs')

function ls(){
  fs.readdir('./', 'utf8', (err, files) => {
    if (err){
      throw err
    }
    else{
      return files.join('\n')
    }
  })
}

module.exports = ls;
