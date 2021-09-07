//console.log("Hola grupo 92!");

//nombre = "Joshua";
//var nombre = "Joshua";

/*let nombre = "Joshua";

const nombre2 = "misiontic";
//nombre2 = "2021";

document.getElementById("principal").innerHTML = nombre;

alert("Holaaaaaaaaaaaaaaaaaaaaaaaa");*/

/*let programa = "misiontic";

if (programa.endsWith("c")){
    console.log("Entra! :)");
}else{
    console.log("No! :(");
}*/

//let variable = 'z';

/*console.log(variable + "->" + variable.repeat(11));*/

//console.log(`${variable} -> ${variable.repeat(5)}`);

//document.getElementById("principal").innerHTML = new Date().getFullYear();

/*let ul = document.createElement('ul');
document.body.appendChild(ul);
let li1 = document.createElement('li');
let li2 = document.createElement('li');
ul.appendChild(li1);
ul.appendChild(li2);

function hide(e){
    e.target.style.visibility = 'hidden';
}

ul.addEventListener('click', hide, false);*/

/*function transformarAGradosCelcius(fahrenheit){
    return (5/9) * (fahrenheit-32);
}*/

//transformarAGradosCelcius = (fahrenheit) => (5/9) * (fahrenheit-32);

/*transformarAGradosCelcius = fahrenheit => {
    console.log("Se activa la función transformar");
    return (5/9) * (fahrenheit-32);
}

console.log(transformarAGradosCelcius(77));*/

//document.getElementById("principal").innerHTML = transformarAGradosCelcius(77);

//let hello3 = () => `Hello World`;
//console.log(hello3);

//suma = (a,b) => a + b;
//console.log(suma(3,4));

//let productos = ['Zapatos', 'Camisas','maletines'];
//console.log(productos);

/*productos = productos.map(function(producto){
    return producto + ' en descuento ';
});*/

//productos = productos.map(producto => `${producto} en descuento. `);

//console.log(productos);

function myFunction() {
    let greeting;
    let time = new Date().getHours();
    if (time < 12) {
        greeting = "Buenos dias";
    } else if (time < 18) {
        greeting = "Buenas tardes";
    } else {
        greeting = "Buenas noches";
    }
    document.getElementById("principal").innerHTML = greeting;
}
   
let dia;
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
document.getElementById("dia_semana").innerHTML = "Hoy es " + dia;

/*let productos = ["Granos", "Verduras", "Lácteos", "Aseo", "Carnes",
"Mecato"];

let text = "";
let i;
for (i = 0; i < productos.length; i++) {
 text += productos[i] + "<br>";
}
document.getElementById("productos").innerHTML = text;*/

let txt = "";
let producto = {
    nombrep:"Zapatos deportivos", 
    color:"Rojo",
    codigo:1525
};

let x;
for (x in producto) {
 txt += x + ":" + producto[x] + "<br>";
}
document.getElementById("productos").innerHTML = txt;
