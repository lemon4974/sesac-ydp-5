// Router 경로

const express = require('express');
const app = express();
const PORT = 8200;

app.set('view engine', 'ejs');
app.set('views', express.static(__dirname + 'views'));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require('./routes/index2');
app.use('/', indexRouter);

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
