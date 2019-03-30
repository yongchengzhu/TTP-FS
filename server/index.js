//------------------------------------------------------------------------------------------------
// External Dependencies
//------------------------------------------------------------------------------------------------
const bodyParser = require('body-parser');
const express    = require('express');
const morgan     = require('morgan')
const http       = require('http');

//------------------------------------------------------------------------------------------------
// Internal Dependencies
//------------------------------------------------------------------------------------------------
const router = require('./router');

//------------------------------------------------------------------------------------------------
// App Setup
//------------------------------------------------------------------------------------------------

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

router(app);

//------------------------------------------------------------------------------------------------
// Server Setup
//------------------------------------------------------------------------------------------------

const server = http.createServer(app);
const port   = process.env.PORT || 3090;

server.listen(port);
console.log('Server is listening on port:', port);
