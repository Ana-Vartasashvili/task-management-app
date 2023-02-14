import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/home/Home'
import WeekTasks from './pages/weekTasks/WeekTasks'
import AllTasks from './pages/allTasks/AllTasks'
import SignUp from './pages/signUp/SignUp'
import SignIn from './pages/signIn/SignIn'
import SignedUp from './pages/signedUp/SignedUp'
import { useGetTasks } from './pages/tasks/useGetTasks'
import Tasks from './pages/tasks/Tasks'
import Card from './components/Card/Card'
import PageNotFound from './pages/pageNotFound/PageNotFound'

const App = () => {
  const { getTasks } = useGetTasks()

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<Card />}>
        <Route index element={<Tasks />} />
        <Route path="next-seven-days" element={<WeekTasks />} />
        <Route path="all" element={<AllTasks />} />
      </Route>
      <Route path="/Sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/signed-up" element={<SignedUp />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
