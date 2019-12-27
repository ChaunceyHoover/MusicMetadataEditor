const express = require('express');
const bodyParser = require('body-parser');
//const session = require('express-session');
const path = require('path');

const server = express();
require('dotenv').config(); // load .env config

// TODO: Consider using bcryptjs for login page?

const port = process.env.port || 3000;

// Set view engine to pug
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');

// Set root directory for web server
server.use(express.static(path.join(__dirname, 'wwwroot')));

// Process requests as JSON
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// server.use(session({
// 	secret: 'Secret Goes Here',
// 	resave: false,
// 	saveUninitialized: true,
// 	cookie: { maxAge: 60 * 60 * 1000 } // expire in an hour
// }));

// Process URLs
server.use(require('./routes/index')); // allows for custom URLs & removal of file extensions
server.use('/api', require('./routes/api')); // maps all API calls to /api/*

server.listen(port);
console.log(`Successfully started on port ${port}`);