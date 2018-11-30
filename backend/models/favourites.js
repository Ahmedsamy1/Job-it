const mongoose = require('mongoose');

const favourites = mongoose.Schema({
    userId: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    favoriteJobs: {
        type: String,
        required: true,
    }
});


module.exports = mongoose.model('Favourites', favourites);