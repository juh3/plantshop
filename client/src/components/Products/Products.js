import React from 'react'
import { Grid } from '@mui/material'
import Product from './Product'
const products = [
  { id: 1, family: 'Philodendron', name:'Micans', description: 'Ugly ass plant', price: '10.99'},
  {id: 2, family: 'Monstera', name: 'Deliciosa', description: 'Swiss cheese plant', price: '15.00'},
  {id: 3, family: 'Alocasia', name: 'Dragon Scale', description: 'dfada', price: '20.00'},
  {id: 4, family: 'Philodendron',name: 'Magnificum', description: 'yepeyp', price: '49.99'},
]

const Products = () => {
  return(
    <div style={{flexGrow: 1}}>
      <Grid container justifyContent = "center" alignItems='center' spacing = {4}>
        {products.map(( product) => (
          <Grid style = {{ display:'flex' }} item key = {product.id} xs = {2} sm = {5} md = {3} lg = {4}>
            <Product product = {product} />
          </Grid>
        ))}
      </Grid>

    </div>
  )
  
}



export default Products