import 'dotenv/config';
import colors from 'colors';

import { inquirerMenu, leerInput, listarLugares, pausa } from "./helpers/inquirer.js";
import { Busquedas } from "./models/busquedas.js";



const main = async() =>{
    const busquedas = new Busquedas();
let opc;

do{
    opc = await inquirerMenu();

    switch(opc){
        case 1:
            // Mostrar mensaje
            const termino = await leerInput('Ciudad: ');
            
            // Buscar los lugares
            const lugares = await busquedas.ciudad(termino);

            // Seleccionar el lugar
            const id = await listarLugares(lugares);
            if (id === '0') continue;
            const lugarSel = lugares.find(l => l.id === id);
                    //Guardar en BD
                    busquedas.agregarHistorial(lugarSel.nombre);



            // Clima
            const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);
            // Mostrar Resultados
            console.log('Informacion de la ciudad'.magenta);
            console.log('Ciudad:', lugarSel.nombre.magenta);
            console.log('Lat:', lugarSel.lat);
            console.log('Lng:', lugarSel.lng);
            console.log('Temperatura:', clima.temp);
            console.log('Mìnima:', clima.min);
            console.log('Màxima:', clima.max);
            console.log('Como está el clima: ', clima.desc.magenta);
        break;

    case 2:
        busquedas.historialCapitalizado.forEach((lugar,i)=>{
            const idx = `${i+1}.`.magenta;
            console.log(`${idx} ${lugar}`);
        });
        break;
    } //Termino del switch

    if (opc !== 0) await pausa();

}while(opc !== 0);
};
main();