function repete (elemento = 2, vezes = 1){

    let array = [];

    for (let i = 0; i < vezes; i++){

        array.push(elemento);
    }

    return array;
}

console.log(repete("perna", 4));