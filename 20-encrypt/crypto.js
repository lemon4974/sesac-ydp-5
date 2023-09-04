// crypto
// node 내장 모듈
const crypto = require('crypto');

// crypto "단방향" 암호화 구현
// createHash()
// : 지정한 해시 알고리즘으로 해시 객체를 생성하는 암호화 방식

const createHashedPassword = (password) => {
  //사용자 정의 함수
  // createHash(알고리즘).update(암호화할 값).digest(인코딩_방식)
  return crypto.createHash('sha512').update(password).digest('base64');
};

// 해시 함수의 한계: 레인보우 테이블
// => 암호화된 비번을 빠르게 역추적하여 원본 비번을 찾아낼 수 있음
console.log(createHashedPassword('1234'));
console.log(createHashedPassword('1234')); // 같은 pw라면 같은 hash 값이 나옴
console.log(createHashedPassword('2345'));

////////////////////////////////////////
// pbkdf2(비밀번호, 솔트, 반복 회수, 키의 길이, 알고리즘)
// - 비밀번호 기반 키 도출 함수, 주로 비번 저장시 사용
// - buffer 형식의 데이터를 반환 -> toString() 이용해 문자열로 변환

// 단방향 암호화 생성 함수
function saltAndHashPassword(password) {
  //들어온 비밀번호를 암호화 하는 함수
  const salt = crypto.randomBytes(16).toString('base64'); // 임의의 Salt 생성
  const iterations = 100; // 반복 횟수
  const keylen = 64; // 키의 길이
  const digest = 'sha512'; //해시 알고리즘

  //hash => salt랑 password 를 결합해서 해시(암호화된 비번)를 생성
  const hash = crypto
    .pbkdf2Sync(password, salt, iterations, keylen, digest)
    // 여기까지 반환되는 값이 buffer 형태
    .toString('base64');
  // Buffer -> String 변환

  return {
    salt,
    hash,
  };
}

// 2. 암호 비교 함수
// : inputPassword(제공된 비번), salt, hash를 기반으로 새로운 해시를 생성하고,
// savedHash랑 비교
// 제공된 비번이랑 원래 비번이 같으면 두 해시 값도 일치
function checkPassword(inputPassword, savedSalt, savedHash) {
  const iterations = 100; // 반복 횟수
  const keylen = 64; // 키의 길이
  const digest = 'sha512'; //해시 알고리즘

  const hash = crypto
    .pbkdf2Sync(inputPassword, savedSalt, iterations, keylen, digest)
    .toString('base64');
  return savedHash === hash; // 같다면 true, 다르다면 false
}

// 사용 예제
const password = '1234';

// 비번 암호화
const { salt, hash } = saltAndHashPassword(password); // salt 솔트값, hash 해시값
console.log(
  `비번 암호화에 쓰인 Salt: ${salt}, 비번이 암호화된 결과 Hash: ${hash}`
);

// 비밀번호 확인
const inputPassword = '1234';
const isMatch = checkPassword(inputPassword, salt, hash); // 같다면 true, 다르다면 false
console.log(`비밀번호 일치: ${isMatch}`);
