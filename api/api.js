const express = require('express');
const serverless = require('serverless-http');
const app = express();

const bodyParser = require('body-parser');
const router = express.Router();

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write("<h1>Hello world</h1>");
  res.end();
});

router.get('/2/', (req, res) => {
	res.send("Hi 2");
});


app.use(bodyParser.json());
app.use('/.netlify/api/api', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);