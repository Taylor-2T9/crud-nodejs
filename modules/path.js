const path = require('path')

/* --- Manual com algumas funções do path --- */

//Nome do arquivo
console.log(path.basename(__filename))

//Diretório
console.log(path.dirname(__filename))

//Extensão
console.log(path.extname(__filename))

//Criação de objeto Path
console.log(path.parse(__filename))

//Junção de caminhos de arquivos
console.log(path.join(__dirname, "test.html"))