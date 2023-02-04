import { useState } from 'react'
import PlusIcon from '../../icons/PlusIcon'
import { useAddTask } from '../../pages/tasks/useAddTask'

const AddTask: React.FC = () => {
  const [formIsShown, setFormIsShown] = useState(false)
  const [currentInputValue, setCurrentInputValue] = useState('')
  const inputIsEmpty = currentInputValue?.trim().length === 0
  const { addTask, isLoading } = useAddTask(
    currentInputValue,
    setCurrentInputValue
  )

  const toggleAddTaskForm = () => {
    setFormIsShown((prev) => !prev)
  }

  return (
    <div className="mb-8">
      {!formIsShown && (
        <button
          className="mt-24 mx-auto w-2/4 flex justify-start items-center gap-2 text-lg hover:text-main_purple"
          onClick={toggleAddTaskForm}
        >
          <PlusIcon />
          <span className="text-[1.7rem]">Add task</span>
        </button>
      )}

      {formIsShown && (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto flex justify-center flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Task name"
            value={currentInputValue}
            onChange={(e) => setCurrentInputValue(e.target.value)}
            className="border-[1.8px] w-2/4 border-solid border-gray rounded-2xl p-4 mx-auto flex justify-center mt-40 hover:border-main_purple focus:border-main_purple"
          />

          <div className="mx-auto flex justify-end gap-5 w-2/4">
            <button
              onClick={toggleAddTaskForm}
              type="button"
              className="px-4 py-2 rounded-lg bg-buttonGray"
            >
              Cancel
            </button>

            <button
              onClick={addTask}
              type="submit"
              disabled={inputIsEmpty}
              className={`px-5 py-2 rounded-lg bg-main_purple hover:bg-dark_purple duration-300 ease-in-out text-white ${
                (inputIsEmpty || isLoading) && 'opacity-50 cursor-not-allowed'
              }`}
            >
              Add task
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default AddTask
