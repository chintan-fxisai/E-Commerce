import { Box, Checkbox, Typography, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { deleteTodo, updateTodo } from '../../Services/services'
import DeleteIcon from '@mui/icons-material/Delete';
import { grey } from '@mui/material/colors';

function Tasks({ taskId, taskTitle, is_completed, setTodos }) {

  const [isCompleted, setIsCompleted] = useState(false)


  const handleCompleteCheck = (e) => {
    const updateTodoComplete = async () => {

      const payload = { //payload is data to be changed in DB
        id: taskId,
        is_completed: !isCompleted
      }

      await updateTodo(payload)
      setIsCompleted(!isCompleted)
    }
    updateTodoComplete()
  }


  const handleDeleteClick = async () => {
    const payload = { id: taskId }
    await deleteTodo(payload);
    setTodos((prevTodos) =>
      prevTodos.filter(
        (todo) => todo.id !== taskId)
      )
  }

  return (
    <Box
      display={'flex'}
      flexGrow={1}
      alignItems={'center'}
      justifyContent={'space-between'}
      sx={{
        bgcolor: isCompleted ? "lightgreen" : "lightsalmon",
        borderRadius: 1,
        padding: 2,
        mb: 2,
        transition: 'all 0.2s ease',
      }}
    >
      <Typography
        variant="body1"
        color="initial"
        sx={{
          textDecoration: isCompleted ? "line-through" : "none",
          transition: 'all 0.2s ease',
          color: isCompleted ? 'gray' : 'black',
        }}
      >
        {taskTitle}
      </Typography>

      <Box display={'flex'}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}>

        <IconButton onClick={handleDeleteClick} disableRipple>
          <DeleteIcon

            sx={{
              color: "#494343",
              cursor: "pointer"
            }}
          />
        </IconButton>

        <Checkbox
          disableRipple
          sx={{ p: 0 }}
          color={isCompleted ? "success" : ""}
          onChange={handleCompleteCheck}
        />


      </Box>
    </Box>
  )
}

export default Tasks