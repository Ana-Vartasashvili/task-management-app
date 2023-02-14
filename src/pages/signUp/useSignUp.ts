import { useFormik } from 'formik'
import { signUpSchema } from '../../schemas/signUpSchema'
import { SignUpInputValues } from '../types'
import axios from '../../services/axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export const useSignUp = () => {
  const navigate = useNavigate()

  const onSubmit = async (values: SignUpInputValues, { resetForm }: any) => {
    try {
      const response = await axios.post('/auth/sign-up', values)
      if (response.status === 201) {
        navigate('/signed-up')
      }
      resetForm({ values: '' })
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
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
    validationSchema: signUpSchema,
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
