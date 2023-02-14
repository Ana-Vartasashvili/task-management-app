import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addTasksData } from '../../store/tasksSlice'

export const useSignOut = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const signOut = () => {
    localStorage.removeItem('token')
    dispatch(addTasksData([]))
    navigate('/sign-in')
  }

  return { signOut }
}
