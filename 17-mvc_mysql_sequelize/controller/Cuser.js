// TODO: 컨트롤러 코드
// const User = require('../model/User');

const { User } = require('../models'); // ../models/index.js

exports.main = (req, res) => {
  res.render('index');
};

exports.signup = (req, res) => {
  res.render('signup');
};

exports.postSignup = async (req, res) => {
  // User.signup(req.body, (result) => {
  //   res.send(result);
  // });

  const { userid, name, pw } = req.body;
  const result = await User.create({
    userid,
    name,
    pw,
  });
  res.send(result);
};

exports.signin = (req, res) => {
  res.render('signin');
};

exports.postSignin = async (req, res) => {
  const { userid, pw, name } = req.body;

  try {
    const result = await User.findOne({
      where: { userid, pw, name },
    });
    res.send(result);
  } catch (err) {
    res.send(false);
  }
};

exports.postProfile = async (req, res) => {
  // User.postProfile(req.body.userid, (result) => {
  //   res.render('profile', { data: result[0] });
  // });
  const { userid } = req.body;
  const result = await User.findOne({
    where: { id: userid },
  });

  res.render('profile', {
    user: {
      // id: result.id,
      userid: result.userid,
      pw: result.pw,
      name: result.name,
    },
  });
};

exports.editProfile = async (req, res) => {
  const { id, userid, pw, name } = req.body;
  const result = await User.update({ userid, pw, name }, { where: { id } });

  res.send(true);
};

exports.deleteProfile = async (req, res) => {
  const { id } = req.body;
  const result = await User.destroy({
    where: { id },
  });
  res.send(true);
};
