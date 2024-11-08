import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{display:"flex",justifyContent:"space-evenly",alignItems:"center" ,margin:"20px 0px"}} className='nav-bar text-light'>
         <Link  to={"/"} className='navbar-brand fs-2'>goodmanny</Link>
         <ul className='nav'>
        <li className='nav-item '> 
            <Link to="Home" className='nav-link text-light' >Home</Link>

        </li>
        <li className='nav-item'>
            <Link to="todo" className='nav-link text-light' > services</Link>

        </li>
        <li className='nav-item'>
            <Link to="todo" className='nav-link text-light' >Portfolio</Link>

        </li>
        <li className='nav-item'>
            <Link to="todo" className='nav-link text-light' >About</Link>

        </li>
        <li className='nav-item'>
            <Link to="todo" className='nav-link text-light' >Blog</Link>

        </li>
        </ul>
        <button className='btn btn-light btn-large rounded'>Contact us</button>
    </nav>
  )
}

export default Navbar