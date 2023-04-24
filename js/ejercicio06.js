/*

6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el
mayor.

*/

let numero1 = parseInt(prompt("Ingresa un número"));
let numero2 = parseInt(prompt("Ingresa otro número"));

if (isNaN(numero1) || isNaN(numero2)) {
    document.write("<p>Porfavor ingresa un número valido</p>")
} else {
    if (numero1 > numero2) {
        document.write("<p>El número " + numero1 + " es el mayor</p>");
    } else if (numero1 === numero2){
        document.write("<p>Los números son iguales</p>");
    } else {
        document.write("<p>El número " + numero2 + " es el mayor</p>");
    }
}