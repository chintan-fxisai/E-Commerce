import React from 'react'
import { Grid, Box, Typography } from '@mui/material'

function CategoryItem() {

  const data = [
    {
      id:1,
      category_name: "Menswear",
      img: "/category3.jpg",
    },
    {
      id:2,
      category_name: "Accesories",
      img: "/category2.jpg",
    },
    {
      id:3,
      category_name: "Sportswear",
      img: "/category1.jpg",
    },
  ]

  return (
    <>

      {
        data.map((data) => {
          return (
            <Grid key={data.id} className='category-grid-item' item size={{ lg: 4 }}>
              <Box className="category-img">
                <img src={data.img} alt="img" />
              </Box>
              <Typography variant="h5" color="initial">
                {data.category_name}
              </Typography>
              <Typography variant="body1" color="initial"
                className='category-text2'
                sx={{position:'relative'}}
              >Shop Now</Typography>
            </Grid>
          )
        })
      }

    </>
  )
}

export default CategoryItem