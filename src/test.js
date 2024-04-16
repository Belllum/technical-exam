import React, { useReducer } from "react";

const todosReducer = (state, action) => {
  console.log(state.filter((todo) => todo.id !== action.id));
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(todosReducer, []);

  const addTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      text: `Todo ${todos.length + 1}`,
    };
    dispatch({ type: "ADD_TODO", todo: newTodo });
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove todo</button>
          </li>
        ))}
      </ul>
      <button onClick={addTodo}>Add todo</button>
    </div>
  );
};

export default TodoList;
