import { Link } from 'react-router-dom'
import { SideBarItemProps } from './types'

const SidebarItem: React.FC<SideBarItemProps> = (props) => {
  return (
    <Link
      to={props.path}
      className={`flex gap-5 items-center px-3 py-2  rounded-[5px] hover:bg-main_purple hover:text-white transition ease-in-out duration-300 ${
        props.currentPath === props.path && 'bg-main_purple text-white'
      }`}
    >
      {props.children}
    </Link>
  )
}

export default SidebarItem
