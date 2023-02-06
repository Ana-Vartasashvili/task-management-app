import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import UpArrowIcon from '../../icons/UpArrowIcon'
import { useState } from 'react'
import { useAddTask } from '../tasks/useAddTask'
import AllTasksList from './AllTasksList'

const AllTasks = () => {
  const [inputValue, setInputValue] = useState('')
  const { addTask } = useAddTask(inputValue, setInputValue)

  return (
    <>
      <div className="w-2/4 h-full mx-auto">
        <h1 className="font-semibold text-black_main text-[1.8rem]">
          All my tasks
        </h1>

        <div className="w-full h-5/6 border-[1.5px] border-textColor_lightGray mt-5 rounded-3xl overflow-y-scroll no-scrollbar no-scrollbar::-webkit-scrollbar relative">
          <div>
            <AllTasksList />
          </div>

          <form
            className="bg-black_main text-end bottom-0 left-0 rounded-b-3xl py-4 px-5 flex justify-between gap-4 "
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              id="name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Click to quickly add a task"
              className="bg-dark_gray text-[1.3rem] w-11/12 rounded-full placeholder-textColor_gray py-2 px-4 border-[1.5px] text-white border-dark_gray focus:outline-none hover:border-main_purple focus:border-main_purple"
            />

            <button
              onClick={addTask}
              disabled={inputValue.trim().length === 0}
              className={`bg-dark_gray p-3 rounded-full hover:bg-dark_purple hover:text-white hover:scale-[105%] duration-300 ease-in-out ${
                inputValue.trim().length > 0 &&
                '!bg-main_purple hover:!bg-dark_purple text-white'
              }`}
              type="submit"
            >
              <UpArrowIcon />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AllTasks
