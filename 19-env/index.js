// const ps = process.env;
// console.log(ps);

const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config(); //꼭 적기

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  console.log(process.env.NAME);
  console.log(process.env.NODE);

  res.send('Hello world!');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
