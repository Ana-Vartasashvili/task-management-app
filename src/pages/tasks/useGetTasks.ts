import axios from '../../services/axios'
import { useDispatch } from 'react-redux'
import { addTasksData, setError } from '../../store/tasksSlice'
import toast from 'react-hot-toast'
import { useState } from 'react'

export const useGetTasks = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const getTasks = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get('/todos', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })

      dispatch(addTasksData(response.data.reverse()))

      setIsLoading(false)
    } catch (error: any) {
      setError(error.response.data.message)
      const errorMessage = error.response.data.message

      if (errorMessage) {
        toast.error(errorMessage)
      }
    }
  }

  return { getTasks }
}
