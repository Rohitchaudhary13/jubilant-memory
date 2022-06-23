import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <Container sx={{textAlign: 'center'}} mt={6}>
        <hr />
        <Typography p={6} variant='body' gutterBottom sx={{"fontFamily":"'Montserrat', sans-serif"}}>All Right Reserved!</Typography>
        </Container>
    </div>
  )
}

export default Footer