import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router} from "react-router-dom";

//components
import NavBar from './components/navbar';
import Footer from './components/footer';

//pages
import Webpages from './pages/webpages'

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
          <Footer />
        </div>
      </body>
    </Router>
  );
}

export default App;
