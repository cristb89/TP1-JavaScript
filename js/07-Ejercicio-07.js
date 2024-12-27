let primerNumero = parseInt(prompt("Ingrese un número"));
let segundoNumero = parseInt(prompt("Ingrese otro número"));
let tercerNumero = parseInt(prompt("Ingrese uno más"));

if ((primerNumero > segundoNumero) & (primerNumero > tercerNumero)) {
    document.write('El ', primerNumero, ' es el número más grande');
} else if ((segundoNumero > primerNumero) & (segundoNumero > tercerNumero)) {
    document.write('El ', segundoNumero, ' es el número más grande');
} else {
    document.write('El ', tercerNumero, ' es el número más grande');
}