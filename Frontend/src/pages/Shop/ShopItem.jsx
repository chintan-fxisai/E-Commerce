import { Box, Typography } from '@mui/material'
import React from 'react'
import './Shop.css'

function ShopItem({Image, ItemName, ItemPrice, onClick  }) {
    return (
        <>
            <Box onClick={onClick}>
                <Box className="shop-img">
                    <img src={Image} alt="img"/>
                </Box>
                <Box>   
                    <Typography variant="body1" color="initial"
                    sx={
                        {   fontSize:18,
                            fontWeight:600,
                        }
                    }>{ItemName}</Typography>
                    <Typography variant="body1" color="initial">{ItemPrice}</Typography>
                </Box>
            </Box>
        </>
    )
}

export default ShopItem