import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AppBar from './pages/navbar';
import './App.css';



import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import MainPage from "./pages/index.jsx";
import ListPage from "./pages/list.jsx";
import LogInPage from "./pages/login.jsx";
import SignUpPage from "./pages/signup.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppBar />
     <Routes>
     <Route path="/" element = {<MainPage />}></Route>
     <Route path="/MyCrudApp/list" element = {<ListPage />}></Route>
     <Route path="/MyCrudApp/login" element = {<LogInPage />}></Route>
     <Route path="/MyCrudApp/signup" element = {<SignUpPage />}></Route>
     </Routes>
   </Router>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

