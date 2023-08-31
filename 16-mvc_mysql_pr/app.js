const express = require('express');
const app = express();
const PORT = 8100;

app.set('view engine', 'ejs');
app.set('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// [라우터(경로) 분리]
// require('./routes') // 현재 위치에 routes/index.js
// require('./routes/index') // 현재 위치에 routes/index.js
// require('./routes/user') // 현재 위치에 routes/user.js
const userRouter = require('./routes/user'); // index는 생략 가능!
app.use('/', userRouter); // localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한 대로 동작

// [404 error] 맨 마지막 라우트로 선언 -> 나머지 코드 무시되기 때문!!
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
