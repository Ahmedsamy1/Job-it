const mongoose = require('mongoose');
const User = require('../models/user');
var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

function createUser(req, res, next) {
    console.log(req.body);

    var user = new User({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        // email: req.body.email,
        password: req.body.password
    });
    // user.findOne(user);
    user.save((err, doc) => {
        if (!err) {
            res.send({ "status": "done" });
        }
        else {
            res.send({ "status": "error" });
        }
    })
}

function allusers(req, res) {
    /*User.find({'username':'mohamed'},'userName',(err,users)=> {
    if(err)
    res.status(500).send({message:'error al salvar a la base de datos'})
    else{
        res.status(200).send({message:'saved successfully !!',
            users:users,
            
            })*/

    User.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    })

}

function login(req, res) {
    User.findOne({ userName: req.body.userName }, (err, user) => {
<<<<<<< HEAD
        if (err) res.status(500).send({ message: err })
        else {
            if (!user) { res.status(404).send({ message: 'No existe el usuario' }) }
            else {
                user.isPasswordMatch(req.body.password, user.password, (err, isMatch) => {

                    //Invalid password
                    if (!isMatch) {
                        res.send({
                            success: false,
                            message: 'Error, Invalid Password'
                        });
                    }


                    else {
                        res.status(200).send({
                            message: 'Te has logueado correctamente',
                            //token: service.createToken(user)
                            user: user
                        })
                    }
                })
=======
        if (err)  res.status(500).send({ message: err })
        else{
        if (!user) {res.send({ message: 'No existe el usuario' })}    
       else{ 
         user.isPasswordMatch(req.body.password, user.password, (err, isMatch) => {

        //Invalid password
        if (!isMatch) {
           res.send({
            success: false,
            message: 'Error, Invalid Password'
          });
        }
        

                else{    res.status(200).send({
                   message: 'success',
                    //token: service.createToken(user)
                    user:user
                  })}
                })   
            }
>>>>>>> b513e66495633aae6c02df295eb84ea2c81e46fa
            }
        }



        // req.user = user



    })
}




module.exports = {
    createUser, allusers, login
}