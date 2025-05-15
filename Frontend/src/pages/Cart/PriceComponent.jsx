import React from 'react'
import { Grid, Typography, Box } from '@mui/material'

function PriceComponent() {
    return (
        <>
            <Grid size={4} sx={{ border: '1px solid lightgrey', p: 2 }}>

                <Typography variant="body1" color="initial" sx={{ fontWeight: 600, mb: 3 }}>CART DETAILS:</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="initial" sx={{ fontWeight: 600, mb: 2 }}>Total price:</Typography>
                    <Typography variant="body2" color="initial" sx={{ mr: 2 }}>100</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="initial" sx={{ fontWeight: 600, mb: 2 }}>Total quantity:</Typography>
                    <Typography variant="body2" color="initial" sx={{ mr: 2 }}>100</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px dashed lightgrey', pt: 2 }}>
                    <Typography variant="body2" color="#dc3545" sx={{ fontWeight: 600, mb: 2, fontSize: 20 }}>Amount:</Typography>
                    <Typography variant="body2" color="#dc3545" sx={{ mr: 2, textAlign: 'right', fontSize: 20, fontWeight: 600 }}>100</Typography>
                </Box>

            </Grid>
        </>
    )
}

export default PriceComponent