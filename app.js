// Recorrer un arreglo con For each

/* const pendientes = ['Tarea','Comer','Proyecto','Aprender JS']

for (let i = 0; i < pendientes.length; i++) {
     console.log(pendientes[i]);
     
}
//console.log(pendientes);

//ForEach
pendientes.forEach(function(pendiente,index){
     console.log(`${index+1} : ${pendiente}`)
}) */

//Map para recorrer un arreglo de objetos

/* const carrito=[
     {id:1, producto:'libro'},
     {id:1, producto:'Camisa'},
     {id:1, producto:'guitarra'},
     {id:1, producto:'disco'}
];

const nombreProducto = carrito.map(function(carrito){
     return carrito.producto;
});

console.log(nombreProducto); */

const automovil = {
     modelo: 'camaro',
     motor: 61,
     anio: 1969,
     marca: 'chevrolet'
}

for(let auto in automovil){
     console.log(`${auto} : ${automovil[auto]}`)
}

console.log(automovil);