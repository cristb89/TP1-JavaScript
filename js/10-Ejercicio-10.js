let numero = parseInt(prompt("Ingrese un número"));

// VERSION 2022
if (((numero % 2) == 0) || ((numero % 3) == 0) || ((numero % 5) ==0) || ((numero % 7) == 0)) {
    document.write("Es divisible");
} else {
    document.write("No es divisible");
}

// VERSION 2024
/*
if ((numero % 2) == 0) {
    document.write('El ', numero, ' es divisible por 2');
} else if ((numero % 3) == 0) {
    document.write('El ', numero, ' es divisible por 3'); 
} else if ((numero % 5) == 0) {
    document.write('El ', numero, ' es divisible por 5'); 
} else if ((numero % 7) == 0) {
    document.write('El ', numero, ' es divisible por 7'); 
} else {
    document.write('El ', numero, ' no es divisible por 2, por 3, por 5 y ni por 7'); 
}
*/