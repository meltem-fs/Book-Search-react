// import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Approuter from './Approuter';
import Main from './Components/Main';
import './Components/style.css';

function App() {
  return (
   <BrowserRouter>
      <Approuter/>
   </BrowserRouter>
  );
}

export default App;