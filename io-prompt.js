const rl = require('readline')

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

prompt.question('Qual é seu número favorito?: ', (resposta) =>{
    console.log(`O dobro do seu número favorito é: ${parseInt(resposta)* 2}`)
    prompt.close()
})
const promptPromise = {
    question: (pergunta) => new Promise((resolve,reject) =>{
        try{
            prompt.question(pergunta), (resposta) => resolve(resposta)
        } catch(error) {
            reject(error)
        }
    
    })

}