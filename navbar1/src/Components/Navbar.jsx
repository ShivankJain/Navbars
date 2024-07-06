import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-blue-950 text-white'> 
         <Link to='/' className='text-3xl font-bold m-16'>Website</Link>
         <ul className='flex'>
          <li className='block text-xl p-8 mx-0 my-8 rounded-lg'><NavLink to='/about' className={({isActive}) =>isActive ? 'bg-blue-500' : 'bg-blue-950'}>About</NavLink></li>
          <li className='block text-xl p-8 mx-0 my-8 rounded-lg'><NavLink to='/services' className={({isActive}) =>isActive ? 'bg-blue-500' : 'bg-blue-950'}>Services</NavLink></li>
          <li className='block text-xl p-8 mx-0 my-8 rounded-lg'><NavLink to='/contact' className={({isActive}) =>isActive ? 'bg-blue-500' : 'bg-blue-950'}>Contact</NavLink></li>
         </ul>
    </nav>
  )
}

export default Navbar