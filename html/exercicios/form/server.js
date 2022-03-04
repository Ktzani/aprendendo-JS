const express = require('express');
const app = express();

//O body parser vai fazer com que uma vez que eu submeto os dados do meu formulario, ele vai fazer um parser no 
//corpo da requisição, vai pegar esses dados e jogar dentro do request.body. Portanto, acessando request.body eu 
//tenho acesso a todos os dados dos formulário que submeti
const bodyParser = require('body-parser');  

//OBS: urlencoded = padrão de quando você submete um formulario é o padrão que vem a partir da sumbissao. Por isso
//é necessario fazer o parser do urlencoded, OU SEJA, pega o padrão urlencoded, vai interpretar e criar um objeto
//todo preenchido pra gente
app.use(bodyParser.urlencoded({extended: true }));

app.post('/usuarios', (req, resp) => {
    console.log(req.body);
    resp.send('<h1>Parabéns!! Usuario incluído...</h1>');
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body);
    resp.send('<h1>Parabéns!! Usuario alterado...</h1>');
})

app.listen(3003)