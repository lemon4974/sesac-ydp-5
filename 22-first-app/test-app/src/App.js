// import logo from './logo.svg';
import './App.css';
import Larva from './larva';
import './larva.css';

function App() {
  const name = 'lemon';
  const student = 'sesac';
  const styles = { backgroundColor: 'yellow', color: 'blue', fontSize: '48px' };
  const name2 = '꿈이';
  const animal = '강아지';
  const title = 'Hello World';
  const b = 49;
  const a = 74;
  return (
    <div className="App">
      {/* 자동생성코드 */}

      {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
      {/* JSX 문법 */}
      {/* 하나로 감싸인 요소 */}
      <>
        {/* js 문법 사용
    - {}로 감싸면 js표현식 사용 가능
    - {}안에서 삼항 연산자 사용 가능(if for문 사용 불가) */}
        <div>{name} 안녕?</div>
        <div>
          {student === 'sesac' ? <span>새싹인</span> : <span>새싹이 뭐지</span>}
        </div>
        {/* {3. style 속성
        - 리액트에서 dom 요소에 스타일 적용시 문자열 x -> 객체 사용
        - 스타일 이름 중 하이픈 (-) 포함 시 camelCase로 작성해야 함 (ex. backgroundColor)}
         */}
        <div style={styles}>카멜케이스와 오브젝트 형태를 기억하자</div>
        <div
          style={{ backgroundColor: 'yellow', color: 'blue', fontSize: '48px' }}
        >
          inline형식의 적용
        </div>
        {/* {4. className 사용
        - class 속성이 아닌 className 속성 사용 (ex. <div className="">)} 
        
        5. 종료 태그가 없는 태그 사용
        - 기존의 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야 함 or self-closing
        - self closing: <input /> 혹은 <input></input>으로 닫아주면 된다.

        6. 주석
        - // : jsx 외부 주석
        - {/* *} : jsx 내부 주석
        
        */}
        {/* <div class="body body1">
          <div class="eye-white">
            <div class="eye-black"></div>
          </div>
        </div>
        <div class="body body2"></div>
        <div class="body body3"></div>
        <div class="body body4"></div>
        <div class="body body5"></div>
        <div class="body body6"></div> */}
        {/* <img class="grass" src="grass.png" alt="잔디" /> */}
        <div>
          <h3>"이것은 div 태그 안에 있는 h3 태그입니다"</h3>"이것은 div입니다"
        </div>
        <br></br>
        <h2>
          제 반려 동물의 이름은 <u>{name2}</u>입니다.
        </h2>
        <h2>
          <u>{name2}</u>는 <u>{animal}</u>입니다.
        </h2>
        <div>{3 + 5 == 8 ? '정답입니다!' : '오답입니다!'}</div>
        <div>{a > b ? 'a가 b보다 큽니다' : ''}</div>

        <div>
          <div className="test">{title}</div>
          아이디: <input></input>
          <br></br>
          <br></br>
          비밀번호: <input></input>
        </div>
        <br></br>
        <div className="flex">
          <div className="red"></div>
          <div className="orange"></div>
          <div className="yellow"></div>
          <div className="green"></div>
          <div className="blue"></div>
          <div className="navy"></div>
          <div className="purple"></div>
        </div>
      </>
    </div>
  );
}

export default App;
