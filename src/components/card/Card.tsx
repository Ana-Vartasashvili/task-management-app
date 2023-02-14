import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import MenuIcon from '../../icons/MenuIcon'
import { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'

const Card = () => {
  const [sidebarIsVisible, setSidebarIsVisible] = useState(false)
  const toggleNavbar = () => {
    setSidebarIsVisible((prevState) => !prevState)
  }

  return (
    <div className="w-screen h-screen">
      {!sidebarIsVisible && (
        <div
          className="absolute top-6 right-8 mdl:hidden"
          onClick={toggleNavbar}
        >
          <MenuIcon />
        </div>
      )}

      {sidebarIsVisible && <Sidebar handleIsVisible={toggleNavbar} />}

      <div className="hidden mdl:block absolute">
        <Navbar />
      </div>

      <div className="pt-24 pb-10 h-full bg-white w-full px-10 xs:px-16 mdl:pl-[28rem] mdl:pr-[4rem]">
        <Outlet />
      </div>
    </div>
  )
}

export default Card
