const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'views');
// 미들웨어(middleware)
// : 요청(req)과 응답(res)의 중간에서 작업하는 코드
// app.use()

// req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형식으로 데이터를 주고 받음

// 라우팅(Routing): 주소를 설정하는 행위
//    - [요청 방식(get, post, ..) + 요청 경로] 겹치면 안돼!
//    - GET/hello, Post/hello -> ok
//    - GET/hello, GET/hello2 -> ok
//    - POST/banana, POST/banana -> x, 유일한 라우트 하나를 찾을 수 없음
// 라우트(Route): 주소

// GET / 경로: 요청시 main 페이지 보여주기
app.get('/', (req, res) => {
  res.render('main');
});

app.get('/practice1', (req, res) => {
  res.render('practice1');
});

// 1. 브라우저 창에서 url이 http://localhost:8000/prac1 바뀌었다?
// 2. GET /prac1 요청이 날라간 것 (클라 -> 서버)
// 3. 서버는 응답을 하기위해 GET /prac1 라우터를 찾습니다. (app.js)
// 4. GET /prac1 라우터의 응답을 함 (practice1.ejs를 브라우저에게 응답함)
app.get('/practice2', (req, res) => {
  res.render('practice2');
});

app.get('/result1', (req, res) => {
  console.log(req.query);
  // res.render(뷰이름, 데이터);
  res.render('result', { user: req.query });
});
app.post('/result2', (req, res) => {
  console.log(req.body);
  res.render('result', { user: req.body });
});

app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});
