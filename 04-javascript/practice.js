let sum3 = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum3 = sum3 + i;
  } else if (i % 5 === 0) {
    sum3 = sum3 + i;
  } else {
    sum3 = sum3;
  }
  console.log(i, sum3);
}

// for while if
//10000까지의 숫자를 탐색하는 for 문
//13배수 && 홀수 의 조건을 거는 if 문

// for (let i = 1; i <= 10000; i++) {
//   if (i % 13 === 0 && i % 2 === 1) {
//     console.log(i);
//   }
// }

console.log('----------------');

// let x = prompt('입력받은 수까지 13의 배수면서 홀수인 수를 찾아드립니다.');

// for (let i = 1; i <= x; i++) {
//   if (i % 13 === 0 && i % 2 === 1) {
//     console.log(i);
//   }
// }

// 이중 for 문

// for (i = 1; i <= 9; i++) {
//   console.log('---' + i + ' 단--');
//   for (j = 1; j <= 9; j++) {
//     result = i * j;
//     // console.log(i + ' X ' + j + ' = ' + result);
//     console.log(`${i} X ${j} = ${result}`);
//   }
// }
