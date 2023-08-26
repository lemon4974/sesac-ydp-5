//Model!(DB와 연결)
// db 에서 전체 댓글 목록을 받아왔다고 가정

exports.getCommentAll = () => {
  // cf) return의 경우 같은 줄에 [가 있어야 return 이 가능...
  // 원래 return 이런게 있었나??
  return [
    {
      id: 1,
      userid: 'helloworld',
      date: '2022-10-31',
      comment: '안녕하세요^~^',
    },
    {
      id: 2,
      userid: 'happy',
      date: '2022-11-01',
      comment: '반가워유',
    },
    {
      id: 3,
      userid: 'lucky',
      date: '2022-11-02',
      comment: '오 신기하군',
    },
    {
      id: 4,
      userid: 'bestpart',
      date: '2022-11-02',
      comment: '첫 댓글입니당ㅎㅎ',
    },
  ];
};
