function quantasPalavras(string){

    let array = new Array;

    array = string.split(" ");

    let quantidadeDePalavras = array.length;

    return quantidadeDePalavras;
}

console.log(quantasPalavras("Sou uma frase"));