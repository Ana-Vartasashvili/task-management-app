import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import MenuIcon from '../../icons/MenuIcon'
import { useState, useEffect } from 'react'
import Sidebar from '../sidebar/Sidebar'

const Card = () => {
  const navigate = useNavigate()
  const [sidebarIsVisible, setSidebarIsVisible] = useState(false)
  const toggleNavbar = () => {
    setSidebarIsVisible((prevState) => !prevState)
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      return navigate('/sign-in')
    }
  }, [])

  return (
    <div className="w-full h-full bg-white">
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

      <div className="pt-24 pb-20 h-screen overflow-y-auto bg-white w-full px-10 xs:px-16 mdl:pl-[28rem] mdl:pr-[4rem]">
        <Outlet />
      </div>
    </div>
  )
}

export default Card
