const express = require('express');

const home = require('./routes/home');
const ipRoute = require('./routes/ipRoute');

const app = express();

app.use('/', home);
app.use('/api/ip-generator', ipRoute)

module.exports = app;