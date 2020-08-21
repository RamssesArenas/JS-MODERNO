// Estructuras de control

/* const edad = 17;

if(edad >= 18){
     console.log('SI puedes ingresar al  stio')
}else{
     console.log('No puedes ingresar al  stio')
} 


let puntaje = 30;

if(puntaje){
     console.log(`el puntaje fue de ${puntaje}`);
}else{
     console.log('No hay puntaje');
}

let efectivo = 500;
let totalCarrito = 1000;
if (efectivo > totalCarrito) {
     console.log('pago Correcto')
} else {
     console.log('sin fondos suficientes')
}


let hora=25;
if(hora>0 && hora<=10){
     console.log('buenos dias')
}else if(hora>10 && hora<=18){
     console.log('Buenas Tardes')
}else if(hora>18 && hora<=24){
     console.log('Buenas Noches')
}

else{
     console.log('Hora no valida')
}
*/


// operado OR ||

let efectivo = 300,
     credito = 300,
     totalCarrito= 500;
     disponible = credito+efectivo;

if (totalCarrito < credito || totalCarrito < credito || totalCarrito<disponible) {
     console.log('puede pagar');
}/*else if (totalCarrito<disponible) {
     console.log('Usar credito parapagar');
} 

 else if (totalCarrito< credito) {
     console.log('puede pagar');
} */else{
     console.log('no puede pagar')
}


//ternario if en una sola linea

const logueado = true;
console.log(logueado === true ? 'si se logueo' : ' no se ha logueado')