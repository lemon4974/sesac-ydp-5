const express = require('express');
const app = express();
const PORT = 8070;

// multer 관련 설정
const multer = require('multer');
const path = require('path'); //경로에 대한 내장 모듈
const upload = multer({
  dest: 'uploads/', // dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로. 파일이 업로드되고 저장될 경로를 지정
});
// multer 세부 설정
const uploadDetail = multer({
  // storage: 저장할 공간에 대한 정보
  // done(null, xx) 여기서 null은 error를 의미하는 매개변수
  // 에러가 없으므로 "null"이라고 전달하여 콜백 함수를 호출!
  storage: multer.diskStorage({
    destination(req, file, done) {
      //done: callback
      done(null, 'uploads/'); // 파일을 업로드할 경로 설정
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 파일 확장자 추출
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  // limits: 파일 제한 정보
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

app.set('view engine', 'ejs');
app.set('/views', express.static(__dirname + '/views'));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

// 1. single(): 하나의 파일을 업로드할 때 사용되는 method
// upload.single('userfile'): 클라이언트의 요청이 들어오면 multer 설정(upload 변수)에 따라 파일을 업로드 한 후, req.file 객체 생성
// single() 안의 인자는 input 태그의 name 속성과 일치시켜야 함
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
  // req.file: 파일 업로드 정보
  // req.body: 파일 외의 정보들
  console.log(req.file);
  console.log('---------');
  console.log(req.body);
  res.send('파일 업로드 완료!');
});

// 2. array(): 여러 파일을 한 번에 업로드
// uploadDetail.array('userfiles'): 클라이이언트 요청이 들어오면
// multer 설정(uploadDetail 변수)에 따라 파일을 어로드한 후 , req.files 객체 생성
app.post('/upload/array', uploadDetail.array('userfiles'), (req, res) => {
  console.log(req.files); // [ { 파일1_정보 }, { 파일2_정보 }, .. ] : 배열 형태로 각 파일 정보를 출력
  console.log(req.body);
  res.send('하나의 인풋에 여러 파일 업로드 완료');
});

// 3. fields(): 여러 파일을 각각 인풋에 업로드
// req.files에서 파일 정보를 확인
// fields() 매개 변수로 input 태그의 name을 각각 넣기
app.post(
  '/upload/fields',
  uploadDetail.fields([{ name: 'userfile1' }, { name: 'userfile2' }]),
  (req, res) => {
    console.log(req.files); // { userfile1: [ {파일_정보} ], userfile2: [ {파일_정보} ]} 객체 안에 배열 형태로 각 파일 정보
    console.log(req.body);
    res.send('하나의 인풋에 여러 파일 업로드 완료!');
  }
);

// 동적 폼 전송
app.post('/dynamicFile', uploadDetail.single('dynamicUserfile'), (req, res) => {
  console.log(req.file);
  res.send(req.file);
});

// req.file 객체 자세히 보기
// {
//     fieldname: 'userfile',  // 폼에 정의한 name 값
//     originalname: 'ë\x8B¤ì\x9A´ë¡\x9Cë\x93\x9C.png',  // 원본 파일명
//     encoding: '7bit', // 파일 인코딩 타입
//     mimetype: 'image/png', // 파일 타입
//     destination: 'uploads/', // 파일 저장 경로
//     filename: 'a2f4b8a71a1b24db9c1cca86a3178c1c', // destination 저장된 파일명
//     path: 'uploads\\a2f4b8a71a1b24db9c1cca86a3178c1c', //업로드된 파일 전체 경로
//     size: 2632 //파일 크기
//   }

app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});
