import { Grid, Box, Typography } from '@mui/material'
import React from 'react'

function ShopItem() {

    const data = [
        {
            id: 1,
            img: "/product-1.jpg",
            item: "Jeans",
            price: "₹" + '850.00',
        },
        {
            id: 2,
            img: "/product-2.jpg",
            item: "Shirt",
            price: "₹" + '850.00',
        },
        {
            id: 3,
            img: "/product-3.jpg",
            item: "Goggle",
            price: "₹" + '850.00',
        },
        {
            id: 4,
            img: "/product-4.jpg",
            item: "Tshirt",
            price: "₹" + '850.00',
        },
        {
            id: 5,
            img: "/product-5.jpg",
            item: "Shoe",
            price: "₹" + '850.00',
        },
        {
            id: 6,
            img: "/product-6.jpg",
            item: "Sport Track",
            price: "₹" + '850.00',
        },
        {
            id: 7,
            img: "/product-7.jpg",
            item: "Sport Tshirt",
            price: "₹" + '850.00',
        },
        {
            id: 8,
            img: "/product-8.jpg",
            item: "Belt",
            price: "₹" + '850.00',
        },
    ]

    return (
        <>
            {data.map((data) => {
                return (
                    <Grid key={data.id} item size={{ lg: 3 }} className="grid-shop-product"
                    sx={
                        {mb:5}
                    }>

                        <Box className="shop-img" marginBottom={1}>
                            <img src={data.img} alt="img" />
                        </Box>

                        <Box className="home-shop-product-text">
                            <Typography variant="body1" color="initial"
                            sx={{
                                fontSize:20,
                                fontWeight: 600
                            }}>
                                {data.item}
                            </Typography>

                            <Typography variant="body1" color="initial">
                                {data.price}</Typography>
                        </Box>

                    </Grid>
                )
            })}
        </>
    )
}

export default ShopItem