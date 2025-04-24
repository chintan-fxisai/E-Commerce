import React, { useState } from 'react'
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';
import { Box, Stack } from '@mui/material';




function Navbar() {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleLogoutClick = () => {
    setLoading(true)
    toast.error("Logging Out!!")

    setTimeout(() => {
      setLoading(false)
      localStorage.removeItem("authToken")
      navigate("/login")
    }, 1500)
  }


  return (
    // <Container component="section" className="mainContainer" maxWidth='lg'
    // sx={{position:'fixed'}} >

      <AppBar position="fixed"
        sx={{
          py: 2,
          color: "black",
          bgcolor: "white"
        }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters
          sx={{
            justifyContent:'space-between'
          }}>
            <Box sx={{cursor:'pointer'}}>
              <img src="./../../logo.png" alt="img" />
            </Box>

            <Stack spacing={5} direction={'row'}>
              <NavLink className="navlink" to={"/home"}>Home</NavLink>
              <NavLink className="navlink" to={"/shop"}>Shop</NavLink>
              {/* <NavLink className="navlink" to={"/pages"}>Pages</NavLink> */}
              <NavLink className="navlink" to={"/blog"}>Blog</NavLink>
              <NavLink className="navlink" to={"/contact"}>Contacts</NavLink>
            </Stack>


            {loading ? <CircularProgress
              size={"2.5rem"} /> :
              <Button
                variant="contained"
                disableRipple
                sx={{
                  color: "white",
                  bgcolor: "#dc3545"
                }}

                onClick={handleLogoutClick}>
                Logout
              </Button>
            }

          </Toolbar>
        </Container>
      </AppBar>
    // </Container>
  )
}

export default Navbar