import React from 'react'
import {Bell, UserCircle2Icon, ChevronDown } from 'lucide-react';


const topbar = () => {
  return (
    <header className="fixed top-0 left-60 right-0 bg-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-3xl font-bold text-blue-950">Dashboard</h1>
      <div className="flex items-center gap-6">
        <button className="relative bg-yellow-100 p-2 rounded-xl hover:bg-yellow-200">
          <Bell />
        </button>

        <button className="flex items-center gap-2 hover:bg-gray-200 rounded-full px-2 py-1">
          <UserCircle2Icon size={30} />
          <div>
            <p className="text-sm font-medium">Mrs. Adviser Dela Cruz</p>
            <p className="text-xs text-gray-500">Adviser</p>
          </div>
          <ChevronDown />
        </button>
      </div>
    </header>
  )
}

export default topbar