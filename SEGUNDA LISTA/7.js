function somaArray (vetor){

    const resultado = vetor.reduce((acumulador, atual) => acumulador + atual)

    return resultado
}

console.log (somaArray([1, 2, 3, 4]))

