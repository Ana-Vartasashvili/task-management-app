import AddTask from '../../components/Task/AddTask'
import TasksList from '../../components/Tasks/TasksList'

const Home: React.FC = () => {
  return (
    <>
      <AddTask />
      <TasksList />
    </>
  )
}

export default Home
