import { useState } from 'react'
import PlusIcon from '../../icons/PlusIcon'
import { useAddTask } from '../../pages/tasks/useAddTask'
import { Toaster } from 'react-hot-toast'

const AddTask: React.FC = () => {
  const [formIsShown, setFormIsShown] = useState(false)
  const [currentInputValue, setCurrentInputValue] = useState('')
  const inputIsEmpty = currentInputValue?.trim().length === 0
  const { addTask, isLoading, errorMsg } = useAddTask(
    currentInputValue,
    setCurrentInputValue
  )

  const toggleAddTaskForm = () => {
    setFormIsShown((prev) => !prev)
  }

  return (
    <div className="mb-8 mt-14 max-w-[70rem] mx-auto">
      {!formIsShown && (
        <button
          className="flex justify-start items-center  gap-3 text-lg w-full hover:text-main_purple"
          onClick={toggleAddTaskForm}
        >
          <PlusIcon />
          <span className="text-[1.8rem]">Add task</span>
        </button>
      )}

      {formIsShown && (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center flex-col gap-4 mx-auto text-[1.4rem] relative"
        >
          <input
            type="text"
            placeholder="Task name"
            value={currentInputValue}
            onChange={(e) => setCurrentInputValue(e.target.value)}
            className={`border-[1.5px] w-full border-solid border-gray rounded-2xl p-4 mx-auto mb-6 xs:mb-0 flex justify-center hover:border-main_purple focus:outline-none focus:border-main_purple ${
              errorMsg && currentInputValue.length < 4 && '!border-red'
            }`}
          />

          {errorMsg && currentInputValue.length < 4 && (
            <span className="absolute text-[1.2rem] text-red top-[45%] xs:top-[55%]">
              {errorMsg}
            </span>
          )}

          <div className="mx-auto flex justify-end gap-5 w-full">
            <button
              onClick={toggleAddTaskForm}
              type="button"
              className="px-5 py-2 rounded-lg bg-buttonGray"
            >
              Cancel
            </button>

            <button
              onClick={addTask}
              type="submit"
              disabled={inputIsEmpty || isLoading}
              className={`px-5 py-2 rounded-lg bg-main_purple hover:bg-dark_purple duration-300 ease-in-out text-white ${
                (inputIsEmpty || isLoading) && 'opacity-50 cursor-not-allowed'
              }`}
            >
              Add task
            </button>

            <Toaster />
          </div>
        </form>
      )}
    </div>
  )
}

export default AddTask
