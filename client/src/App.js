import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([])
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
          {users.map((user) => (<div key={user.id}> {user.username} </div>))}
        </div>
      </header>
    </div>
  );
}

export default App;
