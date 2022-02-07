//Conseguimos usar o for of em cima de arrays, strings, map, set, etc

for (let letra of "Cod3r"){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

//No for in percorremos por meio de indices e para pegar o valor tenho que pegar a partir do indice[]
for (let i in assuntosEcma){

    console.log(i)
}

//No for of percorremos atraves de valores
for(let assunto of assuntosEcma ){

    console.log(assunto)
}

const assuntosMap = new Map ([
    ['Map', {abordado: true}], 
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for (let assunto of assuntosMap){
    console.log(assunto)
}

//Percorrendo só as chaves:
for (let chave of assuntosMap.keys()){
    console.log(chave)
}

//Percorrendo só os valores
for (let valor of assuntosMap.values()){
    console.log(valor)
}

//Percorrendo as entradas separadas fora de um array usando desestructuring
for(let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}


//Percorrendo um set (sem valores repetidos)
const s = new Set(['a', 'b', 'c', 'a']);

for (let letra of s){
    console.log(letra)
}