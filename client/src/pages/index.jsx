
import React , { useEffect } from "react";
import { useState } from "react";
import { TextField } from '@mui/material'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";

import StarIcon from '@mui/icons-material/Star';

import Axios from 'axios';




const labels = {
  0.5: 'So bad it\'s good',
  1: 'Kind of like a \'The Rock\' movie',
  1.5: 'kind of like a \'Bruce Willis\' Movie',
  2: 'Not bad+',
  2.5: 'Ok',
  3: 'Ok but hate it',
  3.5: 'Good',
  4: 'Good but hate it',
  4.5: 'Excellent',
  5: 'Martin Scorcese',
};

const MainPage = () =>  {
  const [rating, setRating] = React.useState(2.5);
  const [hover, setHover] = React.useState(-1);

  const [movieName, setMovieName] = useState("");
  const [directorName, setDirectorName] = useState("");
  const [yearMade, setYearMade] = useState(0);

  const [movieList, setMovieList] = useState([]);

  useEffect(()=> {
    Axios.get('http://localhost:3001/read').then((response)=> {
      setMovieList(response.data);
    });
  }, []);

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {
      movieName: movieName,
      directorName: directorName,
      yearMade: yearMade,
      rating: rating,
  });
  };


  return (
    <div className="App">
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
    >
      
        <h1> Add a movie!</h1>
        <div>
      <img src="https://static.thenounproject.com/png/4280922-200.png" alt="MovieLogo"/>
      </div>
        <TextField
          required
          id="outlined-basic"
          label="Movie Name Here"
          variant="outlined"
         
          onChange={(event) => {
            setMovieName(event.target.value);
            }}
        />
        <TextField
          required
          id="outlined-basic"
          label="Year Made"
          variant="outlined"
          onChange={(event) => {
            setYearMade(event.target.value);
            }}
        />
        <TextField
        required
          id="outlined-required"
          label="Director"
          variant="outlined"
          onChange={(event) => {
            setDirectorName(event.target.value);
            }}
        />
      
      
      <Rating
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
        
        name="hover-feedback"
        size="large"
        rating={rating}
        precision={0.5}
        onChange={(event, newRating) => {
          setRating(newRating);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {rating !== null && (
        <Box className= "stars" sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating]}</Box>
      )}
    <div className= "fill">
      <Link to="/list">
      <button onClick={addToList}> Add To List</button>
      </Link>
      
      </div>
    </Box>
      
    </div>
  );
}

export default MainPage;
