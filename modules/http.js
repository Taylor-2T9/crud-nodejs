const http = require('http')

const port = 8080

/* --- Exemplo de servidor com http --- */

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end("<h1>Bom dia</h1>")
    }
    else if (req.url === '/users') {
        const users = [
            { name: 'Fulano', email: 'fulano@bomba.com' },
            { name: 'Ciclano', email: 'ciclano@bomba.com' }
        ]
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(users))
    }
})

server.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})