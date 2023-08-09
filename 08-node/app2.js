//math2 모듈을 불러와 사용

//math 2 모듈 불러오기
const math2 = require('./math2');
//math2라는 객체
// const math2 = {
//     add: add,
//     sub: sub,
//     multiple: multiple,
//     divide: divide,
//     PI: PI,
//     E: E,
//   };

const { add, sub, multiple, divide } = require('./math2');

console.log(add(5, 8));

console.log(math2.add(5, 7));
console.log(math2.sub(5, 7));
console.log(math2.multiple(5, 7));
console.log(math2.divide(5, 7));

// console.log(add(5, 7));
const hello = require('./math');

console.log(hello(5, 7));
