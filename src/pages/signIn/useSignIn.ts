import { signInSchema } from '../../schemas/signInSchema'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import axios from '../../services/axios'
import { useState } from 'react'
import { LoginInputValues } from '../types'
import { notify } from '../../helpers/notify'

export const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (values: LoginInputValues, { setFieldError }: any) => {
    try {
      const response = await axios.post('/auth/sign-in', values)
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
