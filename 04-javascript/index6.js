//조건문

//if 문
if (5 > 3) {
  console.log('얍!');
}

// let number = Number(prompt('숫자를 입력해주세요!'));
// 1. prompt() 로 사용자로부터 값을 입력받고(문자열)
// 2. Number() 문자열-> 숫자형 형변환
// 아래와 동일한 코드
// let number2 = prompt('숫자 입력해주세요!')
// number2 = Number(number2)

// if (number > 10) {
//   console.log('입력한 수는 10보다 크군요!');
// } else {
//   console.log('입력한 수는 10보다 작거나 같네요!');
// }

// if (number > 10) {
//   console.log('입력한 수는 10보다 크군요!');
// } else if (number === 10) {
//   console.log('입력한 수는 10이네요');
// } else {
//   console.log('입력한 수는 10보다 작네요');
// }

// if (number > 100 || number < 0) {
//   console.log('입력값이 잘못되었습니다. 숫자의 범위는 0 ~ 100');
// } else if (number >= 90) {
//   console.log('A');
// } else if (number >= 80) {
//   console.log('B');
// } else if (number >= 70) {
//   console.log('C');
// } else if (number >= 60) {
//   console.log('D');
// } else {
//   console.log('F');
// }

// let age = Number(prompt('나이를 입력해주세요!'));

// if (age >= 20) {
//   console.log('성인');
// } else if (age >= 17) {
//   console.log('고등학생');
// } else if (age >= 14) {
//   console.log('중학생');
// } else if (age >= 8) {
//   console.log('초등학생');
// } else {
//   console.log('유아');
// }

//중첩 if 문
// let userId = 'user01';
// let userPw = '1234';

// id, pw 검사하는 함수
// function loginUser() {
//   let inputId = prompt('아이디 입력');
//   let inputPw = prompt('비밀번호 입력');

// - userId와 inputId가 같다면
//    - userPw와 inputPw 를 비교
// - inputId에 빈값 입력됐다면
//    - '아이디 입력 안함' 문구 반환
// - 두 경우가 아니라면 (inputId가 틀렸을 때)
//    - '아이디 틀림' 문구 반환

// if (userId === inputId) {
//   if (userPw === inputPw) {
//     return '로그인 성공';
//   } else {
//     return '비번 오류! 로그인 실패';
//   }
// } else if (inputId === '') {
//   return '아이디 입력 안했음';
// } else {
//   return '아이디 오류! 로그인 실패';
// }

// const result = loginUser();
// -> loginUser 함수의 리턴값(반환값)을 result 변수에 저장
// console.log(result);

//default 모든 경우를 만족하지 않았다.

// switch 문
// - 하나 이상의 case 문으로 구성
// - default 필수는 아니지만, 쓰길 권장
// - 여러 개의 case 문을 묶을 수도 있다.
// break: 조건을 빠져나갈 때 사용하는 키워드
let a = 2;
switch (a) {
  case 1:
  case 2:
  case 3:
    console.log('a가 1에서 3이군요.');
    break;
  case 4:
    console.log('a가 이군요.');
    break;
  case 5:
    console.log('a가 5이군요.');
    break;
  default:
    console.log('a가 무슨 값인지 모르겠습니다.');
    break;
}

let score = 100;
let s = parseInt(score / 10);

//실습. 학점계산기
switch (s) {
  case 10:
  case 9:
    console.log('A학점 이군요.');
    break;
  case 8:
    console.log('B학점 이군요.');
    break;
  case 7:
    console.log('C학점 이군요.');
    break;
  case 6:
    console.log('D학점 이군요.');
    break;
  default:
    console.log('F학점 이군요.');
    break;
}

// 삼항 연산자
let num = 5;
if (num % 2 === 1) {
  console.log('홀수');
} else {
  console.log('짝수');
}

num % 2 === 1 ? console.log('홀수') : console.log('짝수');

//실습. 지금은 오전 오후?
let now = new Date().getHours();

now <= 12 ? console.log('오전') : console.log('오후');
