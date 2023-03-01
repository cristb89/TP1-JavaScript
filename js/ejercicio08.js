/*

8.- Escribe un programa que pida un número y diga si es divisible por 2

*/

let numero = parseInt(prompt("Ingrese un número"));

if (numero % 2 === 0) {
    document.write("El número ingresado es divisible en 2");
} else {
    document.write("El número ingresado NO es divisible en 2");
}