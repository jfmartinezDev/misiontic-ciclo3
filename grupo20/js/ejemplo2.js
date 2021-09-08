/*let contenido = "Misiontic 2022";
const contenido2 = "Grupo 20";

document.getElementById("parrafo").innerHTML = contenido;*/

/*let variable = "misiontic";
if (variable.endsWith("mi")){
    console.log("entra");
}*/

//let variable = "a";

//console.log(variable.repeat(7));

//console.log(`${variable}->${variable.repeat(7)}` );

/*document.getElementById("parrafo").innerHTML = new Date().getMinutes();*/

/*let ul = document.createElement('ul');
document.body.appendChild(ul);
let li1 = document.createElement('li');
let li2 = document.createElement('li');
ul.appendChild(li1);

ul.appendChild(li2);

function hide(e){
 // e.target se refiere cuando se clickea el elemento <li>
 // Esto es diferente de e.currentTarget que se referiría al padre
    e.target.style.visibility = 'hidden';
//e.target.style.display= 'none'
}

ul.addEventListener('click', hide, false);

let span = document.createElement('span');
let parrafo = document.getElementById("parrafo");
parrafo.appendChild(span);*/

/*function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}*/

/*toCelsius = fahrenheit => {
    return (5/9) * (fahrenheit-32);
};*/

/*calcularvalor = () => {
    let valor = document.getElementById("valor").value;
    let resultado = toCelsius(valor);
    console.log(resultado);
};

document.getElementById("parrafo").innerHTML = toCelsius(77);*/

//let sumar = (a, b) => a + b;
//console.log( sumar(10, 9) ); //Imprime 19 en consola

/*let productos = ['Zapatos', 'Camisas','maletines'];
console.log(productos);

productos = productos.map( (producto) => `${producto} en descuento. `);

console.log(productos);*/

/*function myFunction() {
    var greeting;
    var time = new Date().getHours();
    if (time < 12) {
        greeting = "Buenos dias";
    } else if (time < 18) {
        greeting = "Buenas tardes";
    } else {
        greeting = "Buenas noches";
    }
    document.getElementById("parrafo").innerHTML = greeting;
}*/

/*let dia;
switch (new Date().getDay()) {
    case 0:
    dia = "Domingo";
    break;
    case 1:
    dia = "Lunes";
    break;
    case 2:
    dia = "Martes";
    break;
    case 3:
    dia = "Miércoles";
    break;
    case 4:
    dia = "Jueves";
    break;
    case 5:
    dia = "Viernes";
    break;
    case 6:
    dia = "Sábado";
    break;
    default:
    dia = "Dia no encontrado";
    break;
}
document.getElementById("parrafo").innerHTML = "Hoy es " + dia;*/

/*let productos = ["Granos", "Verduras", "Lácteos", "Aseo", "Carnes", "Mecato"];
let text = "";
let i;
for (i = 0; i < productos.length; i++) {
   text += productos[i] + "<br>";
}
document.getElementById("parrafo").innerHTML = text;*/

/*let txt = "";
let producto = {
    nombrep:"Zapatos deportivos", 
    color:"Rojo",
    codigo:1525
};

let x;
for (x in producto) {
 txt += x + ":" + producto[x];
}
document.getElementById("parrafo").innerHTML = txt;*/

//console.log ([1, 2, 3, 5, 9].find(item => item > 5 ));

//console.log ([1, 2, 3, 5, 9].findIndex(item => item > 0 ));
   
/*let productos = new Set(['Zapatos', 'Bolsos', 'Maletines', 'Bolsos']);
console.log(productos); */

/*try {
    mensajeAlerta("Esto es un error!");
}
catch(err) {
    document.getElementById("parrafo").innerHTML = err.message;
}*/

let tareas = [
{ 'nombre' : 'Apertura de la tienda', 'duracion' : 15 },
{ 'nombre' : 'Revisión de inventarios', 'duracion' : 60 },
{ 'nombre' : 'Pago a proveedores', 'duracion' : 240 }
];
    //Se creará una nueva lista con el nombre de las tareas anteriores
/*let tareas_nombres = [];
    // Usando forEach
tareas.forEach(function (tarea) {
    tareas_nombres.push(tarea["duracion"]);
});
document.getElementById("parrafo").innerHTML=tareas_nombres;*/
// usando map
/*let tareas_nombres2 = tareas.map(function (tarea) {
    return tarea.duracion;
});

document.getElementById("parrafo").innerHTML=tareas_nombres2;*/
//Usando filter listaremos las tareas que llevan una hora o más para solucionar
/*let tareas_dificiles = tareas.filter(function (tarea) {
    return tarea.duracion >= 60;
}).map ( elemento => elemento.nombre ) ;

//console.log(tareas_dificiles);


// Using ES6
//let tareas_dificiles2 = tareas.filter((tarea) => tarea.duracion >= 60 );
// se muestran las tareas como objetos

document.getElementById("parrafo").innerHTML=tareas_dificiles;*/

/*(function (palabra) {
    
    // Esto imprime "ABC"
    console.log(palabra);
   }) ("Misiontic");*/

// ReferenceError: palabra is not defined
//console.log(palabra);   

/*var timer = function(length){
    return new Promise(function(resolve, reject){
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
    var log = document.getElementById('parrafo');
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
 }, Math.random() * 2000 + 3000);
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
   log.insertAdjacentHTML('beforeend', thisPromiseCount +
    ') Promesa hecha (<small>Código síncrono terminado.</small>)<br/>');
   }
   
   testPromise();*/

/*function sumar(...numeros){
    return numeros.reduce(function(prev, current){
        return prev + current;
    });
   }

   console.log(sumar(1,1,1,1,8,5,2,5,9,8,5)); // devuelve 7 */

/*function sumar(x,y,z){
    return x + y+ z ;
}

let numeros = [1, 2, 8];
console.log(sumar(...numeros));*/

/*function sortRestArgs(...theArgs) {
    var sortedArgs = theArgs.sort();
    return sortedArgs;
}

console.log(sortRestArgs(5,3,0,7,1,99)); // muestra 1,3,5,7*/

/*class Producto {    
    constructor(nombre, codigo) {
        this.nombre = nombre;
        this.codigo = codigo;
    }
}

miProducto = new Producto("Zapato", 1525);
document.getElementById("parrafo").innerHTML = 
miProducto.nombre + " " + miProducto.codigo;

miPantalla = new Producto("LG", 1234);
console.log(miPantalla.nombre);
console.log(miPantalla.codigo);*/

function Persona(primerNombre) {
    this.primerNombre = primerNombre;
}

// métodos
Persona.prototype.diHola = function() {
    alert ('Hola, Soy ' + this.primerNombre);
};

Persona.prototype.diAdios = () => alert("Adios");

/*let persona1 = new Persona("Bryan");
persona1.diHola();
persona1.diAdios();*/

function Estudiante(primerNombre, asignatura) {        
    Persona.call(this, primerNombre);
    //super();
    //Inicializamos las propiedades específicas de Estudiante
    this.asignatura = asignatura;
    };

    
    Estudiante.prototype = Object.create(Persona.prototype); 

    Estudiante.prototype.constructor = Estudiante;

    Estudiante.prototype.estudiar = () => alert("Estudiando...");
    
    Estudiante.prototype.diHola = function() {
        alert ('Hola, Soy ' + this.primerNombre + "estoy estudiando" + this.asignatura);
    };

    function activar(){
        var estudiante1 = new Estudiante(1234, "Ciclo III");
        estudiante1.diHola();
    }

