import * as React from 'react';
import { Dummy } from './Dummy';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello Aspirant!</h1>
      <p>
        Develop react components to retrive user posts and group them by userId
        and display title and body. All the posts should be grouped visually by
        user's first & last name
      </p>
      <p>
        posts:
        <a href="https://jsonplaceholder.typicode.com/posts">
          https://jsonplaceholder.typicode.com/posts
        </a>
      </p>
      <p>
        users:
        <a href="https://jsonplaceholder.typicode.com/users">
          https://jsonplaceholder.typicode.com/users
        </a>
      </p>

      <Dummy />
    </div>
  );
}
