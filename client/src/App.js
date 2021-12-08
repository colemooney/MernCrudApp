
import './App.css';
import React from "react";


import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import MainPage from "./pages/index.jsx";
import ListPage from "./pages/list.jsx";
import LogInPage from "./pages/login.jsx";
import SignUpPage from "./pages/signup.jsx";

function App() {
  

  return (
   <Router>
     <Routes>
     <Route path="/" element = {<MainPage />}></Route>
     <Route path="/MyCrudApp/list" element = {<ListPage />}></Route>
     <Route path="/MyCrudApp/login" element = {<LogInPage />}></Route>
     <Route path="/MyCrudApp/signup" element = {<SignUpPage />}></Route>
     </Routes>
   </Router>
  );
}

export default App;
