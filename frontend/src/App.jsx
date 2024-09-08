

import HomePage from './components/HomePage'
import {Routes,Route} from 'react-router-dom'
import AuthPage from './components/pages/AuthPage.jsx'
import { useAuth } from './components/context/AuthContext.jsx'
import './assets/x.css'
function App() {
  
  const { isAuthenticated } = useAuth();
  return (
    <>
   
   <Routes>
    <Route path='/' element={ isAuthenticated?<HomePage/>:<AuthPage/>}/>

    <Route path='/auth' element={<AuthPage/>}/>
    </Routes>

     
    </>
  )
}

export default App
