const ToDo = ({ index, todo: { id, text }, deleteTodoHandler }) => {
  return (
    <div className="todo">
      <span className="todo-text">{text}</span>
      <span className="todo-delete" onClick={() => deleteTodoHandler(id)}>
        x
      </span>
    </div>
  );
};

export default ToDo;
