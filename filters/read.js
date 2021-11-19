const conf = new (require('conf'))()
const chalk = require('chalk')
const fs = require('fs')


module.exports = function read (input) {
    
    fs.readFile(input, 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(data)
    })
}

