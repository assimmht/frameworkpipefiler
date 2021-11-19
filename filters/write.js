const conf = new (require('conf'))()
const chalk = require('chalk')
const fs = require('fs')


module.exports = function write (input) {
    
    fs.writeFile('/Users/joe/test.txt', content, err => {
        if (err) {
          console.error(err)
          return
        }
        console.log('file written successfully')
    })
}

