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
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>
    </>
  )
}

export default App