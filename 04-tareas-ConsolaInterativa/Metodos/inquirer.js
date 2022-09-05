import inquirer from 'inquirer';
import colors from 'colors';

// require('colors');
// const inquirer = require('inquirer');


const preguntas = [
    {
        type: 'lista',
        name: 'opcion',
        opciones:['opc1','opc2','opc3']
    }
];

const inquirerMenu = async() => {
    console.clear();

    console.log('================================'.magenta);
    console.log('   Seleccione una opción'.magenta);
    console.log('================================\n'.magenta);
    const {opc} = await inquirer.prompt(preguntas);
    return opc;

}
export {
    inquirerMenu
}
































