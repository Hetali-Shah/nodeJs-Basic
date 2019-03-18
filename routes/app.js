const express = require('express')
const app = express();

app.use('/wine', require('./wineRoutes'));

module.exports = app ;
