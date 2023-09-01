// Router(경로)
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
// app.set('/views', express.static(__dirname + '/views'));
app.set('views', './views');
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// indexRouter안에 정의된 라우터는 localhost:PORT/ 기본 경로를 갖도록
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// 404 error 처리
// 반드시 맨 마지막 라우트로 선언
app.get('*', (req, res) => {
  res.render('404');
});

//localhost:PORT 로 express 앱이 실행
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
