import React, { useState } from 'react'
import NewUser from './components/newUser/NewUser';
import Users from './components/users/Users';

function App() {
  const [users, setUsers] = useState([]);

  const onSaveUserDataHandler = (userData) => {
    console.log(userData);

    setUsers(prev => {
      return [...prev, userData];
    })
  }

  return (
    <div>
      <NewUser onSaveUserData={onSaveUserDataHandler}/>

      {
        users.length!==0 && <Users users={users}/>
      }
    </div>
  );
}

export default App;
