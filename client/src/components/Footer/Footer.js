import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import './Footer.scss'
const Footer = () => {

  const linkToPage = (page) => {
    if(page === 'linkedin'){ 
      window.open('https://www.linkedin.com/in/juha-anttila/', '_blank', 'noopener, noreferrer')
    }
    else if( page === "github") {
      window.open('https://github.com/juh3', '_blank', 'noopener, noreferrer')
    }
  }
  return (
    <div className='footer'>
      <div className='footer__left'>
        <div className='description'>
          <p> Hey there! This is my first website project ever. It is a mock-up shop for some of my favorite plants that I have at home or which I would like to own some day</p>
        </div>
      </div>
      <div className='footer__center'>
        <p> Made by Juha Anttila (2022).</p>
        <p> Code available <a href = "https://github.com/juh3/plantshop"> here</a></p>
      </div>
      <div className='footer__right'>
        <div className='logos'>
          <IconButton onClick={() => linkToPage('linkedin')}>
            <LinkedInIcon />
          </IconButton>
          <IconButton onClick={() => linkToPage('github')}>
            <GitHubIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Footer