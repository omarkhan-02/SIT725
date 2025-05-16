const express = require('express');
const convert = require('./test/convert');

const app = express();
app.use(express.json());

app.post('/api/convert', (req, res) => {
  const { input } = req.body;

  if (typeof input !== 'string') {
    return res.status(400).json({ error: 'Invalid input type' });
  }

  try {
    const result = convert(input);
    res.json({ result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;

if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:3000`);
  });
}
