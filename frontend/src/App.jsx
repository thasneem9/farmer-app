

import HomePage from './components/HomePage'
import {Routes,Route} from 'react-router-dom'
import AuthPage from './components/pages/AuthPage.jsx'
import { useAuth } from './components/context/AuthContext.jsx'
import './assets/x.css'
import BuyPage from './components/pages/BuyPage.jsx'
import SellPage from './components/pages/SellPage.jsx'
import TipsPage from './components/pages/TipsPage.jsx'
function App() {
  
  const { isAuthenticated } = useAuth();
  return (
    <>
   
   <Routes>
    <Route path='/' element={ isAuthenticated?<HomePage/>:<AuthPage/>}/>

    <Route path='/auth' element={<AuthPage/>}/>
    <Route path='/buy' element={<BuyPage/>}/>
    <Route path='/sell' element={<SellPage/>}/>
    <Route path='/tips' element={<TipsPage/>}/>
    </Routes>

     
    </>
  )
}

export default App
