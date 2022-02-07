const schedule = require('node-schedule');

//Obs: se eu colocasse apenas '5' ele iria executar apenas no segundo 5 e nao de 5 em 5 segundos como com o */5
const tarefa1 = schedule.scheduleJob('*/5 * 21 * * 0', function() {

    console.log("Executando tarefa 1!", new Date().getSeconds());
}) 

setTimeout(() => {
    tarefa1.cancel(); //Forma de cancelar um temporizador que vc criou a partir do scheduleJob 
    console.log("Cancelando tarefa 1!");
}, 20000);

//Por meio do objeto RecurrenceRule do node-schedule
const regra = new schedule.RecurrenceRule()

regra.dayOfWeek = [new schedule.Range(0,5)]; //vai executar de domingo a sexta
regra.hour = 21; //As 21h 
regra.second = 30; //Aos 30 segundos

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log("Executando Tarefa 2!", new Date().getSeconds())
})


// setImmediate() -> Executa uma tarefa imediatamente, ou seja, é um setTimeout com o temporizador zerado (0)

// setInterval() -> Dispara uma função de tempos em tempos   