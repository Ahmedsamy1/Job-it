const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const searchRoutes = require('./routes/search');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user', searchRoutes);

//handle requests that cannot be found
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);