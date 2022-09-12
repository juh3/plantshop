import React from 'react'
import { Grid } from '@mui/material'
import Product from './Product'
import usePlants from '../../hooks/usePlants'
import './product.scss'

const Products = ({ addToCart }) => {
  const { plants, loading } = usePlants()
  if (loading) {
    return <p> loading...</p>
  }
  const filterings = [
    'All',
    'Anthurium',
    'Philodendron',
    'Alocasia',
    'Monstera',
  ]
  return (
    <div className="product__main">
      <div className="product__filter">
        <form>
          <label for="filter"> sort by:</label>
          <select id="filter" name="filter">
            {filterings.map((family, i) => (
              <option key={i}>{family}</option>
            ))}
          </select>
        </form>
      </div>
      <Grid
        container
        style={{
          justifyContent: 'space-evenly',
          alignItems: 'center',
          spacing: 2,
        }}
      >
        {plants.map((product) => (
          <Grid
            style={{
              display: 'flex',
              alignContent: 'center',
              paddingLeft: '0',
            }}
            item
            key={product.id}
          >
            <Product product={product} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
export default Products
