const { table } = require('console')
const http = require('http') 

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) =>{
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
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

//Recurso do ES8
//Objetivo de simplificar o uso de promises... -> torno as chamadas assincronas em aparentemente sincronas 
//1º Marco a função com a palavra async (await so funciona em uma função marcada por async)
let obterAlunos = async () => {

    const Ta = await getTurma('A'); 
    const Tb = await getTurma('B');
    const Tc = await getTurma('C');
    return [].concat(Ta, Tb, Tc);
} //Quando eu tenho uma função async, por mais que eu esteja retornando um array, ela ira retornar um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes ))

//IMPORTANTE: Com isso tenho um codigo que parece mt mais sincrono