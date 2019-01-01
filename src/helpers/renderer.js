import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import Routes from '../routes';

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default (req) => {
  const content = renderToString(
    <Provider>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  );
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};