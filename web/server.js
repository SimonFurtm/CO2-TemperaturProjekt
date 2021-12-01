//express
const express = require('express');
const cors = require('cors');
const port = 5000;

//db
const db = require('./mariaDB');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/hardcodedData', cors(), (req, res) => {
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

app.get('/api/raspberryData', cors(), (req, res) => {
  const data = [
    {id: 1, time: '13:36', co2: '750',luftfaeuchtigkeit: '50' , temperatur: '16'},
    {id: 1, time: '13:36', co2: '750',luftfaeuchtigkeit: '50' , temperatur: '16'},
    {id: 1, time: '13:36', co2: '750',luftfaeuchtigkeit: '50' , temperatur: '16'},
    {id: 1, time: '13:36', co2: '750',luftfaeuchtigkeit: '50' , temperatur: '16'},


  ];

  res.json(data);
});

//Database API

//get RPIS
app.get('/rpis/get', async (req, res) => {
  try {
      const result = await db.pool.query("select * from RPIS");
      res.send(result);
  } catch (err) {
      throw err;
  }
});

//get Daten
app.get('/daten/get', async (req, res) => {
  try {
      const result = await db.pool.query("select * from Daten");
      res.send(result);
  } catch (err) {
      throw err;
  }
});

//delete
app.delete('/daten/delete', async (req, res) => {
  let id = req.query.id;
  try {
      const result = await db.pool.query("delete from Daten where id = ?", [id]);
      res.send(result);
  } catch (err) {
      throw err;
  } 
});

app.listen(port, () => `Server running on port ${port}`);