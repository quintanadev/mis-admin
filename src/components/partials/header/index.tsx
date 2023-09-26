import { MdNotificationsNone, MdOutlineAccountCircle, MdSettings, MdMenu } from "react-icons/md"

export default function Header() {
  return (
    <header className="h-16 px-6 py-2 bg-gray-900 flex justify-between items-center text-gray-300">
      <button>
        <MdMenu size={24} />
      </button>
      <div className="flex justify-end items-center gap-4">
        <button className="w-12 h-12 p-1 flex justify-center items-center">
          <MdNotificationsNone size={24} />
        </button>
        <button className="w-12 h-12 p-1 flex justify-center items-center">
          <MdOutlineAccountCircle size={24} />
        </button>
        <button className="w-12 h-12 p-1 flex justify-center items-center">
          <MdSettings size={24} />
        </button>
      </div>
    </header>
  )
}