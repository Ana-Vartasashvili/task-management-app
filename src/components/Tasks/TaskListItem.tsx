import { useState } from 'react'
import CheckCircleIcon from '../../icons/CheckCircleIcon'
import CheckCircleSolidIcon from '../../icons/CheckCircleSolidIcon'
import DeleteIcon from '../../icons/DeleteIcon'
import { TaskListItemProps } from './types'

const TaskListItem: React.FC<TaskListItemProps> = (props) => {
  const [taskIsDone, setTaskIsDone] = useState(false)

  const markTaskAsDone = () => {
    setTaskIsDone(true)
  }

  return (
    <li className="px-8 py-6 rounded-2xl border-[1.9px] flex justify-between items-center gap-4 group">
      <div className="flex items-center gap-4">
        <button onClick={markTaskAsDone}>
          {taskIsDone ? <CheckCircleSolidIcon /> : <CheckCircleIcon />}
        </button>
        <span>{props.name}</span>
      </div>

      <button onClick={() => props.onDeleteTask(props.id)}>
        <DeleteIcon />
      </button>
    </li>
  )
}

export default TaskListItem
