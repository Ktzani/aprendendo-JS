function despesas (vetorObjetos){

    const apenasPrecos = produto => produto.preco;

    const total = (acumulador, atual) => acumulador + atual;

    const resultado = vetorObjetos.map(apenasPrecos).reduce(total);

    return resultado
}

let despesasTotais = ([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]);

console.log(despesas(despesasTotais))