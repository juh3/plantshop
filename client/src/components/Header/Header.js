import React from 'react'
import './Header.scss'
import headerpic from './headerpic.jpg'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  let navigate = useNavigate()
  const handleShop = () => {
    navigate("/plants")
  }
  return (
    <div>
      <div className='container'>
        <div className='image'>
          <div className='imgContainer'>
            <img src={headerpic} alt = 'a sofa and plants' />
           </div>
          </div>
 
        <div className='hero-text'>
          <h1> Buy our beautiful plants </h1>
          <button  onClick = {handleShop}> Shop Now</button>
        </div>
      </div>

      <div className='mission'>
        <div id = "ourvalues" className='wrapper'>
          <h1>Our mission</h1>
          <p> We, at Ball of Roots, find it very important to act as environmentally conscious as possible.</p>
          <p> That's why all of our plants grow under renewable electricity with minimum water wastage.</p>
          <p> Our suppliers are audited and follow the same principle as us.</p>
          <p> Did you know we offset the carbon produced during shipping ?</p>
        </div>
      </div>
      </div>

  )
}

export default Header
