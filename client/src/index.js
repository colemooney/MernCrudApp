import React, {component} from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AppBar from './pages/navbar';

ReactDOM.render(
  <React.StrictMode>
    <AppBar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

