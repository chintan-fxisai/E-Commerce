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
                            <img src={`http://127.0.0.1:8000${selectedProduct.image}`} alt={selectedProduct.name} style={{ width: '100%' }} />
                        </Grid>
                        <Grid size={{ lg: 9 }}>
                            <Typography variant="h3" color="initial">{selectedProduct.name}</Typography>
                            <Typography variant="body1" color="initial" fontWeight={600} style={{display:'inline'}}>{`Price: $`}</Typography>
                            <Typography variant="body1" color="initial" marginBottom={2} style={{display:'inline', fontWeight:600}}>{selectedProduct.price}</Typography>
                            <Typography variant="body1" color="initial" fontWeight={600} style={{marginTop:4}}>{`Details: `}</Typography>
                            <Typography variant="body2" color="initial">{`${selectedProduct.description}`}</Typography>

                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mt: 3,
                                gap:2
                              }}
                            >
                              <Button
                                variant="contained"
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