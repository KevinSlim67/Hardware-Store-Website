import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import notImplementedReducer from './features/notImplemented';
import latestProductCategory from './features/latestProductCategory';
import selectedLocation from './features/selectedLocation';
import selectedCategory from './features/selectedCategory';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import mobileNavBar from './features/mobileNavBar';

const store = configureStore({
  reducer: {
    notImplemented: notImplementedReducer,
    latestProductCategory: latestProductCategory,
    selectedLocation: selectedLocation,
    selectedCategory: selectedCategory,
    mobileNavBar : mobileNavBar
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
