// bcrypt
// : 비밀번호 암호화하는 알고리즘 중 하나
// : 주로 강력한 보안 필요할 때 사용
// : blowfish 암호를 기반으로 설계된 단방향 암호화 함수
// (보안 강화하기 위해 해쉬화 하는 것으로 원본 데이터를 복원하는 기능은 없음)

const bcrypt = require('bcrypt');

const originalPassword = '1234'; // 원본 비번
const saltRounds = 10; //솔트 라운드 수를 정의. 클수록 비밀번호 해킹 어렵지만 성능 저하

// 1. 비밀번호 해싱 함수
function hashPassword(password) {
  return bcrypt.hashSync(password, saltRounds); //hash 는 비동기(별도의 동기 처리 필요),hashSync 는 동기
}

// 2. 원본 비밀번호와 해시된 비밀번호가 일치하는지 확인하는 함수
function comparePassword(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}

// 사용 예제
// 원본 비번을 해싱한 결과
const hashedPassword = hashPassword(originalPassword);
console.log(`Hashed password : ${hashPassword}`);

// 원본 비번이랑 해시된 비번이 일치하는지 확인
const isMatch = comparePassword(originalPassword, hashedPassword); // 같다면 true, 다르면 false
console.log(`originalPassword === hashedPassword: ${isMatch}`);
