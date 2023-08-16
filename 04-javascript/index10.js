const userInfo = {
  id: 'asdfasdf',
  pw: 'asdf',
  email: 'sean@spreatics.com',
  grade: '',
};
console.log(userInfo.id, Boolean(userInfo.id));
console.log(userInfo.grade, Boolean(userInfo.grade));

// truthy와 falsy
console.log(Boolean('hello')); // true -> truthy (true 같은 것..)
console.log(Boolean('')); // false -> falsy (false 같은 것..)

// falsy ex
console.log(!undefined); // true
console.log(!null); // true
console.log(!0); // true
console.log(!''); // true
console.log(!NaN); // true

// truthy ex
console.log(!3);
console.log(!'hello');
console.log(!['a', 'b']);
console.log(![]);
console.log(!{ one: 1 });
console.log(!{});

// falsy와 truthy를 이용한 조건문
// if (조건식) { ... }

if (userInfo.grade !== '') {
  console.log('grade 값이 있음');
} else {
  console.log('grade 값이 없음');
}

if (userInfo.grade) {
  console.log('grade 값이 있음');
} else {
  console.log('grade 값이 없음');
}
