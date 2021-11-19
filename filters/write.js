const conf = new (require('conf'))()
const chalk = require('chalk')
const fs = require('fs')


module.exports = function write (path, content) {
    
    fs.writeFile(path, content, err => {
        if (err) {
          console.error(err)
          return
        }
        console.log('file written successfully')
    })
}

