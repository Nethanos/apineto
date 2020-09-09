const countriesController = require('./controllers/countries.controller');
const infectionCalculatorController = require('./controllers/infection-calculator.controller');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to Heinek API');
});

app.get('/v1/countries', countriesController);

app.get('/v1/infection-calculator', infectionCalculatorController);

module.exports = app;
