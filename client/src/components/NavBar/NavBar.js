import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './NavBar.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { IconButton, Button } from '@mui/material'
import { motion } from 'framer-motion'
import DeleteIcon from '@mui/icons-material/Delete'
import { HiX } from 'react-icons/hi'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'

const NavBar = ({ cart, handleDelete, changeQuantity, matches }) => {
  let navigate = useNavigate()
  const [toggle, setToggle] = useState(false)

  let total = 0
  let cart_counter = 0
  if (cart?.length !== 0) {
    total = cart?.reduce(
      (previousValue, currentValue) =>
        currentValue.quantity * currentValue.price + previousValue,
      total
    )

    cart_counter = cart?.reduce(
      (previousValue, currentValue) =>
        currentValue.quantity + previousValue,
      cart_counter
    )
  }
  let format = 0

  format = Math.round(total * 100) / 100

  const handleNavigation = () => {
    setToggle(false)
    navigate('/cart')
  }

  const sendEmail = () => {
    window.location = 'mailto:juha.t.anttila@aalto.fi'
  }
  return (
    <div className="app__navbar">
      <Link to="/" className="logo">
        {' '}
        BALL OF ROOTS{' '}
      </Link>

      <div className="app__navbar-links">
        <Link to="/plants"> Shop </Link>

        <div className="contact" onClick={() => sendEmail()}>
          Contact
        </div>
      </div>
      <div>
        <IconButton
          aria-label="addtocart"
          style={{ fontSize: 'large', color: 'white' }}
          onClick={() => {
            setToggle(true)
          }}
        >
          <ShoppingCartIcon />
          {cart_counter}
        </IconButton>

        {toggle && matches && (
          <div className="navbar__cart-main">
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX
                onClick={() => {
                  setToggle(false)
                }}
              />
              {cart.length === 0 && (
                <p className="cart_p"> Cart is empty</p>
              )}
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    <img src={`${item.imageUrl}`} alt="product" />
                    <IconButton
                      id="itembutton"
                      aria-label="deletefromcart"
                      size="small"
                      onClick={() => {
                        handleDelete(item.id)
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>

                    <span className="cart__item">
                      {' '}
                      {item.family} {item.name}
                    </span>

                    <span className="cart__item_buttons">
                      <IconButton
                        id="itembutton"
                        onClick={() => {
                          changeQuantity('decrement', item.id, 1)
                        }}
                      >
                        <RemoveIcon />
                      </IconButton>
                      {item.quantity}

                      <IconButton
                        id="itembutton"
                        onClick={() => {
                          changeQuantity('increment', item.id, 1)
                        }}
                      >
                        <AddIcon />
                      </IconButton>
                    </span>
                  </li>
                ))}
                {cart.length !== 0 && (
                  <p className="cart_p"> Total: {format} €</p>
                )}
                {cart.length !== 0 && (
                  <Button
                    variant="contained"
                    onClick={() => {
                      handleNavigation()
                    }}
                  >
                    {' '}
                    I'm ready to order
                  </Button>
                )}
              </ul>
            </motion.div>
          </div>
        )}

        {toggle && !matches && handleNavigation()}
      </div>
    </div>
  )
}

export default NavBar
