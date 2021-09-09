/*console.log("2021");

let nombre = "Este es el programa misiontic";

if(nombre.endsWith("z") ){
    document.getElementById("nombre").innerHTML = nombre;
}

let emes = 'm';
console.log(emes.repeat(10));
console.log(
 `${emes} + ${'a'.repeat(10)}`
);*/

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
 }
 // Incluir el 'listener' a la lista
 // Se ejecutará cuando se haga click en cada <li>
 ul.addEventListener('click', hide, false);
*/

/*function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}*/

/*toCelsius = (fahrenheit) => {
    return (5/9) * (fahrenheit-32);
}

document.getElementById("valor").innerHTML = toCelsius(77);

let saludo = nombre => `Hola mucho gusto ${nombre}`;

console.log(saludo("Joshua"));

let sumar = (a, b) => a + b;

console.log( sumar(2, 3) ); //Imprime 19 en consola

let productos = ['Zapatos', 'Camisas','maletines'];
console.log(productos);
productos = productos.map(function(producto){
 return producto + ' en descuento ';
});

let productos = ['Zapatos', 'Camisas','maletines'];
productos = productos.map(producto => `${producto} en descuento. `);

console.log(productos);*/

/*function myFunction() {
    let greeting;
    let time = new Date().getHours();
    if (time < 12) {
    greeting = "Buenos dias";
    } else if (time < 18) {
    greeting = "Buenas tardes";
    } else {
    greeting = "Buenas noches";
    }
    document.getElementById("valor").innerHTML = greeting;
}
  
myFunction();

//document.getElementById("cedula").value = "123456";*/

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
document.getElementById("demo").innerHTML = "Hoy es " + dia;*/

/*let productos = ["Granos", "Verduras", "Lácteos", "Aseo", "Carnes",
"Mecato"];*/
/*
let productos = {nombrep:"Zapatos deportivos", color:"Rojo",
codigo:1525};
let text = "";
let i;
for (i = 0; i < productos.length; i++) {
 text += productos[i] + "<br>";
}
let producto;
for(producto in productos){
    text += producto + productos[producto] + "<br>";
}
document.getElementById("articulos").innerHTML = text;*/

/*console.log (
    [1, 2, 3, 5, 9].find(item => item > 2 )
);*/

/*console.log (
    [1, 2, 3, 5, 9].findIndex(item => item > 5 )
   );*/

/*let productos = ['Zapatos', 'bolsos', 'maletines'].entries();
for (let nombre of productos) console.log(nombre);*/

/*let productos = new Set(['Zapatos', 'Bolsos', 'Maletines', 'Bolsos']);
console.log(productos);*/
   
/*try {
    let divion = 5 / 0;
   }
catch(err) {
    document.getElementById("valor").innerHTML = err.message;
   }*/

   let tareas = [
    { 'nombre   ' : 'Apertura de la tienda', 'duracion' : 15 },
    { 'nombre' : 'Revisión de inventarios', 'duracion' : 60 },
    { 'nombre' : 'Pago a proveedores', 'duracion' : 240 }
    ];

let tareas_nombres = [];
// Usando forEach
tareas.forEach(function (tarea) {
    tareas_nombres.push(tarea.nombre);
});

console.log(tareas_nombres);

let tareas_nombres2 = tareas.map(function (tarea) {
    return tarea.nombre;
   });
console.log(tareas_nombres2);

/*let tareas_dificiles = tareas.filter(function (tarea) {
    return tarea.duracion > 60;
   });*/

let tareas_dificiles2 = tareas.filter((tarea) => tarea.duracion > 60 );

console.log(tareas_dificiles2);