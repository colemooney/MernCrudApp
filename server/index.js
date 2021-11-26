const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Movie DB Connection
const MovieModel = require("./models/Movie");

app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin@clusterreactapp.irmx5.mongodb.net/movies?retryWrites=true&w=majority", {
    //Mongodb Connect
    useNewUrlParser: true,
});

app.get('/', async (req, res) => {
    //Save life of pi
    const movie = new MovieModel({movieName: "Life of Pi", yearMade: 2015, directorName: "M. Knight"});

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