import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex'> 
         <Link to='/' className=''>Website</Link>
         <ul className=''>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
         </ul>
    </nav>
  )
}

export default Navbar