import {useState} from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import UserList from './components/UserList/UserList'
import data from './users.json'

function App() {

  const [userData, setUserData] = useState(data[0].data); 
  console.log(userData);
  return (
    <div>

      <Header />
      <Banner />
    
      <h1 className='userList'>Welcome to Users List</h1>
      <UserList userData={userData} />
    </div> 

  )
}

export default App
