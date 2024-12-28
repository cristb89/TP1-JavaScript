let frase = prompt("Ingrese una frase cualquiera");

for (let index = 0; index < frase.length; index++) {
    switch (frase.charAt(index)) {
        case "a":
            document.write(frase.charAt(index));
            break;
        case "e":
            document.write(frase.charAt(index));
            break;
        case "i":
            document.write(frase.charAt(index));
            break;
        case "o":
            document.write(frase.charAt(index));
            break;
        case "u":
            document.write(frase.charAt(index));
            break;
        default:
            break;
    }
}