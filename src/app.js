const express = require('express');
const app = express();

app.get('/api/health', (req, res) => {
  res.json({ status: 'Node backend is healthy' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Node backend running on port ${PORT}`);
});
