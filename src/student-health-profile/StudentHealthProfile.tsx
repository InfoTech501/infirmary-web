import React, { useState } from "react";
import { StudentListTable } from "@/app/components/StudentListTable";
import { ClinicVisitModal } from "@/app/components/modal/ClinicVisitModal";

export default function StudentHealthProfile() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Students Health Profile</h1>

        <StudentListTable />

        <div className="mt-6 border rounded p-4 bg-white shadow">
          <h2 className="text-lg font-semibold mb-2">Student Profile</h2>
          <div className="mb-4">
            <p><strong>Contact No.:</strong> 09123456789</p>
            <p><strong>Email Address:</strong> john.doe@email.com</p>
            <p><strong>Address:</strong> Silay City</p>
          </div>
          <div className="mb-4">
            <p><strong>Health Problems:</strong></p>
            <ul className="list-disc list-inside">
              <li>Heart Disease</li>
              <li>Skin Allergies (Eczema)</li>
            </ul>
          </div>
          <div className="mb-4">
            <p><strong>Recent Clinic History:</strong></p>
            <table className="w-full text-sm border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-2 py-1">Illness</th>
                  <th className="px-2 py-1">Date</th>
                  <th className="px-2 py-1">Medication</th>
                  <th className="px-2 py-1">Nurse</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-2 py-1">Toothache</td>
                  <td className="px-2 py-1">2024/10/09</td>
                  <td className="px-2 py-1">Mefenamic Acid</td>
                  <td className="px-2 py-1">Nurse 1</td>
                </tr>
                <tr className="border-t">
                  <td className="px-2 py-1">Headache</td>
                  <td className="px-2 py-1">2024/11/20</td>
                  <td className="px-2 py-1">Paracetamol</td>
                  <td className="px-2 py-1">Nurse 3</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex gap-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded">Give Feedback to Nurse</button>
            <button onClick={() => setShowModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded">Show More</button>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600">Rows per page: 10 | 1–5 of 13</div>

        {showModal && <ClinicVisitModal onClose={() => setShowModal(false)} />}
      </main>
    </div>
  );
}