import Card from '../components/card/Card'
import AddTask from '../components/Task/AddTask'
import TasksList from '../components/Tasks/TasksList'

const Home: React.FC<{
  tasksData: {
    name: string
  }[]
}> = (props) => {
  return (
    <Card>
      <AddTask />
      <TasksList tasksData={props.tasksData} />
    </Card>
  )
}

export default Home
