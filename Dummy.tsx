import * as React from 'react';

const DUMMY_USERS = ['user1', 'user2', 'user3'];
export const Dummy = () => {
  return (
    <React.Fragment>
      <hr />
      <span>Bleow is the how the data should display:</span>
      <div className="user-posts">
        {DUMMY_USERS.map((user, index) => (
          <div key={index}>
            <h3>{user}</h3>
            <ul>
              <li>
                <p>I am a post title</p>
                <em>I am the post body</em>
              </li>
              <li>
                <p>I am a post title</p>
                <em>I am the post body</em>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
