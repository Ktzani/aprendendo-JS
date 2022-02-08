function numeros (vetor){

    let array = [];

    array = vetor.filter(elemento => typeof elemento === "number");

    return array;
}

console.log(numeros([1, "Davi", 3, 4, "Gabriel"]));