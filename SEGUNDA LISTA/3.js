function priSeg (vetor){

    let array = [];

    let aux = vetor.length - 1;

    array.push(vetor[0]);

    array.push(vetor[aux]);

    return array;
}

console.log(priSeg([1, 2, 3, "Gabriel"]))