const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

//Movie DB Connection
const MovieModel = require("./models/Movie");
const UserModel = require("./models/User");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:admin@clusterreactapp.irmx5.mongodb.net/movies?retryWrites=true&w=majority", {
    //Mongodb Connect
    useNewUrlParser: true,
});

// Creating page
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
});
// Reading page
app.get('/read', async (req, res) => {
    MovieModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
            
        }else {
            res.send(result);
        }
        
    });
});
//Creating User
app.post('/signup', async (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;
    const posts = req.body.posts;

    //Save life of pi
    const user = new UserModel({userName: userName, password: password, posts: posts});

    try {
        await user.save();
        // print to page
        res.send("Inserted Data")
    } catch(err){
        console.log(err)
    }
});

app.listen(3001, ()=> {
    //Server check
    console.log('server running on port 3001')

});