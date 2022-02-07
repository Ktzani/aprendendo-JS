const fs = require('fs')

const produto = {

    nome: "Celular",
    preco: 1500.99,
    desconto: 0.15
    
}

//const caminho = __dirname +'/arquivoGerado.json' 

//Importante: passar a extensão .json, porque se não irá passar um arquivo .js

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {

    console.log(err || "Arquivo Salvo!") //err pode ser falso, já que se nap tiver nenhum erro dará null
})