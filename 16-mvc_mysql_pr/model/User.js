// TODO: DB(mysql) 연결
// TODO: 모델 코드

const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'sesac2',
});

exports.signup = (data, callback) => {
  const sql = `insert into user (userid, name, pw) values ('${data.userid}', '${data.name}', '${data.pw}')`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log('model 작동중? signUp>>', rows);
    callback(rows);
  });
};

exports.signin = (data, callback) => {
  const sql = `select * from user where userid='${data.userid}' and pw='${data.pw}' limit 1`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log('model 작동중? sigIn>>', rows);
    callback(rows);
  });
};

exports.postProfile = (userid, callback) => {
  const sql = `select * from user where userid='${userid}' limit 1`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    callback(rows);
  });
};

exports.editProfile = (data, callback) => {
  const sql = `update user set userid='${data.userid}', name='${data.name}', pw='${data.pw}' where id='${data.id}'`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    callback();
  });
};

exports.deleteProfile = (id, callback) => {
  conn.query(`delete from user where id='${id}'`, (err, rows) => {
    if (err) {
      throw err;
    }
    callback();
  });
};
