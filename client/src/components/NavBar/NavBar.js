import React from 'react'
import './NavBar.scss'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
const NavBar = () => {
  return (
    <div className="app__navbar">
      <p className="logo"> Ball of roots</p>
      <div className="app__navbar-links">
        <Link to="/"> Home</Link>
        <p>Plants</p>
        <p>Our values</p>
        <p> Contact </p>
      </div>
    </div>
  )
}

export default NavBar
