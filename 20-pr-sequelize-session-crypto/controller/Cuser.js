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
    console.log('postSignin_result>>>', result);

    // res.send(result);
    if (result) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (err) {
    res.send('404'); //다른부분...여기를 왜 false로 받았지
  }
  console.log('postSignin >>>', userid, pw);
};

exports.postProfile = async (req, res) => {
  // User.postProfile(req.body.userid, (result) => {
  //   res.render('profile', { data: result[0] });
  // });
  // const { userid } = req.body;
  try {
    const result = await User.findOne({
      where: { userid: req.body.userid },
    });
    console.log('postProfile_result>>>', result);

    res.render('profile', { data: result });
  } catch (err) {
    res.render('404');
    console.log('postProfile_id>>>', req.body.id);
  }
};

exports.editProfile = async (req, res) => {
  // const { id, userid, pw, name } = req.body;
  const result = await User.update(
    {
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: { id: req.body.id },
    }
  );
  console.log(result);
  res.send({ isUpdated: true });
};

exports.deleteProfile = async (req, res) => {
  console.log('아이디값 ' + req.body.id);
  const result = await User.destroy({
    where: { id: req.body.id },
  });

  console.log('result >>>', result);

  res.send(true); //삭제 성공을 프론트로 넘김
};
