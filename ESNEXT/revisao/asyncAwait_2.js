function gerarNumerosEntre (min, max, nuumerosProibidos) {
    if (min > max) {

        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (nuumerosProibidos.includes(aleatorio)){

            reject("Numero repitido!!!")
        }
        
        else {
            resolve(aleatorio);
        } 
    })
}

async function gerarMegaSena (qtdNumeros, tentativas = 1){
    try{
        const numeros = []
        for(let i = 0; i < qtdNumeros; i++) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
    
        return numeros
        
    } catch(e) {
        if(tentativas > 10){
            throw "IMPOSSIVEL!"
        }
        else {
            return gerarMegaSena(qtdNumeros, tentativas + 1)
        }
    }
    
}

gerarMegaSena(20)
    .then(console.log)
    .catch(console.log)
