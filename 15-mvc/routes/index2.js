// 이 모듈의 역할
// 경로 선언과 관련된 내용 기술
// 이 안에서는 경로 선언만 위주로
const express = require('express');
// 저장된 express를 가져와 객체로 저장
const controller = require('../controller/pr-control');
// const controller = {main: function, comments: function, comment: function}
const router = express.Router();
// express안에 Router()라는 모듈이 이미 안에 있음

// localhost:PORT/ 기본 경로

router.get('/', controller.capital);
// '/' 경로로 접근 시, controller의 main으로 즉 Cmain의 exports.main이 실행되도록 하는 경로 설정
router.get('/info_all', controller.info_all);
// '/comments' 경로로 접근 시, controller의 main으로 즉 Cmain의 exports.comments이 실행되도록 하는 경로 설정
router.get('/info/:id', controller.info);
// '/comment/:id' 경로로 접근 시, controller의 main으로 즉 Cmain의 exports.comment이 실행되도록 하는 경로 설정

module.exports = router;

// const comments = [
//   {
//     id: 1,
//     userid: 'helloworld',
//     date: '2022-10-31',
//     comment: '안녕하세요^~^',
//   },
//   {
//     id: 2,
//     userid: 'happy',
//     date: '2022-11-01',
//     comment: '반가워유',
//   },
//   {
//     id: 3,
//     userid: 'lucky',
//     date: '2022-11-02',
//     comment: '오 신기하군',
//   },
//   {
//     id: 4,
//     userid: 'bestpart',
//     date: '2022-11-02',
//     comment: '첫 댓글입니당ㅎㅎ',
//   },
// ];

// 이 파일의 기본 경로: localhost:PORT/

// GET localhost: PORT/

// router.get('/', (req, res) => {
//   res.render('index');
// });
// // GET localhost: PORT/
// comments;
// router.get('/comments', (req, res) => {
//   res.render('comments', { comments: comments });
// });
// // GET localhost: PORT/comments/:id
// router.get('/comment/:id', (req, res) => {
//   // req.params: 라우트 매개변수에 대한 정보가 담겨 있음
//   console.log('req.params', req.params); // {id: '1'}, 변수와 같은 역할을 한다.
//   const cmtId = Number(req.params.id);

//   if (!comments[cmtId - 1]) {
//     return res.render('404');
//   }
// });

//module.exports 구문을 통해 router 를 내보내야
//다른 모듈 (파일)에서 router 객체를 사용 가능
