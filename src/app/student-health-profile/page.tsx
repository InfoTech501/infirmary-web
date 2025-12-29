import React from "react";
import { Sidebar } from "@/app/components/Sidebar";
import { StudentHealthProfileHeader } from "@/app/components/StudentHealthProfileHeader";
import { StudentHealthProfile } from "@/app/components/StudentHealthProfile";

export default function Page() {
  return (
    <>
      <StudentHealthProfileHeader />

      <div className="layout-container bg-white-50 min-h-screen flex">
        <Sidebar />

        <main className="content-area flex-grow overflow-auto p-6">
          <div className="w-full max-w-screen-xl mx-auto">
            <StudentHealthProfile />
          </div>
        </main>
      </div>
    </>
  );
}