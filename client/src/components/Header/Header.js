import React from 'react'
import './Header.scss'
import headerpic from '../../assets/headerpic.jpg'
const Header = () => {
  return (
    <div className="container">
      <div className="imagewrapper">
        <img src={headerpic} alt="Room full of plants" />
      </div>
    </div>
  )
}

export default Header
