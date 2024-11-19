const jedi = {nombre: "Luke Skywalker", edad: 19};

jedi.edad = 25;
console.log(jedi);
//--------------------------
const personaje = {
    nombre: 'Leia',
    apellido: 'Organa',
    edad: 20
}
console.log('Soy '+personaje.nombre+' , tengo '+personaje.edad+' años y soy una princesa de Alderaan.');
//--------------------------
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

function precioTotal(sable1,sable2){
    sumatodo=sable1+sable2;
    return sumatodo;
}
console.log('La suma de todo da: '+precioTotal(sable1.precio,sable2.precio));
//--------------------------
const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

let precioBaseGlobal = 10000;
precioBaseGlobal = 25000;

function actualizarPrecioFinal(nave,precioBaseGlobal){
    nave.precioFinal=nave.precioBase+precioBaseGlobal;
    return nave;
}
console.log(actualizarPrecioFinal(nave1,precioBaseGlobal));
console.log(actualizarPrecioFinal(nave2,precioBaseGlobal));