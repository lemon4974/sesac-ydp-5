import React from 'react';
import Student from './components/Students';
import Card from './components/Card';
import TodoList from './components/TodoList';

function App() {
  const handleClick = (name: string, grade: number) => {
    console.log(`안녕 난 ${name}이고, ${grade}학년이야!!`);
  };
  return (
    <div className="App">
      <h2>ts with react</h2>
      <Student name="새싹" grade={3} handleClick={handleClick} />
      <br />
      <Student name="새싹" grade={3} part="CS" handleClick={handleClick} />
      <br />
      <Card title="오늘 배울 것은?">
        <p>TypeScript with React</p>
      </Card>
      <TodoList />
    </div>
  );
}

export default App;
