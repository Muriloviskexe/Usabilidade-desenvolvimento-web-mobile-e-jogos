console.log('Estou funcionando')

// setInterval 
//Repete sempre conforme o intervalo de tempo

// setTimeout(() => { }, timeout);    
// faz uma vez só após o intervalo


function relogio(tempoAlarme){

    return new Promise ((result,reject) => {
        let segundos = 0

        let num = (Math.random() * 1000 % 20)
        console.log('num', num)
        setInterval(() => {
            segundos++
            if(segundos >= num){
                reject('Alarme sem bateria')
            }
            if(segundos == tempoAlarme){
                result('BEEP BEEP BEEP')
            }
            console.log
    }, 1000);
    })
}


async function ligarRelogio(){
    try {
        let res = await relogio(5)
        console.log('Resposta:', res)
        res = await relogio(5)
        console.log('Resposta:', res)
        res = await relogio(5)
        console.log('Resposta:', res)
        res = await relogio(5)
        console.log('Resposta:', res)
    }catch{
    console.log('Resposta:', res)
}}
//Chamar para ativar






//todo Usando catch e then
// relogio(10).then(res => {
//     console.log('Resposta:', res)
// }).catch((res) =>{
//     console.log('Resposta:', res)
// })


//todo Funções funcionando sem promisses
// setInterval(function incrementa() {
//         segundos++
//         console.log(segundos)
// }, 1000);

// setInterval(function beep(){
//         console.log('BEEEP')
// }, 5000);

