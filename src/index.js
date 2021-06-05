import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {Context, firestore, firebase} from "./base"

ReactDOM.render(
  <React.StrictMode>
      <Context.Provider value={{
          firestore,
          firebase,
      }}>
          <Router>
              <App />
          </Router>
      </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);