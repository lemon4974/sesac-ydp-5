// TODO: 컨트롤러 코드
const User = require('../model/User');

exports.main = (req, res) => {
  res.render('index');
};

// router.get('/user/signup', controller.main);
// router.post('/user/signup', controller.main);

// router.get('/user/signin', controller.main);
// router.post('/user/signin', controller.main);

// router.post('/user/profile', controller.main);
// router.post('/user/profile/edit', controller.main);
// router.post('/user/profile/delete', controller.main);

exports.signUp = (req, res) => {
  User.signUp((result) => {
    // console.log('controller-getUser>>', result);
    res.render('signup', { data: result });
  });
};

exports.signIn = (req, res) => {
  User.signIn((result) => {
    res.render('signin', { data: result });
  });
};
