import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=''> 
         <Link to='/'>Home</Link>
         <ul>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/services'>Services</Link></li>
         </ul>
    </div>
  )
}

export default Navbar