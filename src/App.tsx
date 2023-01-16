import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import WeekTasks from './pages/WeekTasks'
import AllTasks from './pages/AllTasks'

const App: React.FC<{}> = () => {
  const todos = [
    {
      name: 'create a new project',
    },
    {
      name: 'do the dishes',
    },
    {
      name: 'go to the gym',
    },
    {
      name: 'go to the store',
    },
  ]

  return (
    <Routes>
      <Route path="/" element={<Home tasksData={todos} />} />
      <Route path="/tasks/next-seven-days" element={<WeekTasks />} />
      <Route path="/tasks/all" element={<AllTasks />} />
    </Routes>
  )
}

export default App
