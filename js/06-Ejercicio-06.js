let primerNumero = parseInt(prompt("Ingrese un número"))
let segundoNumero = parseInt(prompt("Ingrese otro número"));

if (primerNumero > segundoNumero) {
    document.write('El ', primerNumero, ' es el número más grande');
} else {
    document.write('El ', segundoNumero, ' es el número más grande');
}