import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { CircularProgress} from '@mui/material';
import { toast } from 'react-toastify';



function home() {

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
      <Container component="section" className="mainContainer" >

        <AppBar position="fixed"
          sx={{
            py: 1,
            color: "white",
            bgcolor: "black"
          }}>
          <Toolbar>
            <Typography variant="h6" flexGrow={10}
              sx={{
                fontWeight: 600,
                fontSize: "24px"
              }}>
              TODO APP
            </Typography>


            {loading ? <CircularProgress 
            size={"2.5rem"}/> :
              <Button
                variant="contained"
                disableRipple
                sx={{
                  color: "white",
                  bgcolor: "#eb4b4b"
                }}

                onClick={handleLogoutClick}>
                Logout
              </Button>
              }

          </Toolbar>
        </AppBar>
      </Container>
    )
  }

  export default home