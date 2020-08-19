//Crear objeto
/*
const persona = {
     nombre: 'miguel',
     apellido : 'martinez',
     profesion : 'diseñador grafico',
     edad: 20,
     email : 'mail@correo.com',
     musica : ['punk','rock','Heavy metal'],
     hogar:{
          ciudad: 'guadalajara',
          pais: 'mexico'
     },
     nacimiento: function(){
          return new Date().getFullYear()-this.edad;
          //return new Date().getFullYear()-edad;
     }
}

persona.musica.push('alternativo');
console.log (persona.musica[1]);
console.log (persona.hogar.ciudad);
console.log (persona.nacimiento());

*/


// Arreglo objetos
const autos = [
     {modelo: 'mustang',motor: 6.0 },
     {modelo: 'camaro',motor: 6.1 },
     {modelo: 'challenger',motor: 6.3 }
];

for(let i=0; i<autos.length; i++){
     //console.log(autos[i].modelo);
     console.log(`${autos[i].modelo} ${autos[i].motor}`);
}

autos[0].modelo = 'audi';
console.log(autos);
