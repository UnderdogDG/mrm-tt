const path = require('path');
const express = require('express');
const cors = require('cors');

const home = require('./routes/home');
const ipRoute = require('./routes/ipRoute');

const app = express();

app.use(cors());


app.use('/', home);
app.use('/api', ipRoute)
app.use(express.static(path.resolve(__dirname, '../../fe/build')));

module.exports = app;