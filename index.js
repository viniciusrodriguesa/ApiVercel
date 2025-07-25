const express = require('express');
const app = express();

app.get('/api/stations', (req, res) => {
  res.json([
    {
      id: '001',
      name: 'Estação A',
      measurements: [
        { date: '2025-07-20', waterLevel: 2.5 },
        { date: '2025-07-21', waterLevel: 2.7 }
      ]
    },
    {
      id: '002',
      name: 'Estação B',
      measurements: [
        { date: '2025-07-20', waterLevel: 1.8 },
        { date: '2025-07-21', waterLevel: 2.0 }
      ]
    }
  ]);
});

module.exports = app;
