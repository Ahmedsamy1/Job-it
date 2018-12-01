const mongoose = require('mongoose');
const Job = require('../models/userjobs');


function createjob (req, res, next) {
  
     var job = new Job({
         username: req.body.username,
         jobid: req.body.jobid,
         criteria: req.body.criteria,
        
     });
     job.save((err, doc) => {
         if (!err) { res.send({message :'success',job: doc}); }
         else { res.send({message:'book already exists'}) }
 
 })
 }

 function alljobs(req,res){
  
            Job.find((err, docs) => {
                if (!err) { res.send(docs); }
                else { console.log('Error in Retriving jobs :' + JSON.stringify(err, undefined, 2)); }
    })
    
    }


 module.exports = {
    createjob,alljobs
}