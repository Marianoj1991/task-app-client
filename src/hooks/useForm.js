import { useState } from 'react'

const initialTaskState = {
  title: '',
  description: ''
}

export default function useForm ({ id = null }) {
  const [task, setTasks] = useState({
    title: '',
    description: ''
  })

  const [error, setError] = useState(null)
  const [isUpdating, setIsUpdating] = useState(false)

  const handleSetTasks = (task) => {
    setTasks(task)
  }

  const handleSetUpdating = () => {
    setIsUpdating(!isUpdating)
  }

  const handleUpdateTask = (id) => {
    try {
      fetch(`https://task-app-server-y9sm.onrender.com/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      }).then(() => console.log('Task updated succesfully'))
      resetTask()
      handleSetUpdating()
    } catch (err) {
      setError(err.message)
    }
  }

  const handleInputChange = ({ target }) => {
    const { name, value } = target
    setTasks({
      ...task,
      [name]: value
    })
  }

  const resetTask = () => {
    setTasks(initialTaskState)
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    if (!task.title && !task.description) return
    if (!isUpdating) {
      try {
        fetch('https://task-app-server-y9sm.onrender.com/api/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(task)
        }).then(() => console.log('Task added succesfully'))
        resetTask()
      } catch (err) {
        setError(err.message)
      }
    } else {
      console.log(id)
      handleUpdateTask(id)
    }
  }

  const handleGetTask = async (id) => {
    try {
      const resp = await fetch(
        `https://task-app-server-y9sm.onrender.com/api/tasks/${id}`
      )
      if (!resp.ok) {
        setError('ERROR: not exist a task with id' + id)
      }
      const data = await resp.json()
      const { result } = data
      handleSetTasks(result)
    } catch (err) {
      setError(err.message)
    }
  }

  return {
    task,
    handleInputChange,
    handleSetTasks,
    handleSubmitForm,
    handleGetTask,
    handleSetUpdating
  }
}
