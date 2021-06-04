import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../State/state.store.js';
import App from './app';

ReactDOM.render(
    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>,
    document.getElementById('root')
  );