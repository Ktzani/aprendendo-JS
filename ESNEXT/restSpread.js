// operador ... rest(juntar) / spread (espalhar)
//usar rest como parametro de uma função 

//usar spread com objeto
const funcionario = { 
    nome: "Maria", salario: 12348.99
}

const clone = {ativo: true, ...funcionario} // Estou pegando todos os atributos de funcionario e espelhando dentro desse objeto que chamei de clone 

clone.nome = "Joao"
clone.salario = 1500.00
console.log(clone)

// usar spread com array
const grupoaA = ["Joao", "Pedro", "Gloria"]
const grupoFinal = ["Maria", ...grupoaA, "Rafaela"] //Posso colocar o spread onde eu quiser

console.log(grupoFinal)