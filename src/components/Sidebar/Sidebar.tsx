import { Link } from 'react-router-dom'
import CalendarIcon from '../../icons/CalendarIcon'
import ClipboardIcon from '../../icons/ClipboardIcon'
import SunIcon from '../../icons/SunIcon'
import SidebarItem from '../Sidebar/SidebarItem'

const Sidebar: React.FC = () => {
  return (
    <div className="w-120 h-screen absolute top-0 left-0 text-white bg-darkBlue px-10 ">
      <ul className="mt-40 flex flex-col gap-20 text-2xl">
        <li>
          <Link to="/">
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
    </div>
  )
}

export default Sidebar
