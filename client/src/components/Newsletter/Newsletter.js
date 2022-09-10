import React from 'react'
import './Newsletter.scss'
import { Button} from '@mui/material'
const Newsletter = () => {
  return (
    <div className = 'newsletter__main'>
      <div className='title'>
        <h3> Join our mailinglist and receive a 5% discount code for your next purchase!</h3>
       
      </div>
      <div className='input'>
        <input type = 'email' id ='email' pattern=".+@email\.com" required placeholder='Enter your email' style={{ paddingTop: '1rem', paddingBottom: '1rem'}}/>
        <Button variant = "outlined"> Submit</Button>
      </div>
    </div>
  )
}

export default Newsletter