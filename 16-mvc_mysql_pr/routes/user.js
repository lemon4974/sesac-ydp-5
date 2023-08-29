// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/Cuser');

const router = express.Router();

router.get('/', controller.main);
router.get('/user/signup', controller.main);
router.post('/user/signup', controller.main);

router.get('/user/signin', controller.main);
router.post('/user/signin', controller.main);

router.post('/user/profile', controller.main);
router.post('/user/profile/edit', controller.main);
router.post('/user/profile/delete', controller.main);
