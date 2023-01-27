import { Link, Navigate } from 'react-router-dom'
import AuthFormInput from '../../components/authForm/AuthFormInput'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AuthFormCard from '../../components/authForm/AuthFormCard'
import { useSignUp } from './useSignUp'

const SignUp: React.FC = () => {
  const { handleSubmit, formikFields, isSubmitting } = useSignUp()

  return (
    <AuthFormCard>
      <div>
        <h1 className="text-4xl font-bold text-center text-SignUp_card_font_color">
          Sign up
        </h1>

        <ToastContainer />
        <form
          onSubmit={handleSubmit}
          className="mt-7 m-auto flex flex-col items-center w-[32rem]  gap-6"
        >
          <AuthFormInput
            id="first_name"
            placeholder="First name"
            formikFields={formikFields}
          />

          <AuthFormInput
            id="last_name"
            placeholder="Last name"
            formikFields={formikFields}
          />

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

          <AuthFormInput
            id="password_confirmation"
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
            Sign up
          </button>
        </form>

        <p className="text-center mt-5 text-sm">
          Already signed up?{' '}
          <Link to="/sign-in" className="underline">
            Sign in
          </Link>
        </p>
      </div>
    </AuthFormCard>
  )
}

export default SignUp
