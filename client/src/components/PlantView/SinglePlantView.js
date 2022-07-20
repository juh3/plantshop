import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './SinglePlantView.scss'
import WestIcon from '@mui/icons-material/West';
import { IconButton, Button } from '@mui/material';
import { useQuery } from '@apollo/client';
import { FIND_PLANT } from '../../apollo/queries';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const SinglePlantView = ({ addToCart }) => {
  const {id} = useParams()
  console.log(id)
  let navigate = useNavigate()
  const { data, loading } = useQuery( FIND_PLANT, {fetchPolicy: 'cache-and-network', variables: { id: id }})
  if(loading){
    return <p> loading data...</p>
  }
  const plant = data.findPlant
  console.log(plant)

  return (
    <div className='spw__main'>
      <div className='left'>
        <IconButton onClick = {() => {navigate('/plants')}} aria-label = "Return" size="large">
          <WestIcon fontSize='inherit' />
        </IconButton>
        <div className='imgContainer'>
          <img src = {`${plant.imageUrl}`} alt = 'plant' />
        </div>  
      </div>

      <div className='right'>
        <h4> {plant.family}</h4>
        <h3> {plant.name}</h3>
        <hr/>
        <p style={{ marginTop: 40}}> {plant.description} </p>

        <h3> {plant.price} €</h3>
        
        <div className='quantity'>

          <div className='inputgroup'>
            <IconButton onClick = {() => {console.log('moi')}}>
              <RemoveIcon />
            </IconButton>

            <input type = "number" value= "1" min = "1" max = "10" aria-label='quantity' id = 'quantity' />
            <IconButton  onClick = {() =>{console.log('moi')}}>
              <AddIcon />
            </IconButton>
          </div>

          <Button style={{ marginLeft: '3rem', backgroundColor: 'rgb(216, 195, 74)', fontFamily:'Roboto sans-serif', color: 'black'}} variant= "contained" 
            onClick = {() => addToCart(id)}> Add to Cart </Button>

        </div>
      </div>
    </div>
  )
}

export default SinglePlantView