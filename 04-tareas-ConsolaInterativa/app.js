import { inquirerMenu} from './Metodos/inquirer.js';
import { pausa} from './Metodos/mensajes.js';
import inquirer from 'inquirer';

import colors from 'colors';

// require('colors');
//const {mostrarMenu, pausa} = require('./Metodos/mensajes')
// const {inquirerMenu} = require('./Metodos/inquirer');

console.clear();


const main = async() => {
 
    let opt = '';
    do{
       opt = await inquirerMenu();
       console.log({opt})
       if(opt !=='0') await pausa();
    }while(opt !== '0');
    // pausa();

};
main();




















































