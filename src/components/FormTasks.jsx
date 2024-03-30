import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography
} from '@mui/material'
import useForm from '../hooks/useForm'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function FormTasks () {
  const params = useParams()
  const { id } = params
  const {
    task,
    handleInputChange,
    handleSubmitForm,
    handleGetTask,
    handleSetUpdating
  } = useForm({ id })

  useEffect(() => {
    if (id) {
      handleGetTask(id)
      handleSetUpdating()
    }
  }, [params])

  return (
    <div>
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        marginTop='2rem'
      >
        <Grid
          item
          width='500px'
        >
          <Card
            variant='elevation'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              textAlign: 'center'
            }}
          >
            <CardContent>
              <Typography
                variant='h6'
                sx={{ marginBottom: '1rem' }}
              >
                Write your task
              </Typography>
              <form
                onSubmit={handleSubmitForm}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}
              >
                <TextField
                  onChange={handleInputChange}
                  name='title'
                  sx={{ backgroundColor: '#fff', color: 'white' }}
                  label='Task title'
                  variant='outlined'
                  value={task.title}
                />
                <TextField
                  onChange={handleInputChange}
                  name='description'
                  sx={{ backgroundColor: '#fff', color: 'white' }}
                  label='Task description'
                  variant='outlined'
                  value={task.description}
                />
                <Button
                  onClick={handleSubmitForm}
                  variant='contained'
                  color='primary'
                >
                  Add Task
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
