import { useSelector } from 'react-redux'
import TaskListItem from './TaskListItem'
import { RootState } from '../../store/store'
import tasksIllustration from '../../illustrations/No comments yet.png'
import { useGetTasks } from '../../pages/tasks/useGetTasks'
import { useUpdateTaskIsCompleted } from '../../pages/tasks/useUpdateTaskIsCompleted'

const TasksList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks).filter(
    (task) => task.completed !== true
  )
  const { isLoading } = useGetTasks()

  return (
    <div className="mx-auto pb-20 max-w-[70rem]">
      {tasks.length === 0 && !isLoading && (
        <div className="w-5/6 xs:w-[30rem] mx-auto mt-32 flex flex-col justify-center items-center">
          <img
            src={tasksIllustration}
            alt="illustration of a girl sitting and holding cards"
          />
          <p className="text-[1.4rem] mt-4 text-black_main text-center">
            What do you need to get done today?
          </p>
          <span className="text-[1.35rem]">Click + to add a task</span>
        </div>
      )}

      <ul className="flex flex-col gap-6">
        {tasks.map(({ name, _id: id, completed }) => {
          return (
            <TaskListItem
              key={id}
              name={name}
              id={id}
              isCompleted={completed}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default TasksList
