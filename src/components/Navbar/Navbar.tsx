import { useLocation } from 'react-router-dom'
import ClipboardIcon from '../../icons/ClipboardIcon'
import SunIcon from '../../icons/SunIcon'
import { useSignOut } from '../../pages/tasks/useSignOut'
import SignOutIcon from '../../icons/SignOutIcon'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import NavbarItem from './NavbarItem'

const Navbar: React.FC = () => {
  const allTasks = useSelector((state: RootState) => state.tasks?.tasks)
  const uncompletedTasks = allTasks.filter((task) => task?.completed !== true)
  const { signOut } = useSignOut()

  const currentPath = useLocation().pathname

  return (
    <div className="w-96 h-screen text-[1.5rem] text-gray  fixed top-0 left-0 bg-black_main px-7 flex flex-col justify-between">
      <ul className="mt-20 flex flex-col gap-3 text-md">
        <li>
          <NavbarItem path="/tasks" currentPath={currentPath}>
            <div className="w-9 h-9">
              <SunIcon />
            </div>
            <span className="relative">My day</span>
            {uncompletedTasks.length > 0 && (
              <span className="absolute right-11 text-[1.15rem]">
                {uncompletedTasks.length}
              </span>
            )}
          </NavbarItem>
        </li>

        <li>
          <NavbarItem path="/tasks/all" currentPath={currentPath}>
            <div className="w-9 h-9">
              <ClipboardIcon />
            </div>
            <span>All my tasks</span>
            {uncompletedTasks.length > 0 && (
              <span className="absolute right-11 text-[1.15rem]">
                {uncompletedTasks.length}
              </span>
            )}
          </NavbarItem>
        </li>
      </ul>

      <button
        onClick={signOut}
        className="mb-14 flex items-center gap-5 border w-fit px-4 py-3 rounded-2xl border-main_purple hover:bg-dark_purple hover:text-white duration-300 ease-in-out"
      >
        <div className="w-8 h-8">
          <SignOutIcon />
        </div>
        <p>Log out</p>
      </button>
    </div>
  )
}

export default Navbar
