const http = require('http');

http.createServer((req, res) => {
    res.write('Hola Mundo');
}).listen(8080);

console.log('Escuchando Puerto 8080');