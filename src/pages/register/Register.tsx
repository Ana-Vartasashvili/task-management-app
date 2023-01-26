import { useFormik, FormikHelpers } from 'formik'
import { Link } from 'react-router-dom'
import { signUpSchema } from '../../schemas/signUpSchema'
import FormInput from './FormInput'
import axios from '../../services/axios'
import { RegisterInputValues } from '../types'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register: React.FC = () => {
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const onSubmit = async (values: RegisterInputValues, { resetForm }: any) => {
    try {
      const response = await axios.post('/auth/sign-up', values)
      setSuccessMessage(response.data)
      resetForm({ values: '' })
    } catch (error: any) {
      setError(error.response.data.message)
      notify()
    }
  }

  const notify = () =>
    toast.error(error, {
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
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
    validationSchema: signUpSchema,
    onSubmit,
  })

  return (
    <div className="h-screen flex items-center bg-black">
      <ToastContainer />
      <div className="w-4/6 h-4/5 py-24 mx-auto flex items-center justify-center rounded-[2.5rem] bg-register_card_color">
        <div>
          <h1 className="text-5xl font-bold text-center text-register_card_font_color">
            Sign up
          </h1>

          <form
            onSubmit={handleSubmit}
            className="mt-10 m-auto flex flex-col items-center w-[32rem]  gap-7"
          >
            <FormInput
              id="first_name"
              placeholder="First name"
              value={values.first_name}
              errors={errors.first_name}
              touched={touched.first_name}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <FormInput
              id="last_name"
              placeholder="Last name"
              value={values.last_name}
              errors={errors.last_name}
              touched={touched.last_name}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <FormInput
              id="email"
              type="email"
              placeholder="Email"
              value={values.email}
              errors={errors.email}
              touched={touched.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <FormInput
              id="password"
              type="password"
              placeholder="Password"
              value={values.password}
              errors={errors.password}
              touched={touched.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <FormInput
              id="password_confirmation"
              type="password"
              placeholder="Password"
              value={values.password_confirmation}
              errors={errors.password_confirmation}
              touched={touched.password_confirmation}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <button
              disabled={isSubmitting}
              type="submit"
              className={`w-full bg-lightBlue px-8 py-4 rounded-2xl text-white font-semibold hover:bg-lightBlue_hover hover:transition duration-300 ease-in-out ${
                isSubmitting && 'opacity-30 cursor-not-allowed'
              }`}
            >
              Sign up
            </button>
          </form>

          <p className="text-center mt-6 ">
            Already signed up?{' '}
            <Link to="/login" className="underline">
              Go to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
