const { crearArchivoX } = require('./helpers/multiplicar')
const argv = require('yargs').argv

console.clear();
console.log(process.argv);
console.log(argv);

console.log(`base en yargs => ${argv.base}`);


// const [, , arg3 = 'base=5'] = process.argv;
// console.log(process.argv);
// const [, base = 1] = arg3.split('=');
// console.log(base);

// const base = 9;

// crearArchivoX(base)
//   .then(nombreArchivo => console.log(nombreArchivo, ' creado'))
//   .catch(err => console.log(err));
