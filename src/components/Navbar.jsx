import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'
import search from '../assets/search.png'
import Avatar from '../components/Avatar/Avatar'
import './Navbar.css'

const Navbar = () => {

  var user = null;

  return (
    <nav>
      <div className="navbar">
        <Link to="/" className='nav-item nav-logo' >
            <img src={logo} alt="logo" width='150'/>
        </Link>
        <Link to="/" className='nav-item nav-btn' >About</Link>
        <Link to="/" className='nav-item nav-btn' >Product</Link>
        <Link to="/" className='nav-item nav-btn' >For Teams</Link>
        <form>
            <input type="text" placeholder='Search....' />
            <img src={search} alt='search' width='20' className='search-icon' />
        </form>
        { user === null ? 
           <Link to='/Auth' className='nav-item nav-links' >Log in</Link> :
           <>
            <Avatar backgroundColor='#009dff' px="10px" py="7px" color="white" borderRadius='50%'><Link to='/' style={{color:'white', textDecoration:'none'}}>M</Link></Avatar>
            <button className='nav-item nav-links'>Log out</button>          
           </>     
        }
      </div>
    </nav>
  )
}

export default Navbar
