import { useSelector } from 'react-redux'
import TaskListItem from './TaskListItem'
import { RootState } from '../../store/store'
import tasksIllustration from '../../illustrations/No comments yet.png'

const TasksList: React.FC = (props) => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks)
    .filter((task) => task.completed !== true)
    .reverse()

  return (
    <div className="w-2/4 mx-auto">
      {tasks.length === 0 && (
        <div className="w-[30rem] mx-auto mt-32 flex flex-col justify-center items-center">
          <img
            src={tasksIllustration}
            alt="illustration of a girl sitting and holding cards"
          />
          <p className="text-[1.4rem] mt-4 text-black_main text center">
            What do you need to get done today?
          </p>
          <span className="text-[1.35rem]">Click + to add a task</span>
        </div>
      )}

      <ul className="flex flex-col gap-6">
        {tasks.map(({ name, _id: id, completed }) => {
          return <TaskListItem key={id} name={name} id={id} />
        })}
      </ul>
    </div>
  )
}

export default TasksList
