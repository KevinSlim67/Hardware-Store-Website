import './App.scss';
import React from 'react';
import HomePage from './components/home/home_page';

function App() {
  return (
    <div className="App bg-secondary">
      <div className="Layout">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
