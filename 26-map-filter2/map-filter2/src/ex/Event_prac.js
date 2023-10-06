import React, { useState } from 'react';

//함수형에서 컴포넌트를 다루려면 usestate를 사용...?

export default function Info() {
  const [data, setData] = useState([
    { id: 1, name: '집', title: '가고싶다' },
    { id: 2, name: '집', title: ' really 가고싶다' },
  ]);
  // const [inputName, setInputName] = useState('');
  // const [inputTitle, setInputTitle] = useState('');

  const [inputs, setInputs] = useState({
    writer: '',
    title: '',
    search: '',
  }); //하나의 state로 input 두 개 관리하기
  const { writer, title, search } = inputs; //객체 구조분해 //input이라는 상태가 객체

  const [comments, setComments] = useState([
    //[]라는 빈 배열로 넣어도 ok
    {
      writer: '민수',
      title: '안뇽',
    },
    {
      writer: '지민',
      title: '하이하이',
    },
  ]);
  const [result, setResult] = useState([]); //검색결과는 처음 없을 테니 빈 배열
  const [searchType, setSearchType] = useState('writer'); // 기본 값은 writer

  const onChange = (e) => {
    // e.target.value
    // console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value, // ex.writer:d
      // name: value, //이렇게 하면 name 이라는 키 값이 변하게 됨
    });
  };

  const addComment = () => {
    const newComment = {
      writer: writer,
      title: title,
    }; // 새로 추가되어야 할 정보

    setComment([...comments, newComment]); // 기존의 정보를 spread로 나열 후 newComment를 추가한 상태를 새롭게 set

    //input 초기화
    setInputs({
      ...inputs,
      writer: '',
      title: '',
    });
  };

  const selectSearchType = (e) => {
    setSearchType(e.target.value); //select option 상태가 바꿀 때마다 해당 값으로 바뀌게 함
  };

  // const addInfo = () => {
  //   const newInfo = data.concat({
  //     id: data.length + 1,
  //     name: inputName,
  //     title: inputTitle,
  //   });
  //   if (inputName !== '') {
  //     setData(newInfo);
  //     setInputName('');
  //   } else {
  //     setInputName('');
  //   }
  // };

  // const handleKeyPress = (e) => {
  //   if (e.nativeEvent.isComposing) {
  //     return;
  //   }

  //   if (e.key === 'Enter') {
  //     addInfo();
  //   }
  // };

  const deleteInfo = (targetId) => {
    console.log(targetId);

    const newInfo = data.filter((data) => data.id !== targetId);
    setData(newInfo);
  };

  const searchComment = () => {
    const searchResult = comments.filter((cmt) => {
      // cmt: {title:xxx, writer:xxx}

      // console.log(item); // comment에 대한 각 원소(객체)
      // console.log(item[searchType]); // 검색 조건(key)에 대한 value 값
      // console.log(item[searchType].includes(search)); // true or false
      if (!item[searchType].includes(search)) {
        //searchType에 writer 혹은 title이 담겨있다
        //검색결과 없다면 null 반환
        return null;
      }

      return cmt; //검색결과 있음; 검색결과 (배열) 반환
    });

    setResult(searchResult); //검색 결과에 대한 state 변경
    setInputs({
      ...inputs,
      search: '',
    }); // input 초기화

    // if (document.getElementById('selectid').value === 'number') {
    //   const newInfo = data.filter((data) => data.id === SearchWord);
    //   setData(newInfo);
    // }
    // if (document.getElementById('selectid').value === 'title') {
    //   const newInfo = data.filter((data) => data.name === SearchWord);
    //   setData(newInfo);
    // }
    // if (document.getElementById('selectid').value === 'title') {
    //   const newInfo = data.filter((data) => data.title === SearchWord);
    //   setData(newInfo);
    // }
  };

  // const All = () => {
  //   addInfo();
  // };

  return (
    <div style={{ margin: '200px 0' }}>
      <form>
        <label htmlFor="writer2">작성자:</label>
        <input
          id="writer2"
          type="text"
          name="writer"
          placeholder="작성자"
          value={writer}
          onChange={onChange}
        />
        <label htmlFor="title2">제목:</label>
        <input
          id="title2"
          type="text"
          name="title"
          value={title}
          onChange={onChange}
        />
        <button onClick={addComment}>작성</button>
      </form>

      <form>
        <select name="type" onChange={selectSearchType}>
          {/* <option value="number">번호</option> */}
          <option value="title">제목</option>
          <option value="writer">작성자</option>
        </select>

        <input
          type="text"
          name="search"
          placeholder="검색어"
          value={search}
          onChange={onChange}
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
        {/* <button type="button" onClick={allComment}>전체</button> */}
      </form>

      <h3>전체 댓글 목록</h3>
      <table border={1} style={{ margin: '30px auto', width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((cmt, idx) => {
            return (
              <tr key={idx + 1} onDoubleClick={() => deleteInfo(idx + 1)}>
                <td>{idx + 1}</td>
                <td>{cmt.title}</td>
                <td>{cmt.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>댓글 검색 결과</h3>
      {result.length > 0 ? (
        <div>
          <table border={1} style={{ margin: '30px auto', width: '500px' }}>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody>
              {result.map((cmt, idx) => {
                // cmt = {writer:xxx, title:xxx}
                return (
                  <tr key={idx + 1} onDoubleClick={() => deleteInfo(idx + 1)}>
                    <td>{idx + 1}</td>
                    <td>{cmt.title}</td>
                    <td>{cmt.writer}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h5>검색 결과가 없습니다.</h5>
      )}
    </div>
  );
}
