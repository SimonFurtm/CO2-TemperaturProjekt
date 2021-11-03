const express = require('express');
const cors = require('cors');

const app = express();

app.get('/api/customers', cors(), (req, res) => {
  const customers = [
    {id: 1, time: '13:36', co2: '750', temperatur: '16'},
    {id: 2, time: '13:37', co2: '700', temperatur: '15,5'},
    {id: 3, time: '13:38', co2: '725', temperatur: '15'},
    {id: 4, time: '13:39', co2: '800', temperatur: '17'},
    {id: 5, time: '13:40', co2: '900', temperatur: '16,5'},
    {id: 6, time: '13:41', co2: '1050', temperatur: '16,3'}

  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);