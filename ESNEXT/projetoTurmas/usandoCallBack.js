//SEM PROMISE 

const http = require('http')

//letra da turma pq o caminho é o mesmo e o que muda é a letra da turma
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        //Recebo os dados e concateteno na variavel resultado
        res.on('data', dados => {
            resultado += dados
        })

        //Terminando de chegar os dados que é uma string (JSON) vou converter para objeto (Json.Parse) e esse objeto convertido
        //irei passar para esse função callback, para quem chamou a função turma receber o callback/a resposta com o objeto
        //todo pronto. Nesse caso, iremos pegar um array 
        res.on('end', () =>{
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []

getTurma('A', alunos => {
    //console.log(alunos[0].nome)
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))

    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})