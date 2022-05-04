import { useState } from 'react';
import Button from './Button';

const Form = ({ insertNewTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleClickEvent = (event) => {
    insertNewTodo(inputValue);
    setInputValue('');
    event.preventDefault();
  };

  const handleInputTextChanged = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleClickEvent}>
      <input
        type="text"
        placeholder="Type here..."
        onChange={handleInputTextChanged}
        value={inputValue}
      ></input>
      <Button label="Create" handleClickEvent={handleClickEvent} color="#fff"></Button>
    </form>
  );
};

export default Form;
