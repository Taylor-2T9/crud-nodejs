const fs = require('fs')
const path = require('path')

/* --- Manual com algumas funções do fs --- */

//Criação de pasta
fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if (error) {
        return console.log('Erro: ', error)
    }
    return console.log('Pasta criada!')
})

//Criação de arquivo
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'Hello world!', (error) => {
    if (error) {
        return console.log('Erro: ', error)
    }
    console.log('Arquivo criado!')
    //Adicionar conteúdo a um arquivo
    fs.appendFile(path.join(__dirname, '/test', 'test.txt'), ' Hello Node!', (error) => {
        if (error) {
            return console.log('Erro: ', error)
        }
        return console.log('Arquivo modificado!')
    })
    //Ler arquivo
    fs.readFile(path.join(__dirname, '/test', '/test.txt'), 'utf-8', (error, data) => {
        if (error) {
            return console.log('Erro: ', error)
        }
        return console.log(data)
    })

})