import { useSelector } from 'react-redux'
import AllTasksListItem from './AllTasksListItem'
import { RootState } from '../../store/store'

const AllTasksList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks)

  return (
    <ul className="mt-[3rem] mx-4 flex flex-col gap-3 pb-2">
      {tasks.map((task) => (
        <AllTasksListItem
          key={task._id}
          id={task._id}
          taskName={task.name}
          isCompleted={task.completed}
        />
      ))}
    </ul>
  )
}

export default AllTasksList
