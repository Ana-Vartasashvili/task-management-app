import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

const Register: React.FC = () => {
  return (
    <div className="h-screen flex items-center bg-black">
      <div className="w-4/6 h-4/5 py-24 mx-auto flex items-center justify-center rounded-[2.5rem] bg-register_card_color">
        <div>
          <h1 className="text-5xl font-bold text-center text-register_card_font_color">
            Sign up
          </h1>
          <form className="mt-10 m-auto flex flex-col items-center w-[32rem]  gap-7">
            <input
              type="text"
              id="firstName"
              placeholder="First name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-8 py-5 rounded-2xl"
            />

            <input
              type="text"
              id="lastName"
              placeholder="Last name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-8 py-5 rounded-2xl"
            />

            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-8 py-5 rounded-2xl"
            />

            <input
              type="password"
              id="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-8 py-5 rounded-2xl"
            />

            <input
              type="password"
              id="confirmPassword"
              placeholder="Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-8 py-5 rounded-2xl"
            />

            <button
              type="submit"
              className="w-full bg-lightBlue px-8 py-4 rounded-2xl text-white font-semibold hover:bg-lightBlue_hover hover:transition duration-300 ease-in-out"
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
