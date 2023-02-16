import { useEffect } from 'react'
import AddTask from '../../components/Tasks/Task/AddTask'
import TasksList from '../../components/Tasks/TasksList'
import { useGetTasks } from './useGetTasks'

const Home: React.FC = () => {
  const { getTasks } = useGetTasks()

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <>
      <AddTask />
      <TasksList />
    </>
  )
}

export default Home
