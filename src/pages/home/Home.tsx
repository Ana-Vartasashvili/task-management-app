import { Link } from 'react-router-dom'
import homePageIllustration from '../../illustrations/Analythics.png'

const Home = () => {
  return (
    <div className="h-fit w-screen bg-black_main px-14 py-20 lg:px-24 lg:h-screen lg:flex lg:flex-col lg:overflow-x-hidden lg:pb-16">
      <div className="hidden text-right lg:block">
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

      <div className="flex flex-col w-full items-start justify-between mt-5 lg:flex-row lg:items-start lg:gap-14">
        <div className="w-full flex flex-col gap-7 items-center lg:items-start">
          <h1 className="text-white text-[3.5rem]  text-center font-medium leading-tight mt-5 max-w-[40rem] sm:text-[6rem] sm:max-w-[50rem]">
            Manage your tasks easily with Todoer
            <span className="text-main_purple">!</span>
          </h1>

          <p className="text-[1.5rem] max-w-lg text-textColor_lightGray text-center sm:text-[2rem] sm:max-w-2xl">
            Todoer helps you create and manage tasks in one convenient place.
          </p>

          <div className="mt-10 lg:mt-28">
            <Link
              to={'/sign-up'}
              className="bg-main_purple text-white py-5 px-8 text-[1.5rem] rounded-xl hover:bg-dark_purple hover:duration-300 ease-in-out sm:text-[2rem]"
            >
              Get started
            </Link>
          </div>
        </div>

        <div className="w-full mb-10 mt-28 md:w-4/5 mx-auto">
          <img
            src={homePageIllustration}
            alt="simple illustration of a boy and diagrams"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
