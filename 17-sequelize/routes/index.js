const express = require('express');
const controller = require('../controller/Cvisitor');
// controller폴더의 Cvisitor에서 require해서 controller에 저장했기에
// Cvisitor에서 어떤 것을 exports했음을 알 수 있다.
const router = express.Router();

// 기본주소: localhost:PORT
router.get('/', controller.main);
router.get('/visitors', controller.getVisitors); //모든 것을 조회하는 것은 visitors
router.post('/visitor', controller.postVisitor); // 하나만 조회 -> visitor
router.delete('/visitor', controller.deleteVisitor);
// 삭제 기능의 경로
// router.get('/visitor', controller.getVisitor);
router.get('/visitor/:id', controller.getVisitor);
//수정 기능의 경로
router.patch('/visitor', controller.updateVisitor);

module.exports = router;
