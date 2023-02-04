import Card from '../../components/card/Card'
import AddTask from '../../components/Task/AddTask'
import TasksList from '../../components/Tasks/TasksList'

const Home: React.FC = (props) => {
  return (
    <Card>
      <AddTask />
      <TasksList />
    </Card>
  )
}

export default Home