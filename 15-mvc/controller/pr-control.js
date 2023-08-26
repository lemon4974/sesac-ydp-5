// Controller
// 주로 함수가 저장된다. 어떤 것이 실행되어야 하는지!
const info = require('../model/pr-model.js');
// const Comment = {getCommentAll: function}
// Comment.js 파일은 getCommentAll 이 export되는 파일로 DB와 연결되는 모델 파일

exports.capital = (req, res) => {
  res.render('index2');
};

// exports.info_all = (req, res) => {
//   // Comment.getCommentAll(): 댓글 배열 목록
//   res.render('info_all', { information: info.getmsgAll() });
// };
// '/comments'로의 경로로 이 함수에 접근(?)시 이 함수가 실행되도록 함.
// 위 함수는 comments를 render. 위의 모듈로 Comment에 객체로 정보를 가져온 후, Comment.getCommentAll()를 접근?
// exports.info = (req, res) => {
//   const seaId = Number(req.params.id);
//   const comments = Comment.getmsgAll();
//   // '/comment/:id'로의 경로로 이 함수에 접근(?)시 이 함수가 실행되도록 함.
//   // 위 함수는 comments를 render. 위의 모듈로 Comment에 객체로 정보를 가져온 후, Comment.getCommentAll()를 접근?

//   if (!comments[seaId - 1]) {
//     return res.render('404');
//   }

//   res.render('info', { info: comments[seaId - 1] });
// };
