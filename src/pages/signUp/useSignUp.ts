import { useFormik } from 'formik'
import { signUpSchema } from '../../schemas/signUpSchema'
import { notify } from '../../helpers/notify'
import { SignUpInputValues } from '../types'
import { useState } from 'react'
import axios from '../../services/axios'

export const useSignUp = () => {
  const [successMessage, setSuccessMessage] = useState('')

  const onSubmit = async (values: SignUpInputValues, { resetForm }: any) => {
    try {
      const response = await axios.post('/auth/sign-up', values)
      setSuccessMessage(response.data)
      resetForm({ values: '' })
    } catch (error: any) {
      const errorMessage = error.response.data.message
      if (errorMessage) {
        notify(errorMessage)
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
