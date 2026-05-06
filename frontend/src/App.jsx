
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import AddTask from  './components/AddTask'
import List  from './components/List'
import Edit from './components/Edit'
import Signup from './components/Signup'
import Login from './components/Login'
import Protected from './components/Protected'

function App() {

  return (
  <>
  <Navbar />
  
  <Routes>
    <Route path='/' element={<Protected><List /></Protected>}></Route>
    <Route path='/add' element={<Protected><AddTask /></Protected>}></Route>
    <Route path='/edit/:id' element={<Edit />}></Route>
    <Route path='/Signup' element={<Signup />}></Route>
    <Route path='/login' element={<Login />}></Route>
  </Routes>
  </>
  )
}

export default App
