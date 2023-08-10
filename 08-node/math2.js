//math 2 module
//자주 사용할 함수와 변수를 정의한 파일

const add = (a, b) => a + b;
const PI = 3.141592;
const E = 2.718;

// const add = (a,b) => a+b;
// const PI = 3.141592;
// const E = 2.718;

const sub = (a, b) => a - b;
const multiple = (a, b) => a * b;
const divide = (a, b) => a / b;

//case1. 객체를 감싸서 내보내기(encapsulation? )
//본래 하나 밖에 내보내지 못함
// module.exports = {
//   add: add,
//   sub: sub,
//   multiple: multiple,
//   divide: divide,
//   PI: PI,
//   E: E,
// };

module.exports = {
  add,
  sub,
  multiple,
  divide,
  PI,
  E,
};

//case2. 하나씩 내보내기
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.E = E;

// case2를 더 간단히!
// exports.add = add;
// exports.PI = PI;
// exports.E = E;
