import { Box, Breadcrumbs, Container, Link, Typography } from '@mui/material'
import React from 'react'

function Accordian({ pageName }) {



    return (
        <Box
            sx={{
                py: 5,
                bgcolor: '#f3f2ee',
            }}>

            <Container maxWidth="lg" sx={{ mt: 11 }}>
                <Typography variant="h6" color="initial"
                    sx={{
                        fontSize: 24,
                        fontWeight: 600,
                        mb: 1
                    }}>
                    {pageName}
                </Typography>

                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    <Link href="/src/pages/Home.jsx"
                        sx={{
                            color: 'black',
                            textDecoration: 'none'
                        }}>Home</Link>
                    <Typography
                    >Shop</Typography>
                </Breadcrumbs>

            </Container>
        </Box>
    )
}

export default Accordian