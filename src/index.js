import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Components/Header';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-8'>
          <App order={1} />
        </div>
        <div className='col-12 col-md-4'>
          <App order={2} />
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
