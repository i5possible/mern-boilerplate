import React, { useState, useEffect, FunctionComponent } from 'react';
import './App.css';

interface User {
  id: number;
  username: string;
}

const App: FunctionComponent<{ initial?: Array<User> }> = ({ initial = [] }) => {
  const [users, setUsers] = useState(initial)
  useEffect(() => {
    fetch('/users')
      .then(res => res.json())
      .then(users => {
        console.log(users)
        setUsers(users)
      })
      .catch(err => console.log(err))
    return () => {
      setUsers([])
    }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {users.map((user: User) => (<div key={user.id}> {user.username} </div>))}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
