"use client";

import React, { useState } from "react";
import { ClinicVisitModal } from "@/app/components/modal/ClinicVisitModal";

export function StudentHealthProfile() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mt-6 border rounded p-4 bg-white shadow">
      <h2 className="text-lg font-semibold mb-2">Student Profile</h2>

      {/* Contact Info */}
      <div className="mb-4">
        <p><strong>Contact No.:</strong> 09123456789</p>
        <p><strong>Email Address:</strong> john.doe@email.com</p>
        <p><strong>Address:</strong> Silay City</p>
      </div>

      {/* Health Problems */}
      <div className="mb-4">
        <p><strong>Health Problems:</strong></p>
        <ul className="list-disc list-inside">
          <li>Heart Disease</li>
          <li>Skin Allergies (Eczema)</li>
        </ul>
      </div>

      {/* Clinic History Table */}
      <div className="mb-4">
        <p><strong>Recent Clinic History:</strong></p>
        <table className="student-table w-full text-sm border">
          <thead className="bg-gray-100">
            <tr>
              <th>Illness</th>
              <th>Date</th>
              <th>Medication</th>
              <th>Nurse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Toothache</td>
              <td>2024/10/09</td>
              <td>Mefenamic Acid</td>
              <td>Nurse 1</td>
            </tr>
            <tr>
              <td>Headache</td>
              <td>2024/11/20</td>
              <td>Paracetamol</td>
              <td>Nurse 3</td>
            </tr>
            <tr>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className="button button-green">Give Feedback to Nurse</button>
        <button className="button button-blue" onClick={() => setShowModal(true)}>
          Show More
        </button>
      </div>

      {/* Modal */}
      {showModal && <ClinicVisitModal onClose={() => setShowModal(false)} />}
    </div>
  );
}