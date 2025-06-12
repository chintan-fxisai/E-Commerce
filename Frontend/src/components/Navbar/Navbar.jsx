import React, { useState } from 'react';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/loginSlice';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { SignupOffer } from './SignupOffer';
import { ShopSubmenu } from './ShopSubmenu';

function Navbar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignup] = useState(false);
  const [shopOpen, setShopOpen] = useState(false)
  const [showTopOffer, setShowTopOffer] = useState(true)

  const user = useSelector(state => state.login?.user);
  const userInitial =
    (user?.firstName && user.firstName.charAt(0).toUpperCase()) ||
    (user?.username && user.username.charAt(0).toUpperCase()) ||
    '';

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleAvatarClick = () => {
    navigate('/profile');
  }

  const handleCartButtonClick = () => {
    navigate('/cart');
  }

  const handleDontHaveAccountClick = () => {
    setShowSignup(true);
  }

  const handleShopMenuClick = () => {
    setShopOpen(!shopOpen)
    console.log(shopOpen)
  }

  return (
    <>
      <AppBar

        sx={{
          pb: 1,
          color: "black",
          bgcolor: "white",
          boxShadow: 'none'
        }}
      >
        <SignupOffer setShowSignUp={setShowSignup} showTopOffer={showTopOffer} setShowTopOffer={setShowTopOffer} />
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{ cursor: 'pointer' }}>
              <Typography variant="body1" color="initial"
                sx={{
                  fontFamily: "Rubik Mono One",
                  fontSize: '32px'
                }}>
                SHOP.CO
              </Typography>
            </Box>

            <Stack spacing={5} direction={'row'}>
              <NavLink className="navlink" to={"/home"}>Home</NavLink>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}

                onClick={() => { handleShopMenuClick() }}
              >
                <NavLink className="navlink" to={"/shop"} >Shop
                </NavLink>



                <KeyboardArrowDownIcon
                  sx={{
                    display: 'inline-block',
                    transform: shopOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: '0.3s all ease'
                  }} />

                <ShopSubmenu />
              </Box>

              <NavLink className="navlink" to={"/blog"}>Blog</NavLink>
              <NavLink className="navlink" to={"/contact"}>Contacts</NavLink>
            </Stack>

            {isLoggedIn ? (

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

                <Button variant="outlined" color="black" onClick={handleCartButtonClick}
                  sx={{
                    px: 1
                  }}>
                  MY CART
                </Button>

                <Avatar
                  style={{
                    cursor: 'pointer',
                    backgroundColor: '#dc3535',
                    color: 'white'
                  }}
                  onClick={handleAvatarClick}
                >
                  {userInitial}
                </Avatar>
              </Box>
            ) : (
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#dc3545",
                  color: "white"
                }}
                onClick={handleLoginClick}
              >
                Login
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>

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
            <Login closeLoginModal={handleCloseLogin} setShowSignup={setShowSignup} showSignUp={showSignUp} />
          </Box>
        </Box>
      )}

      {showSignUp && (
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
            <Signup setShowSignup={setShowSignup} showSignUp={showSignUp} setShowLogin={setShowLogin} />
          </Box>
        </Box>
      )
      }

    </>
  );
}

export default Navbar;