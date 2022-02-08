//com promise
//SEM PROMISE 

const http = require('http') 

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) =>{
        http.get(url, res => {
            let resultado = ''
    
            //Recebo os dados e concateteno na variavel resultado
            //Os dados não chegam todos de uma vez do arquivo. Eles vao chegando e vamos compondo ate que o resultado 
            //fique completo 
            res.on('data', dados => {
                resultado += dados
            })
    
            //Terminando de chegar os dados que é uma string (JSON) vou converter para objeto (Json.Parse) e esse objeto convertido
            //irei passar para esse função callback nesse caso o resolve que vem do promise e é uma função callback
            res.on('end', () =>{
                try{
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e) //caso dê algum tipo de problema como fazer o parse de algo que não é JSON
                }
            })
        })
    })
}
/*
let nomes = []

//callback uma dentro da outra usando o then: -> Nesse caso faço chamadas sequenciais, ou seja, vou fazendo de um em um
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
}) 
*/

//apenas usando artimanhas do promise:  -> Nesse caso, diferente do de cima , disparo paralelamente, espero a resolução 
//de todas as promises para ai sim começar a executar o passo a passo
//Passo varios promises para ela e quando todas elas forem resolvidos ele vai chamar a cadeia de metodos then
Promise. all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas)) //terei um unico array com todos os alunos 
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message)) //Muito importante com a promise que façamos o tratamento de erro com o catch 
    //.then(x => console.log(x))


//OBS: CAINDO NO REJECT -> pegando uma turma que não existe
getTurma('D').catch(e => console.log(e.message))