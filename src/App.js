import './App.css';
import React,{useState} from 'react';
import LoginForm from './components/LoginForm';
import Register from './components/Register';
import Navbar from './components/navbar';
import NotFound from './components/NotFound';
import {Routes ,Route,BrowserRouter} from 'react-router-dom';
import Homepage  from './components/Homepage';
import Profile from './components/Profile.js';
import Createpost from './components/Createpost';
function App() {
  const [user,setUser]=useState({name:"",email:"",loggedIn:false}); 
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/login" element={<LoginForm  user={user} setUser={setUser}/>} />
          <Route path="/register" element={<Register user={user} setUser={setUser}/>} />
          <Route path="/" element={<Homepage/>} />
          <Route path="/profile" element={<Profile user={user} setUser={setUser}/>} />
          <Route path="/createpost" element={<Createpost user={user} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
