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
    criteria: {
        type: String,
        required: true,
    }
});

userjobs.index({'username': 1, 'jobid': 1}, {unique: true});
//userjobs.createIndexes({'username': 1, 'jobid': 1}, {unique: true});

module.exports = mongoose.model('userjobs', userjobs);