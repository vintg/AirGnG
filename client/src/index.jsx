import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if(process.env.NODE_ENV!=='production') console.log('environment:', process.env.NODE_ENV);

ReactDOM.render(<App />, document.getElementById('reviews'));