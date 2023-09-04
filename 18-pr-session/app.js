const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8888;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: 'MySessionSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 60 * 1000,
    },
  })
);

const userInfo = { id: 'lemon', pw: '1234' };

app.get('/', (req, res) => {
  console.log(req.session.user);
  console.log(req.session);
  res.render('index');
});

// GET /login 요청시; login.ejs 랜더
app.get('/login', (req, res) => {
  res.render('login');
});

// POST /login 요청시;
app.post('/login', (req, res) => {
  // TODO: 정답 아이디와 폼에 적힌 아이디, 정답 비번과 폼에 적힌 비번 비교
  // 같다면 (로그인 통과); 세션에 user 키로 아이디를 저장
  // 틀리면 (로그인 실패); send() 메서드를 이용해 script 전송 (로그인 실패 alert & 브라우저 경로 홈으로 이동)
  // 참고 res.send(<script>...</script>) front js 코드 전송 가능
});

// app.get('/login', (req, res) => {
//   req.session.name = '홍길동';
//   res.send('세션 설정 완료!');
// });

// logout destroy 이용
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect('/index');
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
