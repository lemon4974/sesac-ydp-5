const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;
const SECRET = '9PBYbnIhfXEVQdeXrvPWrX6ydDAJkIqV';
// JWT 암호화를 위한 시크릿 키, 본래는 env로 환경변수로 관리를 해주어야

const userInfo = { id: 'banana', pw: '1234', name: '홍길동', age: 29 };

app.set('view engine', 'ejs');
// 뷰 파일
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// 바디 parsor

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  try {
    const { id, pw } = req.body; //유저가 입력한 정보
    const { id: realId, pw: realPw } = userInfo; //유저의 정답 정보
    console.log(id, pw, realId, realPw);
    if (id === realId && pw === realPw) {
      //토큰 생성
      const token = jwt.sign({ id: id }, SECRET);
      res.json({ result: true, token: token });
      //   첫 번째 인자에 id, 두 번째 인자에 SECRET
    } else {
      //로그인 실패 응답
      res.json({ result: false, message: '로그인 정보가 올바르지 않음!' });
    }
  } catch (error) {
    console.log(error);
  }
});

app.post('/token', (req, res) => {
  console.log(req.headers.authorization); //Bearer token_string
  if (req.headers.authorization) {
    // 요청의 header에 authorization이 있다면
    const token = req.headers.authorization.split(' '); //['Bearer', 'token_string']
    try {
      const result = jwt.verify(token[1], SECRET);
      console.log('result >>', result);
      if (result.id === userInfo.id) {
        res.json({ result: true, name: userInfo.name });
      }
    } catch (error) {
      console.error(error);
      res.json({ result: false, message: '인증된 회원이 아님' });
    }
  } else {
    res.redirect('/login');
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
