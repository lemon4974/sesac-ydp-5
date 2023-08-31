// TODO: 컨트롤러 코드
const User = require('../model/User');

exports.main = (req, res) => {
  res.render('index');
};

exports.signup = (req, res) => {
  res.render('signup');
};

exports.postSignup = (req, res) => {
  User.signup(req.body, (result) => {
    res.send(result); // A) 싸이클 종료(연결 종료)
  });
};

exports.signin = (req, res) => {
  res.render('signin');
};

exports.postSignin = (req, res) => {
  User.signin(req.body, (result) => {
    if (result.length > 0) {
      // Q) length는 왜 나온 것이며...
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

exports.postProfile = (req, res) => {
  User.postProfile(req.body.userid, (result) => {
    res.render('profile', { data: result[0] });
  });
};

exports.editProfile = (req, res) => {
  User.editProfile(req.body, () => {
    res.send(true);
  });
};

exports.deleteProfile = (req, res) => {
  User.deleteProfile(req.body.id, () => {
    res.send(true);
  });
};
