function jurosSimples(capital, juros, tempo){

    const montante = (capital * juros * tempo) + capital;

    return montante;
}

function jurosCompos(capital, juros, tempo){

    const montante = capital * Math.pow(1 + juros, tempo)
    
    return montante.toFixed(2);
}

console.log(jurosSimples(100, 0.1, 2));

console.log(jurosCompos(100, 0.1, 2));