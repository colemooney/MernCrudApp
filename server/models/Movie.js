const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true,
    },
    yearMade: {
        type: Number,
        required: true,
    },
    directorName: {
        type: String,
        required: true,
    },
});

const Movie = mongoose.model("MovieData", MovieSchema);
module.exports = Movie;