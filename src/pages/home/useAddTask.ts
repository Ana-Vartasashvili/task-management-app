import { useDispatch } from 'react-redux'
import axios from '../../services/axios'
import { addTasksData } from '../../store/tasksSlice'

export const useAddTask = (
  taskName: string,
  setTaskName: (param: string) => void
) => {
  const dispatch = useDispatch()

  const addTask = async () => {
    try {
      const response = await axios.post(
        '/todos',
        { name: taskName },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )

      dispatch(addTasksData(response.data.list))
      setTaskName('')
    } catch (error) {}
  }

  return { addTask }
}
