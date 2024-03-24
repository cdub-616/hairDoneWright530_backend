const express = require('express');
const app = express();

const addAvailabiltiyRoutes = require('./api/routes/addAvailability');

app.use('/addAvailability', addAvailabiltiyRoutes);

module.exports = app;