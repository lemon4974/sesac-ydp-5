const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'views');
// 미들웨어(middleware)
// : 요청(req)과 응답(res)의 중간에서 작업하는 코드
// app.use()

// req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱(분해, 분석)하겠다
app.use(express.json()); // json 형식으로 데이터를 주고 받음
// json 키에 " " 표시

// 라우팅(Routing) - 주소 설정
// 주소 하나하나를 라우터라 함
// GET '/' => index.ejs를 보여줌
app.get('/', (req, res) => {
  // res.render(ejs_경로, 데이터)
  // ejs_경로: views/ 폴더 내부 ejs 파일의 주소
  // 데이터: 뷰에 넣어줄 정보
  res.render('index', { title: '폼 전송을 연습해보자!' });
});

// GET '/getForm' => 임의의 메세지 전송
// get 방식은 클라이언트에서 보낸 데이터가 req.query에 저장
app.get('/getForm', (req, res) => {
  console.log(req.query);
  res.render('result', { title: 'Get 요청', userInfo: req.query });
  // res.send('get 요청 성공!');
});

// POST '/postForm' => 임의의 메세지 전송
// post 방식은 클라이언트에서 보낸 데이터가 req.body에 저장

app.post('/postForm', (req, res) => {
  console.log(req.body);
  res.render('result', { title: 'Get 요청', userInfo: req.body });
  // res.send('post 요청 성공!');
});

app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});
