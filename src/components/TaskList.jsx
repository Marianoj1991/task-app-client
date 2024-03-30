// import { Grid } from '@mui/material'
import { Grid } from '@mui/material'
import TaskCard from './TaskCard'
import { useTasksLists } from '../hooks/useTaskList'

export default function TaskList () {
  const { task, isLoading, deleteTask, error } = useTasksLists()

  return (
    <div>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '3rem'
        }}
      >
        <Grid
          item
          sx={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '20px'
          }}
        >
          {isLoading
            ? (<h2>Loadins tasks....</h2>)
            : (task.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                deleteTask={deleteTask}
              />
              ))
              )}
          {
            error && <h2>{error}</h2>
          }
        </Grid>
      </Grid>
    </div>
  )
}
