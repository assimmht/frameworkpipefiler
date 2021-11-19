const filtersFolder = './filters/';
const fs = require('fs');

var all_filters = [];

fs.readdir(filtersFolder, (err, files) => {
  files.forEach(file => {
    try {
        var name = file.replace('.js', '');
        name = require(filtersFolder + file);
        all_filters.push(name)
    } catch (error) {
        console.log(error)
    }
    if (typeof(name) != 'function') {
        console.error(' !!!! Can not export ' + file + ' because is not js module !!!! ')
    } else{
        console.info('File ' + file + ' is import as module')
    }
  });
  console.log(all_filters)
});


fs.readFile('./config-filters.json', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    try {
        data = JSON.parse(data)
    } catch (error) {
        console.error(error)
    }
    let steps = data["steps"];
    // for (i in steps) {
    //     filter = steps[i].filter
    // }
    let filter = steps[0].filter
    let params = steps[0].params
    let next = steps[0].next
    
})









// program
//     .command('read <task>')
//     .description('Add a new TODO task')
//     .action(read)

// program
//     .command('add <task>')
//     .description('Add a new TODO task')
//     .action(add)

// program
//     .command('add <task>')
//     .description('Add a new TODO task')
//     .action(add)

// program
//     .command('add <task>')
//     .description('Add a new TODO task')
//     .action(add)

// program.parse()