import React from 'react';

interface StudentInfo {
  name: string;
  grade: number;
  part?: string;
  handleClick: (name: string, grade: number) => void;
}
// type StudentInfo = {
//   name: string;
//   grade: number;
// };

// export default function Students({ name, grade }: StudentInfo) {
//   return <div>Students</div>;
// }

// FC: functional component
// React.FC를 사용할 때는 Generic을 이용해서 props 타입을 표현
// const Student: React.FC<StudentInfo> = ({ name, grade }) => {
//   return (
//     <div>
//       <li>이름: {name}</li>
//       <li>학년: {grade}</li>
//     </div>
//   );
// };
const Student = ({ name, grade, part, handleClick }: StudentInfo) => {
  // 구조 분해로 꺼내온 것! onChange 이벤트도 props에서 구조 분해로 꺼내와야 쓸 수 있다는 것을 잊지 말자.
  return (
    <div onClick={() => handleClick(name, grade)}>
      <li>이름: {name}</li>
      <li>학년: {grade}</li>
      <li>전공: {part || '자유전공'}</li>
      {/* 단축 평가로 part에 값이 없다면(props로 전달된 값이 없다면) 자유전공이 뜨도록 한다. */}
    </div>
  );
};

export default Student;
