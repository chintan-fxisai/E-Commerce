import React, { useState } from 'react';
import './Navbar.css';
import { NavLink, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/loginSlice';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Avatar} from '@mui/material';
import { Box, Stack } from '@mui/material';
import Login from '../Login/Login';

function Navbar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };
  
  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <>
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

            {isLoggedIn ? <Avatar /> :
              <Button
                variant="contained"
                sx={{
                  bgcolor:"#dc3545",
                  color:"white"
                }}
                onClick={handleLoginClick}
              >
                Login
              </Button> 
            }
          </Toolbar>
        </Container>
      </AppBar>

      {/* Login Modal */}
      {showLogin && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1300,
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '450px', 
              maxWidth: '90%'
            }}
          >
            <Login closeLoginModal={handleCloseLogin} />
          </Box>
        </Box>
      )}
    </>
  );
}

export default Navbar;