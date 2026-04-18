import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { StudentHealthProfile } from "@/components/student-health-profile/StudentHealthProfile";

export default function Page() {
  return (
    <>
      <Header />

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