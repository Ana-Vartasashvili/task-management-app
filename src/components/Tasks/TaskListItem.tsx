import { useState } from 'react'
import CheckCircleIcon from '../../icons/CheckCircleIcon'
import CheckCircleSolidIcon from '../../icons/CheckCircleSolidIcon'
import DeleteIcon from '../../icons/DeleteIcon'
import { TaskListItemProps } from './types'
import { useDeleteTask } from '../../pages/tasks/useDeleteTask'

const TaskListItem: React.FC<TaskListItemProps> = ({ id, name }) => {
  const [taskIsDone, setTaskIsDone] = useState(false)
  const { deleteTask } = useDeleteTask(id)

  const markTaskAsDone = () => {
    setTaskIsDone(true)
  }

  return (
    <li className="px-6 py-4 rounded-2xl border-[1.3px] text-md border-textColor_lightGray flex justify-between items-center gap-4 group font-thin">
      <div className="flex items-center gap-4">
        <button onClick={markTaskAsDone}>
          {taskIsDone ? <CheckCircleSolidIcon /> : <CheckCircleIcon />}
        </button>
        <span className="text-text_black">{name}</span>
      </div>

      <button onClick={deleteTask}>
        <DeleteIcon />
      </button>
    </li>
  )
}

export default TaskListItem
