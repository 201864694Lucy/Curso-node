import { resolve } from 'path';
import colors from 'colors';
import inquirer from 'inquirer';
// require('colors');


const mostrarMenu = () => {
    return new Promise(resolve => {
        console.clear();
        console.log('================================'.magenta);
        console.log('   Seleccione una opción'.magenta);
        console.log('================================\n'.magenta);
        console.info(`${'1.'.magenta} Crear tarea`);
        console.info(`${'2.'.magenta} Listar tareas`);
        console.info(`${'3.'.magenta} Listar tareas completadas`);
        console.info(`${'4.'.magenta} Listar tareas pendientes`);
        console.info(`${'5.'.magenta} Completar tareas(a)`);
        console.info(`${'6.'.magenta} Borrar tareas`);
        console.info(`${'0.'.magenta} Salir\n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Seleccione una opción: ', (opt) =>{
            readline.close();
            resolve(opt); 
        }); 
    });


}

    const pausa = () => {
        return new Promise(resolve => {
            const readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });
        
            readline.question(`\nPresione ${'ENTER'.magenta} para continuar\n`, (opt) =>{
                readline.close();
                resolve(); 
            });
        }); 
    }
export {
    mostrarMenu,
    pausa
};