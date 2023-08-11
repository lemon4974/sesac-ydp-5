//구조 분해 할당
// 1. 배열 구조 분해 할당
// - 배열 구조 분해 할당시 "순서" 중요

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five);

const [A, alpha, B, C] = arr2;
console.log(A, B, C, alpha);

let x = 1,
  y = 3;
console.log('swap 전', x, y);
[x, y] = [y, x]; // [x,y] = [1,3]; swap 이라 함
console.log('swap 후', x, y);

const lists = ['apple', 'grape'];
[f1, f2, f3 = 'orange'] = lists;
console.log(f1, f2, f3);

// 2. 객체 구조 분해 할당
// - 변수를 선언하는 순서는 중요하지 않음
// - 키 값과 변수명이 일치해야 함

let obj = {
  title: '엘리멘탈',
  content: '재밌어요',
  num: 5,
};
// 객체 구조 분해 쓰지 않았을 때
console.log(obj.title, obj.content, obj.num);
console.log(obj['title'], obj['content'], obj['num']);

// 객체 구조 분해 쓰고 싶다면
// key가 존재하지 않을 때를 대비하여 = 연산자를 이용하면 default 값을 할당
const { num, title, content, star = 1000 } = obj;
console.log(title, content, num, star);

const { n1, t1, c1 } = obj;
console.log(n1, t1, c1);

// 클론(:)을 이용하면 새 변수명으로 바꿔서 저장할 수 있다!!
const { title: t2, num: n2, content: c2 } = obj;
console.log(t2, c2, n2);

/////////////////////////////////////////////////////////////

function getInfo(lecture) {
  // TODO: 구조 분해 할당을 사용하여 값 추출
  const { name, part, leader } = lecture;

  // TODO: 출력 문장 생성
  const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다.`;

  return output;
}

const lectureInfo = {
  name: 'SESAC x CODINGOn',
  part: 'WEB',
  leader: 'Sean',
};

const result = getInfo(lectureInfo);
console.log(result); // SESAC x CODINGOn 강의는 WEB 개발을 공부합니다. 수업의 리더는 Sean 입니다.

/////////////////////////////
// spread 연산자
// 반복 가능한 객체에 대해서 단일 요소로 압축을 해제하는 역할(== 객체의 값을 펼친다!)

console.clear();
// spread in array
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b];
console.log(spread);

// spread in string
const c = [...'HELLO'];
const d = 'HELLO'.split('');
console.log(c);
console.log(d);

// spread in object
const chip = {
  base: 'chip',
  company: 'lotte',
};

const potatoChip = {
  ...chip,
  //   base: 'chip',
  //   company: 'lotte',
  flavor: 'potato',
};

const sweetPotatoChip = {
  ...chip,
  flavor: 'sweet potato',
};

console.log(chip);
console.log(potatoChip);
console.log(sweetPotatoChip);

// 실습
// const word1 = 'abc';
// const word2 = 'xyz';

// const spread2 = [...word1, ...word2];

// console.log(spread2);

//rest 파라미터
//1. 함수에서 rest를 사용할 때
const values = [10, 20, 30];

function get(a, ...rest) {
  // 10, 20, 30 // 에 10 저장 후 나머지는 rest 에 저장
  // rest는 항상 마지막 순서에 위치해야 한다
  console.log('a >>', a); // 10
  console.log('rest >>', rest); // [20, 30]
}

get(...values);

//2. 객체에서 rest
const icecream = {
  company: 'lotte',
  flavor: 'choco',
  price: 1000,
};

const { flavor, ...rest } = icecream;
console.log(flavor); //choco
console.log(rest); // { company: 'lotte', price: 1000 }

// 3. 배열에서 rest
const number = [1, 2, 3, 4, 5, 6, 7, 8];
const [one1, two1, ...rest2] = number;
// 변수명이 꼭 rest일 필요는 없음
console.log(one1); //1
console.log(two1); //2
console.log(rest2); //[ 3, 4, 5, 6, 7, 8 ]
