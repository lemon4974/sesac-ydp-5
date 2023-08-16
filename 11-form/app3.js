const express = require('express');
const app = express();
const PORT = 8100;

app.set('view engine', 'ejs');
app.set('/views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index3');
});

app.post('/postForm', (req, res) => {
  console.log(req.body);
  res.render('result3', { userInfo: req.body });
});

app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});
