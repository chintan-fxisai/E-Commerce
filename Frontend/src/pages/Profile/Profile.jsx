import { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import { Box, Typography, TextField, Button, MenuItem, Grid, Avatar, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../redux/authActions'
import { useDispatch } from 'react-redux';
import { updateProfile, getProfile } from '../../Services/auth_services' 
import { toast } from 'react-toastify'
function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [editing, setEditing] = useState(false)
  const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm()

  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await getProfile();
        
        reset({
          ...data,
          gender: data.gender ? data.gender.toLowerCase() : "",
        });
      } catch (error) {
        toast.error("Failed to load profile data!");
      }
    }
    fetchProfile();
  }, [reset]);

  const username = getValues('firstName') || '?'

  const onSubmit = async (data) => {
    try {
      await updateProfile(data)
      setEditing(false)
      toast.success("Profile updated successfully!") // Optional
    } catch (error) {
      toast.error("Failed to update profile!") // Optional
    }
  }

  const handleEdit = () => setEditing(true)

  const handleLogout = () => {
    dispatch(logoutUser(navigate));
  };

  return (
    <>
      <Container maxWidth="lg"
        sx={{
          mt: 12,
          py: 10,
        }}>

        <Box
          sx={{
            px: 5,
            py: 8,
            borderRadius: 2,
            boxShadow: '0px 0px 5px 0px black'
          }}>

          <Stack direction="row" alignItems="center" spacing={2} mb={8}>
            <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
              {username.charAt(0).toUpperCase()}
            </Avatar>
            <Typography variant="h4" color="initial">Profile:</Typography>
            <Box sx={{ flexGrow: 1 }} />
            {!editing && (
              <Button variant="outlined" onClick={handleEdit}>
                Edit
              </Button>
            )}
            <Button variant="contained" color="error" onClick={handleLogout}>
              Logout
            </Button>
          </Stack>

          <form onSubmit={handleSubmit(onSubmit)}>

            <Grid container spacing={2} >

              <Grid  xs={12} sm={6}>
                <TextField
                  label="First Name"
                  fullWidth
                  {...register('firstName', { required: 'First name is required' })}
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                  disabled={!editing}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  fullWidth
                  {...register('lastName', { required: 'Last name is required' })}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  disabled={!editing}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Contact"
                  fullWidth
                  type="tel"
                  {...register('contact', { required: 'Contact is required' })}
                  error={!!errors.contact}
                  helperText={errors.contact?.message}
                  disabled={!editing}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Address"
                  multiline
                  rows={2}
                  fullWidth
                  {...register('address', { required: 'Address is required' })}
                  error={!!errors.address}
                  helperText={errors.address?.message}
                  disabled={!editing}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} 
            sx={{ display: 'flex',
                  alignItems: 'center'
             }}>

                <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ minWidth: 200 }}>
                  <TextField
                    label="Gender"
                    select
                    fullWidth
                    {...register('gender', { required: 'Gender is required' })}
                    error={!!errors.gender}
                    helperText={errors.gender?.message}
                    disabled={!editing}
                    InputLabelProps={{ shrink: true }}
                    defaultValue="" // Add this line
                  >
                    <MenuItem value="">Select Gender</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </TextField>
                </Box>
              </Grid>


              <Grid item xs={12} sm={6}>
                <TextField
                  label="Date of Birth"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  {...register('dateOfBirth', { required: 'Date of birth is required' })}
                  error={!!errors.dateOfBirth}
                  helperText={errors.dateOfBirth?.message}
                  disabled={!editing}
                />
              </Grid>

             

              {editing && (
                <Grid item xs={12} sx={{paddingLeft:5}}>
                  <Button type="submit" variant="contained" color="primary">
                    Save
                  </Button>
                </Grid>

              )}
            </Grid>
          </form>
        </Box>
      </Container>
    </>
  )
}

export default Profile