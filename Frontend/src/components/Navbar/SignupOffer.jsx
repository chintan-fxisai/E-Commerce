import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

export const SignupOffer = ({ setShowSignUp, showTopOffer, setShowTopOffer }) => {
    return (

        <>
            {
                showTopOffer && (
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant="body1" color="initial"
                            sx={{
                                bgcolor: 'black',
                                color: 'rgba(255,255,255,0.8)',
                                fontSize: 14,
                                fontWeight: 300,
                                textAlign: 'center',
                                py: 1,
                                flexGrow: 1
                            }}>
                            SignUp and Get 20% discount on your first order.
                            <u style={{
                                color: "white",
                                cursor: "pointer"
                            }}
                                onClick={() => setShowSignUp(true)}>SignUp Now</u>

                            <IconButton onClick={() => { setShowTopOffer(false) }}>
                                <CloseIcon sx={{ color: 'white' }} />
                            </IconButton>

                        </Typography>


                    </Box>
                )
            }
        </>


    )
}
