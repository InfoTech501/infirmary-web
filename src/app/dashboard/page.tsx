import React from "react";
import { StudentListTable } from "../../components/dashboard/StudentListTable";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import MainLayout from "../../components/layout/MainLayout";
import { ChartNoAxesCombinedIcon } from "lucide-react";

const currentDate = new Date();

const formattedDate = currentDate.toLocaleDateString("en-Ph", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const adviser = {
  name: "Mrs. Jean C. Dela Cruz",
  grade: 9,
  section: "Gumamela",
};

export default function Dashboard() {
  return (
    <main>
      <MainLayout />
      <div className="pl-65 pt-20 px-6 py-8 flex flex-col">
        <div className="w-full flex justify-between items-start">
          <div className="max-w-3xl">
            <h2 className="text-gray-950 text-3xl font-semibold">
              Welcome to TCSNHS Infirmary System!
            </h2>

            <h2 className="text-gray-950 text-2xl font-semibold mt-2">
              {adviser.name}
            </h2>

            <p className="text-gray-950 text-sm mt-1">
              Adviser of Grade {adviser.grade} {adviser.section}{" "}
            </p>
          </div>

          <div className="text-right pr-6">
            <p className="text-gray-950 text-lg font-normal">{formattedDate}</p>
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-8">
          <section className="summary-report flex-1 pb-4">
            <h3 className="text-gray-950 font-semibold mb-3">
              Today's Summary Report
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center justify-between bg-green-100 p-4 rounded-xl">
                <div>
                  <p className="text-2xl font-bold p-1">#</p>
                  <p className="text-sm text-gray-600 pl-1 pt-1 pb-2 pr-3.5">
                    Clinic Visitors from this section
                  </p>
                </div>
                <ChartNoAxesCombinedIcon size={35} />
              </div>
            </div>
          </section>

          <section className="class-table-lists flex-1">
            <h3 className="text-gray-950 font-semibold mb-3">
              List of students
            </h3>
            <StudentListTable />
          </section>
        </div>
      </div>
    </main>
  );
}
