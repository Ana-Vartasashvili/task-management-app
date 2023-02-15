import CheckCircleIcon from '../../icons/CheckCircleIcon'
import CheckCircleSolidIcon from '../../icons/CheckCircleSolidIcon'
import XIcon from '../../icons/XIcon'
import { TaskListItemProps } from './types'
import { useDeleteTask } from '../../pages/tasks/useDeleteTask'
import { useUpdateTaskIsCompleted } from '../../pages/tasks/useUpdateTaskIsCompleted'
import CheckMarkIcon from '../../icons/CheckMarkIcon'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'

const TaskListItem: React.FC<TaskListItemProps> = ({
  id,
  name,
  isCompleted,
}) => {
  const { deleteTask } = useDeleteTask(id)
  const { updateTaskIsCompleted } = useUpdateTaskIsCompleted()
  const [taskIsCompleted, setTaskIsCompleted] = useState(false)

  const updateIsCompleted = () => {
    updateTaskIsCompleted(id, !isCompleted)
    setTaskIsCompleted(true)
  }

  return (
    <li className="px-6 py-4 rounded-2xl border-[1.5px] text-md break-all border-textColor_lightGray flex justify-between items-center gap-4 group font-thin relative">
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

      <Toaster />

      <button onClick={deleteTask}>
        <div className="w-7 h-7">
          <XIcon />
        </div>
      </button>
    </li>
  )
}

export default TaskListItem
