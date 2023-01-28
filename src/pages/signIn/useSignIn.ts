import { signInSchema } from '../../schemas/signInSchema'
import axios from '../../services/axios'
import { LoginInputValues } from '../types'
import { notify } from '../../helpers/notify'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

export const useSignIn = () => {
  const navigate = useNavigate()

  const onSubmit = async (values: LoginInputValues, { setFieldError }: any) => {
    try {
      const response = await axios.post('/auth/sign-in', values)

      if (response.status === 200) {
        localStorage.setItem('token', response.data.accessToken)
        navigate('/')
      }
    } catch (error: any) {
      const errorMessage = error.response.data.message

      if (errorMessage) {
        notify(errorMessage)
        setFieldError('email', 'Credentials are incorrect')
        setFieldError('password', 'Credentials are incorrect')
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
