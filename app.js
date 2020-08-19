// Arreglos

const numeros = [10,20,30,40,50,60];

console.log(numeros);

//Areglo de Strings
const meses = new Array('enero','febrero','marzo','abril');

//Arreglo Mezclado
const Mezclado = ['hola',2,'amigo'];
console.log(Mezclado);

console.log(meses[4]);

//Agregar elementos al arreglo
meses[4] = 'mayo';
meses.push('junio');//add end
meses.unshift('Mes 0');//add star
//eliminar ultimo elemento de un arreglo
meses.pop();
//Eliminar primer elemento arreglo
meses.shift();
//eliminar elemento en especifico
meses.splice(2,1);//cuantos mas quiero quitar segundo argumento
//invertir orden del arreglo
meses.reverse();
//unir arreglos
let arreglo1=[1,2,3],
     arreglo2=[9,8,7];

console.log(meses.length);
console.log(Array.isArray(meses));//Comprobar si es un arreglo
console.log(arreglo1.concat(arreglo2));//unir arreglos

console.log(meses);


console.log(meses.indexOf('abril'));


const frutas =['platano','manzana','fresa','naranja'];
frutas.sort();// ordenar arreglo string
console.log(frutas);

//ordenar numeros
arreglo1= [1,24,6,45,63,67,24];
arreglo1.sort(
     function(x,y){
          return x-y;//orden inverso y-x
     }
);
console.log(arreglo1);



