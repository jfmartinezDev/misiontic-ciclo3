/*(function () {
    let palabra = "ABC";
    // Esto imprime "ABC"
    console.log(palabra);
   })();   

   console.log(palabra);*/

/*var timer = function(length){
    return new Promise(
        function(resolve, reject){
            console.log('Inicio de la promesa');
            setTimeout(function(){
                console.log('Finalizó el tiempo');
                resolve();
            }, length);
        });
};

timer(4000).then(() => alert('Todo terminó'));*/

/*var promiseCount = 0;

function testPromise() {
    var thisPromiseCount = ++promiseCount;
    var log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
    ') Comenzó (<small>Comenzó el código sincrónico</small>)<br/>');
 // Hacemos una promesa: prometemos un contador numérico de esta promesa,
 // empezando por 1 (después de esperar 3s)
    var p1 = new Promise(
    // La función resolvedora es llamada con la
    // habilidad de resolver o rechazar la promesa
    function(resolve, reject) {
        log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Comenzó la promesa (<small>Código asíncrono comenzó</small>)<br/>');
        // Esto es solo un ejemplo para crear asincronismo
        window.setTimeout(
        function() {
        // ¡Cumplimos la promesa!
        resolve(thisPromiseCount);
        }, Math.random() * 2000 + 1000);
        }
);

p1.then(
    // Registrar el valor de la promesa cumplida
    function(val) {
    log.insertAdjacentHTML('beforeend', val + ') Promesa cumplida (<small>Código asíncrono terminado.</small>)<br/>');
    })
   .catch(
    // Registrar la razón del rechazo
    function(reason) {
        console.log('Manejar promesa rechazada ('+reason+') aquí.');
    });
   log.insertAdjacentHTML('beforeend', thisPromiseCount +') Promesa hecha (<small>Código síncrono terminado.</small>)<br/>');
   }
   
testPromise();*/

/*function sumar(...numeros){
    return numeros.reduce(function(prev, current){
    return prev + current;
    });
   }*/

/*function sumar(...numeros){
    return numeros.reduce(
    (prev, current) => prev + current 
    );
   }

console.log(sumar(1,1,1,1,2,0,1,0)); */

/*function sumar(x,y,z){
    return x + y + z;
}

let numeros = [1, 2,3];
console.log(sumar(...numeros));*/

/*function sortRestArgs(...theArgs) {
    var sortedArgs = theArgs.sort();
    return sortedArgs;
   }
   console.log(sortRestArgs(5,3,7,1)); // muestra 1,3,5,7
   function sortArguments(...arguments) {
    var sortedArgs = arguments.sort();
    return sortedArgs; // esto nunca va a ocurrir
   }
   // lanza un TypeError: arguments.sort is not a function
   console.log(sortArguments(5,3,7,1,2,9));
   //Para poder usar los métodos de Array en el objeto arguments, se debe   */

/*class Producto {    
    constructor(nombre, codigo,tipo) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.tipo = tipo;
    }
}*/

/*miProducto = new Producto("Zapato", 1525,"Cuero");
miProducto2 = new Producto("PC", 1234,"Metal");
document.getElementById("log").innerHTML =
miProducto.nombre + " " + miProducto.codigo + " " + miProducto.tipo;

document.getElementById("articulos").innerHTML =
miProducto2.nombre + " " + miProducto2.codigo + " " + miProducto2.tipo;*/

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

Persona.prototype.comer = function() {
    alert("Estoy comiendo!");
};

var persona1 = new Persona("Joshua");
//persona1.diHola();
//persona1.caminar();
//persona1.comer();

function Estudiante(primerNombre, asignatura) {
    // Llamamos al constructor padre, nos aseguramos (utilizando Function#call) que "this" se
    // ha establecido correctamente durante la llamada
    Persona.call(this, primerNombre);
    //Inicializamos las propiedades específicas de Estudiante
    this.asignatura = asignatura;
    };
    
Estudiante.prototype = Object.create(Persona.prototype);

Estudiante.prototype.constructor = Estudiante;

Estudiante.prototype.diHola = function(){
    alert("Hola, Soy " + this.primerNombre + ". Estoy estudiando " +
    this.asignatura + ".");
    };

Estudiante.prototype.estudiar = tiempo => alert(`Voy a estudiar ${tiempo} horas`);

var estudiante1 = new Estudiante("Carolina", "Ciclo III");
estudiante1.diHola(); 
estudiante1.estudiar(5);