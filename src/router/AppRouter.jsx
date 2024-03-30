import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import FormTasks from '../components/FormTasks'
import TaskList from '../components/TaskList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <TaskList />
      },
      {
        path: '/add-task',
        element: <FormTasks />
      },
      {
        path: '/add-task/:id',
        element: <FormTasks />
      }
    ]
  }
])

export default function AppRouter () {
  return <RouterProvider router={router} />
}
