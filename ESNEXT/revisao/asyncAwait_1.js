//ter um codigo que parece sincrono embora seja um codigo assincrono
function esperarPor(tempo = 2000) {
    return new Promise( function(resolve) {
        setTimeout(function() {
            resolve()
        }, tempo)
    })
}

/*
esperarPor(2000)
    .then(() => console.log("Executando uma promise 1..."))
    .then(esperarPor)
    .then(() => console.log("Executando uma promise 2..."))
    .then(esperarPor)
    .then(() => console.log("Executando uma promise 3..."))
    .then(esperarPor)
*/

function retornaValor() {
    return new Promise(resolve => {

        setTimeout(() => resolve(10), 5000)
    })
}

//IMPORTANTE - LEMBRAR: quando você marca uma função como assincrona, você tem a capacidade de esperar dentro dela
//que uma promise seja resolvida sem usar o metodo then
//Você vai fazer um await em cima de uma função que retorna uma promise
async function executar() {
    let valor = await retornaValor()

    await esperarPor(1500)
    console.log(`Async/Await ${valor} ...`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}


async function executarDeVerdade () {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()

