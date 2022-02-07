//não aceita repetição / não é indexada
const times = new Set()
times.add('Vasco');
times.add('São Paulo').add('Palmeiras').add('Corinthians');
times.add('Flamengo').add('Vasco')

console.log(times) //Veja que não há repetição
console.log(times.size);
console.log(times.has('vasco'))
console.log(times.has('Vasco'))

times.delete('Flamengo')
console.log(times.has('Flamengo'))

//Outra maneira de criar: por meio de um array
const nomes = ['Raqeuel', 'Lucas', 'Julia', 'Lucas'];
const nomeSet = new Set(nomes)
console.log(nomeSet) //Não há reptição 
