import TodoForm from "./TodoForm";
import { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

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

  const deleteTodos = (id) => {
    const newList = [...todos].filter((todo) => todo.id !== id)
    setTodos(newList) 
  }


  const completeTodo = (todoName) => {
    const completedTodods = [...todos].map((todo) => {
      const Itodo = todo.todo === todoName;
      if(Itodo) {
        return {
       ...todo,
          completed: true,
        };
      }
      return todo
    })

    setTodos(completedTodods)
  }

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
          <div className="notifyTodo">Your Todo List is empty</div>
        ) : (
          <>
            {renderTodos.map((todo, index) => (
              <ul key={index} className={`todoItem ${todo.completed && "todoCompleted"}`}>
                <span 
                className={`completeTodo ${todo.completed && "active"}`}
                onClick={() =>completeTodo(todo.todo)}
                >
                  {
                    todo.completed ?  <FaCheck/> : <AiOutlineCheckCircle /> 
                  }
                </span>
                <li>
                  {index + 1}. {todo.todo}
                </li>
                <button
                onClick={() => deleteTodos(todo.id)}
                 className="closeButton">
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
