//Criação e manipulação de dados 
//Foi feito um arquivo txt, pegou esse arquivo, modificou ele e fez uma nova versão do txt pelo prompt de comando

const path  = require('node:path')
const fs = require('node:fs')

const filePath = path.join(process.cwd(), 'estudo-de-node','texto.txt' )
console.log(filePath)

fs.readFile(filePath, {}, (erro, dados) => {
    if(erro){
        console.log(`Erro na leitura do arquivo no caminho ${filePath}`)
        return
    }
    const texto = dados.toString()
    const linhas  = texto.split('\n')

    linhas.forEach((linhas, index, arrayDeLinhas) =>
        console.log(`${index + 1} - ${linhas}`)
)

})