import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import React from 'react'
import Home from './pages/home/Home'
import WeekTasks from './pages/weekTasks/WeekTasks'
import AllTasks from './pages/allTasks/AllTasks'
import SignUp from './pages/signUp/SignUp'
import SignIn from './pages/signIn/SignIn'
import SignedUp from './pages/signedUp/SignedUp'
import { useGetTasks } from './pages/home/useGetTasks'

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

  const { getTasks } = useGetTasks()

  useEffect(() => {
    getTasks
  }, [])

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
      <Route path="/Sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/signed-up" element={<SignedUp />} />
    </Routes>
  )
}

export default App
