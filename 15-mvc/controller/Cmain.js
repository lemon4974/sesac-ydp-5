// Controller
// 주로 함수가 저장된다. 어떤 것이 실행되어야 하는지!
const Comment = require('../model/Comment.js');
// const Comment = {getCommentAll: function}
// Comment.js 파일은 getCommentAll 이 export되는 파일로 DB와 연결되는 모델 파일

exports.main = (req, res) => {
  res.render('index');
};
// '/'로의 경로로 이 함수에 접근(?)시 이 함수가 실행되도록 함.
// 위 함수는 index 에만 render를 실행시키기 때문에 별도로 getCommentAll에 대한 정보를 전달하지 않음
exports.comments = (req, res) => {
  // Comment.getCommentAll(): 댓글 배열 목록
  res.render('comments', { comments: Comment.getCommentAll() });
};
// '/comments'로의 경로로 이 함수에 접근(?)시 이 함수가 실행되도록 함.
// 위 함수는 comments를 render. 위의 모듈로 Comment에 객체로 정보를 가져온 후, Comment.getCommentAll()를 접근?
exports.comment = (req, res) => {
  const cmtId = Number(req.params.id);
  const comments = Comment.getCommentAll(); // 댓글 목록 배열
  // '/comment/:id'로의 경로로 이 함수에 접근(?)시 이 함수가 실행되도록 함.
  // 위 함수는 comments를 render. 위의 모듈로 Comment에 객체로 정보를 가져온 후, Comment.getCommentAll()를 접근?

  if (!comments[cmtId - 1]) {
    return res.render('404');
  }

  res.render('comment', { comment: comments[cmtId - 1] });
};

// 각각의 함수를 만듦과 동시에 내보내는 것
// get 요청이 들어왔을 때 콘트롤러의 comment 함수를 실행
// 똑같은 response를 함수만 따로 저장한것
