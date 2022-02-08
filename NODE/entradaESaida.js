const anonimo = process.argv.indexOf('-a') !== -1;
//console.log(anonimo);

if(anonimo){

    process.stdout.write("Fala anonimo!\n") //SAIDA Padrao no terminal
    process.exit(); //Finaliza a aplicação
}

else {
    process.stdout.write("Escreva seu nome: ");

    //stdin -> ENTRADA padrão
    //Evento on 'data' é um evento que ocorre quando você digita alguma coisa e depois dá um enter
    //Ou seja, voce acabou de entrar com dados a partir do teclado
    process.stdin.on('data', data => { 
        const nome = data.toString().replace('\n', '') //substituo o \n que é o ENTER por nada
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit();
    }) 
    
} 