const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;

const Home = require('./client/components/home').default;

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(port, () => console.log(`Server running on port ${port}`));