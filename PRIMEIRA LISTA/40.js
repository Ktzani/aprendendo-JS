function boletim (notas){

    const resultados = function(nota){

        if (nota >= 0 && nota <= 4.9){

            return "D";
        }

        else if (nota >= 5 && nota <= 6.9){

            return "C";
        }

        else if (nota >= 7 && nota <= 8.9){

            return "B";
        }

        else if(nota >= 9 && nota <= 10) { 
            return "A";
        }
    }

    let aux = notas.map(resultados);

    return aux;
}

const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(boletim(notas));