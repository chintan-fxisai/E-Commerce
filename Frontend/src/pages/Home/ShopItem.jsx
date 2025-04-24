import { Grid, Box, Typography } from '@mui/material'
import React from 'react'

function ShopItem() {

    const data = [
        {
            id: 1,
            img: "/jeans.webp",
            item: "Jeans",
            price: "₹" + '850.00',
        },
        {
            id: 2,
            img: "/shirt.webp",
            item: "Shirt",
            price: "₹" + '850.00',
        },
        {
            id: 3,
            img: "/goggles.webp",
            item: "Goggle",
            price: "₹" + '850.00',
        },
        {
            id: 4,
            img: "/Tshirt.webp",
            item: "Tshirt",
            price: "₹" + '850.00',
        },
        {
            id: 5,
            img: "/shoes1.webp",
            item: "Shoe",
            price: "₹" + '850.00',
        },
        {
            id: 6,
            img: "/sport track.webp",
            item: "Sport Track",
            price: "₹" + '850.00',
        },
        {
            id: 7,
            img: "/sport tshirt.webp",
            item: "Sport Tshirt",
            price: "₹" + '850.00',
        },
        {
            id: 8,
            img: "/belt.webp",
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

                        <Box className="shop-img">
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