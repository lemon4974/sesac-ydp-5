// 연산자

// 대입 연산자(=)
// : 변수에 값을 "할당"할 때 사용하는 연산자

// 산술 연산자
// 사칙 연산; +, _, *, /
// 나머지 연산: %
// 거듭제곱 연산: **

let a = 5;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);
console.log(a ** b);

// 비교 연산자
// 동등 비교(같음(동등): ==, ===,// 같지 않음(부등):  !=, !==)
// ==: "값"만 비교
// ===: "값"과 "type(비교형)" 모두 비교 , ===를 쓰는 것이 더 바람직하다.

console.log(1 == 1); // true
console.log(1 == 2); // false
console.log(1 != 2); // true
console.log(1 != 1); // false
console.log('1' == 1); // true
console.log('1' != 1); // false
console.log('--------------------');

console.log(1 === 1); // true
console.log(1 === 2); // false
console.log(1 !== 2); // true
console.log(1 !== 1); // false
console.log('1' === 1); // false
console.log('1' !== 1); // true
console.log('--------------------');

// 크기 비교
// >, <, >=, <=
console.log(2 > 1); // true
console.log(2 >= 2); // true
console.log(2 < 1); // false
console.log(2 <= 2); // true

// 동등연산자 2개 (==) 는 예기치 못한 결과를 발생할수도..!! (자제하자..)
console.log(1 == '1');
console.log('0' == false);
console.log('' == 0);
console.log(null == undefined);
console.log('--------------------');

// 논리 연산자
// !: not (참 -> 거짓, 거짓 -> 참)
// &&: and (여러 값 중 모두가 참 -> 참)
// ||: or (여러 값 중 하나라도 참 -> 참)
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log(!(2 > 1)); // !true -> false
console.log(2 > 1 && -2 < 1); // true && true -> true
console.log((2 > 1 && -2 < 1) || 5 > 2);
// (true && true) || true -> true || true -> true

// 문자열에서 + 연산: 문자열 더하기
console.log('안녕' + '하세요');
console.log('12' + '34');
// 더하기 이외의 연산은 숫자로 자동 형변환 되어 계산이 됨!
console.log('5' - '2');
console.log('5' * '2');
console.log('5' / '2');

// 증감 연산자
// ++: 변수 값을 1 증가
// --: 변수 값을 1 감소
let result1, result2;
let num = 10,
  num2 = 10;

// 후위연산자(postfix operator)
// : 변수를 먼저 대입한 뒤에 (+1)-1 연산ㅇ르 수행
result1 = num++;
console.log(result1); //10
console.log(num); //11

//전위연산자(prefix operator)
// : +1(-1) 연산을 먼저 수행하고 변수에 대입

result2 = ++num2;
console.log(result2); //11
console.log(num2); //11

// +=, -= 연산자를 더 자주 씀!
console.log((num += 1));
console.log((num2 -= 1));
