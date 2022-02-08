function quantidadeDeChar (caractere, frase){

    let contador = 0;

    for (let i = 0; i < frase.length; i++){
        if (frase.charAt(i) === caractere){
            contador++;
        }
    }

    return contador

}

console.log(quantidadeDeChar("r", "O rato roeu a roupa do rei de roma"))