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
      // throw... 정확히 뭐지?
    }
    console.log('model>> ', rows);
    callback(rows);
  });
  //   model > controller로 데이터 넘겨줌
};
