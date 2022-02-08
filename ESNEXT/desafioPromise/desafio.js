const fs = require ('fs');
const path = require ('path')

const caminho = path.join(__dirname, 'dados.txt')

/*
const exibir = (_,conteudo) => {
    console.log(conteudo.toString())
}
*/


function conteudoDoArquivotxt (caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString())
        })

        console.log("Depois de ler...")
    })
}

conteudoDoArquivotxt(caminho) 
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))  
    .then(final => `O valor final é: ${final}`)
    .then(console.log)
