
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import AddTask from  './components/AddTask'
import List  from './components/List'
import Edit from './components/Edit'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {

  return (
  <>
  <Navbar />
  
  <Routes>
    <Route path='/' element={<List />}></Route>
    <Route path='/add' element={<AddTask />}></Route>
    <Route path='/edit/:id' element={<Edit />}></Route>
    <Route path='/Signup' element={<Signup />}></Route>
    <Route path='/login' element={<Login />}></Route>
  </Routes>
  </>
  )
}

export default App
