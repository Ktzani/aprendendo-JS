//Essa duas primeiras funções poderiam ser uma só
function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(nome){
    return nome[0]
}

const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel']) //PODE SER PASSADO apenas um UNICO valor
})

//Veja que o resultado de um método then é passado para o proximo. Portanto, eu consigo criar uma sequencia de operações
//baseada em funções e essa funçoes posso criar em funções separadas e passa-las como parametro do then()
p
    .then(vetor => vetor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))

//OU

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    // .then(console.log)
    .then(resultadoFinal => console.log(resultadoFinal))
    