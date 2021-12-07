const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');

const session = require("express-session");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;


//Movie DB Connection
const MovieModel = require("./models/Movie");
const UserModel = require("./models/User");


mongoose.connect("mongodb+srv://admin:admin@clusterreactapp.irmx5.mongodb.net/movies?retryWrites=true&w=majority", {
    //Mongodb Connect
    useNewUrlParser: true,
});


// Middleware Setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);
      


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
//Creating login
app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          console.log(req.user);
        });
      }
    })(req, res, next);
  });
  
  app.post("/signup", async (req, res, next) => {

    const userName = req.body.userName;
    const password = req.body.password;

    if (userName === "" || password === "") {
        res.render("signup", {message: "Please add username and password"});
        return;
    }

    UserModel.findOne({ userName })
    .then(usermodel => {
        if (usermodel !== null) {
            res.render("/signup", {message: "username exists already."});
            return;
   }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new UserModel({
        userName,
        password: hashPass
    });

    newUser.save((err) => {
        if (err) {
            res.render("/signup", {message: "Something went wrong"});
        } else {
            res.redirect("/");
            console.log(req.body);
        }
    });
})
.catch(error => {
    next(error)
})
  });
    
        
      
   

  app.get("/user", (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

app.listen(3001, ()=> {
    //Server check
    console.log('server running on port 3001')

});