import React from 'react';
import logo from './fs-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nothing to see here folks, move along. 
        </p>
        <a
          className="App-link"
          href="https://frontsightmarketing.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          FrontSight Digital Marketing 
        </a>
      </header>
    </div>
  );
}

export default App;
