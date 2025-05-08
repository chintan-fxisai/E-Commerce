import React from 'react';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/authActions';
import { selectIsLoggedIn, selectUser } from '../../redux/loginSlice';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
import { Box, Stack,Typography } from '@mui/material';

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const [loading, setLoading] = React.useState(false);

  const handleLogoutClick = () => {
    setLoading(true);
    dispatch(logoutUser(navigate));
  };

  return (
    <AppBar 
      position="fixed"
      sx={{
        py: 2,
        color: "black",
        bgcolor: "white"
      }}
    >
      <Container maxWidth="lg">
        <Toolbar 
          disableGutters
          sx={{
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ cursor: 'pointer' }}>
            <img src="./../../logo.png" alt="img" />
          </Box>

          <Stack spacing={5} direction={'row'}>
            <NavLink className="navlink" to={"/home"}>Home</NavLink>
            <NavLink className="navlink" to={"/shop"}>Shop</NavLink>
            <NavLink className="navlink" to={"/blog"}>Blog</NavLink>
            <NavLink className="navlink" to={"/contact"}>Contacts</NavLink>
          </Stack>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {isLoggedIn && user && (
              <Typography variant="body1" sx={{ mr: 2 }}>
                {user.email}
              </Typography>
            )}
            
            {loading ? (
              <CircularProgress size={"2.5rem"} />
            ) : (
              <Button
                variant="contained"
                disableRipple
                sx={{
                  color: "white",
                  bgcolor: "#dc3545"
                }}
                onClick={handleLogoutClick}
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;