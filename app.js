// Function Declaretion

/* function saludar(nombre){
     console.log(`Hola ${nombre}`);
}

saludar('alma');
saludar('miguel');
saludar('rogelio'); 


*/

function sumar(a,b){
     console.log(a+b);
}
sumar(1,2);
sumar(4,2);


function saludar(nombre = 'Vistante'){
     //if(typeof nombre === 'undefined'){nombre='Visitante'}
     //Manera antigua
     return `Hola ${nombre}`;
}

let saludo;
 saludo = saludar();
  console.log(saludo);

