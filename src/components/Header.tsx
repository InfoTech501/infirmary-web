"use client"

import { useEffect, useState } from "react"
import { Bell, UserCircle2Icon } from "lucide-react"
import Link from "next/link"
import { getCurrentUser } from "@/services/authService"

export function Header() {
  const [currentUser, setCurrentUser] = useState<any>(null)

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        // Paste token here
        const token =
          "token"

        const user = await getCurrentUser(token);

        setCurrentUser(user);
      } catch (err) {
        console.error(err);
      }
    }

    fetchCurrentUser()
  }, [])

  return (
    <nav className="fixed top-0 left-60 right-0 bg-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-3xl font-bold text-blue-950">Dashboard</h1>
      <div className="flex items-center gap-6">
        <Link
          href="/notification"
          className="relative bg-yellow-100 p-2 rounded-xl hover:bg-yellow-200"
        >
          <Bell />
        </Link>

        <Link
          href="/account"
          className="flex items-center gap-2 hover:bg-gray-200 rounded-full px-2 py-1"
        >
          <UserCircle2Icon size={30} />
          {currentUser && (
              <div>
              <p className="text-sm font-medium">
                Ms. {currentUser.employee.person.firstName}{" "} 
                {currentUser.employee.person.middleName}{" "}
                {currentUser.employee.person.lastName}
              </p>
              <p className="text-xs text-gray-500">Adviser</p>
              </div>
            )}
        </Link>
      </div>
    </nav>
  )
}
