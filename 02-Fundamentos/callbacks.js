//Video 20

//Esta es la estructura de un callbac
// setTimeout (function(arr1, arr2){
// console.log("hola mundo");
// },1000);


const getUsuarioByID = (id, callback)=>{
    const usuario = {
        id,
        nombre :"Fernando"
    }
    setTimeout(()=>{
        callback(usuario)
    },1500);
    
}
getUsuarioByID(10, (usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});
