type SidebarItemProps = {
  text: string;
};

const SidebarItem = ({ text }: SidebarItemProps) => (
  <button className="w-full text-left p-2 hover:bg-slate-50 rounded-xl text-xl">
    {text}
  </button>
);

export default SidebarItem;
