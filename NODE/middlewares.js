//middle pattern (chain of responsability)


//Objeto que carrega os dados de um passo para outro. Por exemplo:
//no primeiro passo eu obtenho a lista de produtos do banco de dados e assim coloco essa lista no contexto
//Assim, no proximo passo o contexto ja vai estar preenchido pela lista de produtos e posso filtar os produ
//tos que estão vencidos . Ja no terceiro passo, posso enviar um relatorio para fazer algum tipo de tratamento
// dos produtos vencidos da empresa. Portanto, a partir desse contexto, que é passado por meio de cada um dos 
//middlewares dessa cadeia, é forma que vc tem de comunicar os dados de uma função para outra.
//IMPORTANTE: Como não há um dependecia de uma função para outra, esses dados que sao passados sao importantes  
const passo1 =  (ctx,next) => {

    ctx.valor1 = 'mid1';
    next()
}

const passo2 = (ctx,next) => {

    ctx.valor2 = 'mid2'
    next()
}

const passo3 = (ctx) => ctx.valor3 = 'mid3'


const exec = (ctx, ...middlewares) => {

    const execMiddleware = (indice) => {
        middlewares && (indice < middlewares.length) &&
            middlewares[indice](ctx, () => execMiddleware(indice + 1))
    }

    execMiddleware(0)
}
                
const ctx = {};

exec(ctx, passo1, passo2, passo3)

console.log(ctx)