function primeiro (vector, numero){

    const aux = vector.map(element => element * numero)

    return aux
}

function segundo (vector, numero){

    const maiorqueCinco = function(element){
        return element > 5;
    }

    const multiplica = function(element){
        return element * numero;
    }

    const aux = vector.filter(maiorqueCinco).map(multiplica);

    return aux;
}

console.log(primeiro([1 , 3 , 5, 7, 10], 3));

console.log(segundo([1 , 3 , 5, 7, 10], 5));