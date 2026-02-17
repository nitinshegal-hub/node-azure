const express = require('express');
const app = express();

// IMPORTANT: Azure assigns port via environment variable
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 Node.js App Running on Azure App Service! Its working fine!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});