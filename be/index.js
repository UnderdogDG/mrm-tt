const http = require('http');
const cors = require('cors');

const PORT = process.env.PORT || 8080;
const HOST = '127.0.0.1'

require('./db');

const app = require('./server');

const server = http.createServer(app);

/* server.listen(PORT, ()=>{
    console.log(`Server is runing:
        PORT: ${PORT}
    `)
}) */
app.use(cors());
app.listen(PORT, HOST, ()=>{
    console.log(`Server is runing:
        PORT: ${PORT}
    `)
});