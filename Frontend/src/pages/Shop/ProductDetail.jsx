import React from 'react';
import { useSelector } from 'react-redux';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { Box, Typography, Grid, Container, Button, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function ProductDetail() {
    const selectedProduct = useSelector((state) => state.product.selectedProduct);

    if (!selectedProduct) {
        return <Typography variant="h5" color="error">No product selected!</Typography>;
    }
    return (
        <>
            <Breadcrumb pageName="Products" />
            <Container maxWidth="lg">
                <Box className="ptb-120">
                    <Grid container spacing={3}>
                        <Grid size={{ lg: 3 }}>
                            <img src={selectedProduct.img_src} alt={selectedProduct.prod_name} style={{ width: '100%' }} />
                        </Grid>
                        <Grid size={{ lg: 9 }}>
                            <Typography variant="h3" color="initial">{selectedProduct.prod_name}</Typography>
                            <Typography variant="body1" color="initial" fontWeight={600}>{`Price: `}</Typography>
                            <Typography variant="body1" color="initial" marginBottom={2}>{selectedProduct.prod_price}</Typography>
                            <Typography variant="body1" color="initial" fontWeight={600}>{`Details: `}</Typography>
                            <Typography variant="body2" color="initial">{`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores odit optio, obcaecati libero illo alias laboriosam, harum voluptates sunt pariatur, animi vitae tempora. Dignissimos quia assumenda perspiciatis repellat dicta sint? `}</Typography>

                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center', // Align items vertically
                                mt: 3, // Add margin-top for spacing
                                gap:2
                              }}
                            >
                              <Button
                                variant="contained" // Fix typo: "Contained" -> "contained"
                                sx={{
                                  bgcolor: "#dc3545",
                                  color: 'white',
                                  '&:hover': {
                                    bgcolor: "#cd3500",
                                  },
                                }}
                              >
                                Buy now
                              </Button>

                              <IconButton aria-label="add-cart">
                                <AddShoppingCartIcon />
                              </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </>

    );
}

export default ProductDetail;