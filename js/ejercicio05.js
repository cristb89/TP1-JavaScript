/*

5.- Escribe un programa de tres líneas que pida un número, pida otro número y
escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/
parseInt

*/

let numero1 = prompt("Ingrese un número");
let numero2 = prompt("Ingrese otro número");

document.write("La suma de los números es " + (parseInt(numero1) + parseInt(numero2)));