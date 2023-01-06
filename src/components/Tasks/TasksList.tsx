import CheckCircleIcon from '../../icons/CheckCircleIcon'
import TaskListItem from './TaskListItem'

const TasksList: React.FC = () => {
  return (
    <div className="w-2/4 mx-auto">
      <ul className="flex flex-col gap-6">
        <TaskListItem />
        <TaskListItem />
        <TaskListItem />
        <TaskListItem />
        <TaskListItem />
        <TaskListItem />
        <TaskListItem />
        <TaskListItem />
        <TaskListItem />
        <TaskListItem />
        <TaskListItem />
        <TaskListItem />
        <TaskListItem />
        <TaskListItem />
      </ul>
    </div>
  )
}

export default TasksList
