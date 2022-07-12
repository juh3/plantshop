import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'
const NavBar = () => {
  return (
      <div className="app__navbar">
        <Link to = "/" className='logo'> BALL OF ROOTS </Link>

        <div className="app__navbar-links">
          <Link to = "/plants"> Shop </Link>
          <a href = {`#ourvalues`} replace>Our values</a>
          <a href = {`#contact`}>Contact</a>
        </div>

      </div>
  )
}

export default NavBar
