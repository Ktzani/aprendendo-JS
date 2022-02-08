function funcionarOuNao (valor, chanceDeErro){
    return new Promise((resolve, reject) => {
        try{
            //con.log ('Temp')
            if(Math.random() < chanceDeErro) {
                reject("Ocorreu um erro!");
            }

            else {
                resolve(valor)
            }
        } catch(e){
            reject(e)
        }
    })
}

funcionarOuNao("Testando...", 0.5)
    .then(
        v => consol.log(`Valor: ${v}`))
        //err => console.log(`Erro especifico: ${err}`))
         //Esse vai ser o primeiro tratamento de erro e se passar por ele não passa no proximo catch
    .catch(err => console.log(`Erro Geral: ${err}`)) //Bom colocar o catch na ultima posição para tratar qualquer erro que te
                                            //nha acontecido anteriormente, pois depois do catch mais nenhum valor será 
                                            //obtido
    .then(() => console.log("Fim!!"))