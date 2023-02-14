import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import MenuIcon from '../../icons/MenuIcon'

const Card = () => {
  return (
    <div className="w-screen h-screen">
      <div className="absolute top-9 right-10 mdl:hidden">
        <MenuIcon />
      </div>
      <div className="hidden mdl:block absolute">
        <Sidebar />
      </div>
      <div className="pt-24 pb-10 h-full bg-white w-full px-10 xs:px-16 mdl:pl-[28rem] mdl:pr-[4rem]">
        <Outlet />
      </div>
    </div>
  )
}

export default Card
