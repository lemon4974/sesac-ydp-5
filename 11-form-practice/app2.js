const express = require('express');
const app = express();
const PORT = 8070;

app.set('view engine', 'ejs');
app.set('/views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static(__dirname + '/static'));

app.get('/', (req, res) => {
  res.render('2main');
});

app.get('/write', (req, res) => {
  res.render('write');
});

app.post('/article', (req, res) => {
  console.log(req.body);
  res.render('article', { user: req.body });
});

app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});
