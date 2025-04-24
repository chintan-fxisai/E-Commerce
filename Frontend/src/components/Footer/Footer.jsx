import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import { NavLink } from 'react-router-dom'
import './Footer.css'



function Footer() {
  return (
    <>
      <Box sx={{
        backgroundColor: '#000',
        pt: 9,
        pb: 9
      }}>
        <Container maxWidth="lg">

          <Grid container spacing={10}>

            <Grid size={{ lg: 4 }}>
              <Box sx={{ mb: 3 }}>
                <img src="/footer-logo.png" alt="" />
              </Box>
              <Typography variant="body1" color="white">
                The customer is at the heart of our unique business model, which includes design.
              </Typography>
            </Grid>

            <Grid size={{ lg: 4 }}
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>

              <Box>
                <Typography variant="body2" color="White"
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    letterSpacing: 5,
                    mb: 3
                  }}>
                  SHOPPING
                </Typography>
                <Stack spacing={1}>

                  <NavLink className="ft-link" to=''>Page</NavLink>
                  <NavLink className="ft-link" to=''>Page</NavLink>
                  <NavLink className="ft-link" to=''>Page</NavLink>
                  <NavLink className="ft-link" to=''>Page</NavLink>

                </Stack>
              </Box>
            </Grid>
            
            <Grid size={{ lg: 4 }}
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
              <Box>
                <Typography variant="body2" color="White"
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    letterSpacing: 5,
                    mb: 3
                  }}>
                  SHOPPING
                </Typography>
                <Stack spacing={1}>

                  <NavLink className="ft-link" to=''>Page</NavLink>
                  <NavLink className="ft-link" to=''>Page</NavLink>
                  <NavLink className="ft-link" to=''>Page</NavLink>
                  <NavLink className="ft-link" to=''>Page</NavLink>

                </Stack>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Footer