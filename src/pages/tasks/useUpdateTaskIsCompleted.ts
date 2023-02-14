import { useDispatch } from 'react-redux'
import { notify } from '../../helpers/notify'
import axios from '../../services/axios'
import { addTasksData } from '../../store/tasksSlice'

export const useUpdateTaskIsCompleted = () => {
  const dispatch = useDispatch()

  const updateTaskIsCompleted = async (id: string, isCompleted: boolean) => {
    try {
      const response = await axios.put(
        `/todos/${id}`,
        {
          completed: isCompleted,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )

      dispatch(addTasksData(response.data.list.reverse()))
    } catch (error: any) {
      const errorMessage = error.response.data

      errorMessage && notify(errorMessage)
    }
  }

  return { updateTaskIsCompleted }
}
