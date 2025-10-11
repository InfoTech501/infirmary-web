import React from 'react'

const studentList = [
  {
      lrn: "0123456789112",
      firstname: "John",
      lastname: "Doe",
      gradeandsection: "Grade 12 - Gumamela",
      status: "Admitted"
  },
  {
      lrn: "0987654321893",
      firstname: "Mark",
      lastname: "Heras",
      gradeandsection: "Grade 12 - Gumamela",
      status: "Not Admitted"
  },
  {
      lrn: "086352789012",
      firstname: "Janela",
      lastname: "Salvador",
      gradeandsection: "Grade 12 - Gumamela",
      status: "Admitted"
  },
  {
      lrn: "863725190463",
      firstname: "Rita",
      lastname: "Olivas",
      gradeandsection: "Grade 12 - Gumamela",
      status: "Not Admitted"
  },
  {
      lrn: "562819075437",
      firstname: "Bianca",
      lastname: "Umali",
      gradeandsection: "Grade 12 - Gumamela",
      status: "Not Admitted"
  },
]

export function StudentListTable() {
  return (
      <div className="overflow-x-auto rounded-xl w-full">
          <table className="text-gray-950 w-full md:w-auto text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-5 w-2xs text-base">LRN</th>
                <th className="px-4 py-5 w-2xs text-base">First Name</th>
                <th className="px-4 py-5 w-2xs text-base">Last Name</th>
                <th className="px-4 py-5 w-2xs text-base">Grade & Section</th>
                <th className="px-4 py-5 w-2xs text-base">Status</th>
              </tr>
            </thead>
            <tbody>
              {studentList.map((students) => (
                <tr key={students.lrn}>
                  <td className="px-4 py-4">{students.lrn}</td>
                  <td className="px-4 py-4">{students.firstname}</td>
                  <td className="px-4 py-4">{students.lastname}</td>
                  <td className="px-4 py-4">{students.gradeandsection}</td>
                  <td className="px-4 py-4">{students.status}</td>                   
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  )
}