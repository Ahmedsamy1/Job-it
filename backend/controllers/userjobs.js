const mongoose = require('mongoose');
const Job = require('../models/userjobs');


function createjob (req, res, next) {
  
     var job = new Job({
         username: req.body.username,
         jobid: req.body.jobid,
         company_logo: req.body.company_logo,
         company: req.body.company,
         title: req.body.title,
         link: req.body.link
        
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

    function deletejob(req,res){
        
        let job=new Job();
        let username=req.params.username;
        let jobid =req.params.jobid;
        Job.deleteOne({username: username,jobid: jobid}, function (err) {
            if(err) res.send({message:'error al borrar la data'})
    
            res.send({message:'deleted successfully !!',
        });
    
    })
    
    }


 module.exports = {
    createjob,alljobs,deletejob
}