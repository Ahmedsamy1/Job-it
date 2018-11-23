const express = require('express');

const router = express.Router();

router.get('/search-jobs', (req, res, next) => {
    res.send('<form action="/jobs" method="POST"><input type"text" name="search"><button type="submit">Search</button></form>');
});

router.post('/jobs', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

router.get('/', (req, res, next) => {
    res.send('<h1>Hello from expressjs</h1>');
});

module.exports = router;