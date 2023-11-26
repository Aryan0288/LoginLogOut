import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom'

import './App.css';
import Nav from "./components/Nav"
import Home from './components/Home'
// import Login from './components/Login'
// import SignUp from './components/SignUp'
import DashBoard from './components/DashBoard'
import { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  const [IsLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className='w-screen h-screen bg-[#000814] flex flex-col text-white overflow-x-hidden'>
      <Nav IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      {/* <SignUp/> */}
      {/* <Login/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<LoginForm setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='/SignUp' element={<SignUpForm setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='/DashBoard' element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
