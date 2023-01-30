import { Link } from 'react-router-dom'
import homePageIllustration from '../../illustrations/girl_working.png'

const Home = () => {
  return (
    <div className="h-screen w-screen bg-black_main px-20 py-14">
      <div className="text-right">
        <Link
          to={'sign-in'}
          className="text-white font-light mr-8 border-[1.9px] rounded-xl border-black_main px-6 py-4 hover:border-main_purple hover: duration-300 ease-in-out"
        >
          Sign in
        </Link>

        <Link
          to={'sign-up'}
          className="text-white bg-main_purple px-6 py-4 rounded-xl hover:bg-dark_purple hover:duration-300 ease-in-out"
        >
          Sign up
        </Link>
      </div>

      <div className="flex items-start justify-between mt-14">
        <div className="w-[55rem]">
          <h1 className="text-white text-[7rem] font-medium leading-tight">
            Manage your tasks easily with Todoer
            <span className="text-main_purple">!</span>
          </h1>

          <p className="text-[1.8rem] mb-16 text-textColor_lightGray">
            Todoer helps you create and manage tasks in one convenient place.
          </p>

          <div>
            <Link
              to={'/sign-up'}
              className="bg-main_purple text-white py-6 px-12 text-[1.8rem] rounded-xl hover:bg-dark_purple hover:duration-300 ease-in-out"
            >
              Get started
            </Link>
          </div>
        </div>

        <div className="w-[44rem]">
          <img
            src={homePageIllustration}
            alt="girl working on computer illustration"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
