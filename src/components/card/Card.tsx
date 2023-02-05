import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

const Card = () => {
  return (
    <div>
      <Sidebar />
      <div className="ml-96 mt-24">{<Outlet />}</div>
    </div>
  )
}

export default Card
