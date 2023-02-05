import Sidebar from '../Sidebar/Sidebar'

const Card: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div>
      <Sidebar />
      <div className="ml-96 mt-24">{props.children}</div>
    </div>
  )
}

export default Card
