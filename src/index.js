const express = require('express');

const Home = require('./client/components/home').default;
const renderer = require('./helpers/renderer').default;

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(renderer(req));
});

app.listen(port, () => console.log(`Server running on port ${port}`));