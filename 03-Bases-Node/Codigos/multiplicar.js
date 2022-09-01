const colors = require('colors');
const fs = require('fs');
const crearArchivo = async(base = 5, listar=false,hasta=10) => {
    try{
        let salida = ''; 
        let consola = '';
        for(let i=1;i<=hasta;i++){
            salida += (`${ base} X ${i} = ${base*i}\n`);
            consola += (`${colors.black( base)} X ${i} = ${base*i}\n`.bgMagenta);
        }
        if(listar){
            console.log("*****************************".bgCyan);
            console.log("       TABLA DEL ",base);
            console.log("*****************************".bgCyan);

            console.info(consola);
        }

        // fs.writeFile(`tabla${base}.txt`,salida,(err)=>{
        //     if (err) throw err;
        //     console.info(`archivo tabla${base}.txt creado`);
        // });

        fs.writeFileSync(`./salidas/tabla${base}.txt`,salida)
        return ` tabla${base}.txt`;

    }catch(err){
        throw err;
    }
}

module.exports={
    crearArchivo
}