const frutas = function (fruta) {

    switch(fruta){
        case "Maça":{
            console.log("Não vendemos esta fruta aqui");
            break;
        }

        case "Kiwi": {
            console.log("Estamos em escassez de kiwis");
            break;

        }

        case "Melancia": {

            console.log("Aqui está, sao 3 reais o quilo");
            break;
        }

        default: {
            console.log("Fruta inexistente, tente novamente");
            break
        }
    }
}

frutas("Maça");