/* created by vikash Kumar Singh */
/* Creating node server using http modules */


const http = require('http');
const routes = require('./routes/routes');
const hostname = 'localhost';
const port = 9000;
http.createServer(routes).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

