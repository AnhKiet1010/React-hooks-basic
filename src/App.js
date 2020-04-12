import React, { useState } from 'react';
import './App.scss';
// import ColorBox from './component/ColorBox';
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Hanh" },
    { id: 2, title: "I Yeu Hanh" },
    { id: 3, title: "I Thuong Hanh" },
    { id: 4, title: "I ghet Hanh" }
  ]);

  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (<
    div className="App" >
    <h1>Welcome to React hooks - TodoList</h1>
    <TodoForm onSubmit={handleTodoFormSubmit} />
    <TodoList todos={todoList} onTodoClick={handleTodoClick} />
  </div>
  );
}

export default App;
