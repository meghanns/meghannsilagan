const express = require('express');

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Welcome Home');
});

app.get('/about', (req, res) => {
  res.send('Just a kween in search of her throne');
});

app.get('/experience', (req, res) => {
  res.send('no experiences here yet!');
});

app.get('/skills', (req, res) => {
  res.send('no experiences here yet!');
});

app.get('/projects', (req, res) => {
  res.send('no experiences here yet!');
});

app.get('/leadership', (req, res) => {
  res.send('no experiences here yet!');
});

app.get('/passions', (req, res) => {
  res.send('tacos and the end of white supremacy!');
});

app.post('/holla', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
