import UpArrowIcon from '../../icons/UpArrowIcon'
import { useEffect, useState } from 'react'
import { useAddTask } from '../tasks/useAddTask'
import AllTasksList from './AllTasksList'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import allTasksIllustration from '../../illustrations/Product launch.png'
import { useGetTasks } from '../tasks/useGetTasks'

const AllTasks = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks)
  const [inputValue, setInputValue] = useState('')
  const { addTask, isLoading } = useAddTask(inputValue, setInputValue)

  const { getTasks } = useGetTasks()

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <div className="h-full">
      <div className="max-w-[70rem] h-full mx-auto">
        <h1 className="font-semibold text-black_main text-[1.9rem]">
          All my tasks
        </h1>

        <div className="w-full h-4/5 border-[1.5px] border-textColor_lightGray mt-5 rounded-t-3xl  overflow-y-scroll no-scrollbar no-scrollbar::-webkit-scrollbar">
          {tasks.length === 0 && (
            <div className="w-5/6 xs:w-[30rem] mx-auto mt-32 flex flex-col justify-center items-center">
              <img
                src={allTasksIllustration}
                alt="illustration of a girl sitting and holding cards"
              />
              <p className="text-[1.4rem] mt-4 text-black_main text-center">
                What do you need to get done today?
              </p>
              <span className="text-[1.35rem] text-center">
                Quickly add a task from here
              </span>
            </div>
          )}
          <AllTasksList />
        </div>

        <form
          className="bg-black_main w-full bottom-0 left-0 rounded-b-3xl py-5 px-5 flex justify-between gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            id="name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Click to add a task"
            className="bg-dark_gray text-[1.3rem] w-11/12 rounded-full placeholder-textColor_gray py-2 px-4 border-[1.5px] text-white border-dark_gray focus:outline-none hover:border-main_purple focus:border-main_purple"
          />

          <button
            onClick={addTask}
            disabled={inputValue.trim().length === 0 || isLoading}
            className={`bg-dark_gray p-3 rounded-full hover:bg-dark_purple hover:text-white hover:scale-[105%] duration-300 ease-in-out ${
              inputValue.trim().length > 0 &&
              !isLoading &&
              '!bg-main_purple hover:!bg-dark_purple text-white'
            }`}
            type="submit"
          >
            <Toaster />
            <UpArrowIcon />
          </button>
        </form>
      </div>
    </div>
  )
}

export default AllTasks
