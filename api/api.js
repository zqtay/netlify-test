const express = require('express');
const serverless = require('serverless-http');
const app = express();

const bodyParser = require('body-parser');


app.use(bodyParser);
app.get('/', (req, res) => {
  res.send("Hello world");
});

module.exports = app;
module.exports.handler = serverless(app);