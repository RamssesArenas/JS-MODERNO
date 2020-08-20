const diaHoy = new Date();
let navidad2017 = new Date(1995,11,20); //meses se inicializa en 0
let valor;
//Mes
valor=diaHoy.getMonth();
//dia
valor=diaHoy.getDate();
valor=diaHoy.getDay();
//obtener año
valor=diaHoy.getFullYear();
//Minutos
valor = diaHoy.getUTCMinutes();
//Hora
valor = diaHoy.getHours();
//Milesegundos desde 1970
valor = diaHoy.getTime();

valor=diaHoy.getFullYear();
valor=diaHoy.setFullYear(2016);
valor = diaHoy.getFullYear();


console.log(valor);
console.log(navidad2017)



