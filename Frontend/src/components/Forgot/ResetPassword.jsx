import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, TextField, Button, Typography, CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';
import axios from '../../axiosInstanse';

function ResetPassword() {
    const { uid, token } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [loader,setLoader] = useState(false)

    const onSubmit = async (data) => {
        const payload = { ...data, uid, token };
        try {
            setLoader(true)
            const response = await axios.post('reset-password/', payload);
            toast.success(response.data.msg, {autoClose:2000});

            setTimeout(()=>{
                navigate('/home');
            },2000)

            
        } catch (error) {
            toast.error(error.response?.data?.msg || 'Something went wrong!');
        }
    };

    return (

        <Box
            sx={{
                height: "100%",
                width: "100%",
                bgcolor: "darkgrey"
            }}>
            <Container component="section" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Box sx={{ bgcolor: "whitesmoke", borderRadius: 2, boxShadow: "0px 0px 10px 0px black", padding: 4, width: "30%", textAlign: "center" }}>
                    <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>Reset Password</Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField fullWidth label="New Password" type="password" {...register("password")} sx={{ mb: 2 }} />
                        <TextField fullWidth label="Confirm Password" type="password" {...register("confirm_password")} sx={{ mb: 2 }} />
                        {loader ? <CircularProgress/> : 
                            <Button variant="contained" type="submit" sx={{ bgcolor: "green", color: "whitesmoke" }}>Reset Password</Button>
                        }
                    </form>
                </Box>
            </Container>
        </Box>
    );
}

export default ResetPassword;