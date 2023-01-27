import { useFormik } from 'formik'
import AuthFormCard from '../../components/authForm/AuthFormCard'
import AuthFormInput from '../../components/authForm/AuthFormInput'
import { LoginInputValues } from '../types'
import axios from '../../services/axios'
import { signInSchema } from '../../schemas/signInSchema'
import { toast, ToastContainer } from 'react-toastify'
import { useState } from 'react'

const Login: React.FC = () => {
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

  const notify = (message: string) =>
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
    })

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

  return (
    <AuthFormCard>
      <div>
        <h1 className="text-4xl font-bold text-center text-SignUp_card_font_color">
          Log in
        </h1>

        <ToastContainer />
        <form
          onSubmit={handleSubmit}
          className="mt-7 m-auto flex flex-col items-center w-[32rem]  gap-6"
        >
          <AuthFormInput
            id="email"
            type="email"
            placeholder="Email"
            formikFields={formikFields}
          />

          <AuthFormInput
            id="password"
            type="password"
            placeholder="Password"
            formikFields={formikFields}
          />

          <button
            disabled={isSubmitting}
            type="submit"
            className={`w-full bg-lightBlue px-8 py-4 rounded-2xl text-white font-semibold hover:bg-lightBlue_hover hover:transition duration-300 ease-in-out ${
              isSubmitting && 'opacity-30 cursor-not-allowed'
            }`}
          >
            Sign in
          </button>
        </form>
      </div>
    </AuthFormCard>
  )
}

export default Login
