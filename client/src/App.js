
import './App.css';
import React , {component } from "react";
import { useState } from "react";
import { TextField } from '@mui/material'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import   {render } from "react-dom";
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

function App() {
  const [rating, setRating] = React.useState(2.5);
  const [hover, setHover] = React.useState(-1);

  const [movieName, setMovieName] = useState("");
  const [directorName, setDirectorName] = useState("");
  const [yearMade, setYearMade] = useState(0);

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
      }}
      noValidate
      autoComplete="off"
    >
      <div>
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
      </div>
      <Typography component="legend">Controlled</Typography>
      <Rating
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
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating]}</Box>
      )}
      <button onClick={addToList}> Add To List</button>
    </Box>
    </div>
  );
}

export default App;
