import React from 'react';
import './Home.css';
import { Box, Container, Typography, Grid } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSlide from './HeroSlide';
import CategoryItem from './CategoryItem'
import ShopItem from './ShopItem';


function Home() {

  return (

    <Container component='section' maxWidth="lg"
      sx={{
        pt: 5,
        mt: 15
      }}>

      {/* Hero section */}
      {<HeroSlide/>}


      {/* Category Section */}
      <Box className='ptb-120'>

        <Typography variant="h2" color="initial"
          sx={{
            fontSize: 42,
            mb: 2,
          }}>
          Categories
        </Typography>

        <Typography variant="body1" color="initial"
          sx={{
            fontSize: 18,
            mb: 5,
          }}
        >
          Category we offer for the variety of products
        </Typography>

        <Grid container spacing={5}>

          <CategoryItem />

        </Grid>


      </Box>


      {/* Shop Sections */}
      <Box className='pb-120'
      
      >
          <Typography variant="h2" color="initial"
          fontSize={40} >
            Shop Now
          </Typography>
          <Typography sx={{mb:4}} variant="body1" color="initial">Have a look to our variety of product</Typography>
          
          <Grid container spacing={3}>
            {<ShopItem/>}
          </Grid>
      </Box>


    </Container>


  )
}

export default Home