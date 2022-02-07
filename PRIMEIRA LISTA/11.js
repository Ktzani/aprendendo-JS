function fatorial(numero){
    let total = 1;

    if(numero === 0 || numero === 1){
        return 1;
    }

    for (let i = numero; i > 0 ; i--){
        total = total * i;
    }

    return total;
}   

console.log(fatorial(4));