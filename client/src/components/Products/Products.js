import React from 'react'
import { Grid } from '@mui/material'
import Product from './Product'
import usePlants from '../../hooks/usePlants'


const Products = ({ addToCart}) => {
  const {plants, loading} = usePlants()
  if(loading) {
    return <p> loading...</p>
  }

  const filterings = [ "All", "Anthurium", "Philodendron", "Alocasia", "Monstera"]
  return(
    <div style={{flexGrow: 1}}>
      <div style = {{ cursor: 'auto', display: 'flex', marginTop: 5, marginLeft: 5}}>

        <form>
          <label for ='filter'> sort by:</label>
          <select id = 'filter' name = 'filter'>
            {filterings.map( (family, i) => (
              <option key = {i}>
                {family}
              </option>
            ))}
          </select>
        </form>
      </div>
      <Grid container justifyContent = "center" alignItems='center' spacing = {4}>
        {plants.map(( product) => (
          <Grid style = {{ display:'flex' }} item key = {product.id} xs = {24} sm = {18} md = {12} lg = {3}>
            <Product product = {product} addToCart = {addToCart}/>
          </Grid>
        ))}
      </Grid>

    </div>
  )
  
}
export default Products