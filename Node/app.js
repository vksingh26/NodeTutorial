/* created by vikash Kumar Singh */
/* Creating node server using http modules */

const http = require('http');
const hostname = 'localhost';
const port = 9000;
http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.write("Learning node js !");
    response.end();
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});