import React from 'react'
import {Link,NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-blue-950 text-white'> 
         <Link to='/' className='text-3xl font-bold m-16'>Website</Link>
         <ul className='flex'>
          <li ><NavLink to='/about' className={({ isActive }) =>
              `block text-xl p-8 mx-0 my-8 rounded-lg ${isActive ? 'bg-blue-500' : 'text-white'}`
            }>About</NavLink></li>
          <li ><NavLink to='/services' className={({ isActive }) =>
              `block text-xl p-8 mx-0 my-8 rounded-lg ${isActive ? 'bg-blue-500' : 'text-white'}`
            }>Services</NavLink></li>
          <li ><NavLink to='/contact' className={({ isActive }) =>
              `block text-xl p-8 mx-0 my-8 rounded-lg ${isActive ? 'bg-blue-500' : 'text-white'}`
            }>Contact</NavLink></li>
         </ul>
    </nav>
  )
}

export default Navbar

/*   className='block text-xl p-8 mx-0 my-8 rounded-lg'

In Tailwind: 
   className={({ isActive }) =>
              `block text-xl p-8 mx-0 my-8 rounded-lg ${isActive ? 'bg-blue-500' : 'text-white'}`
            }


In Normal CSS:

   nav ul li a{
    display: block;
    color: white;
    padding: 0.5rem;
    margin: 0 0.5rem;
    border-radius: 0.5rem;
}
*/