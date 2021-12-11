import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router} from "react-router-dom";

//components
import NavBar from './components/navbar';


//pages
import Webpages from './pages/index'

function App() {
  {/*"Main"*/}
  return (
    <Router>
      <body className="App">
        <div >
          <header className="App-header">
            <NavBar />
          </header>
          <div className='App-content'>
            <Webpages />
          </div>
          <footer className="App-footer">
            {/*create a div with: Impressum, Contact data and a help page. And maybe a q&a page*/}
          </footer>
        </div>
      </body>
    </Router>
  );
}

export default App;
