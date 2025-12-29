import React from 'react'
import Link from "next/link";
import {PieChart, UserCog2Icon, LucideBellRing} from 'lucide-react'

export function Sidebar() {
  return (
    <div className="lg:flex">
      <aside className="w-60 h-screen fixed top-0 left-0 bg-white p-4 shadow-md z-10 drop-shadow-2xl">
        <nav className="space-y-4 mt-4">
          <Link href='/' className="flex items-center space-x-3 size-full h-15 rounded-md text-gray-600 hover:bg-gray-200 active:bg-green-700 px-4 py-2 font-medium">
              <PieChart className="w-5 h-5" />
              <span>Dashboard</span>
          </Link>
          
          <Link href='/student-health-profile' className="flex items-center space-x-3 size-full h-15 rounded-md px-4 py-2 text-gray-600 hover:bg-gray-200 active:bg-green-700 font-medium">
              <UserCog2Icon className="w-5 h-5" />
              <span>Student Health Profile</span>
          </Link>

          <Link href='/contacts' className="flex items-center space-x-3 size-full h-15 rounded-md px-4 py-2 text-gray-600 hover:bg-gray-200 active:bg-green-700 font-medium">
              <LucideBellRing className="w-5 h-5"/>
              <span>Contact Nurse</span>
          </Link>
        </nav>
      </aside>
    </div>
  )
}