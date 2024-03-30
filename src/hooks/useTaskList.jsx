import { useEffect, useState } from 'react'

export function useTasksLists () {
  const [task, setTask] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getAllTasks = async () => {
    try {
      setError(null)
      setIsLoading(true)
      const resp = await fetch(
        'https://task-app-server-y9sm.onrender.com/api/tasks'
      )
      if (!resp.ok) {
        setError('We had a problem problem fetching data')
        return
      }
      const { result } = await resp.json()
      setTask(result)
    } catch (err) {
      console.log(err.message)
      setError(err.message)
    } finally {
      // setError(null)
      setIsLoading(false)
    }
  }

  const deleteTask = async (id) => {
    try {
      setError(null)
      const resp = await fetch(
        `https://task-app-server-y9sm.onrender.com/api/tasks/${id}`,
        {
          method: 'DELETE'
        }
      )
      if (!resp.ok) {
        setError('ERROR: task could not be deleted')
      }
      const newTasks = task.filter((task) => task.id !== id)
      setTask(newTasks)
    } catch (err) {
      setError(err.message)
    }
  }

  useEffect(() => {
    getAllTasks()
  }, [])

  return {
    task,
    error,
    isLoading,
    getAllTasks,
    deleteTask
  }
}
