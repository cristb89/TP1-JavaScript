/*

11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay
que decir todos por los que es divisible)

*/

let numero = parseInt(prompt("Ingrese un número para saber si es divisible por 2, 3, 5 o 7"));

if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
    if (numero % 2 === 0) {
        document.write("Es divisible por 2.");
        document.write("<br>");
    }
    if (numero % 3 === 0) {
        document.write("Es divisible por 3.");
        document.write("<br>");
    }
    if (numero % 5 === 0) {
        document.write("Es divisible por 5.");
        document.write("<br>");
    }
    if (numero % 7 === 0) {
        document.write("Es divisible por 7.");
        document.write("<br>");
    }
} else {
    document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7.");
}