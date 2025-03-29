const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// ✅ FIX: Allow frontend to access the backend
const corsOptions = {
  origin: '*', // Allow requests from any origin during development
  methods: 'GET,PUT,POST,DELETE',
  allowedHeaders: 'Content-Type',
};

app.use(cors(corsOptions));
app.use(express.json()); // For parsing JSON request bodies
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ FIX: Add missing API routes for arithmetic operations
app.get('/add/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid numbers' });
  }
  res.json({ result: num1 + num2 });
});

app.get('/subtract/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid numbers' });
  }
  res.json({ result: num1 - num2 });
});

app.get('/multiply/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid numbers' });
  }
  res.json({ result: num1 * num2 });
});

app.get('/divide/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid numbers' });
  }
  if (num2 === 0) {
    return res.status(400).json({ error: 'Cannot divide by zero' });
  }
  res.json({ result: num1 / num2 });
});

// Square calculation route
app.get('/square/:number', (req, res) => {
  const number = parseFloat(req.params.number);
  if (isNaN(number)) {
    return res.status(400).json({ error: 'Invalid number' });
  }
  res.json({ result: number * number });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
