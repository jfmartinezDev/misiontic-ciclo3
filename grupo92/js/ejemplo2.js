//console.log([1,4,5,7,8].includes(10));

//console.log([1,4,5,7,8].find(item => item>=5));

//console.log([1,4,5,7,8].findIndex(item => item>4));

//let productos = ['Zapatos', 'bolsos', 'maletines'].entries();

//for (let nombre of productos) console.log(nombre);


/*try {
    mensajeAlerta("Esto es un error!");
}
catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}*/

let tareas = [
    { 'nombre' : 'Apertura de la tienda', 'duracion' : 15 },
    { 'nombre' : 'Revisión de inventarios', 'duracion' : 60 },
    { 'nombre' : 'Pago a proveedores', 'duracion' : 240 }
];
    
/*let tareas_nombres = [];
    // Usando forEach
tareas.forEach(function (tarea) {
    //tareas_nombres.push(tarea["nombre"]);
    tareas_nombres.push(tarea.nombre);
});*/

//document.getElementById("principal").innerHTML=tareas_nombres;
// usando map

/*let tareas_nombres2 = tareas.map(function (tarea) {
    return tarea.duracion;
});

document.getElementById("principal").innerHTML=tareas_nombres2;*/

//Usando filter listaremos las tareas que llevan una hora o más para    

/*let tareas_dificiles = tareas.filter(function (tarea) {
    return tarea.duracion >= 60;
});

// Using ES6
let tareas_dificiles2 = tareas.filter((tarea) => tarea.duracion >= 60 );
tareas_dificiles2 = tareas_dificiles2.map(diccionario => diccionario.nombre);
// se muestran las tareas como objetos

document.getElementById("principal").innerHTML=tareas_dificiles2;*/

/*function joshua(){
    console.log("hola");
}*/

(function (palabra) {    
    // Esto imprime "ABC"
    console.log(palabra);
   })("ABC");
   // ReferenceError: palabra is not defined
   //console.log(palabra);