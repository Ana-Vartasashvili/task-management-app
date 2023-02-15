import CheckCircleIcon from '../../icons/CheckCircleIcon'
import CheckMarkIcon from '../../icons/CheckMarkIcon'
import { AllTasksListItemPros } from '../types'
import { useUpdateTaskIsCompleted } from '../tasks/useUpdateTaskIsCompleted'
import CheckCircleSolidIcon from '../../icons/CheckCircleSolidIcon'
import XIcon from '../../icons/XIcon'
import { useDeleteTask } from '../tasks/useDeleteTask'
import { Toaster } from 'react-hot-toast'

const AllTasksListItem: React.FC<AllTasksListItemPros> = ({
  taskName,
  isCompleted,
  id,
}) => {
  const { updateTaskIsCompleted } = useUpdateTaskIsCompleted()
  const { deleteTask } = useDeleteTask(id)

  const updateIsCompleted = () => {
    updateTaskIsCompleted(id, !isCompleted)
  }

  return (
    <li className="px-6 py-4 rounded-2xl border-[1.5px] text-md break-all border-textColor_lightGray flex justify-between items-center gap-4 group font-thin">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-4">
          <button onClick={updateIsCompleted}>
            {!isCompleted && (
              <div className="relative">
                <CheckCircleIcon />
                <CheckMarkIcon />
              </div>
            )}
            {isCompleted && <CheckCircleSolidIcon />}
          </button>
          <Toaster />

          <span
            className={`text-dark_gray ${
              isCompleted && 'text-textColor_gray line-through'
            }`}
          >
            {taskName}
          </span>
        </div>

        <button onClick={deleteTask}>
          <div className="w-7 h-7">
            <XIcon />
          </div>
        </button>
      </div>
    </li>
  )
}

export default AllTasksListItem
