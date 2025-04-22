import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import './Login.css'
import { userLogin } from '../../Services/services'
import { useNavigate } from 'react-router-dom'
import { Box, Container, Typography, TextField, Button, CircularProgress } from '@mui/material';
import { IconButton } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {toast} from 'react-toastify'


export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const [passwordVisible, setPasswordVisible] = useState()
  const [loading, setLoading] = useState(false)

  const handlePasswordVisibilityClick = () => setPasswordVisible(!passwordVisible)

  const onSubmit = (data) => {
    setLoading(true)
    userLogin(data)

    .then((res) => {
      toast.success("Logging In!!!", {autoClose:800})

        const token = res.data.token
        localStorage.setItem("authToken", token.access)
        localStorage.setItem("refreshToken", token.refresh)
        
        setTimeout(() => {
          navigate("/home")
        },1500)
      })
  }

  return (

    <Box
    sx={
      {
        height:"100%",
        width:"100%",
        bgcolor:'darkgrey'
      }

    }>
      <Container component={'section'}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
      }}>

      <Box

        sx={{
          bgcolor: "whitesmoke",
          borderRadius: 2,
          boxShadow: "0px 0px 10px 0px black",
          padding: 4,
          width: "30%",
          textAlign: "center",
        }}>
        <Typography variant="h4" color="initial" fontWeight={600} marginBottom={3}>Login</Typography>

        <form onSubmit={handleSubmit(onSubmit)}>

          <TextField
            id="email"
            label="Email"
            fullWidth
            variant="outlined"
            margin="dense"
            type="email"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register("email",
              {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Email in lowercase and end with @gmail.com",
                },
              })}
            sx={{ overflow: "initial" }}
          />

          <Box
            display={"flex"}
            alignItems={"center"}
            sx={{ position: "relative" }}>

            <TextField
              id="password"
              label="Password"
              fullWidth
              variant="outlined"
              margin="dense"
              error={!!errors.password}
              helperText={errors.password?.message}
              type={passwordVisible ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
                maxLength: {
                  value: 12,
                  message: "Password cannot exceed 12 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/,
                  message: "Password must contain letters, numbers, and symbols",
                },
              })}
              sx={{ overflow: "initial" }}
            />

            <IconButton
              sx={{
                position: "absolute",
                right: "1rem"
              }}
              onClick={handlePasswordVisibilityClick}>
              {passwordVisible ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </Box>

          <Typography variant="body1" color="blue" textAlign={'left'}
            sx={
              {
                mt: 1,
                cursor: "pointer"
              }
            }
            
            onClick={()=>{navigate("/reset-password")}}
            >Forgot Password?</Typography>


          {loading ? <CircularProgress
             size={"2.5rem"}/> :
          <Button variant="contained" color="white"
            type='submit'
            sx={{
              bgcolor: "green",
              color: "whitesmoke",
              mt: 3,
              padding: "8px 50px"
            }}>
             Login
          </Button>
            }

          <Typography variant="body1" color="grey" marginTop={2}
            sx={{
              cursor: "pointer"
            }}

            onClick={() => navigate("/signup")}
          >

            Don't have an account?
          </Typography>
        </form>

      </Box>
    </Container>
    </Box>

  )
}

