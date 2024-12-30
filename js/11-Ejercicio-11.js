let numero = parseInt(prompt("Ingrese un número"));

if (numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0) {
    if (numero % 2 == 0 & numero % 3 == 0 & numero % 5 == 0 & numero % 7 == 0) {
        document.write('El ', numero, ' es divisible por 2, por 3, por 5 y por 7');
    } else if (numero % 2 == 0 & numero % 3 == 0 & numero % 5 == 0) {
        document.write('El ', numero, ' es divisible por 2, por 3 y por 5');
    } else if (numero % 2 == 0 & numero % 3 == 0) {
        document.write('El ', numero, ' es divisible por 2 y por 3');
    } else if (numero % 2 == 0) {
        document.write('El ', numero, ' es divisible por 2');
    } else if (numero % 3 == 0 & numero % 5 == 0 & numero % 7 == 0) {
        document.write('El ', numero, ' es divisible por 3, por 5 y por 7');
    } else if (numero % 3 == 0 & numero % 5 == 0) {
        document.write('El ', numero, ' es divisible por 3 y por 5');
    } else if (numero % 3 == 0) {
        document.write('El ', numero, ' es divisible por 3');
    } else if (numero % 5 == 0 & numero % 7 == 0) {
        document.write('El ', numero, ' es divisible por 5 y por 7');
    } else if (numero % 5 == 0) {
        document.write('El ', numero, ' es divisible por 5');
    } else if (numero % 7 == 0) {
        document.write('El ', numero, ' es divisible por 7');
    }
} else {
    document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7.");
}