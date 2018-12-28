// Executed on browser side

// Startup point for the client side code application

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';

ReactDOM.hydrate(<Home />, document.getElementById('root'));