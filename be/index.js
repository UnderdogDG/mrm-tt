const http = require('http');

const PORT = process.env.PORT || 8080;

require('./db');
const app = require('./server');

const server = http.createServer(app);

server.listen(PORT, ()=>{
    console.log(`Server is runing:
        PORT: ${PORT}
    `)
})