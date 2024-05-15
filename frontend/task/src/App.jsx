import './App.css'
import {Route, Routes} from "react-router-dom"
import { Home } from './pages/Home'
import { Post } from './pages/Post'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/post' element={<Post/>}></Route>

     </Routes>
      
    </>
  )
}

export default App
