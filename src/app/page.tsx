import React from "react";
import Topbar from "./components/topbar";
import Dashboard from "./pages/dashboard";
import {PieChart, UserCog2Icon, LucideBellRing} from 'lucide-react';

export default function Home({children,}: {children: React.ReactNode;}) {
  return (
    <div className="lg:flex">
      <Topbar />
      <Dashboard />

      {/* sidebar - to be change for navigation */}
      <aside className="w-60 h-screen fixed top-0 left-0 bg-white p-4 shadow-md z-10 drop-shadow-2xl">
      <nav className="space-y-4 mt-4">
        <button className="block size-full h-15 rounded-md text-gray-600 hover:bg-gray-200 active:bg-green-700 px-4 py-2 font-medium">
            <PieChart className="absolute" />
            Dashboard
        </button>
        <button className="block size-full h-15 rounded-md px-4 py-2 text-gray-600 hover:bg-gray-200 active:bg-green-700 font-medium">
            <UserCog2Icon className="absolute place-items-start"/>
            <p>Student Health </p>  
            <p>Profile </p>
        </button>
        <button className="block size-full h-15 rounded-md px-4 py-2 text-gray-600 hover:bg-gray-200 active:bg-green-700 font-medium">
            <LucideBellRing className="absolute"/>
            Contact Nurse
        </button>
      </nav>
    </aside>
    </div>
  );
}