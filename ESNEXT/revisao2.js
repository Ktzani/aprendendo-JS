//arrow function

const soma = (a, b) => a + b

/* OUU:
const soma = (a, b) => {
    return a + b
}
*/ 

console.log(soma(2,3))


//arrow function (this)

//OBS: Ja vimos que se isso fosse uma função tradicional, o this aponta para global. Logo, isso daria falso
//Dessa maneira, usando o bind com o objeto vazio {}, o this passaria a apontar para esse objeto e não mais para global
const lexico1 = () => console.log(this === exports); 

const lexico2 = lexico1.bind({})

lexico1()
lexico2()

//LEMBRAR: em uma função tradicional em JS o this pode variar de acordo com a chamada da função OU também mudando o contexto
//a partir de um bind ou até mesmo de um call/apply

//IMPORTANTE: em uma função arrow isso já nao é possivel 

//Parametros Default
function log (texto = "node"){

    console.log(texto)
}

log()
log("Sou mais forte!")

//operador rest
function total (...numeros){ 
    let total = 0;
    numeros.forEach(n => total += n)

    return total
}

console.log(total(2,3,4,5))