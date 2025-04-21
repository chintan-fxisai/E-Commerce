import React from 'react';
import { Box, Container, Button, Typography, TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { userForgot } from '../../Services/services';

function Forgot() {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await userForgot(data);
            toast.success(response.data.msg);
        } catch (error) {
            toast.error(error.response?.data?.msg || 'Something went wrong!');
        }
    };

    return (
        <Container component="section" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Box sx={{ bgcolor: "whitesmoke", borderRadius: 2, boxShadow: "0px 0px 10px 0px black", padding: 4, width: "30%", textAlign: "center" }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Forgot Password?</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField fullWidth label="Email" {...register("email")} sx={{ mb: 2 }} />
                    <Button variant="contained" type="submit" sx={{ bgcolor: "green", color: "whitesmoke" }}>Submit</Button>
                </form>
            </Box>
        </Container>
    );
}

export default Forgot;