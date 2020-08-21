 const ciudades = ['londres','new york','madrid','paris']
 const ordenes = new Set ([123,231,131,102]);
 const datos = new Map();
 datos.set('nombre','juan');
 datos.set('profesion','desarrollador web');

// Values al iterador

//Entries a las ciudades
/* for (let entrada of ciudades.entries()){
     console.log(entrada);
} */
//keys
/* for (let entrada of ciudades.keys()){
     console.log(entrada);
} */

//default
for (let entrada of ciudades){
     console.log(entrada);
}

//Values a las ciudades
/* for (let entrada of ciudades){
     console.log(entrada);
} */
//Entries Ordenes
/* for (let entradas of ordenes.entries()){
     console.log(entradas);
} */


for (let entradas of ordenes.keys()){
     console.log(entradas);
}

//Entries para el MAP
for(let entrada of datos.entries()){
     console.log(entrada);
}

//Values solo entrega el valor
//Entries entrega posicion y valor
//Keys entrega las llaves
for(let entrada of datos.values()){
     console.log(entrada);
}


const mensaje =  'Aprendiendo JS';
/* for (let i=0; i<mensaje.length;i++){
     console.log(mensaje[i]);
} */

/* for ( let letra of mensaje){
     console.log(letra);
} */

const enlaces = document.getElementsByTagName('a');
for(let enlace of enlaces){
     console.log(enlace.href);
}
