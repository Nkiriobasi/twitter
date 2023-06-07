import { IconType } from "react-icons"

interface SidebarItemProps {
    label: string
    href?: string
    icon: IconType
    onClick?: () => void
}

const SidebarItem: React.FC<SidebarItemProps> = ({label, href, icon: Icon, onClick}) => {
  return (
    <div className="flex flex-row items-center">
        <div className="relative lg:hidden flex items-center justify-center h-14 w-14 rounded-full p-4 hover:bg-slate-700 hover:bg-opacity-10 cursor-pointer">
            <Icon size={28} color="white" />
        </div>
        <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-700 hover::bg-opacity-10 cursor-pointer">
            <Icon size={28} color="white" />
            <p className="hidden lg:block text-white text-xl">
                {label}
            </p>
        </div>
    </div>
  )
}

export default SidebarItem