const app = require('./app');
const serverless = require('serverless-http');

module.exports = serverless(app);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

app.get('/', (req, res) => {
  res.json({
    message: 'API online',
    availableEndpoints: ['/api/stations'],
    stations: [
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
    ]
  });
});
