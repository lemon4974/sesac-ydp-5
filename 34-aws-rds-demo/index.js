const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const userModel = require('./models/User');
const dotenv = require('dotenv');
dotenv.config();

// Sequelize 연결 설정
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

// 모델 초기화
const User = userModel(sequelize);

// 미들웨어 설정
app.use(express.json());

app.get('/', (req, res) => {
  res.send('안녕하세요!');
});

app.post('/api/users', async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.create({ username, email });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '서버 에러' });
  }
});

// 값이 없다면 3000을 열도록 포트 설정
const PORT = process.env.PORT || 3000;
sequelize.sync({ force: false }).then(() => {
  console.log('테이블 생성 완료!');

  app.listen(PORT, () => {
    console.log(`http//localhost:${PORT}`);
  });
});
