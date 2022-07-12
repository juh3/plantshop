import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import imageurl from './pothos-scindapsus-aurens-s.jpg'
import './SinglePlantView.scss'
// Placeholder plants before implementing backend stuff
import WestIcon from '@mui/icons-material/West';
import { IconButton } from '@mui/material';
import { useQuery } from '@apollo/client';
import { FIND_PLANT } from '../../apollo/queries';


const SinglePlantView = () => {
  const {id} = useParams()
  let navigate = useNavigate()
  const idnumber = parseInt(id)

  const { data, loading } = useQuery( FIND_PLANT, {fetchPolicy: 'cache-and-network', variables: { id: idnumber }})
  if(loading){
    return <p> loading data...</p>
  }
  const plant = data.findPlant
  

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
        <h4> {plant.family}</h4>
        <h3> {plant.name}</h3>
        <p> {plant.price} €</p>
        <hr/>
        <p style={{ marginTop: 40}}> {plant.description} </p>

        <button style={{ marginTop: 20}}> Add to Cart </button>
      </div>
    </div>
  )
}

export default SinglePlantView