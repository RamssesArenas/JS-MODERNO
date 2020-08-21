// for loops
/* for (let i = 0; i < 10; i++) {
     console.log(`Numero: ${i+1}`);
     
} 

 for (let i = 0; i < 10; i++) {
     if (i === 5) {
          console.log('voy en el 5');
          break;// Continue seguir y brack detener el for
     }
     console.log(`${i+1}`);
} */

const arreglosProductos = ['camisa','boleto','guitarra','disco'];



for (let i = 0; i < arreglosProductos.length; i++) {
          console.log(`tu producto ${arreglosProductos[i]} fue agregado`);
}