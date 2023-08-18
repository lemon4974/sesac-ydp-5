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

app.listen(PORT, () => {
  console.log(`Port ${PORT} is opening!`);
});
