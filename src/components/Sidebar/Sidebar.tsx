import { Link } from 'react-router-dom'
import CalendarIcon from '../../icons/CalendarIcon'
import ClipboardIcon from '../../icons/ClipboardIcon'
import SunIcon from '../../icons/SunIcon'
import SidebarItem from '../Sidebar/SidebarItem'
import LogoutIcon from '../../icons/LogoutIcon'

const Sidebar: React.FC = () => {
  return (
    <div className="w-96 h-screen text-[1.5rem] text-textColor_gray  fixed top-0 left-0 bg-black_main px-7 flex flex-col justify-between">
      <ul className="mt-20 flex flex-col gap-5 text-md">
        <li>
          <Link to="/tasks">
            <SidebarItem>
              <SunIcon />
              <span>My day</span>
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

      <div className="mb-10 flex items-center gap-5">
        <LogoutIcon />
        <p>Log out</p>
      </div>
    </div>
  )
}

export default Sidebar
