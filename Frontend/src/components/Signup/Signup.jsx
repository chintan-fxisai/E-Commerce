import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { userRegister } from "../../Services/auth_services";
import { useNavigate } from 'react-router-dom'
import { Box, Container, Typography, TextField, Button, IconButton, CircularProgress } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



function Signup() {

  const [passwordVisible, setPasswordVisible] = useState()
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  function onSubmit(data) {
    setLoading(true)
    const payload = {
      ...data, password2: data.password
    }

    userRegister(payload)
      .then((res) => {

        setTimeout(() => {
          setLoading(false)
          navigate("/login")
        }, 1500);
      })
  }

  const handleHaveAccountClick = () => {
    navigate("/login")
  }

  const handlePasswordVisibilityClick = () => setPasswordVisible(!passwordVisible)



  return (

   <Box
   sx={{
    height:"100%",
    width:"100%",
    bgcolor:"darkgrey"
   }}>
    
     <Container component={'section'}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
      }}>

      <Box // Box containing the form
        sx={{
          bgcolor: "whitesmoke",
          borderRadius: 2,
          boxShadow: "0px 0px 10px 0px black",
          padding: 4,
          width: "30%",
          textAlign: "center",
        }}>
        <Typography variant="h4"
          color="initial"
          fontWeight={600}
          marginBottom={3}
        >
          Signup
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>

          <TextField
            id="name"
            label="Name"
            fullWidth
            variant="outlined"
            margin="dense"
            error={!!errors.name}
            helperText={errors.name?.message}
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[A-Z][a-zA-Z]*$/,
                message: "Name must start with a capital letter and contain only alphabets",
              },
            })}
            sx={{ overflow: "initial" }}
          />

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



          <TextField
            id="confirm_password"
            label="Confirm Password"
            fullWidth
            variant="outlined"
            margin="dense"
            type="password"

            {...register("confirm_password", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            sx={{ overflow: "initial" }}
          />


          {loading ?
            <CircularProgress
              size={"2rem"} /> :
            <Button variant="contained" color="white"
              type='submit'
              sx={{
                bgcolor: loading ? "transparent" : "green",
                color: "whitesmoke",
                mt: 5,
                padding: "8px 50px",
                boxShadow: loading ? "none" : "inherit"
              }}>
              SignUp
            </Button>
          }

          <Typography variant="body1" color="grey" marginTop={2}
            sx={{
              cursor: "pointer"
            }}

            onClick={handleHaveAccountClick}>
            Already have an account?
          </Typography>
        </form>

      </Box>
    </Container>
   </Box>

  )
}


export default Signup;
