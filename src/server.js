import http from 'node:http'


const users = []

const server = http.createServer((req, res) => {
    
    
    const {method, url } = req

    if (method === "GET" && url === "/users") {
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }

    if (method === "POST" && url === "/users") {

        const user = {
            name: 'John Doe',
            email: 'johndoe@example.com',
            id: 1
        }
        users.push(user)
        return res.writeHead(201).end()
    }

    return res.writeHead(404).end('Not found')
})


server.listen(3333)