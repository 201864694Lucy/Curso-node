const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption:true,
        describe:'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe:'Muestra la tabla de multiplicar'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        default:10,
        describe:'Muestra el limite de la tabla'
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw 'La base debe de ser un numero'
        } return true;
        // console.log('yargs',argv)
    })
    .argv;

    module.exports = argv;