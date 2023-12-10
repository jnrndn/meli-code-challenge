require('dotenv').config({ path: './config.env' });
const http = require('http');
const app = require('./app')

const port = process.env.PORT || 4200;

const server = http.createServer(app);
server.listen(port);

server.on('listening', () => `Listening on port ${port}`);
server.on('error', (error) => {
  console.error(error); process.exit(1)
})