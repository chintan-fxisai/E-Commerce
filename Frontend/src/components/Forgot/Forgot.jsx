import React, { useState } from 'react';
import { Box, Container, Button, Typography, TextField, CircularProgress } from '@mui/material';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { userForgot } from '../../Services/auth_services';
import { useNavigate } from 'react-router-dom';

function Forgot() {
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            const response = await userForgot(data);
            toast.success(response.data.msg,{autoClose:2000});

            setTimeout(navigate("/home"),2000)

        } catch (error) {
            toast.error(error.response?.data?.msg || 'Something went wrong!');
        }
    };

    return (
        <Box
        sx={{
            height:"100%",
            width:"100%",
            bgcolor:"darkgrey"
        }}>
            <Container component="section" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Box sx={{ bgcolor: "whitesmoke", borderRadius: 2, boxShadow: "0px 0px 10px 0px black", padding: 4, width: "30%", textAlign: "center" }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Forgot Password?</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField fullWidth label="Email" {...register("email")} sx={{ mb: 2 }} />
                    {loading ? <CircularProgress/> : 
                        <Button variant="contained" type="submit" sx={{ bgcolor: "green", color: "whitesmoke" }}>Submit</Button>
                    }   
                </form>
            </Box>
        </Container>
        </Box>

    );
}

export default Forgot;