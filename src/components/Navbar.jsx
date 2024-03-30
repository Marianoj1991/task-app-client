import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

export default function Navbar () {
  return (
    <Box>
      <AppBar position='static' color='primary'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h6'>
            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/'>
              Task App
            </NavLink>
          </Typography>
          <Button variant='contained' color='info'>
            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/add-task'>Go to form</NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
