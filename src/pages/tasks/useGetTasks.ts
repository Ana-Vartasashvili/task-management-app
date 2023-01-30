import axios from '../../services/axios'
import { useDispatch } from 'react-redux'
import { addTasksData, setError } from '../../store/tasksSlice'

export const useGetTasks = () => {
  const dispatch = useDispatch()

  const getTasks = async () => {
    try {
      const response = await axios.get('/todos', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })

      dispatch(addTasksData(response.data))
    } catch (error: any) {
      setError(error.response.data.message)
    }
  }

  return { getTasks }
}
