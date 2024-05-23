
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Project from './pages/Project'
import About from './pages/About'
export default function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='\home' element={<Home />}/>
        <Route path='\dashboard' element={<Dashboard />}/>
        <Route path='\signin' element={<Signin />}/>
        <Route path='\signup' element={<Signup />}/>
        <Route path='\project' element={<Project/>}/>
        <Route path='\about' element={<About />}/>

      </Routes>
   </BrowserRouter>
  )
}