/*

7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
los tres.

*/

let numero1 = parseInt(prompt("Ingrese un número"));
let numero2 = parseInt(prompt("Ingrese otro número"));
let numero3 = parseInt(prompt("Ingrese un número más"));

if ((numero1 > numero2) && (numero1 > numero3)) {
    document.write("El número " + numero1 + " es el mayor");
} else if (numero2 > numero1 && numero2 > numero3) {
    document.write("El número " + numero2 + " es el mayor");
} else{
    document.write("El número " + numero3 + " es el mayor");
}