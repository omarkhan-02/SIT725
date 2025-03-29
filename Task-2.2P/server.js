const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// CORS Configuration
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Square route
app.get('/square/:num1', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    if (isNaN(num1)) {
        return res.status(400).json({ error: 'Invalid number' });
    }
    res.json({ result: num1 * num1 });
});

// Addition route
app.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    res.json({ result: num1 + num2 });
});

// Subtraction route
app.get('/subtract/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    res.json({ result: num1 - num2 });
});

// Multiplication route
app.get('/multiply/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    res.json({ result: num1 * num2 });
});

// Division route
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

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
