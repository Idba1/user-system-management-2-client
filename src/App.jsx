import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data => setUser(data))
  },[])

  const handleAddUser = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email}
    console.log(user);
  }

  return (
    <>
      <h1>Users Management System</h1>
      <h3>Number of users : {user.length}</h3>
      <form onSubmit={handleAddUser}>
        <input type="name" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="add user" />
      </form>
      <div>
        {
          user.map(user => <p key={user.id}>{user.id} : {user.name} : {user.email} </p>)
        }
      </div>
    </>
  )
}

export default App
