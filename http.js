const http = require('http')
require('colors')

const server = http.createServer((request,response) => {

    if(request.url === '/'){
        response.write("Welcome to the server")
        return response.end()
    }
    else if(request.url === '/about'){
        response.write('About Us')
        return response.end()
    }
    else{
        response.write(`
            <h1>Not found, error 404</h1>
            <p>Invalid request</p>
            <a href="/">Back to home<a/>    
        `)
        response.end()
    }
})

server.listen(3000)

console.log("servidor en el puerto 3000".bgGreen)