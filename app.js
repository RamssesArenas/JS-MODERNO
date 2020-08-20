try {
     algo();
} catch (error) {
     console.log('error');
}finally{
     console.log('No le importa, ejecuta de todos modos')
}

function obtenerClientes(){
     console.log('descargando...');

     setTimeout(function(){
          console.log('completado')
     },3000);
     }

obtenerClientes();