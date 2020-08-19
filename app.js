const numero1 = '50';
const numero2 = 10;
const numero3 = 'tres';



let dato;
dato = Number("20");
dato = Number("20.22214");
dato = Number(true);
dato = Number(false);
dato = Number(null);
dato = Number(undefined);
dato = Number('hola mundo');
dato = Number([1,2,3,4]);

dato = parseInt('100');
dato = parseFloat('100');
dato = parseInt('100.2453');

dato = '113434.31412';

//console.log(dato.toFixed(3)); to fix acortar decimales
console.log(parseFloat(dato).toFixed(2));

console.log(dato);




