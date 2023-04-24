/*

7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
los tres.

*/

let numero1 = parseInt(prompt("Ingrese un número"));
let numero2 = parseInt(prompt("Ingrese otro número"));
let numero3 = parseInt(prompt("Ingrese un número más"));

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    document.write("<p>Por favor ingresa números validos</p>")
} else {
    if (numero1 === numero2 && numero1 === numero3) {
        document.write("<p>Los números son iguales</p>");
    } else if ((numero1 > numero2) && (numero1 > numero3)) {
        document.write("<p>El número " + numero1 + " es el mayor</p>");
    } else if (numero2 > numero3) {
        document.write("<p>El número " + numero2 + " es el mayor</p>");
    } else{
        document.write("<p>El número " + numero3 + " es el mayor</p>");
    }
}