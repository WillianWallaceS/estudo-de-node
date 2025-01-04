console.time('manipular arquivos') //Inicia quanto tempo demorou para ler o arquivo
console.log({
    nome: 'Willian',
    idade:20,
    hobby: 'codar',
    cnh: true
})

console.dir({ //mostra de maneira diferente pelo navegador
    nome: 'Willian',
    idade:20,
    hobby: 'codar',
    cnh: true

})

console.table({ //Cria uma tabela que ajuda visualmente 
    nome: 'Willian',
    idade:20,
    hobby: 'codar',
    cnh: true
})
console.timeEnd('manipular arquivos') //Encerra o tempo que demorou para ler o arquivo
