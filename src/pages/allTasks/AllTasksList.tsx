import { useSelector } from 'react-redux'
import AllTasksListItem from './AllTasksListItem'
import { RootState } from '../../store/store'

const AllTasksList = () => {
  const tasksData = useSelector((state: RootState) => state.tasks.tasks)
  const tasks = [...tasksData].sort(
    (a: any, b: any) => a.completed - b.completed
  )

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
