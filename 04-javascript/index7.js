// 반복문

// for문
for (let i = 0; i < 10; i++) {
  // i가 0 ~ 9 총 10번 반복
  console.log('안녕', i);
}
console.log('--------');

// i += 2 // i = i + 2
for (let i = 0; i < 10; i += 2) {
  // i가 0 ~ 9 총 10번 반복
  console.log('안녕', i);
}
console.log('--------');

// 1 ~ 5 출력
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log('--------');

// 5 ~ 1 출력
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log('--------');

let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
  // sum 변수에 값을 재할당(이전 변수의 값 + 현재 반복변수 i 값)
  sum = sum + i; //sum += i
  console.log(i, sum);
}
console.log(sum);
console.log('--------');

//배열, for문
const fruits = ['딸기', '블루베리', '복숭아', '포도', '바나나'];
console.log(fruits.length); //배열의 원소 개수 = 배열 크기(길이)

for (let f = 0; f < fruits.length; f++) {
  console.log(fruits[f]);
}

// 1~20 중에서 짝수일 때의 합 구하기

// let sum3 = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sum3 = sum3 + i;
//   } else if (i % 5 === 0) {
//     sum3 = sum3 + i;
//   } else {
//     sum3 = sum3;
//   }
//   console.log(i, sum3);
// }

// while (true) {
//의도적으로 무한루프
// (무한루프에 빠졌다면 브라우저 닫고 다시 실행하기)
//   console.log('안녕');
// }

let sum3 = 0;
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum3 = sum3 + i;
  console.log(i, sum3);
}
