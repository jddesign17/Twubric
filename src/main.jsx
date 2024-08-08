import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Tabledata from './components/Tabledata.jsx'; 
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./app/store.js"
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
    <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/user' element={<Tabledata />} />
    </Routes>
  </Router>
  </Provider>
);
