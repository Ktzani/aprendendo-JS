const fs = require ('fs');

//OBS-IMP: __dirname: constante que está em todos modulos do node que representa o diretório atual

const caminho = __dirname + '/arquivo.json'

//SINCRONO !!
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo);

//ASSINCRONA !! Primeiro manda a callback e quando ela for disparada que mandamos de volta
fs.readFile(caminho, 'utf-8', (err, conteudo) => {  // conteudo que foi lido do arquivo 

    const config = JSON.parse(conteudo)

    console.log(`${config.db.host}:${config.db.port}`)
}) 

//O require com o nome do arquivo ja transforma e faz o parse do arquivo de JSON para objeto
const aux = require('./arquivo.json')
console.log(aux.db) //Vai aparecer primeiro, pois isso acontece de forma sincrona

//Lendo toda uma pasta:
fs.readdir(__dirname, (err,arquivos) => {
    console.log("Conteúdo da pasta...");
    console.log(arquivos)

})