import React from 'react'
import { Card, CardMedia, CardContent, CardActions, CardActionArea, Typography, IconButton } from '@mui/material'
import pothos from './pothos-scindapsus-aurens-s.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  const productid = product.id
  return (
    <Card sx = {{ maxHeight: 600, maxWidth: 300, marginTop: 4, marginBottom: 2, marginLeft: 8, height:'100%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)'}} >
      <CardActionArea
        component = { Link }
        to = {`/plants/${productid}`}
        >

        <CardMedia style = {{ height: '100%'}} component = "img" height = "200" image = {pothos} alt = {product.name}/>
        <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
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

        <CardActions style = {{ display: 'flex', justifyContent: 'flex-start'}}>
          <IconButton aria-label ="addtocart">
            <ShoppingCartIcon />
          </IconButton>
        </CardActions>
    </Card>

  )
}

export default Product 