import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import './Shop.css'
import { Paper, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ShopItem({ Image, ItemName, ItemPrice, onClick }) {

    const [isHovering, setIsHovering] = useState(false)

    return (
        <>
            <Box >

                <Paper elevation={2} style={{
                    border: '1px solid black',
                    cursor: 'pointer',
                }}

                    onMouseEnter={() => { setIsHovering(true) }}
                    onMouseLeave={() => { setIsHovering(false) }}

                >
                    <Box className="shop-img" onClick={onClick}
                        sx={{
                            overflow: 'hidden',
                            maxHeight: '500px',
                            maxWidth: '500px',
                            width: '100%',
                            height: '300px',
                            borderBottom: '1px solid black',
                            background: '#f5f5f5',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <img style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            transition: 'all 0.3s ease',
                            minWidth: '100%',
                            minHeight: '100%',
                        }} src={Image} alt="img" />
                    </Box>
                    <Box sx={{
                        paddingX: 1,
                        overflow: "hidden",
                        textWrap:'nowrap'
                                            }}>
                        <Typography variant="body1" color="initial"
                            sx={
                                {
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: isHovering ? '#000' : 'grey',
                                    transition: "0.3s all ease",
                                    mt: 1,
                                    minHeight: '2rem',
                                }
                            }>{ItemName}</Typography>
                        <Box sx={{
                            display: 'flex',
                        }}>
                            <Typography variant="body1" color="initial"
                                sx={{
                                    fontSize: 20,
                                    fontWeight: 600,
                                    flexGrow: 1,
                                    transition: ".3s all ease",
                                    color: isHovering ? '#dc3545' : ''
                                }}>{`$${ItemPrice}`}
                            </Typography>

                            {/* <IconButton 
                                aria-label="cart"
                                disableRipple
                                sx={{
                                    display: isHovering ? 'block' : 'none',
                                    padding: 0
                                }}>
                                <ShoppingCartIcon
                                    sx={{
                                        width: 30,
                                    }} />
                            </IconButton> */}
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </>
    )
}

export default ShopItem