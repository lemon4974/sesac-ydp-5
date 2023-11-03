const express = require('express');
const multer = require('multer');
const dotenv = require('dotenv');
const path = require('path');

// 주의) aws-sdk와 multer-s3 모듈의 버전이 맞아야 함
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

dotenv.config();
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// const app = express();

// AWS S3 설정
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// Multer-S3 미들웨어 설정
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME,
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + '-' + file.originalname);
    },
  }),
});

// 루트 페이지 랜더링
app.get('/', (req, res) => {
  res.render('index', { imageUrl: '' });
});

// 이미지 업로드 처리
app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  const imageUrl = req.file.location; // 업로드된 이미지의 S3 URL
  res.render('index', { imageUrl });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
