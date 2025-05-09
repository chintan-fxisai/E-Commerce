import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, TextField, Button, CircularProgress} from '@mui/material';
import { IconButton } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/authActions';
import { selectLoading, selectError } from '../../redux/loginSlice';
import CloseIcon from '@mui/icons-material/Close';

// Update to accept closeLoginModal prop instead of showLogin
export default function Login({ closeLoginModal = () => {} }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibilityClick = () => setPasswordVisible(!passwordVisible);

  const onSubmit = (data) => {
    // Dispatch login action with credentials and navigate function
    dispatch(loginUser(data, navigate, closeLoginModal));
  };

  return (
    <Container component={'section'}
      sx={{
        borderRadius: '8px',
      }}>

      <Box
        sx={{
          bgcolor: "whitesmoke",
          borderRadius: 2,
          boxShadow: "0px 0px 10px 0px black",
          padding: 4,
          textAlign: "center",
          position: "relative" // Added for proper positioning of close button
        }}>

        <IconButton
          onClick={closeLoginModal} // Use the prop function
          sx={{
            position: 'absolute',
            right: '1rem',
            top: '1rem',
            color: 'white',
            zIndex: 1400,
            padding: 0,
            bgcolor: 'rgba(220, 53, 69, 0.8)',
            '&:hover': {
              bgcolor: 'rgba(220, 53, 69, 1)',
            }
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h4" color="initial" fontWeight={600} marginBottom={3}>Login</Typography>

        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

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

            onClick={() => { navigate("/reset-password") }}
          >Forgot Password?</Typography>


          <Button
            variant="contained"
            color="white"
            type='submit'
            disabled={loading}
            sx={{
              bgcolor: "#dc3545",
              color: "whitesmoke",
              mt: 3,
              padding: "8px 50px"
            }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Login"
            )}
          </Button>

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
  );
}

