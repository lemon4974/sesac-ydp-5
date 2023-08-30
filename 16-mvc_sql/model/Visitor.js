// exports.getVisitors = () => {
//   return [
//     { id: 1, name: '홍길동', comment: '내가 왔다.' },
//     { id: 2, name: '이찬혁', comment: '으라차차' },
//   ];
// };

//db 연결 설정 코드
// mysql을 불러온 후 createConnection이라는 method로 접근
const mysql = require('mysql');
// conn은 연결 객체
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user', // 접근 허용되지 않음
  // 방법1: 권한 바꾸기,방법2: 새로운 사용자 정의
  password: '1234',
  database: 'sesac2', //사용하려는 database
});

exports.getVisitors = (callback) => {
  conn.query('select * from visitor', (err, rows) => {
    if (err) {
      throw err;
      // throw: 예외 처리
    }
    console.log('model>> ', rows);
    callback(rows);
  });
  //   model > controller로 데이터 넘겨줌
};

exports.postVisitor = (data, callback) => {
  // 매개 변수
  // data: 프론트엔드에서 유저가 입력한 값 (req.body)
  // callback : query실행 후 호출 취소

  // https://m.blog.naver.com/rwans0397/220665348298
  // query 메서드에 매개변수는 mysql 소스 입력과 콜백 함수가 있다.
  // 콜백 함수에 매개변수는 err, rows, fields 변수들이 있다 err 변수는 실행 중 에러를 나타내고 rows 변수는 접속된 행을 나타낸다.
  // fields 변수는 결과 영향을 받은 열에 정보들을 나타낸다. 그래서 조건문으로 에러가 없다면 실행하도록 한다.
  conn.query(
    `insert into visitor(name, comment)  values("${data.name}", "${data.comment}")`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log('model >>', rows);
      callback(rows.insertId);
    }
  );
};

exports.deleteVisitor = (id, callback) => {
  console.log('model >>', id); // front에서 알려준 삭제할 데이터의 pk

  conn.query(`delete from visitor where id=${id}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('model >> ', rows); // rows 삭제된 정보 저장
    callback(true); // { id: id }로 쓸 수도 있음. 삭제가 성공했다는 의미의 true. 개발자가 정하기 나름
  });
};

exports.getVisitor = (id, callback) => {
  conn.query(`select * from visitor where id = ${id}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log(rows); // [ {} ]
    callback(rows[0]);
    // 하나의 객체만 받을 수 있도록 [0]
  });
};

exports.updateVisitor = (updateData, callback) => {
  const { id, name, comment } = updateData;
  const sql = `update visitor set name='${name}', comment = '${comment}' where id = ${id}`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log(rows);
    callback();
  });
};
