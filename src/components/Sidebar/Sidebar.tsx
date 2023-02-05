import { Link } from 'react-router-dom'
import CalendarIcon from '../../icons/CalendarIcon'
import ClipboardIcon from '../../icons/ClipboardIcon'
import SunIcon from '../../icons/SunIcon'
import SidebarItem from '../Sidebar/SidebarItem'
import { useSignOut } from '../../pages/tasks/useSignOut'
import SignOutIcon from '../../icons/SignOutIcon'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const Sidebar: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks).filter(
    (task) => task.completed !== true
  )
  const { signOut } = useSignOut()

  return (
    <div className="w-96 h-screen text-[1.5rem] text-gray  fixed top-0 left-0 bg-black_main px-7 flex flex-col justify-between">
      <ul className="mt-20 flex flex-col gap-5 text-md">
        <li>
          <Link to="/tasks">
            <SidebarItem>
              <SunIcon />
              <span className="relative">My day</span>
              {tasks.length > 0 && (
                <span className="absolute right-11 text-[1.15rem]">
                  {tasks.length}
                </span>
              )}
            </SidebarItem>
          </Link>
        </li>

        <li>
          <Link to="/tasks/next-seven-days">
            <SidebarItem>
              <CalendarIcon />
              <span>Next 7 days</span>
            </SidebarItem>
          </Link>
        </li>

        <li>
          <Link to="/tasks/all">
            <SidebarItem>
              <ClipboardIcon />
              <span>All my tasks</span>
            </SidebarItem>
          </Link>
        </li>
      </ul>

      <button
        onClick={signOut}
        className="mb-10 flex items-center gap-5 border w-fit px-4 py-3 rounded-2xl border-main_purple hover:bg-dark_purple hover:text-white duration-300 ease-in-out"
      >
        <SignOutIcon />
        <p>Log out</p>
      </button>
    </div>
  )
}

export default Sidebar
