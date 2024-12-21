import { NavLink } from "react-router-dom";

type SidebarItemProps = {
  text: string;
  path: string;
};

const SidebarItem = ({ text, path }: SidebarItemProps) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      `w-full text-left p-2 rounded-xl text-xl block transition-colors
        ${isActive ? "bg-slate-100 font-medium" : "hover:bg-slate-50"}`
    }
  >
    {text}
  </NavLink>
);

export default SidebarItem;
