import SidebarItem from "./components/SidebarItem";

const Sidebar = () => {
  return (
    <div className="p-5 w-1/5 flex flex-col gap-4">
      <h2 className="text-3xl font-bold">Song List</h2>
      <div className="w-full space-y-4">
        <SidebarItem text="Home" />
        <SidebarItem text="Masses" />
        <SidebarItem text="Events" />
        <SidebarItem text="Repertoire" />
        <SidebarItem text="Settings" />
      </div>
    </div>
  );
};

export default Sidebar;
