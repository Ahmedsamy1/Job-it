const mongoose = require('mongoose');
const User = require('../models/user');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

function createUser (req, res, next) {
   
   /* User.findOne({ userName: req.body.userName }, (err, user2) => {
       if(err)res.status(500).send({message:'error al salvar a la base de datos'})
       else{
        if(user2){
            res.status(500).send({message:'choose another username'})}
        else{
            const user = new User({
                userName: req.body.userName,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
               // email: req.body.email,
                password: req.body.password
            });
    user.save()
        .then(res.status(200).send({message:'saved successfully !!',
        user:user,
        
        })
            // console.log(result);
        )
        .catch(res.status(500).send({message:'error al salvar a la base de datos'}))
    //res.redirect('/');
}
       }

    })*/
    var user = new User({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
       // email: req.body.email,
        password: req.body.password
    });
    user.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { res.status(500).send({message:'error al salvar a la base de datos'}) }

})
}

function allusers(req,res){
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

function login(req,res){
    User.findOne({ userName: req.body.userName }, (err, user) => {
        if (err)  res.status(500).send({ message: err })
        else{
        if (!user) {res.status(404).send({ message: 'No existe el usuario' })}    
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
                    message: 'Te has logueado correctamente',
                    //token: service.createToken(user)
                    user:user
                  })}
                })   
            }
            }
        
          
          
       // req.user = user
   
    

      })
    }
   



module.exports = {
    createUser,allusers,login
}