import React from 'react'
import { Grid } from '@mui/material'
import Product from './Product'
import { useQuery } from '@apollo/client'
import { GET_PLANTS } from '../../apollo/queries'


const Products = () => {
  const { data, loading } = useQuery( GET_PLANTS, { fetchPolicy: 'cache-and-network'})
  if(loading) {
    return <p> loading data...</p>
  }
  const plants = data.allPlants
  return(
    <div style={{flexGrow: 1}}>
      <Grid container justifyContent = "center" alignItems='center' spacing = {4}>
        {plants.map(( product) => (
          <Grid style = {{ display:'flex' }} item key = {product.id} xs = {2} sm = {5} md = {3} lg = {3}>
            <Product product = {product}/>
          </Grid>
        ))}
      </Grid>

    </div>
  )
  
}
export default Products