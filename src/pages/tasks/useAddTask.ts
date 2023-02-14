import { useDispatch } from 'react-redux'
import axios from '../../services/axios'
import { addTasksData } from '../../store/tasksSlice'
import { useState } from 'react'
import toast from 'react-hot-toast'

export const useAddTask = (
  taskName: string,
  setTaskName: (param: string) => void
) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const addTask = async () => {
    try {
      setIsLoading(true)
      const response = await axios.post(
        '/todos',
        { name: taskName.trim() },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )

      dispatch(addTasksData(response.data.list.reverse()))
      setTaskName('')
      setIsLoading(false)
    } catch (error: any) {
      const errorMessage = error.response.data.message

      if (errorMessage) {
        toast.error(errorMessage)
      }
    }
  }

  return { addTask, isLoading }
}
