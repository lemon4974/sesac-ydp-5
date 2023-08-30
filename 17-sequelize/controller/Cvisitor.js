// const Visitor = require('../model/Visitor');
// ../model/Visitor은 DB와 연관되는 모델 부분

const { Visitor } = require('../models'); //../model/index.js

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = async (req, res) => {
  // [before]
  // console.log(Visitor.getVisitors())
  // Visitor.getVisitors((result) => {
  //   console.log('controller >>', result);
  //   res.render('visitor', { data: result });
  // });

  // [after]
  const result = await Visitor.findAll();
  console.log(result);
  res.render('visitor', { data: result });
};

// create
exports.postVisitor = async (req, res) => {
  // [before]
  // console.log(req.body); // { name: xx, comment: yy }
  // const { name, comment } = req.body;

  // Visitor.postVisitor(req.body, (insertId) => {
  //   console.log('controller >> ', insertId);
  //   res.send({ id: insertId, name: name, comment: comment }); //client로
  // });

  // [after]
  const { name, comment } = req.body;
  const result = await Visitor.create({
    name,
    comment,
  });
  // console.log(result); //create메서드가 실행된 결과 (== insert 한 데이터 값)
  res.send(result);
};

exports.deleteVisitor = async (req, res) => {
  // [before]
  // console.log(req.body); // { id: xx }

  // Visitor.deleteVisitor(id, (result) => {
  //   console.log('controller >>', result); // true
  //   res.send(result); // res.send(true)
  // });

  // [after]
  const { id } = req.body;
  const result = await Visitor.destroy({
    where: { id: id },
  });
  // console.log(result);
  res.send(true); //삭제 성공에 대한 값 or 삭제에 대한 데이터를 프론트로 보내기도 함
};

// read onoe
exports.getVisitor = async (req, res) => {
  // [before]
  // // console.log(req.query); //{id: 5}
  // console.log(req.params); //{id: 5}

  // Visitor.getVisitor(id, (result) => {
  //   console.log('~~~~~~~~~');
  //   console.log(result);
  //   // 여기서의 result는 모델의 getVisitor callback의 인자(rows[{}])
  //   res.send(result);
  // });

  // [after]
  const { id } = req.params;
  const result = await Visitor.findOne({
    where: { id: id },
  });
  console.log(result);
  res.send(result);
};

// update
exports.updateVisitor = async (req, res) => {
  // [before]
  // console.log(req.body); // {id: x, name: x, comment: x}

  // Visitor.updateVisitor(req.body, () => {
  //   res.send({ isUpdated: true });
  // });

  // [after]
  // update(변경될 값, where 절)
  await Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: { id: req.body.id },
    }
  );
  res.send({ isUpdated: true });
};
