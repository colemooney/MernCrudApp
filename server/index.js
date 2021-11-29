const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

//Movie DB Connection
const MovieModel = require("./models/Movie");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:admin@clusterreactapp.irmx5.mongodb.net/movies?retryWrites=true&w=majority", {
    //Mongodb Connect
    useNewUrlParser: true,
});

app.post('/insert', async (req, res) => {
    const movieName = req.body.movieName;
    const yearMade = req.body.yearMade;
    const directorName = req.body.directorName;
    const rating = req.body.rating;

    //Save life of pi
    const movie = new MovieModel({movieName: movieName, yearMade: yearMade, directorName: directorName, rating: rating});

    try {
        await movie.save();
        // print to page
        res.send("Inserted Data")
    } catch(err){
        console.log(err)
    }
})

app.listen(3001, ()=> {
    //Server check
    console.log('server running on port 3001')

});