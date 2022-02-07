function simbolos (numero = 1){

    let string = "";

    for(let i = 0; i < numero; i++){

        string = string.concat("+");
    }

    return string
}

console.log(simbolos(3));

