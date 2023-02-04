const SidebarItem: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className="flex gap-5 items-center px-3 py-2  rounded-[5px] hover:bg-dark_purple hover:text-white transition ease-in-out duration-300">
      {props.children}
    </div>
  )
}

export default SidebarItem
