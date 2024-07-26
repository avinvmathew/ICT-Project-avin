import { useState } from 'react';
import Login from './components/LoginPage/Login';
import Signup from './components/LoginPage/Signup';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import HomeBar from './components/HomePage/HomeBar';


function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home'); // navigate to /home route
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomeBar />} />
      </Routes>

    </>
  );
}

export default App;