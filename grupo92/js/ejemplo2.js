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

/*(function (palabra) {    
    // Esto imprime "ABC"
    console.log(palabra);
   })("ABC");*/

/*var promiseCount = 0;
function testPromise() {
    var thisPromiseCount = ++promiseCount;
    var log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Comenzó (<small>Comenzó el código sincrónico</small>)<br/>');

    var p1 = new Promise(

    function(resolve, reject) {
        log.insertAdjacentHTML('beforeend', thisPromiseCount +') Comenzó la promesa (<small>Código asíncronocomenzó</small>)<br/>');
        // Esto es solo un ejemplo para crear asincronismo
        window.setTimeout(
        function() {
            // ¡Cumplimos la promesa!
            resolve(thisPromiseCount);
            }, Math.random() * 5000 + 1000);
    }
);

p1.then(
    // Registrar el valor de la promesa cumplida
    function(val) {
    log.insertAdjacentHTML('beforeend', val +
    ') Promesa cumplida (<small>Código asíncrono terminado.</small>)<br/>');
    })
   .catch(
    // Registrar la razón del rechazo
    function(reason) {
        console.log('Manejar promesa rechazada ('+reason+') aquí.');
    });
   log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promesa hecha (<small>Código síncrono terminado.</small>)<br/>');
   }
   
testPromise();*/

/*function sumar(...numeros){
    return numeros.reduce(function(prev, current){
        return prev + current;
    });
   }
   console.log(sumar(1,1,1,1)); // devuelve 7 */

/*function sumar(x,y,z){
    return x + y + z;
}

let numeros = [1, 2, 4];
console.log(sumar(...numeros));*/

/*function sortRestArgs(...theArgs) {
    var sortedArgs = theArgs.sort();
    return sortedArgs;
}

console.log(sortRestArgs(5,9,3,0,7,1)); // muestra 1,3,5,7*/

/*function sortArguments() {
    var sortedArgs = arguments.sort();
    return sortedArgs; // esto nunca va a ocurrir
}
   // lanza un TypeError: arguments.sort is not a function
console.log(sortArguments(5,3,7,1));*/

/*class Producto {

    constructor(nombre, codigo, departamento) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.departamento = departamento;
    }
}

let miProducto = new Producto("Zapato", 1525, "Ropa");
document.getElementById("log").innerHTML =
miProducto.nombre + " " + miProducto.codigo + " " + miProducto.departamento;*/

/*let miProducto2 = new Producto("Lampara", 1234);
document.getElementById("log2").innerHTML =
miProducto2.nombre + " " + miProducto2.codigo;*/

function Persona(primerNombre) {
    this.primerNombre = primerNombre;
}

// métodos
Persona.prototype.diHola = function() {
    alert ('Hola, Soy ' + this.primerNombre);
};

Persona.prototype.caminar = function() {
    alert("Estoy caminando!");
   };

var persona1 = new Persona("Estudiante1");
var persona2 = new Persona("Estudiante2");
// Llamadas al método diHola de la clase Persona.
//persona1.diHola(); // muestra "Hola, Soy Estudiante1"
//persona2.diHola(); // muestra "Hola, Soy Estudiante2"

   // Definimos el constructor Estudiante
   function Estudiante(primerNombre, asignatura) {        
        Persona.call(this, primerNombre);
        this.asignatura = asignatura;
   };
   // Creamos el objeto Estudiante.prototype que hereda desde Persona.prototype
   // Nota: Un error común es utilizar "new Persona()" para crear Estudiante.prototype
   // Esto es incorrecto por varias razones, y no menos importante que no le estamos pasando nada
   // a Persona desde el argumento "primerNombre". El lugar correcto para llamar a Persona
   // es arriba, donde llamamos a Estudiante.
   Estudiante.prototype = Object.create(Persona.prototype); // Vea las siguientes notas
   // Establecer la propiedad "constructor" para referencias a Estudiante
   Estudiante.prototype.constructor = Estudiante;

   //let estudiante1 = new Estudiante("Carolina", "Ciclo III");
   

   // Reemplazar el método "diHola"
   Estudiante.prototype.diHola = function(){
    alert("Hola, Soy " + this.primerNombre + ". Estoy estudiando " +
    this.asignatura + ".");
   };
   // Agregamos el método "diAdios"
   Estudiante.prototype.diAdios = function() {
        alert("¡ Adios !");
    };
// Ejemplos de uso
var estudiante1 = new Estudiante("Carolina", "Ciclo III");
estudiante1.diHola(); 
estudiante1.caminar(); // muestra "Estoy caminando!"
estudiante1.diAdios(); // muestra "¡ Adios !"
// Comprobamos que las instancias funcionan correctamente
alert(estudiante1 instanceof Persona); // devuelve true
alert(estudiante1 instanceof Estudiante); // devuelve true