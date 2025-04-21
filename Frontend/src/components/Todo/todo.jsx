import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { useForm } from "react-hook-form"
import { CircularProgress, TextField } from '@mui/material';
import { createTodo, getTodo } from '../../Services/services'
import Task from '../Tasks/Tasks'
import { toast } from 'react-toastify';



function todo() {

  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm()

  const [todos, setTodos] = useState([]) // Old todos that are already saved before login
  const [refetch, setRefetch] = useState(false)
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
  
    const onTaskSubmit = async (data) => {
      await createTodo(data)
      setRefetch(!refetch)
      reset()
    }

    useEffect(() => {
      const fetchTodo = async () => {
        const savedTodo = await getTodo();
        setTodos(savedTodo);
      }
      fetchTodo()
    }, [refetch])


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

        <Box display={'flex'}
          sx={{
            alignItems: 'center',
            flexDirection: 'column',
            pt: 20
          }}>
          <Typography
            display="block"
            variant="h5"
            color="white"
            textAlign={'center'}
            sx={{
              mb: 3
            }}>
            Enter Your Task
          </Typography>

          <form
            onSubmit={handleSubmit(onTaskSubmit)}
            style={
              {
                display: "flex",
                gap: "20px",
                alignItems: "center"
              }
            }>

            <TextField variant="outlined"
              {...register("task", { required: true, maxLength: 20 })}
              sx={{
                width: '35rem',
                bgcolor: "white",
                borderRadius: "8px",
                outline: "none",
                border: "none"
              }} />

            <Button variant="contained" color="primary" disableRipple
              type='submit'
              sx={{
                padding: 0,
                fontSize: "16px",
                height: "3rem",
                width: "6rem",
              }}>
              Add
            </Button>
          </form>


        </Box>

        <Box
          marginTop={6}
          sx={{
            padding: '20px',
            display: 'flex',
            justifyContent: "center",
            gap: 2
          }}>


          <Box width={"50%"} >
            {
              (todos || []).map((todoElement) => {
                return <Task
                  key={todoElement.id}
                  taskId={todoElement.id}
                  taskTitle={todoElement.task}
                  is_completed={todoElement.is_completed}
                  setTodos={setTodos} />
              })
            }
          </Box>

        </Box>
      </Container>
    )
  }

  export default todo