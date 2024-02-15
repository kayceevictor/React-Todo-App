import { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodos }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodos(value);
    setValue("");
  };

  return (
    <form onClick={handleSubmit} className="todoForm">
      <input
        type="text"
        className="todoFormInput"
        placeholder="Enter a new todo..."
        value={value}
        onChange={handleChange}
        autoFocus
        required
      />
      <button
      type="submit"
       className="addTodoButton">Add Todo</button>
    </form>
  );
};

TodoForm.propTypes = {
  addTodos: PropTypes.func.isRequired,
};

export default TodoForm;
