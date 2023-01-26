import React from 'react'
import Card from '../../components/card/Card'
import ClipboardIcon from '../../icons/ClipboardIcon'
import { Tasks } from '../../types/global'
import TaskListItem from '../../components/Tasks/TaskListItem'

const AllTasks: React.FC<{ tasksData: Tasks[] }> = (props) => {
  return (
    <Card>
      <div className=" bg-darkBlue text-white mt-10 ml-10 px-8 py-2 rounded-full w-fit text-[2.2rem] flex items-center gap-5">
        <ClipboardIcon />
        <h1>All my tasks</h1>
      </div>

      <div className="bg-darkBlue w-3/6 h-120 flex justify-center mt-24 mx-auto rounded-3xl"></div>
    </Card>
  )
}

export default AllTasks
