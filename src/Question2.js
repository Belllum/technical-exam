import React, { useReducer } from "react";

const todosReducer = (state, action) => {
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
    const addedTodo = {
      id: todos.length + 1,
      text: `Todo ${todos.length + 1}`,
    };
    dispatch({ type: "ADD_TODO", todo: addedTodo });
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li>
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

// Firstly I created a addTodo function and set the dispatch {type: "ADD_TODO", todo:newTodo}
// set the return of the case "ADD_TODO" as [...state, action.todo]

// for the remove todo I created a removeTodo function that sets the dispatch { type: "REMOVE_TODO", id }
//set the return of case "REMOVE_TODO" as state.filter((todo) => todo.id !== action.id)
//this is to filter out the todo if the id is equal to the action.id which was the one the we set up on the dispatch inside the removeTodo function
