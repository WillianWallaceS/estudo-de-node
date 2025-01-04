//IO - entrada e saida de dados/input e output 


const rl = require('readline') //requerer uma biblioteca

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

prompt.question('Qual é seu número favorito?: ', (resposta) =>{
    console.log(`O dobro do seu número favorito é: ${parseInt(resposta)* 2}`)
    prompt.close() //se usa dentro da função pois dará o tempo de resposta 
})
const promptPromise = { //Promise para facilitar a execução
    question: (pergunta) => new Promise((resolve,reject) =>{
        try{
            prompt.question(pergunta), (resposta) => resolve(resposta)
        } catch(error) {
            reject(error)
        }
    
    })

}
