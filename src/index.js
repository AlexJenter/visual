// Application entrypoint.

// Load up the application styles
require('./index.scss');

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';

ReactDOM.render(<App />, document.getElementById('react-root'));