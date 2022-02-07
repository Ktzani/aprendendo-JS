function consenssionaria (veiculos){

    switch(veiculos){
        case "Hatch": {
            console.log("Compra efetuada com sucesso");
            break;
        }

        case "Sedans":
        case "Motocicletas":
        case "Caminhonetes":{
            console.log("Tem certeza que não prefere este modelo?");
            break;
        }

        default:{
            console.log("Não trabalhamos com esse tipo de modelo");
            break;
        }
    
    }
}

consenssionaria("Caminhonetes")