import './App.scss';
import React from 'react';
import HomePage from './pages/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from './pages/product';
import SupportPage from './pages/support';


function App() {
  return (
    <Router>
      <div className="App bg-secondary">
        <div className="Layout">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
