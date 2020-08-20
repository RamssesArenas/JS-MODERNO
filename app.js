// iife
(function(tecnologia){
     console.log(`aprendiendo ${tecnologia}`)
})('javascript');

//Metodos de propiedad
// Cuando una funcion se pone dentro de un objeto

const musica ={
     reproducir:function(id){
          console.log(`Reproduciendo Cancion id ${id}`);},
     pausar:function(){
               console.log('Pausar musica');
     }
}


// Los metodos pueden creearse o guardarse / crearse fuera del objeto
musica.borrar = function(id){
     console.log(`Borrando Cancion con el id ${id}`);
}

musica.reproducir(30);
musica.pausar();
musica.borrar(2);