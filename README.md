# Introdução
Esse projeto é um CRUD, feito com Node + Express, conectado a um banco de dados feito com MongoDB (acessado por meio da biblioteca Mongoose).

# Como funciona
O banco de dados precisa ser criado previamente através do MongoDB — e depois será acessado pelos comandos disponibilizados pelo Mongoose.
A tabela Users é criada no script em "src/models/user.model.js". As operações do CRUD (Create, Read, Update e Delete) podem ser encontradas
em "modules/express.js".

# Como utilizar
### Clonando o projeto
```
$ git clone https://github.com/Taylor-2T9/crud-nodejs
$ cd crud-nodejs
```
### Iniciando o projeto
```
$ npm install
$ npm run start:dev
```
