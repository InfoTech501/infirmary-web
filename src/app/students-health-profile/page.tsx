"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SearchBar from "@/components/Searchbar";

interface Student {
  studentId: number;
  fullName: string;
  lrn: string;
  section: string;
  gradeLevel: string;
  adviser: string | null;
}

const mockStudentsHealthProfile: Student[] = [
  {
    studentId: 1,
    fullName: "John Doe",
    lrn: "109152648294",
    section: "Gumamela",
    gradeLevel: "Grade 11",
    adviser: null,
  },
  {
    studentId: 2,
    fullName: "Maynard Kent Harlan",
    lrn: "108245136248",
    section: "Santan",
    gradeLevel: "Grade 12",
    adviser: null,
  },
  {
    studentId: 3,
    fullName: "Joan Agapito dela Cruz",
    lrn: "101257182639",
    section: "Rosal",
    gradeLevel: "Grade 11",
    adviser: null,
  },
  {
    studentId: 4,
    fullName: "Angelo Mallari dela Cruz",
    lrn: "102846539215",
    section: "Jasmine",
    gradeLevel: "Grade 11",
    adviser: null,
  },
  {
    studentId: 5,
    fullName: "Joshua Martinez Villanueva",
    lrn: "103456138297",
    section: "Camia",
    gradeLevel: "Grade 12",
    adviser: null,
  },
  {
    studentId: 6,
    fullName: "Maria Antonio Agustin",
    lrn: "105461532145",
    section: "Gumamela",
    gradeLevel: "Grade 11",
    adviser: null,
  },
  {
    studentId: 7,
    fullName: "RC Bayot",
    lrn: "106846539215",
    section: "Rosal",
    gradeLevel: "Grade 11",
    adviser: null,
  },
];

export default function StudentsHealthProfilePage() {
  const [search, setSearch] = useState("");

  const filteredStudents = mockStudentsHealthProfile.filter((student) =>
    student.fullName.toLowerCase().includes(search.toLowerCase()) ||
    student.lrn.includes(search)
  );

  return (
    <div className="w-full px-10 py-8 text-black text-sm">
      <h1 className="text-3xl font-bold mb-8">Students Health Profile</h1>

      <SearchBar value={search} onChange={setSearch} placeholder="Search student..." />

      <div className="w-full overflow-hidden">
        <table className="w-full text-black border-collapse">
          <thead>
            <tr className="border-b text-left text-gray-700">
              <th className="py-3 px-2">LRN</th>
              <th className="py-3 px-2">First Name</th>
              <th className="py-3 px-2">Last Name</th>
              <th className="py-3 px-2">Grade & Section</th>
              <th className="py-3 px-2">Adviser</th>
              <th className="py-3 px-2"></th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student, index) => (
              <tr
                key={student.studentId}
                className={`border-b hover:bg-gray-100 transition ${
                  index === 1 ? "bg-gray-100" : ""
                }`}
              >
                <td className="py-3 px-2 flex items-center gap-2">
                  <ChevronDown className="h-4 w-4" />
                  {student.lrn}
                </td>

                <td className="py-3 px-2">{student.fullName.split(" ")[0]}</td>
                <td className="py-3 px-2">
                  {student.fullName.split(" ").slice(1).join(" ")}
                </td>
                <td className="py-3 px-2">
                  {student.gradeLevel} - {student.section}
                </td>
                <td className="py-3 px-2">{student.adviser ?? "N/A"}</td>
                <td
                  className="py-3 px-2 text-blue-600 underline cursor-pointer"
                  onClick={() =>
                    (window.location.href = `/students-health-profile/${student.studentId}`)
                  }
                >
                  view more info.
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end items-center mt-4 gap-3 text-sm text-gray-700">
          <span>Rows per page:</span>
          <select className="border border-gray-300 px-2 py-1 rounded w-16 bg-white">
            <option>10</option>
            <option>25</option>
          </select>

          <span>1-5 of {mockStudentsHealthProfile.length}</span>

          <button className="px-2">&lt;</button>
          <button className="px-2">&gt;</button>
        </div>
      </div>
    </div>
  );
}
