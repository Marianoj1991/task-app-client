import { Button, Card, CardContent, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
export default function TaskCard ({ id, title, description, deleteTask }) {
  const navigate = useNavigate()
  const handleNavigate = (id) => {
    navigate(`/add-task/${id}`)
  }

  return (
    <Card variant='elevation' sx={{ width: '500px' }}>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <section>
          <Typography variant='h6'>{title}</Typography>
          <Typography variant='p'>{description}</Typography>
        </section>
        <section style={{ display: 'flex', gap: '10px' }}>
          <Button onClick={() => handleNavigate(id)} variant='contained' color='primary'>
            Update
          </Button>
          <Button onClick={() => deleteTask(id)} variant='contained' color='warning'>
            Delete
          </Button>
        </section>
      </CardContent>
    </Card>
  )
}
