import React from 'react' 
import Navbar from './components/Navbar/Navbar' // Impor Navbar
import './index.css'
import {Route, Router, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
 

// Buat komponen utama
const App = () => {
  return (
    
      <div className='app'>
        <Navbar />
        <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart/>} />
        </Routes>
        </Router>
      </div>
      
  )
}

// Render komponen ke dalam DOM
export default App
