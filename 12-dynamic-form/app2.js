const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('dynamic2');
});

app.get('/axios', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post('/axios', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`Port ${PORT} is opening!`);
});
