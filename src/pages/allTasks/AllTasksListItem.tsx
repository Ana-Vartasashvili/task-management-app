import CheckCircleIcon from '../../icons/CheckCircleIcon'
import CheckMarkIcon from '../../icons/CheckMarkIcon'

const AllTasksListItem = () => {
  return (
    <li className="px-6 py-4 rounded-2xl border-[1.5px] text-md border-textColor_lightGray flex justify-between items-center gap-4 group font-thin">
      <div className="flex items-center gap-4">
        <button>
          <div className="relative">
            <CheckCircleIcon />
            <CheckMarkIcon />
          </div>
        </button>

        <span className="text-white">Go to dancing</span>
      </div>
    </li>
  )
}

export default AllTasksListItem
