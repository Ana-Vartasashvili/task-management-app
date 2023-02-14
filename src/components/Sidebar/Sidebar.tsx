import { Link } from 'react-router-dom'
import SunIcon from '../../icons/SunIcon'
import XIcon from '../../icons/XIcon'
import SignOutIcon from '../../icons/SignOutIcon'
import ClipboardIcon from '../../icons/ClipboardIcon'
import { useSignOut } from '../../pages/tasks/useSignOut'

const Sidebar: React.FC<{ handleIsVisible: () => void }> = ({
  handleIsVisible,
}) => {
  const { signOut } = useSignOut()

  return (
    <div className="w-screen h-screen bg-black_main px-10 mdl:hidden">
      <div className="text-white">
        <div
          className="w-14 h-14 absolute top-6 right-8"
          onClick={handleIsVisible}
        >
          <XIcon />
        </div>

        <div className=" flex flex-col items-start mt-36 gap-5 w-full">
          <div className="flex flex-col gap-3 w-full">
            <div className="w-full">
              <Link
                to="/tasks"
                className="flex gap-5 items-center px-3 py-8 border-b-[1px] border-textColor_gray"
                onClick={handleIsVisible}
              >
                <div className="w-10 h-10">
                  <SunIcon />
                </div>
                <span className="relative">My day</span>
              </Link>
            </div>

            <Link
              to="/tasks/all"
              className="flex gap-5 items-center px-3 py-8 border-b-[1px] border-textColor_gray"
              onClick={handleIsVisible}
            >
              <div className="w-10 h-10">
                <ClipboardIcon />
              </div>
              <span className="relative">All my tasks</span>
            </Link>

            <button
              onClick={signOut}
              className="flex items-center gap-5 px-3 py-8 border-b-[1px] border-textColor_gray"
            >
              <div className="w-10 h-10">
                <SignOutIcon />
              </div>
              <p>Log out</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
