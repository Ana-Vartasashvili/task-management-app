import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { signUpSchema } from '../schemas/signUpSchema'

const onSubmit = () => {
  console.log('submitted')
}

const Register: React.FC = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
      },
      validationSchema: signUpSchema,
      onSubmit,
    })

  return (
    <div className="h-screen flex items-center bg-black">
      <div className="w-4/6 h-4/5 py-24 mx-auto flex items-center justify-center rounded-[2.5rem] bg-register_card_color">
        <div>
          <h1 className="text-5xl font-bold text-center text-register_card_font_color">
            Sign up
          </h1>

          <form
            onSubmit={handleSubmit}
            className="mt-10 m-auto flex flex-col items-center w-[32rem]  gap-7"
          >
            <div className="w-full">
              <input
                type="text"
                id="first_name"
                placeholder="First name"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`outline-none w-full px-8 py-5 rounded-2xl border-[2px] focus:border-lightBlue ${
                  errors.first_name &&
                  touched.first_name &&
                  'border-red placeholder:text-red placeholder:opacity-70'
                }`}
              />

              {errors.first_name && touched.first_name && (
                <p className="p-0 mt-1 text-[1.3rem] text-red">
                  {errors.first_name}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                type="text"
                id="last_name"
                placeholder="Last name"
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`outline-none w-full px-8 py-5 rounded-2xl border-[2px] focus:border-lightBlue ${
                  errors.last_name &&
                  touched.last_name &&
                  'border-red placeholder:text-red placeholder:opacity-70'
                }`}
              />

              {errors.last_name && touched.last_name && (
                <p className="p-0 mt-1 text-[1.3rem] text-red">
                  {errors.last_name}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`outline-none w-full px-8 py-5 rounded-2xl border-[2px] focus:border-lightBlue ${
                  errors.email &&
                  touched.email &&
                  'border-red placeholder:text-red placeholder:opacity-70'
                }`}
              />

              {errors.email && touched.email && (
                <p className="p-0 mt-1 text-[1.3rem] text-red">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`outline-none w-full px-8 py-5 rounded-2xl border-[2px] focus:border-lightBlue ${
                  errors.password &&
                  touched.password &&
                  'border-red placeholder:text-red placeholder:opacity-70'
                }`}
              />

              {errors.password && touched.password && (
                <p className="p-0 mt-1 text-[1.3rem] text-red">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                type="password"
                id="confirm_password"
                placeholder="Password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`outline-none w-full px-8 py-5 rounded-2xl border-[2px] focus:border-lightBlue ${
                  errors.confirm_password &&
                  touched.confirm_password &&
                  'border-red placeholder:text-red placeholder:opacity-70'
                }`}
              />

              {errors.confirm_password && touched.confirm_password && (
                <p className="p-0 mt-1 text-[1.3rem] text-red">
                  {errors.confirm_password}
                </p>
              )}
            </div>

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
