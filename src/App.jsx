import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data => setUser(data))
  },[])

  return (
    <>
      <h1>Users Management System</h1>
      <h3>Number of users : {user.length}</h3>
      <div>
        {
          user.map(user => <p key={user.id}>{user.id} : {user.name} : {user.email} </p>)
        }
      </div>
    </>
  )
}

export default App
