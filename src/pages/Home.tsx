import Card from '../components/card/Card'
import AddTask from '../components/Task/AddTask'
import TasksList from '../components/Tasks/TasksList'

const Home: React.FC<{
  tasksData: {
    name: string
    id: number
  }[]
  onDeleteTask: (id: number) => void
}> = (props) => {
  return (
    <Card>
      <AddTask />
      <TasksList
        tasksData={props.tasksData}
        onDeleteTask={props.onDeleteTask}
      />
    </Card>
  )
}

export default Home
