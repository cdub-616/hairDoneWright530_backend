const http = require('http');
const app = require('./app');

//load port from environment variables or use 3000 as default
require('dotenv').config();
const port = process.env.DB_PORT || 3000;

//set port for Express app
app.set('port', port);

//create HTTP server
const server = http.createServer(app);

//start server
server.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});