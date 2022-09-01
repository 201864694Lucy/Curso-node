
// const { argv } = require("process");
const {crearArchivo} = require("./Codigos/multiplicar");
const argv = require('./config/yargs');
console.clear();

// console.log(process.argv);
// console.log(argv);

// const [ , ,pos3= 'base=5']=process.argv;
// const [ ,base=5]= pos3.split('=');
// // const base = 2;
crearArchivo(argv.b, argv.l,argv.h)
.then(nombreArchivo => console.log(nombreArchivo.blue, "creado".blue))
.catch(err => console.log(err));