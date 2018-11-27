const mongoose = require('mongoose');
const User = require('../models/user');

const createUser = (req, res, next) => {
    const user = new User({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });
    user.save()
        .then(result => {
            // console.log(result);
        })
        .catch(err => {
            // console.log(err);
        });
    res.redirect('/');
};

module.exports = {
    createUser
}