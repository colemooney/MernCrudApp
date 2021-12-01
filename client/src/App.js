
import './App.css';
import React from "react";


import { BrowserRouter as Router, Route, Routes, Switch, Link, Redirect} from "react-router-dom";

import MainPage from "./pages/index.jsx";

function App() {
  

  return (
   <Router>
     <Routes>
     <Route path="/" element = {<MainPage />}></Route>
     </Routes>
   </Router>
  );
}

export default App;
