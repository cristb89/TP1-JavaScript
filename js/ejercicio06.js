/*

6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el
mayor.

*/

let numero1 = prompt("Ingrese un número");
let numero2 = prompt("Ingrese otro número");

if (numero1 > numero2) {
    document.write("El número " + numero1 + " es mayor");
} else {
    document.write("El número " + numero2 + " es mayor");
}