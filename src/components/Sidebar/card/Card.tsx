import Sidebar from '../Sidebar'

const Card: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div>
      <Sidebar />
      <div className="ml-120 ">{props.children}</div>
    </div>
  )
}

export default Card
