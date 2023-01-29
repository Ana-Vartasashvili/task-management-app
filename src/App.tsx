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
  const { getTasks } = useGetTasks()

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks/next-seven-days" element={<WeekTasks />} />
      <Route path="/tasks/all" element={<AllTasks />} />
      <Route path="/Sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/signed-up" element={<SignedUp />} />
    </Routes>
  )
}

export default App
