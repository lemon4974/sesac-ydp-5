import React from 'react';
import { useState } from 'react';

export default function TodoPrac() {
  const [todos, setTodos] = useState([
    { id: 1, todo: '집가기...' },
    { id: 2, todo: '리액트 실습' },
  ]);
  const [inputTodo, setInputTodo] = useState('');

  const addTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      todo: inputTodo,
    };
    if (inputTodo !== '') {
      setTodos([...todos, newTodo]);
      setInputTodo('');
    } else {
      setInputTodo('');
    }
  };

  const checked = (id) => {
    const checkedTodo = todos.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setTodos(checkedTodo);
  };

  const deleteTodo = () => {
    const deletedTodo = todos.filter((item) => !item.checked);
    setTodos(deletedTodo);
  };
  // console.log(todos);
  return (
    <div>
      <h1>Todo 실습</h1>
      <div>
        <input
          type="text"
          placeholder="할 일 입력..."
          value={inputTodo}
          onChange={(e) => {
            setInputTodo(e.target.value);
          }}
        />
        <button onClick={addTodo}>추가</button>
      </div>
      <ul>
        {todos &&
          todos.map((value) => {
            return (
              <li key={value.id}>
                <input
                  type="checkbox"
                  checked={value.checked}
                  onChange={() => checked(value.id)}
                />
                <span>{value.todo}</span>
              </li>
            );
          })}
      </ul>
      <br />

      {todos.length >= 10 && <h1> 할 일이 너무 많습니다...</h1>}

      <button onClick={deleteTodo}>완료된 할 일 삭제</button>
    </div>
  );
}
