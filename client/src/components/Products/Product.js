import React from 'react'
import { Card, CardMedia, CardContent, CardActions, CardActionArea, Typography, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
const Product = ({ product, addToCart }) => {
  console.log(product)
  return (
    <Card sx = {{ maxHeight: 600,maxWidth: 280, marginTop: 4, marginBottom: 2, marginLeft: 8, height:'100%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)'}} >
      <CardActionArea
        component = { Link }
        to = {`/plants/${product.id}`}
        >

        <CardMedia sx = {{ width: '100%',height: 400, objectFit: 'contain'}} component = "img" image = {`${product.imageUrl}`} alt = {product.name}/>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <div>
            <Typography variant = "h5" gutterBottom>
              {product.family}
            </Typography>

            <Typography variant = "h6" gutterBottom>
              {product.name}
            </Typography>

            <Typography variant = "h5">
              {product.price} €
            </Typography>
          </div>
          </CardContent>
        </CardActionArea>
        <hr style={{ marginLeft: '1rem', marginRight: '1rem'}}/>
        <CardActions style = {{ display: 'flex', justifyContent: 'flex-start'}}>
          <IconButton aria-label ="addtocart" onClick={() => {addToCart(product.id)}}>
            <ShoppingCartIcon />
          </IconButton>
        </CardActions>
    </Card>

  )
}

export default Product 