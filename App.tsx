import * as React from 'react';
import useFetch from './hooks/useFetch';
import './style.css';

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

enum EntityType {
  Todos = 0,
  Users = 1,
}

export default function App() {
  const [selectedEntity, setSelectedEntity] = React.useState(EntityType.Todos);
  const [data, setRequestUrl] = useFetch(TODOS_URL);

  React.useEffect(() => {
    if (selectedEntity === EntityType.Todos) {
      setRequestUrl(TODOS_URL);
    } else if (selectedEntity === EntityType.Users) {
      setRequestUrl(USERS_URL);
    }
  }, [selectedEntity]);

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => setSelectedEntity(EntityType.Todos)}>
          Todos
        </button>
        <button onClick={() => setSelectedEntity(EntityType.Users)}>
          Users
        </button>
      </div>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title || item.email}</p>;
        })}
    </div>
  );
}
