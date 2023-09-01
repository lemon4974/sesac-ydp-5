// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

// Q) 리더님 파일에는 왜 main 이 없지. 왜 다르지...??
router.get('/', controller.main);
//Q) 왜 router.get('/user/signup', controller.signUp); 처럼은 안 쓰는 거지... /user/앞이 기본 경로였나?

router.get('/signup', controller.signup);
router.post('/signup', controller.postSignup);

router.get('/signin', controller.signin);
router.post('/signin', controller.postSignin);

router.post('/user/profile', controller.postProfile);
router.post('/profile/edit', controller.editProfile);
router.post('/profile/delete', controller.deleteProfile);

module.exports = router;
