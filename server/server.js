const express = require('express');
const bodyParser = require('body-parser');

const table = require('./table/router')

var app = express();
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

app.use('/table', table)

app.listen(3001, () => {
  console.log("Server running.")
})