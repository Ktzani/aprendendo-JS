//Porta padrão = 80 -> Portao padrão quando faz uma requisiçao utilizando o protocolo http

const porta = 3003;

const express = require ('express');
const app = express();
const bodyParser = require('body-parser')
const bancoDeDados = require ('./bancoDeDados');

//Para qualquer requisição que eu faça no seu servidor utilizando express, ele vai obrigatoriamente passar por esse 
//middleware e se no corpo da requisição tiver um padrão chamado de urlencoded (que é o padrão em que estamos envian
//do os dados), ou seja, se os dados estiverem sendo enviados por esse formato urlencoded, quando chegar na sua aplicação
//ele vai aplicar esse middleware, que fará um parse, que vai transformar de string isso em objetos para que você possa acessar
//da forma req.body.<atributo>. Portanto, que faz isso é o middleware bodyParser

//Obs: Como eu não coloquei nenhuma URL especifica, para todas as requisições ele será disparado e se o padrão for 
//urlencoded, ele transforma o corpo da requisição em objetos para que eu consiga acessa-los de maneira mais tranquila
app.use(bodyParser.urlencoded({extended: true}))


//metodo .get() é uma forma de requisição, que tem como objetivo obter alguma informação do servidor. Por isso
//o nome get de pegar

//Essa primeira função pega todos os produtos cadastrados
app.get('/produtos', (req, res, next) => {  //req: requisição | res: resposta 

    res.send(bancoDeDados.getProdutos()) // .send() : envia uma resposta
                                                    //Nesse caso envio como resposta um objeto com esse atributos 
                                                    //Obs: Esse objeto será convertido para o formato .json automaticamente com o send
})

// /produtos/1 : a partir disso eu tenho acesso a um parametro id que será um número. A partir disso eu consigo obter 
//exatamente o produto que quero obter 
//Essa segunda função traz um produto especifico baseado no id
app.get('/produtos/:id', (req, res, next) => {
    
    //OBS: o parametro que recebi em :id está na REQUISIÇÃO. Vem da REQUISIÇÃO os parametros e a partir do parametro
    //eu obtenho alguma coisa e mando a RESPOSTA [res.send()]
    res.send(bancoDeDados.getProduto(req.params.id))  //req.params é o local aonde eu tenho os parametros que coloquei na URL
})

//Função que será usada para submeter os dados e salvar um novo produto
//OBS - IMP: Vejam que o que diferencia a mesma URL é o get e o post, onde get vai para primeira função
//e o post vai para terceira função     
app.post('/produtos', (req, res, next)=>{   

    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,    
        preco: req.body.preco,

        //O post é a mesma coisa de estar acessando uma página na web que tem um formulario,
        //onde preenchemos o nome, o enredeço, usuario, senha, etc. Quando você manda salvar
        //o formulario, o que é enviado ali é um post e no corpo da requisição vem todos os
        //dados que informou no formulario. Quando isso chega no servidor, a forma para pegar
        //essas informações vem na requisição e usamos req.body e cada um dos atributos que 
        //vieram a partir do formulario (ou da requisição)
    })

    res.send(produto); //converte esse objeto produto em um JSON
})

//Alterar o produto passando uma id
app.put('/produtos/:id', (req, res, next) => {

    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto) //JSON
})

//Deleta o produto passando uma id
app.delete('/produtos/:id', (req, res, next) => {

    const produto = bancoDeDados.deletaProduto(req.params.id)

    res.send(produto) //JSON
})

//Digo qual a porta ficarei escutando na minha aplicação
app.listen(porta, () => { 
    console.log(`Servidor executando na porta ${porta}.`)
})


//RESUMINDO: Fizemos as 4 operaçoes basicas: 
// - Create
// - Read
// - Update 
// - Delete


//IMPORTANTE: UM UNICO PROCESSO PODE OCUPAR APENAS UMA PORTA

//Mas se eu tiver varios processos e quero que todos fiquem disponiveis a partir da porta 80. É possivel fazer isso?
//É usando algumas tecnicas como proxReverse(), onde eu tenho um servidor na frente e esse servidor consegue dispachar as resqui
//sições para varias aplicações que estão em portas diferentes 