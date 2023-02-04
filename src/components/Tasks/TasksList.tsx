import { useSelector } from 'react-redux'
import TaskListItem from './TaskListItem'
import { RootState } from '../../store/store'

const TasksList: React.FC = (props) => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks)

  return (
    <div className="w-2/4 mx-auto">
      <ul className="flex flex-col gap-6">
        {tasks
          .filter((task) => task.completed !== true)
          .map(({ name, _id: id, completed }) => {
            return (
              <TaskListItem
                key={id}
                name={name}
                id={id}
                isCompleted={completed}
              />
            )
          })}
      </ul>
    </div>
  )
}

export default TasksList
