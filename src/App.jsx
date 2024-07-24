import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import {Routes,Route} from 'react-router-dom'                   

function App() {
 
  return (
    <>
      <h1>Event Management Software</h1>
      <Navbar/>
      <br/>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/home" element={<HomeBar />} />
      </Routes> */}
    </>
  );
}

export default App