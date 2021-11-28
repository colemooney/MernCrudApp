
import './App.css';
import React , {component } from "react";
import { TextField } from '@mui/material'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import   {render } from "react-dom";

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
  const [value, setValue] = React.useState(2.5);
  const [hover, setHover] = React.useState(-1);
  return (
    <div className="App">
      
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Movie Name"
          defaultValue="Movie Name Here"
          size="large"
        />
        <TextField
          required
          id="outlined-required"
          label="Year Made"
          defaultValue="Year Here"
        />
        <TextField
        required
          id="outlined-required"
          label="Director"
          defaultValue="Director Name Here"
        />
      </div>
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="hover-feedback"
        size="large"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
    </div>
  );
}

export default App;
