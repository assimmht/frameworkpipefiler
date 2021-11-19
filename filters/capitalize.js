const conf = new (require('conf'))()
const chalk = require('chalk')
const fs = require('fs')


module.exports = function capitalize (input) {
    return input.toUpperCase();
}
