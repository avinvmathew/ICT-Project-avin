import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import{Routes,Route} from 'react-router-dom'
function App() {
  

  return (
    <>
     <b> <h2>SoundScape Creators</h2></b>
      <Navbar/>
      <br/>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>
    </>
  )
}

export default App
