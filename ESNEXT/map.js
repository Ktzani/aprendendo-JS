const tecnologias = new Map();

tecnologias.set('react', {frameWork: false});
tecnologias.set('angular', {frameWork: true});

console.log(tecnologias.react); //forma errada

console.log(tecnologias.get('react').frameWork)

//Outra forma de criar o Map ja atribuindo os elementos usando matriz
const chavesVariadas = new Map([
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log (ch, vl);
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a');
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas) //Não aceitar repetição de chaves: ou vai ser 123 a ou 123 b, porém aceita repetição de valores