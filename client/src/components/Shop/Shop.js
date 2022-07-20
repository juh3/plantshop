import React from 'react'
import Products from '../Products/Products'
import './Shop.scss'
const Shop = ( {addToCart}) => {
  return (
    <div className='app__shop_main'>
      <div className='app_shop_bg'>
        <Products addToCart = {addToCart}/>
      </div>
    </div>
  )
}

export default Shop