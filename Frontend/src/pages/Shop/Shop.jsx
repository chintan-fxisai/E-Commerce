
import React from 'react'
import Container from '@mui/material/Container'
import Accordian from '../../components/Breadcrumb/Breadcrumb'
import { Box, Grid } from '@mui/material'
import Filter from './Filter';
import Breadcrumb from './../../components/Breadcrumb/Breadcrumb'


function Shop() {
  const drawerWidth = 240;

  const categoryItem = ["Jacket", "Shoe", "Bag", "Scarf"]
  return (
    <>

      <Breadcrumb pageName={"Shop"} />

      <Container maxWidth="lg" sx={{ py: 13 }} >
        <Grid container spacing={3} direction={'row'}>
          <Grid size={{ lg: 3 }}>

              <Filter categoryName={"CATEGORIES"} categoryItems={categoryItem}/>            
          </Grid>
        </Grid>


      </Container>
    </>
  )
}

export default Shop