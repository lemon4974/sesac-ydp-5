'use strict';

// models안에 실제로는 여러 테이블이 쌓임. 그 만큼 파일의 갯수가 생성됨.

const Sequelize = require('sequelize');
// 설치한 sequelize 모듈 호출 후 Sequelize 변수에 저장
const config = require(__dirname + '/../config/config.json')['development'];
// config 폴더 안의 json 파일을 불러온 후, development 환경의 db 설정을 config라는 변수에 저장
// config : db 접근 가능한 설정 값 저장
const db = {};
// 빈 db 객체 생성

// Sequelize 객체 생성해서 sequelize 변수에 저장
let sequelize = new Sequelize(
  config.database, //sesac2
  config.username, // user
  config.password, /// 1234
  config
);

// db = { sequelize(db 연결 정보), Sequelize(모듈 그 자체) }
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// !! models/ 폴더에 정의되는 model(테이블)은 db 객체에 저장
// db = { sequelize, Sequelize, Visitor: 모델(테이블) }
db.Visitor = require('./Visitor')(sequelize, Sequelize);

// db 객체 내보냄(모듈화 내보냄, 다른 곳에서 db 객체 사용)
module.exports = db;
