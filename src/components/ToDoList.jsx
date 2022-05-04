import { useState } from 'react';
import Form from './Form';
import Title from './Title';
import ToDo from './ToDo';

const ToDoList = () => {
  const [todoList, setTodoList] = useState([]);

  const newTodo = (inputValue) => {
    if (inputValue !== '') {
      const newOne = { id: Date.now(), text: inputValue };
      setTodoList([...todoList, newOne]);
    }
  };

  const deleteTodoHandler = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Title title="My ToDo List" color="#fff"/>
      <Form insertNewTodo={newTodo} />
      <div className="todoList">
        {todoList.map((todo, index) => (
          <ToDo
            key={index}
            todo={todo}
            deleteTodoHandler={deleteTodoHandler}
          />
        ))}
      </div>
    </>
  );
};



export default ToDoList;
