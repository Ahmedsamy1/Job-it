const mongoose = require('mongoose');

const userjobs = mongoose.Schema({
    username: {
        type: String,
        
        trim: true,
        lowercase: true,
    },
    jobid: {
        type: String,
        
    },
    
    company_logo:{
        type: String

    },
    company:{
        type: String

    },
    title:{
        type: String

    },
    link:{
        type: String

    }

    
});

userjobs.index({'username': 1, 'jobid': 1}, {unique: true});
//userjobs.createIndexes({'username': 1, 'jobid': 1}, {unique: true});

module.exports = mongoose.model('userjobs', userjobs);