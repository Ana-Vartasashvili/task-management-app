import CheckCircleIcon from '../../icons/CheckCircleIcon'
import CheckCircleSolidIcon from '../../icons/CheckCircleSolidIcon'
import DeleteIcon from '../../icons/DeleteIcon'
import { TaskListItemProps } from './types'
import { useDeleteTask } from '../../pages/tasks/useDeleteTask'
import { useUpdateTaskIsCompleted } from '../../pages/tasks/useUpdateTaskIsCompleted'
import CheckMarkIcon from '../../icons/CheckMarkIcon'
import { useState } from 'react'

const TaskListItem: React.FC<TaskListItemProps> = ({ id, name }) => {
  const { deleteTask } = useDeleteTask(id)
  const { updateTaskIsCompleted } = useUpdateTaskIsCompleted()
  const [taskIsCompleted, setTaskIsCompleted] = useState(false)

  const updateIsCompleted = () => {
    updateTaskIsCompleted(id, true)
    setTaskIsCompleted(true)
  }

  return (
    <li className="px-6 py-4 rounded-2xl border-[1.5px] text-md border-textColor_lightGray flex justify-between items-center gap-4 group font-thin">
      <div className="flex items-center gap-4">
        <button onClick={updateIsCompleted}>
          {!taskIsCompleted && (
            <div className="relative">
              <CheckCircleIcon />
              <CheckMarkIcon />
            </div>
          )}
          {taskIsCompleted && <CheckCircleSolidIcon />}
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
