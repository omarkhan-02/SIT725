const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Configure CORS properly
const corsOptions = {
  origin: 'https://example.com', // Change this to the correct frontend domain
  methods: 'GET,PUT,POST,DELETE',
  allowedHeaders: 'Content-Type',
};

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'public')));

// Serve the index file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// New route to calculate the square of a number
app.get('/square/:number', (req, res) => {
  const number = parseInt(req.params.number);
  if (isNaN(number)) {
    return res.status(400).send('Invalid number');
  }

  const square = number * number;
  res.json({ number, square });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});