import React from 'react'
import Card from '../../components/card/Card'
import ClipboardIcon from '../../icons/ClipboardIcon'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import AllTasksListItem from './AllTasksListItem'

const AllTasks: React.FC = (props) => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks)

  return (
    <Card>
      <div className=" bg-black_main text-white mt-10 ml-10 px-6 py-2 font rounded-full w-fit text-[1.6rem] flex items-center gap-3">
        <ClipboardIcon />
        <h1>All my tasks</h1>
      </div>
    </Card>
  )
}

export default AllTasks
