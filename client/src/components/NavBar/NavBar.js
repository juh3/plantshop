import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './NavBar.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {IconButton, Button} from '@mui/material'
import {motion} from 'framer-motion'
import DeleteIcon from '@mui/icons-material/Delete';
import { HiX } from 'react-icons/hi'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const NavBar = ({ cart, handleDelete, changeQuantity }) => {
  let navigate = useNavigate()
  const [toggle, setToggle] = useState(false)
  let total = 0
  
  if( cart?.length !==0){
    total = cart?.reduce( (previousValue, currentValue) =>
    currentValue.quantity*currentValue.price + previousValue ,total
    )
  }
  let format = 0

  format = Math.round(total*100)/100
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
                    <IconButton id ='itembutton' aria-label = "deletefromcart" size = 'small' onClick = { () => {handleDelete(item.id)}}>
                          <DeleteIcon />
                        </IconButton>

                      <span className = 'cart__item'> {item.family} {item.name}</span>
                      
                      <span className='cart__item_buttons'>
                        <IconButton id ='itembutton' onClick = { () => {changeQuantity('decrement', item.id, 1)}}>
                        <RemoveIcon />
                      </IconButton>
                      {item.quantity}

                        <IconButton id ='itembutton' onClick = { () => {changeQuantity('increment', item.id, 1)}}>
                          <AddIcon />
                        </IconButton>
                      </span>

                  </li>
                ))}
                { cart.length !== 0 && <p style={{ fontfamily: 'Roboto', fontWeight: 550}}> Total: {format} €</p>}
                { cart.length !== 0 && <Button variant = "contained" onClick={() => {navigate('/cart')}}> I'm ready to order</Button>}
              </ul>
          </motion.div>
        </div>}
        </div>
      </div>
  )
}

export default NavBar
