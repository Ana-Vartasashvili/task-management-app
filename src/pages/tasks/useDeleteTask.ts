import { useDispatch } from 'react-redux'
import axios from '../../services/axios'
import { addTasksData } from '../../store/tasksSlice'
import { notify } from '../../helpers/notify'
import toast from 'react-hot-toast'

export const useDeleteTask = (id: string) => {
  const dispatch = useDispatch()

  const deleteTask = async () => {
    try {
      const response = await axios.delete(`/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })

      dispatch(addTasksData(response.data.list.reverse()))
    } catch (error: any) {
      const errorMessage = error.response.data.message

      if (errorMessage) {
        toast.error(errorMessage)
      }
    }
  }

  return { deleteTask }
}
