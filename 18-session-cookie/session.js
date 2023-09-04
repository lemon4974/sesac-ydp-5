const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(
  session({
    // 쿠키처럼 괄호 안에 option 객체를 넣어줌
    secret: 'MySessionSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 60 * 1000, // 1m
    },
  })
);
// 세션 옵션 객체
// secret: 안전하게 쿠키를 전송하기 위한 쿠키 서명 값
// resave: 세션에 수정사항이 생기지 않더라도 매 요청(req)마다 세션을 다시 저장할지
// saveUninitialized: 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정
// httpOnly: http 프로토콜에서도 세션 사용 가능
// maxAge: 쿠키 수명 (단위 ms)

app.get('/', (req, res) => {
  res.render('session');
});

app.get('/set', (req, res) => {
  req.session.name = '홍길동'; //내가 저장하고 싶은 키 값
  res.send('세션 설정 완료!');
});

app.get('/name', (req, res) => {
  console.log(req.session);
  //   Session {
  //     cookie: {
  //       path: '/',
  //       _expires: 2023-09-04T04:41:47.442Z,
  //       originalMaxAge: 60000,
  //       httpOnly: true
  //     },
  //     name: '홍길동'
  //   }

  //  express-session 미들웨어에 의해 암호화된 쿠키 내용 (현재 세션 아이디)
  res.send({ id: req.sessionID, name: req.session.name });
});

app.get('/destroy', (req, res) => {
  // 콜백 err를 받는다.
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return;
    }
    //res.send는 어딘가로 보내줌. res.render는 ejs파일을 그려줌
    // res.redirect(주소): 주소로 이동(리다이렉트)
    res.redirect('/name'); // 세션 확인
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// 세션 정리
// 1. 세션 설정
//  req.session.키 = 값

// 2. 세션 사용
//  req.session.키

// 3. 세션 삭제
//  req.session.destroy(콜백)
