// 함수
// : 특정 작업을 수행하기 위해 독리벅으로 설계된 코드 집합

//용어 정리
// - 함수 정의 : 함수를 "생성"
// - 함수 호출: 함수를 "사용"

// 1. 명시적 함수 선언
function helloWorld() {
  // return 키워드 생략 가능
  console.log('Hello, World!');
}

helloWorld(); //함수 호출

function helloWorld2() {
  return 'hello, World! 2';
}

//return (반환값)
// : 함수 내부(body, block) 코드의 "최종 결과값"
// 최종 결과값을 저장하고 보관하기 위한 키워드
// return 키워드를 만나면 함수 실행 중단(return 다음에 코드 더 작성 의미 없음)
console.log(helloWorld2());
// 함수 쓸 때 함수이름(). () 빼먹지 말자

// 2. 함수 표현식(Function Expression)
// 함수를 변수에 저장하는 형태
const helloWorld3 = function () {
  console.log('Hello, World! 3');
};

const helloWorld4 = function () {
  return 'Hello, World! 4';
};

helloWorld3();
helloWorld3();
helloWorld3();
helloWorld3();
helloWorld3();
console.log(helloWorld4());

// => 함수는 여러 번 호출 가능!!

//////////////////////////////////////////////////////////
// 매개변수가 있는 함수는?!
function hello1(text) {
  return text;
}
console.log(hello1('안녕!!!'));
const apple = '사과는 맛있군';
console.log(hello1(apple));
const myNumber = 8;
console.log(hello1(myNumber));

function hello2(text, name) {
  //   return text + ' ' + name;
  return `${text} ${name}`;
}
console.log(hello2('안녕!!', 'John!!'));
console.log(hello2('잘가~~', 'John!!'));

function hello3(text, name) {
  console.log(`${text} ${name}`);
}
hello3('반갑당', '얘들아');

// 3. 화살표 함수 (arrow function)
// 함수 선언 문법이 간결함!
// body({}) 내에서 return 구문만 있을 때 생략이 가능
// 코드가 길어진다면 return 명시해야 함
const myFunc1 = (x) => x;
/*
function myFunc1(x) {
    return x;
}
*/
const mySum = (a, b) => a + b;
/*
function mySum(a, b) {
    return a + b;
}
*/
console.log(mySum(5, 2));
// result에 값을 저장한 후 함수를 쓴다면 다음과 같이
const myMulti = (a, b) => {
  let result = a * b;
  return result;
};
console.log(myMulti(3, 4));

// 호이스팅(hoisting) -> 함수, 변수
// : "끌어올리다"라는 사전전 의미
// 함수에서는 "함수 선언문"이 호이스팅 대상이 됨.
//: 코드가 실행되기 전에 함수 선언을 최상단으로 끌어올리는 현상
//더 쉽게 말해 호출을 먼저 했음에도 문제 없이 사용할 수 있는 것을 호이스팅이라 함.
// 참고) 변수에서는 "var"는 호이스팅 대상 (let, const는 호이스팅 대상 x)

myHello(); //함수 "호출"을 "정의" 보다 먼저 했음
function myHello() {
  console.log('Hello~~~');
}

// 함수 표현식
// - 호이스팅의 대상이 될 수 없음
// - 함수 선언부보다 호출부가 먼저 나올 수 없음
// myHello2(); // ReferenceError
const myHello2 = function () {
  console.log('hello~~~~2');
};

function multiply(a, b) {
  multiple = a * b;
  return multiple;
}

console.log(multiply(4, 5));

function square(c) {
  squareResult = c ** 2;
  return squareResult;
}

console.log(square(5));

function hello2(text, name) {
  //   return text + ' ' + name;
  return `${text} ${name}`;
}

function hello5(r, t) {
  return `${text} ${name}`;
}
