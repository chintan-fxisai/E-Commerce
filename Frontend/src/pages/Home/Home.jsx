import React from 'react'
import './Home.css'
import { Box, Container, Typography, Grid } from '@mui/material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSlide from './HeroSlide'

function Home() {
  return (



    <Container component='section' maxWidth="lg"
      sx={{
        pt: 5,
        mt: 15
      }}>

      {<HeroSlide />}


      {/* Category Section */}
      <Box className='mtb-120'>

        <Typography variant="h2" color="initial"
          sx={{
            textAlign: 'center',
            fontSize: 42,
            mb: 2,
          }}>
          Categories
        </Typography>

        <Typography variant="body1" color="initial"
          sx={{
            textAlign: 'center',
            fontSize: 18,
            mb: 8,
          }}
        >
          Category we offer for the variety of products
        </Typography>

        <Grid container spacing={5}>

          <Grid item size={{ lg: 4 }}>
            <Box className="category-img">
              <img src="./../../public/category3.jpg" alt="img" />
            </Box>
            <Typography variant="h5" color="initial">
              Menswear
            </Typography>
            <Typography variant="body1" color="initial"
            
            >Shop Now</Typography>
          </Grid>

          <Grid item size={{ lg: 4 }}>
            <Box className="category-img">
              <img src="./../../public/category2.jpg" alt="img" />
            </Box>
            <Typography variant="h5" color="initial"
              sx={{
              }}>
              Accesories
            </Typography>
          </Grid>

          <Grid item size={{ lg: 4 }}>
            <Box className="category-img">
              <img src="./../../public/category1.jpg" alt="img" />
            </Box>
            <Typography variant="h5" color="initial"
              sx={{
              }}>
              Sport Accesories
            </Typography>
          </Grid>

          <Grid item size={{ lg: 4 }}></Grid>
          <Grid item size={{ lg: 4 }}></Grid>
        </Grid>


      </Box>

    </Container>


  )
}

export default Home