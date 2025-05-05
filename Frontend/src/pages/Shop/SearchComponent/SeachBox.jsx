import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { searchProducts } from '../../../Services/product_services';

function SeachBox({ setProducts, setTotalPages }) {
    const [searchText, setSearchText] = useState('');

    const handleSearchClick = async () => {
        const response = await searchProducts(searchText);
        setProducts(response.data.results || []);
        setTotalPages(Math.ceil(response.data.count / 5)); 
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
            <TextField
                id="outlined-basic"
                label="Search"
                variant="standard"
                style={{ marginBottom: 20 }}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <Button
                variant="text"
                style={{ color: '#dc3545' }}
                onClick={handleSearchClick}
            >
                Search
            </Button>
        </Box>
    );
}

export default SeachBox;