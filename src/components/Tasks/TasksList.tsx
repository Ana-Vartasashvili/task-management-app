import TaskListItem from './TaskListItem'
import { TaskListProps } from './types'

const TasksList: React.FC<TaskListProps> = (props) => {
  const tasks = props.tasksData

  return (
    <div className="w-2/4 mx-auto">
      <ul className="flex flex-col gap-6">
        {tasks.map((task) => {
          return (
            <TaskListItem
              key={task.id}
              name={task.name}
              id={task.id}
              onDeleteTask={props.onDeleteTask}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default TasksList
