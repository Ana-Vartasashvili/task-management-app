import TaskListItem from './TaskListItem'

const TasksList: React.FC<{
  tasksData: {
    name: string
  }[]
}> = (props) => {
  const tasks = props.tasksData

  return (
    <div className="w-2/4 mx-auto">
      <ul className="flex flex-col gap-6">
        {tasks.map((task) => {
          return (
            <li>
              <TaskListItem name={task.name} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TasksList
