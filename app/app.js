const http = require('http');
 
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('🚀 App running behind Nginx using Docker Compose!');
});
 
server.listen(3000);
