// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}

console.log(Object.keys(obj))
console.log(Object.entries(obj))

//Melhorias da notação literal
const nome = "Carla";

const pessoa = {
    nome, 
    ola (){ //Não é necessario mais coloca ola: function () {}

        return "Oi gente!"
    }
}

console.log (pessoa.nome, pessoa.ola())

//Class
class Animal{}

class Cachorro extends Animal {
    constructor(nome, idade){
        super()
        this.nome = nome
        this.idade = idade
    }

    getNome(){
        return this.nome
    }

    setNome(nome){

        this.nome = nome
    }

    getIdade(){
        return this.idade
    }

    setIdade(idade){
        this.idade = idade
    }


    falar(){
        return "AU AU!!"
    }
}

const lindao = new Cachorro("Fox", 12)

lindao.setIdade(13)

console.log(lindao.idade)