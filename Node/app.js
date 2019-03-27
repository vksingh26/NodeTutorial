/* created by vikash Kumar Singh */
/* Creating node server using http modules */

const http = require('http');
const url = require('url');
const fs = require('fs');
const hostname = 'localhost';
const port = 9000;
http.createServer(function(request, response) {
    const url = request.url;
    const method = request.method;
    if(url === '/'){
        response.write('<!DOCTYPE html><html><body><h2> HTML Forms</h2><form action = "/submitUser" method="POST">First name: <br><input type = "text" name = "firstname"><br><br><input type = "submit" value = "Submit"></form><p> If you click the "Submit"button, the form - data will be sent to a page called "/action_page.php". </p></body></html>');
        return response.end();
    }

    if (url === '/submitUser' && method == 'POST') {
        fs.writeFileSync('../Node/src/formResponse.txt', 'Started learning node js and this file has been created by using nodejs!');
        response.statusCode = 302;
        response.statusMessage = 'Message written successfully!';
        response.setHeader('location', '/');
        return response.end();
    }
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write('<!DOCTYPE html><html><head><meta charset = "UTF-8" ><title> Title of the document </title></head><body><h1> Node js loaded...... </h1></body></html>');
    response.end();
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});