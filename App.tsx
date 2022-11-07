import * as React from 'react';
import { useState } from 'react';
import './style.css';
import Todos from './Todos';

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, 'New Todo']);
  };

  return (
    <div>
      <em>
        Upon clicking the counter action Todos component re-renders. Optimize
        the code so that Todos components re-renders only if todos prop has been
        changed.
      </em>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}
