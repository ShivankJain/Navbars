import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-blue-950 text-white'> 
         <Link to='/' className='text-3xl font-bold m-16'>Website</Link>
         <ul className='flex'>
          <li className='block p-8 mx-0 my-8 rounded-lg'><Link to='/about'>About</Link></li>
          <li className='block p-8 mx-0 my-8'><Link to='/services'>Services</Link></li>
          <li className='block p-8 mx-0 my-8'><Link to='/contact'>Contact</Link></li>
         </ul>
    </nav>
  )
}

export default Navbar