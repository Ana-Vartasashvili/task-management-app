const SidebarItem: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className="flex gap-12 items-center px-6 py-5 rounded-3xl hover:bg-lightPurple transition ease-in-out duration-300">
      {props.children}
    </div>
  );
};

export default SidebarItem;
