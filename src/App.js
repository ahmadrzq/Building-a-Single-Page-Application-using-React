import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1><Link to="/">Aplikasi Catatan</Link></h1>
        <nav className="navigation">
          <ul>
            <Navigation />
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
