import Image from "next/image"
import Link from "next/link"
import { MdOutlineDashboard , MdSupervisorAccount, MdAdminPanelSettings, MdOutlineHome } from "react-icons/md"

export default function Aside() {
  return (
    <aside className="w-60 w-min-60 w-max-60 bg-purple-900 text-gray-300 flex flex-col">
      <div className="h-16 px-6 py-2 flex justify-center items-center">
        <Image
          src="/images/logos/logo.svg"
          width={100}
          height={33}
          alt=""
          className="my-4"
        />
      </div>
      <div className="px-4 py-1">
        <ul>
          <li className="p-1 my-2">
            <Link
              href="/home"
              className="flex"
            >
              <span><MdOutlineHome size={24} /></span>
              <p className="pl-2"> Home </p>
            </Link>
          </li>
          <li className="p-1 my-2">
            <Link
              href="/dashboard"
              className="flex"
            >
              <span><MdOutlineDashboard size={24} /></span>
              <p className="pl-2"> Dashboard </p>
            </Link>
          </li>
          <li className="p-1 my-2">
            <Link
              href="/users"
              className="flex"
            >
              <span><MdSupervisorAccount size={24} /></span>
              <p className="pl-2"> Usuários </p>
            </Link>
          </li>
          <li className="p-1 my-2">
            <Link
              href="/admin"
              className="flex"
            >
              <span><MdAdminPanelSettings size={24} /></span>
              <p className="pl-2"> Administração </p>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}