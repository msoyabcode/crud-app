
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import AddTask from  './components/AddTask'
import List  from './components/List'

function App() {

  return (
  <>
  <Navbar />
  
  <Routes>
    <Route path='/' element={<List />}></Route>
    <Route path='/add' element={<AddTask />}></Route>
  </Routes>
  </>
  )
}

export default App
