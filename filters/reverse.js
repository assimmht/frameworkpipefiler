const conf = new (require('conf'))()
const chalk = require('chalk')
const fs = require('fs')


module.exports = function reverse (input) {
    return reverseString(input);
}