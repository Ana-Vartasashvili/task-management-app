import axios from '../../services/axios'
import { useDispatch } from 'react-redux'
import { addTasksData, setError } from '../../store/tasksSlice'
import toast from 'react-hot-toast'

export const useGetTasks = () => {
  const dispatch = useDispatch()

  const getTasks = async () => {
    try {
      const response = await axios.get('/todos', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })

      dispatch(addTasksData(response.data.reverse()))
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
