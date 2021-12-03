
import './App.css';
import React from "react";


import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import MainPage from "./pages/index.jsx";
import ListPage from "./pages/list.jsx";
function App() {
  

  return (
   <Router>
     <Routes>
     <Route path="/" element = {<MainPage />}></Route>
     <Route path="/list" element = {<ListPage />}></Route>
     </Routes>
   </Router>
  );
}

export default App;
