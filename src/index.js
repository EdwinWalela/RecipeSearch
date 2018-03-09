import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Recipe from './Components/recipe';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
