const userInfo = {
  id: "asdfasdf",
  pw: "asdf",
  email: "sean@spreatics.com",
  grade: "",
};
console.log(userInfo.id, Boolean(userInfo.id));
console.log(userInfo.grade, Boolean(userInfo.grade));

// truthy와 falsy
console.log(Boolean("hello")); // true -> truthy (true 같은 것..)
console.log(Boolean("")); // false -> falsy (false 같은 것..)

// console.log("truthy ex");
console.log(!undefined); // true
console.log(!null); // true
console.log(!NaN); // true

console.log(!0); // true
console.log(!""); // true

// console.log("falsy ex");
console.log(!3); //false
// 숫자는 !0만 true 나머지 !number는 false
console.log(!"hello"); //false
// 문자열은 !""만 true 나머지 !"string"은 false


// Array와 Object는 값이 있던 없던 !붙을 시 false
console.log(!["a", "b"]); //false
console.log(![]); //false
console.log(!{ one: 1 });//false
console.log(!{}); //false

// falsy와 truthy를 이용한 조건문
// if (조건식) { ... }

if (userInfo.grade !== "") {
  console.log("grade 값이 있음");
} else {
  console.log("grade 값이 없음");
}

if (userInfo.grade) {
  console.log("grade 값이 있음");
} else {
  console.log("grade 값이 없음");
}
