import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Box, Grid } from '@mui/material'
import Paper from '@mui/material/Paper';
import PriceComponent from './PriceComponent';

function Cart() {

  const cart = [
    {
      image: "/produt-1.jpg",
      itemname: 'shoes',
      price: 100.00,
      Quantity: 2,
    },
    {
      image: "/produt-2.jpg",
      itemname: 'shirt',
      price: 89.99,
      Quantity: 2,
    },
    {
      image: "/produt-3.jpg",
      itemname: 't-shirt',
      price: 49.99,
      Quantity: 2,
    }
  ]

  return (
    <>
      <Container maxWidth="lg" sx={{
        mt: 20,
        mb: 10
      }}>
        <Box sx={{
          borderRadius: 1,
          // boxShadow: '0px 0px 5px 0px black',
          p: 3
        }}>
          <Typography variant="h2" color="initial"
            sx={{
              fontSize: 42,
              mb: 5
            }}>
            CART:
          </Typography>


          <Grid container spacing={2}>
            <Grid size={8} spacing={0}>

              <Paper elevation={0} sx={{ border: '1px solid lightgrey', p: 2 }}>
                <Grid container>
                  <Grid size={3}>
                    <Box sx={{
                      border: '1px solid black',
                      width: '150px',
                      height: '150px',
                      objectFit: 'contain'
                    }} >
                      <img src='/product-1.jpg' style={{
                        height: '100%',
                        width: '100%',
                      }} />
                    </Box>
                  </Grid>
                  <Grid size={9}>
                    <Typography variant="body1" color="initial">Item name</Typography>
                    <Typography variant="body1" color="initial">Item Price</Typography>
                    <Typography variant="body1" color="initial">Quantity</Typography>

                  </Grid>
                </Grid>
              </Paper>

            </Grid>

            <PriceComponent />
          </Grid>


        </Box>
      </Container>
    </>
  )
}

export default Cart