import AuthFormCard from '../../components/authForm/AuthFormCard'
import AuthFormInput from '../../components/authForm/AuthFormInput'
import { ToastContainer } from 'react-toastify'
import { useSignIn } from './useSignIn'

const Login: React.FC = () => {
  const { handleSubmit, formikFields, isSubmitting } = useSignIn()

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
