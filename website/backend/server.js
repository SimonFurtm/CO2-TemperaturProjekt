//express
const express = require('express');
const cors = require('cors');
//db
const db = require('./mariaDB');
const bodyParser = require("body-parser");
//config
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/hardcodedData', cors(), (req, res) => {
  const customers = [
    {id: 1, time: '13:36', date: '07.12.2021', co2: '750', lf: '69', temperatur: '16'},
    {id: 2, time: '13:37', date: '07.12.2021', co2: '700', lf: '53', temperatur: '15,5'},
    {id: 1, time: '13:38', date: '07.12.2021', co2: '725', lf: '37', temperatur: '15'},
    {id: 1, time: '13:39', date: '07.12.2021', co2: '800', lf: '34', temperatur: '17'},
    {id: 2, time: '13:40', date: '07.12.2021', co2: '900', lf: '56', temperatur: '16,5'},
    {id: 2, time: '13:41', date: '07.12.2021', co2: '1050', lf: '54', temperatur: '16,3'}

  ];

  res.json(customers);
});


//Database API-calls

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
      {/*Christopher*/}
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

app.get("/", (req, res) => res.send("Server is running!"));

app.listen(port, () => console.log(`Server running on port ${port}`));