import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import Top from './Components/topContact/topContact';
import { NavBar } from './Components/Nav/navBar';
import { Footer } from './Components/Footer/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <div className='index'>
        <div className='index-nav'>
          <Top />
          <NavBar />
        </div>
        
        <div className='index-main'>
          <App />
        </div>
        
        <div className='index-footer'>
          <Footer />
        </div>
      </div>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
