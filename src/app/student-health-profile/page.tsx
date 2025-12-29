import React from "react";
import "@/app/styles/student.health.profile.css";
import { Sidebar } from "@/app/components/Sidebar";
import { StudentHealthProfileHeader } from "@/app/components/StudentHealthProfileHeader";
import { StudentHealthProfile } from "@/app/components/StudentHealthProfile";

export default function Page() {
  return (
    <>
      <StudentHealthProfileHeader />

      <div className="main-content bg-gray-50 min-h-screen">
        <Sidebar />

        <main>
          {/* Expanded Profile */}
          <StudentHealthProfile />

          {/* Footer */}
          <div className="mt-4 text-sm text-gray-600">
            Rows per page: 10 | 1–5 of 13
          </div>
        </main>
      </div>
    </>
  );
}