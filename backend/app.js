const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const searchRoutes = require('./routes/search');
const config = require('./config/config');

const { db: { host, port, name } } = config;
const connectionString = `mongodb://${host}:${port}/${name}`;
mongoose.connect(connectionString, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/user', searchRoutes);

//handle requests that cannot be found
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);