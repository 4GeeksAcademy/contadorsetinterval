import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let counter = 0; 

const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  counter++;

  
  if(counter > 99999) counter = 0;

  root.render(
    <React.StrictMode>
      <Home contador={counter} />
    </React.StrictMode>
  );

}, 1000);

  
  




