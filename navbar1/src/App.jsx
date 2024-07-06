import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Home from './Components/Pages/Home'
import Services from './Components/Pages/Services'


const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Navbar />
          <Routes>
             <Route path='/' element={<Home/>}></Route>
             <Route path='/about' element={<About/>}></Route>
             <Route path='/services' element={<Services/>}></Route>
             <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App