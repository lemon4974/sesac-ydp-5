const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = (req, res) => {
  console.log(Visitor.getVisitors());
  res.render('visitor', { data: Visitor.getVisitors() });
};
