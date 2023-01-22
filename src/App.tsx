import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import React from 'react'
import Home from './pages/Home'
import WeekTasks from './pages/WeekTasks'
import AllTasks from './pages/AllTasks'
import { useDispatch } from 'react-redux'
import { addTasksData, setError } from './store/tasksSlice'
import Register from './pages/Register'
import Login from './pages/Login'

const App: React.FC = () => {
  const todos = [
    {
      id: '1',
      name: 'create a new project',
    },
    {
      id: '2',
      name: 'do the dishes',
    },
    {
      id: '3',
      name: 'go to the gym',
    },
    {
      id: '4',
      name: 'go to the store',
    },
  ]

  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          'https://todo-app-b9bc3-default-rtdb.europe-west1.firebasedatabase.app/Tasks.json'
        )
        if (!response.ok) {
          throw new Error('Failed to load tasks.')
        }

        const data = await response.json()

        dispatch(addTasksData(data))
        setIsLoading(false)
      } catch (error: any) {
        dispatch(setError(error.message))
        setIsLoading(false)
      }
    }
    fetchData()
  }, [dispatch])

  const [tasks, setTasks] = useState(todos)

  const deleteTaskHandler = (id: string) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id)
    })
  }

  const addTaskHandler = (taskName: string, id: string) => {
    setTasks((prevTasks) => {
      return [...prevTasks, { name: taskName, id: id }]
    })
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            tasksData={tasks}
            onDeleteTask={deleteTaskHandler}
            onAddTask={addTaskHandler}
          />
        }
      />
      <Route path="/tasks/next-seven-days" element={<WeekTasks />} />
      <Route path="/tasks/all" element={<AllTasks tasksData={tasks} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
