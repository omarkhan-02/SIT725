const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Configure CORS properly
const corsOptions = {
  origin: '*', // Allow all origins for development
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
};

app.use(cors(corsOptions));
app.use(express.json()); // Parse JSON request bodies
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to calculate the square of a number
app.get('/square/:number', (req, res) => {
  const number = parseFloat(req.params.number);
  if (isNaN(number)) {
    return res.status(400).send('Invalid number');
  }

  const square = number * number;
  res.json({ number, square });
});

// Route to add two numbers
app.get('/add/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send('Invalid numbers');
  }

  const sum = num1 + num2;
  res.json({ num1, num2, sum });
});

// Route to subtract two numbers
app.get('/subtract/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send('Invalid numbers');
  }

  const difference = num1 - num2;
  res.json({ num1, num2, difference });
});

// Route to multiply two numbers
app.get('/multiply/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send('Invalid numbers');
  }

  const product = num1 * num2;
  res.json({ num1, num2, product });
});

// Route to divide two numbers
app.get('/divide/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send('Invalid numbers');
  }

  if (num2 === 0) {
    return res.status(400).send('Cannot divide by zero');
  }

  const quotient = num1 / num2;
  res.json({ num1, num2, quotient });
});

// POST route for addition (optional)
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send('Invalid numbers');
  }

  const sum = num1 + num2;
  res.json({ num1, num2, sum });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});