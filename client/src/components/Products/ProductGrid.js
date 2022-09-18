import { Grid } from '@mui/material'
import Product from './Product'

const ProductGrid = ({ filteredByFamily, plants, addToCart}) => {
  return (
    <div>
       <Grid
        container
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
      
        }}
         >
        {filteredByFamily.length>0 && filteredByFamily?.map((product) => (
          <Grid
            item
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              paddingLeft: '0',
            }}
            xl = {3}
            md
            sm
            xs = {12}
            key={product.id}
          >
            <Product product={product} addToCart={addToCart} />
          </Grid>
         ))}
        
        {filteredByFamily.length === 0 && plants.map((product) => (
          <Grid
            item
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              paddingLeft: '0',
            }}
            xl = {3}
            md
            sm
            xs = {12}
            key={product.id}
          >
            <Product product={product} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ProductGrid