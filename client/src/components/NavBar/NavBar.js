import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {IconButton} from '@mui/material'
import {motion} from 'framer-motion'
import { HiX } from 'react-icons/hi'
const NavBar = ({ cart }) => {
  const [toggle, setToggle] = useState(false)
  let total = 0
  if( cart.length !==0){
    total = cart.reduce( (previousValue, currentValue) =>
    currentValue.quantity*currentValue.price ,total
    )
  }
  return (
      <div className="app__navbar">
        <Link to = "/" className='logo'> BALL OF ROOTS </Link>

        <div className="app__navbar-links">
          <Link to = "/plants"> Shop </Link>
          <a href = {`#ourvalues`} replace>Our mission</a>
          <a href = {`#contact`}>Contact</a>
        </div>
        <div>
          <IconButton aria-label ="addtocart" style={{ fontSize: 'large', color: 'white'}} onClick = { () => {setToggle(true)}}>
            <ShoppingCartIcon />
          </IconButton>
        
          { toggle && 
          <div className='navbar__cart-main'>
          <motion.div
            whileInView={{ x: [300, 0]}}
            transition = {{ duration: 0.85, ease: 'easeOut'}}>
              <HiX onClick={() => {setToggle(false)}} />
              { cart.length === 0 && <p> Cart is empty</p>}

             <ul>
                {cart.map( (item) => (
  
                  <li key = {item.id}>
                    <img src = {`${item.imageUrl}`} alt = "product" />
                      <p> {item.family} {item.name}</p>
                      <p> {item.quantity} </p>
                  </li>
                ))}
                { cart.length !== 0 && <p> Total: {total} €</p>}
              </ul>
          </motion.div>
        </div>}
        </div>
      </div>
  )
}

export default NavBar
