const express = require('express');
const cors = require('cors');
const connectDb = require('./database');
const routes = require('../routes');

const app = express();
connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);

module.exports = app;