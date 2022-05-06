import { useState } from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

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
      <Button
        label="Create"
        handleClickEvent={handleClickEvent}
        color="#000"
      ></Button>
    </form>
  );
};

Form.propTypes = {
  insertNewTodo: PropTypes.func,
};

export default Form;
