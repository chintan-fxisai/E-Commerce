import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { Box, Typography, Grid } from '@mui/material';

function ProductDetail() {

  return (
        <>
            <Breadcrumb pageName="Products"/>
            <Box className="ptb-120">
                <Grid container spacing={3}>
                    <Grid size={{lg:3}}>
                        <img src="" alt="" />
                    </Grid>
                    <Grid size={{lg:9}}>
                        <Typography variant="h3" color="initial">Product Name</Typography>
                        <Typography variant="body1" color="initial">Product Details</Typography>
                        <Typography variant="body1" color="initial">Product Price</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>

    );
}

export default ProductDetail;