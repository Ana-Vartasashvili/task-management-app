import { useState } from 'react'
import PlusIcon from '../../icons/PlusIcon'
import { AddTaskProps } from './types'

const AddTask: React.FC<AddTaskProps> = (props) => {
  const [formIsShown, setFormIsShown] = useState(false)
  const [currentInputValue, setCurrentInputValue] = useState('')

  const toggleAddTaskForm = () => {
    setFormIsShown((prev) => !prev)
  }

  const addTask = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    props.onAddTask(currentInputValue, new Date().toISOString())
    setCurrentInputValue('')
  }

  return (
    <div className="mb-8">
      {!formIsShown && (
        <button
          className="mt-40 mx-auto w-2/4 flex justify-start items-center gap-2 text-lg hover:text-lightBlue"
          onClick={toggleAddTaskForm}
        >
          <PlusIcon />
          <span>Add task</span>
        </button>
      )}

      {formIsShown && (
        <form className="mx-auto flex justify-center flex-col gap-4">
          <input
            type="text"
            placeholder="Task name"
            value={currentInputValue}
            onChange={(e) => setCurrentInputValue(e.target.value.trim())}
            className="border-[1.8px] w-2/4 border-solid border-gray rounded-2xl p-4 mx-auto flex justify-center mt-40 hover:border-lightBlue focus:border-lightBlue"
          />

          <div className="mx-auto flex justify-end gap-5 w-2/4">
            <button
              onClick={toggleAddTaskForm}
              type="button"
              className="px-4 py-2 rounded-lg bg-buttonGray  "
            >
              Cancel
            </button>

            <button
              onClick={addTask}
              type="submit"
              disabled={!currentInputValue?.length}
              className={`px-5 py-2 rounded-lg bg-lightBlue text-white ${
                !currentInputValue?.length && 'opacity-50 cursor-not-allowed'
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
