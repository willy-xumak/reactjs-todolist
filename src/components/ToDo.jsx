import PropTypes from 'prop-types';

const ToDo = ({ todo: { id, text }, deleteTodoHandler }) => {
  return (
    <div className="todo">
      <span className="todo-text">{text}</span>
      <span className="todo-delete" onClick={() => deleteTodoHandler(id)}>
        x
      </span>
    </div>
  );
};

ToDo.propTypes = {
  todo: {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  },
  deleteTodoHandler: PropTypes.func.isRequired,
};
export default ToDo;
