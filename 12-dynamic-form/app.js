const express = require('express');
const app = express();
const PORT = 8100;

app.set('view engine', 'ejs');
app.set('/views', 'views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  //   res.send('ㅎㅎㅎ');
  res.render('dynamic');
});

// app.get('/ajax', (req, res) => {
//   console.log(req.query);
//   res.render('dynamic', { title: 'Get 요청', user: req.query });
// });

app.get('/ajax', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post('/ajax', (req, res) => {
  console.log(req.body);
  res.send(req.body);
  //   res.render('result', { title: 'Get 요청', userInfo: req.body });
});

app.get('/axios', (req, res) => {
  console.log(req.query);
  res.send(req.query);
  // res.send(req.body)
  // res.send("안뇽")
  // res.send("<h1>안뇽</h1>");
  // res.send(['apple', 'banana');
  // res.json(req.body)
});

app.post('/axios', (req, res) => {
  console.log(req.body);
  //   res.send(req.body);
  res.send({ name: req.body.name, gender: req.body.gender, msg: '반가워!!' });
});

app.get('/fetch', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post('/fetch', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`Port ${PORT} is opening!`);
});
