// TODO: DB(mysql) 연결
// TODO: 모델 코드

const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'sesac2',
});

exports.signUp = (callback) => {
  conn.query('select * from users', (err, rows) => {
    if (err) {
      throw err;
    }
    console.log('model 작동중?>>', rows);
    callback(rows);
  });
};

exports.signIn = (callback) => {
  conn.query('select * from users', (err, rows) => {
    if (err) {
      throw err;
    }
    console.log('model 작동중?>>', rows);
    callback(rows);
  });
};
