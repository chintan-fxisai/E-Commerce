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
        <Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center', gap:2 }}>
            <input type="text" placeholder='Search'
                onChange={(e) => setSearchText(e.target.value)}
            style={{
                height:'100%',
                width:'50%',
                padding:"6px 5px",
                fontSize:18,
                marginBottom:30,
                backgroundColor:'#e8ebed',
            }} />
            <Button
                variant="contained"
                style={{ color: '#fff' , backgroundColor:"#dc3545"}}
                onClick={handleSearchClick}
            >
                Search
            </Button>
        </Box>
    );
}

export default SeachBox;