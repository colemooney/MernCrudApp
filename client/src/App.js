
import './App.css';
import React , {component } from "react";
import { TextField } from '@mui/material'
import Box from '@mui/material/Box';
import   {render } from "react-dom";

function App() {
  return (
    <div className="App">
      
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1> Mern Crud</h1>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
    </div>
  );
}

export default App;
