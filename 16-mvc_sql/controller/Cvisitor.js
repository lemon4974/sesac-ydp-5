const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = (req, res) => {
  // [before]
  // console.log(Visitor.getVisitors());
  // res.render('visitor', { data: Visitor.getVisitors() });

  // [after]
  // console.log(Visitor.getVisitors())
  Visitor.getVisitors((result) => {
    console.log('controller >>', result);
    res.render('visitor', { data: result });
  });
};

exports.postVisitor = (req, res) => {
  console.log('controller>>', req.body);
  // 예상 { name: xx, comment: yy }

  Visitor.postVisitor(req.body, (insertId) => {
    console.log('controller insertId>>', insertId);
    res.send({ id: insertId, name: req.body.name, comment: req.body.comment });
    // client로 보내는 중.
  });
};
