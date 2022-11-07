import * as React from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = React.useState(0);

  const updateCount = () => {
    setCount((count) => count++);
  };

  return (
    <div>
      <h1>Why the counter is not incrementing?</h1>
      <button onClick={() => updateCount()}>
        I count number of clicks on me - {count}
      </button>
    </div>
  );
}
