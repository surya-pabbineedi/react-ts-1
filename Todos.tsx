import * as React from 'react';
import { useReducer } from 'react';

const initialTodos = [
  {
    id: 1,
    title: 'Todo 1',
    complete: false,
  },
  {
    id: 2,
    title: 'Todo 2',
    complete: false,
  },
];

const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'COMPLETE': {
      const todo = todos.find((todo) => todo.id === action.id);
      todo.complete = !todo.complete;
    }
    default:
  }

  return todos;
};

function Todos() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: 'COMPLETE', id: todo.id });
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Todos;
