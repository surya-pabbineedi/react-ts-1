import * as React from 'react';
import { useState } from 'react';
import './style.css';
import Todos from './Todos';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <Todos />
      <hr />
    </div>
  );
}
