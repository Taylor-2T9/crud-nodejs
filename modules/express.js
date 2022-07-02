const express = require('express')
const bodyParser = require('body-parser')
const UserModel = require('../src/models/user.model')

/* --- Servidor express utilizado no projeto --- */

const app = express()
const jsonParser = bodyParser.json()

app.get('/home', (req, res) => {
    res.setHeader('content-type', 'text/html')
    res.status(200).send("<h1>Boa noite</h1>")
})

app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({})
        res.status(200).json(users)
    } catch (error) {
        console.log('Erro: ', error)
        res.status(500).send(error.message)
    }
})

app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findById(id)
        res.status(200).json(user)
    } catch (error) {
        console.log('Erro: ', error)
        res.status(500).send(error.message)
    }
})

app.post('/users', jsonParser, async (req, res) => {
    try {
        const user = await UserModel.create(req.body)
        console.log(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.patch('/users/:id', jsonParser, async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(user)
    } catch (error) {
        console.log('Erro: ', error)
        res.status(500).send(error.message)
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndRemove(id)
        res.status(200).json(user)
    } catch (error) {
        console.log('Erro: ', error)
        res.send(500).send(error.message)
    }
})

const port = 8080

app.listen(port, () => console.log(`Rodando com Express na porta ${port}`))