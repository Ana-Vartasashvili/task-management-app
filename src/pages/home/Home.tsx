import Card from '../../components/card/Card'
import AddTask from '../../components/Task/AddTask'
import TasksList from '../../components/Tasks/TasksList'
import { HomeProps } from '../types'

const Home: React.FC<HomeProps> = (props) => {
  return (
    <Card>
      <AddTask onAddTask={props.onAddTask} />
      <TasksList onDeleteTask={props.onDeleteTask} />
    </Card>
  )
}

export default Home
