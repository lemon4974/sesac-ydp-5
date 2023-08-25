const Comment = require('../model/Comment');

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

exports.main = (req, res) => {
  res.render('index');
};
exports.comments = (req, res) => {
  res.render('comments', { comments: comments });
};
exports.comment = (req, res) => {
  console.log('req.params', req.params); // {id: '1'}, 변수와 같은 역할을 한다.
  const cmtId = Number(req.params.id);
  const comments = Comment.getCommentAll();

  if (!comments[cmtId - 1]) {
    return res.render('404');
  }

  res.render('comment', { comment: comments[cmtId - 1] });
};

// 각각의 함수를 만듦과 동시에 내보내는 것
// get 요청이 들어왔을 때 콘트롤러의 comment 함수를 실행
// 똑같은 response를 함수만 따로 저장한것
