function pares (array){

    const pares = function (elemento, indice){

         return elemento % 2 == 0 && indice % 2 == 0
    }

    array = array.filter(pares);

    return array;
}

console.log(pares([10, 70, 22, 43, 50, 60, 70, 80]))