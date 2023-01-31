const SidebarItem: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className="flex gap-5 items-center px-4 py-1 rounded-md hover:bg-main_purple transition ease-in-out duration-300">
      {props.children}
    </div>
  )
}

export default SidebarItem
