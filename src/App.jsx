import { useState } from 'react';
// import Login from './components/LoginPage/Login';
// import Navbar from './components/LoginPage/Navbar';
// import Signup from './components/LoginPage/Signup';
// import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import HomeBar from './components/HomePage/HomeBar';
import axios from 'axios';


function App() {
  const [count, setCount] = useState(0);
  // const navigate = useNavigate();

  // const handleLogin = () => {
  //   navigate('/home'); // navigate to /home route
  // };

  return (
    <>
    <HomeBar />
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/home" element={<HomeBar />} />
      </Routes> */}
    </>
  );
}

export default App;