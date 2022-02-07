function falarDepoisDe(segundos, frase) {

    //Parametro resolve é uma função que sera chamada quando a promessa for atendida ou reject caso por algum motivo a promessa 
    //for rejeitada
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)

    })
}

//A promise é chamada usando o .then e posso usar ele quantas vezes eu quiser para gerar um encadeamento de operações 
//em cima daquilo que você recebe como resposta de uma promise    
//Obs: para tratar o caso de erro uso .catch e qualquer erro que acontece em qualquer uma dessas funções o fluxo será
//direcionado para o catch e essa função sera chamada sempre que acontecer algum tipo de erro 
//IMPORTANTE: ela aceita apenas um único parametro. Passando um segundo parametro ele será ignorado. Portanto, se eu quiser passar 
//várias coisas terei que passar um objeto com varios atributos ou outros objetos de dentro desse objeto maior 
falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat("?!?")) 
    .then(outraFrase => console.log(outraFrase)) 
    .catch(e => console.log(e))
