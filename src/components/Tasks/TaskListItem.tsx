import { useState } from 'react'
import CheckCircleIcon from '../../icons/CheckCircleIcon'
import CheckCircleSolidIcon from '../../icons/CheckCircleSolidIcon'
import DeleteIcon from '../../icons/DeleteIcon'
import { TaskListItemProps } from './types'
import { useDeleteTask } from '../../pages/home/useDeleteTask'

const TaskListItem: React.FC<TaskListItemProps> = ({ id, name }) => {
  const [taskIsDone, setTaskIsDone] = useState(false)
  const { deleteTask } = useDeleteTask(id)

  const markTaskAsDone = () => {
    setTaskIsDone(true)
  }

  return (
    <li className="px-8 py-6 rounded-2xl border-[1.9px] flex justify-between items-center gap-4 group">
      <div className="flex items-center gap-4">
        <button onClick={markTaskAsDone}>
          {taskIsDone ? <CheckCircleSolidIcon /> : <CheckCircleIcon />}
        </button>
        <span>{name}</span>
      </div>

      <button onClick={deleteTask}>
        <DeleteIcon />
      </button>
    </li>
  )
}

export default TaskListItem
