function basquete (lista = "10 10 20 40 30 20 10 5 7 10 50 60 70"){

    let pega = lista.split(" ");

    pega = pega.map(element => Number.parseInt(element))
    
    let contador = 0;

    let posi = 0;

    let maior = pega[0]; 

    let menor = pega[0];

    for(let i = 1; i < pega.length; i++){
        if(pega[i] > maior){
            maior = pega[i];
            contador++;
        }

        if(pega[i] < menor){
            menor = pega[i];
            posi = i + 1;
        }
    }

    
    const array = [contador, posi];

    return array;
}

console.log(basquete());

