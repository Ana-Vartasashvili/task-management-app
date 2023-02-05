import React from 'react'
import Card from '../../components/card/Card'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import UpArrowIcon from '../../icons/UpArrowIcon'
import { useFormik } from 'formik'

const onSubmit = (values) => {
  values.name = ''
  console.log(values.name)
}
const AllTasks: React.FC = (props) => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks)

  const {
    values,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
  } = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit,
  })

  return (
    <>
      <div className="w-2/4 h-screen mx-auto">
        <h1 className=" font-semibold text-black_main text-[1.75rem]">
          All my tasks
        </h1>

        <div className="w-full h-2/3 flex flex-col justify-between border-[1.5px] border-textColor_lightGray mt-5 rounded-xl">
          <div></div>

          <form
            className="bg-black_main rounded-b-xl py-4 px-5 flex justify-between gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              id="name"
              value={values.name}
              onBlur={handleBlur}
              placeholder="click to quickly add a task"
              onChange={handleChange}
              className="bg-dark_gray text-[1.3rem] w-11/12 rounded-full placeholder-textColor_gray py-3 px-4 border-[1.5px] text-white border-dark_gray focus:outline-none hover:border-main_purple focus:border-main_purple"
            />

            <button
              className={`bg-dark_gray p-3 rounded-full hover:bg-dark_purple hover:text-white hover:scale-[105%] duration-300 ease-in-out ${
                touched && 'bg-main_purple text-white'
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
