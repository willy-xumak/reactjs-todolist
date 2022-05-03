import { useState } from 'react';

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
      <button onClick={handleClickEvent}>Create</button>
    </form>
  );
};

export default Form;
