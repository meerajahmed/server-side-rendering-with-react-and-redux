const express = require('express');

const Home = require('./client/components/home').default;
const renderer = require('./helpers/renderer').default;
const createStore = './helpers/createStore'.default;

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();
  res.send(renderer(req, store));
});

app.listen(port, () => console.log(`Server running on port ${port}`));