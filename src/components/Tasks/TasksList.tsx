import { useSelector } from 'react-redux'
import TaskListItem from './TaskListItem'
import { TaskListProps } from './types'
import { RootState } from '../../store/store'

const TasksList: React.FC<TaskListProps> = (props) => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks)

  return (
    <div className="w-2/4 mx-auto">
      <ul className="flex flex-col gap-6">
        {tasks.map(({ name, _id: id }) => {
          return (
            <TaskListItem
              key={id}
              name={name}
              id={id}
              onDeleteTask={props.onDeleteTask}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default TasksList
