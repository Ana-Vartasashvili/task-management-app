import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

const Card = () => {
  return (
    <div>
      <Sidebar />
      <div className="ml-96 pt-24 h-screen bg-white">
        <Outlet />
      </div>
    </div>
  )
}

export default Card
