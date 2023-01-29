import { useDispatch } from 'react-redux'
import axios from '../../services/axios'
import { addTasksData } from '../../store/tasksSlice'

export const useDeleteTask = (id: string) => {
  const dispatch = useDispatch()

  const deleteTask = async () => {
    try {
      const response = await axios.delete(`/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })

      dispatch(addTasksData(response.data.list))
    } catch (error) {}
  }

  return { deleteTask }
}
