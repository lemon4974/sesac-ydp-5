const Visitor = require('../model/Visitor');
// ../model/Visitor은 DB와 연관되는 모델 부분
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
  console.log(req.body); // { name: xx, comment: yy }
  const { name, comment } = req.body;

  Visitor.postVisitor(req.body, (insertId) => {
    console.log('controller >> ', insertId);
    res.send({ id: insertId, name: name, comment: comment }); //client로
  });
};

exports.deleteVisitor = (req, res) => {
  console.log(req.body); // { id: xx }
  const { id } = req.body;

  Visitor.deleteVisitor(id, (result) => {
    console.log('controller >>', result); // true
    res.send(result); // res.send(true)
  });
};

exports.getVisitor = (req, res) => {
  // console.log(req.query); //{id: 5}
  console.log(req.params); //{id: 5}
  const { id } = req.params;

  Visitor.getVisitor(id, (result) => {
    console.log('~~~~~~~~~');
    console.log(result);
    // 여기서의 result는 모델의 getVisitor callback의 인자(rows[{}])
    res.send(result);
  });
};

exports.updateVisitor = (req, res) => {
  console.log(req.body); // {id: x, name: x, comment: x}

  Visitor.updateVisitor(req.body, () => {
    res.send({ isUpdated: true });
  });
};
