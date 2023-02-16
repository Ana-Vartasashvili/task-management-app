import { useEffect } from 'react'
import AddTask from '../../components/task/AddTask'
import TasksList from '../../components/tasks/TasksList'
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
