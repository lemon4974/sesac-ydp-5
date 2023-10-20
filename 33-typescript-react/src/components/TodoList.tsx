import React, { useState, useRef } from 'react';
import { ToDoItem } from '../types/types';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todos, setTodos] = useState<ToDoItem[]>([]); // 전체 투두 목록
  const [newTodo, setNewTodo] = useState<string>(''); // 새로 추가될 투두 하나
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const updatedTodos = [
      ...todos,
      { id: Date.now(), text: newTodo, completed: false },
      //   newTodo는 아래 input에서 가져온 value
      // 여기서 completed는 디폴트 값으로 false를 설정해준 것...!
    ];
    setTodos(updatedTodos); // 전체 투두에 새로운 투두 추가
    setNewTodo(''); // input 초기화
  };

  const toggleComplete = (targetId: number) => {
    // console.log(`${id}번 투두 완료 상태 수정됨!!`);
    const updatedTodos = todos.map((todo) => {
      return todo.id === targetId
        ? { ...todo, completed: !todo.completed }
        : todo;
    }); //여기 로직 이해가 썩 잘되진 않는데...

    setTodos(updatedTodos);
  };

  // useRef로 생성한 inputRef를 사용해 입력창에 포커싱
  const focusInput = () => {
    // inputRef.current.focus() 이렇게 쓰면 초기값이 null이기에 error가 뜬다. null 에 focus를 할 수 없기 때문
    // inputRef.current?.focus(); 이렇게도 가능
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // typescript에서는 event 또한 type을 정해주어야 error가 나지 않는다.
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)} //onChange도 잘... 모르겠
          onKeyDown={handleKeyDown} //엔터키 이벤트 핸들러 추가
          placeholder="add new todo!"
          ref={inputRef} // ref 연결
        />
        <button onClick={addTodo}>ADD</button>
        <button onClick={focusInput}>FOCUS</button>
      </div>
      <ul>
        {/* TodoItem(반복되는 요소)을 여러 개 나열할 수 있는 map을 돌리는 코드 */}
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
      </ul>
    </div>
  );
}
