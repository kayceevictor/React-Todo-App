import TodoForm from "./TodoForm";
import { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [renderTodos, setRenderTodos] = useState([]);

  const addTodos = (todo) => {
    const newTodo = [
      {
        todo: todo,
        id: Math.floor(Math.random() * 1000) + 1000,
        completed: false,
      },
      ...todos,
    ];
    setTodos(newTodo);
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setRenderTodos(todos);
    }
    return () => {
      mounted = false;
    };
  }, [todos]);

  return (
    <section>
      <h1 className="headerText">What are you looking to do Today?</h1>
      <TodoForm addTodos={addTodos} />

      <div className="globalTodoWrapper">
        {!renderTodos || renderTodos.length === 0 ? (
          <div>Your Todo List is empty</div>
        ) : (
          <>
            {renderTodos.map((item, index) => (
              <ul key={index} className="todoItem">
                <span>
                  <AiOutlineCheckCircle />
                </span>
                <li>
                  {index + 1}. {item.todo}
                </li>
                <button className="closeButton">
                  <IoIosCloseCircleOutline className="closeButton" />
                </button>
              </ul>
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default TodoList;
