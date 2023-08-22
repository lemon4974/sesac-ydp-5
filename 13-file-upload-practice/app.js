const express = require('express');
const app = express();
const PORT = 8000;

// multer 관련 설정
const multer = require('multer');
const path = require('path'); // 경로에 관한 내장 모듈
const uploadDetail = multer({
  // storage: 저장할 공간에 대한 정보
  // done(null, xx) 여기서 null은 error를 의미하는 매개변수
  // 에러가 없으므로 "null"이라고 전달하여 콜백 함수를 호출!
  storage: multer.diskStorage({
    destination(req, file, done) {
      // done: callback
      console.log('destination: ', req.body);
      done(null, 'uploads/'); // 파일을 업로드할 경로 설정
    },
    filename(req, file, done) {
      console.log('filename: ', req.body);
      const ext = path.extname(file.originalname);
      // const userId = req.body.ID; // 유저 아이디 가져오기

      // ver1 [요청 body 객체의 userid + 현재시간.확장자] 형식으로 파일 업로드!!
      done(null, req.body.userid + Date.now() + ext);

      // ver2 [파일명 + 현재시간.확장자] 형식으로 파일 업로드!!
      // done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  // limits: 파일 제한 정보
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/static', express.static(__dirname + '/static'));

app.get('/', (req, res) => {
  res.render('index', { title: '파일 업로드 실습!!' });
});

app.post('/result', uploadDetail.single('profile'), (req, res) => {
  // req.file: 파일 업로드 정보
  // req.body: 파일 외의 정보들
  console.log(req.file); // { 파일_정보 }
  console.log(req.body);
  // res.send('파일 업로드 완료!');
  res.render('result', {
    userInfo: req.body,
    src: req.file.path,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
