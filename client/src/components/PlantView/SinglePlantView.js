import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import imageurl from './pothos-scindapsus-aurens-s.jpg'
import './SinglePlantView.scss'
// Placeholder products before implementing backend stuff
import WestIcon from '@mui/icons-material/West';
import { IconButton } from '@mui/material';
const products = [
  {id: 1, family: 'Philodendron', name:'Micans', description: 'Ugly ass plant', price: '10.99'},
  {id: 2, family: 'Monstera', name: 'Deliciosa', description: 'Swiss cheese plant', price: '15.00' },
  {id: 3, family: 'Alocasia', name: 'Dragon Scale', description: 'dfada', price: '20.00'},
  {id: 4, family: 'Philodendron',name: 'Magnificum', description: 'yepeyp', price: '49.99'},
]


const SinglePlantView = () => {
  const {id} = useParams()
  let navigate = useNavigate()
  const idnumber = parseInt(id)
 
  const product = products.find(x => x.id === idnumber)

  return (
    <div className='spw__main'>
      <div className='left'>
        <IconButton onClick = {() => {navigate('/plants')}} aria-label = "Return" size="large">
          <WestIcon fontSize='inherit' />
        </IconButton>
        <div className='imgContainer'>
          <img src = {imageurl} alt = 'plant' />
        </div>  
      </div>

      <div className='right'>
        <h4> {product.family}</h4>
        <h3> {product.name}</h3>
        <p> {product.price} €</p>
        <hr/>
        <p style={{ marginTop: 40}}> {product.description} </p>

        <button style={{ marginTop: 20}}> Add to Cart </button>
      </div>
    </div>
  )
}

export default SinglePlantView