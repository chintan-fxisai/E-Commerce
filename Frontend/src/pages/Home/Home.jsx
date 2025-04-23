import React from 'react'
import './Home.css'
import Typography from '@mui/material/Typography'
import { Box, Container, Button, Grid } from '@mui/material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  return (



    <Container component='section' maxWidth="lg"
      sx={{
        pt:5,
        mt: 15
      }}>

      <Grid container direction="row"
      sx={{
        alignItems:'center'
      }}>
        <Grid item  size={{lg:6}} >
          <Box className='hero-text'>

            <Typography variant="body1" color="initial"
              sx={{
                fontSize: 14,
                color: '#dc3545',
                mb: 4,
                letterSpacing: '5px'
              }}>SUMMER COLLECTION</Typography>

            <Typography variant="h1" color="initial"
              sx={{
                fontSize: '48px',
                mb: 4,
                fontWeight: 500
              }}>
              Fall-Winter <span>Collections-2030</span>
            </Typography>

            <Typography variant="body1" color="initial"
              sx={{
                fontSize: 18,
                mb: 4
              }}>
              A specialized branded cloths with outstanding fashion. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, voluptatibus?
            </Typography>

            <Button variant="contained" disableElevation
              sx={{
                bgcolor: "black",
                padding: "18px 30px",
                color: "white",
                borderRadius: 0,
                letterSpacing: '5px',
                fontSize: 14,
                fontWeight: 600
              }}>
              SHOP NOW
            </Button>
          </Box>
        </Grid>
        <Grid item size={{lg:6}}  >
          <Box className='hero-img' 
          sx={{
            display:'flex',
            justifyContent:"center"
          }}
          >
            <img src="./../../public/model1.jpg" alt="img" />
          </Box>
        </Grid>

      </Grid>
    </Container>




  )
}

export default Home