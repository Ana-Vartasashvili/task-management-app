import { signInSchema } from '../../schemas/signInSchema'
import axios from '../../services/axios'
import { LoginInputValues } from '../types'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { useGetTasks } from '../tasks/useGetTasks'
import toast from 'react-hot-toast'

export const useSignIn = () => {
  const navigate = useNavigate()
  const { getTasks } = useGetTasks()

  const onSubmit = async (values: LoginInputValues, { setFieldError }: any) => {
    try {
      const response = await axios.post('/auth/sign-in', values)

      if (response.status === 200) {
        localStorage.setItem('token', response.data.accessToken)
        getTasks()
        navigate('/tasks')
      }
    } catch (error: any) {
      const errorMessage = error.response.data.message

      if (errorMessage) {
        toast.error(errorMessage)
      }
    }
  }

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit,
  })

  const formikFields = {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
  }

  return {
    handleSubmit,
    formikFields,
    isSubmitting,
  }
}
