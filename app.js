// Function Expression

const suma = function(a,b){
     return a+b;
}

console.log(suma(1,2));
console.log(suma(4,2));

const saludar = function(nombre = 'visitante', edad=20, trabajo='desarrollador web'){
     return `hola ${nombre}, profesion ${trabajo} y tienes ${edad} años`;
}

console.log(saludar('ram'));
console.log(saludar());