/* created by vikash Kumar Singh */
/* Creating node server using http modules */

const http = require('http');
const fs = require('fs');
const hostname = 'localhost';
const port = 9000;
http.createServer(function (request, response) {
    const url = request.url;
    const method = request.method;
    if (url === '/') {
        response.write('<!DOCTYPE html><html><body><h2> HTML Forms</h2><form action = "/submitUser" method="POST">First name: <br><input type = "text" name = "firstname"><br><br><input type = "submit" value = "Submit"></form></body></html>');
        return response.end();
    }

    if (url === '/submitUser' && method == 'POST') {
        const body = [];
        request.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        return request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.toUpperCase();
            fs.writeFile('../Node/src/formResponse.html', message, err => {
                response.statusCode = 302;
                response.statusMessage == 'File created successfully!';
                response.setHeader('location', '/');
                return response.end();
            });
        });
    }
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write('<!DOCTYPE html><html><head><meta charset = "UTF-8" ><title> Title of the document </title></head><body><h1> Node js loaded...... </h1></body></html>');
    response.end();
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});