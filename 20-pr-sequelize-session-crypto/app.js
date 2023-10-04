const express = require('express');
const session = require('express-session');

const app = express();
const PORT = 8100;
// const dotenv = require('dotenv');
// dotenv.config(); //환경설정?

app.set('view engine', 'ejs');
// app.set('/views', express.static(__dirname + '/views'));
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 600 * 1000,
    },
  })
);

const userRouter = require('./routes/user');
app.use('/', userRouter);

app.get('/signin', (req, res) => {
  req.session.user = 'user';
  console.log(req.session);
  res.render('index', {
    sessionID: req.sessionID,
    sessionName: req.session.name,
  });
});

// [404 error] 맨 마지막 라우트로 선언 -> 나머지 코드 무시되기 때문!!
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
