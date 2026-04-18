"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function StudentHealthProfile() {
  const [showModal, setShowModal] = useState(false);
  const informations = [
    { 
      lrn: "10819267", 
      firstName: "Danica", 
      lastName: "Pandan", 
      gradeandsection: "Grade 12 - Gumamela" 
    },
    { 
      lrn: "10819268", 
      firstName: "Cassy", 
      lastName: "Yvanes", 
      gradeandsection: "Grade 12 - Gumamela" 
    }
  ]
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-center justify-between mb-15">   
      </div>
      <table className="w-full border-collapse rounded-lg shadow-sm border border-gray-300">
        <thead>
          <tr className="border-b border-gray-300 text-left text-gray-600 font-semibold">
            <th className="w-8"></th>
            <th className="py-3 px-3">LRN</th>
            <th className="py-3 px-3">First Name</th>
            <th className="py-3 px-3">Last Name</th>
            <th className="py-3 px-3">Grade & Section</th>
          </tr>
        </thead>

        <tbody className="text-gray-700">
          {informations.map((students) => (
                <tr key={students.lrn} className="bg-white transition-colors duration-150 hover:bg-gray-50 cursor-default border-b border-gray-200">
                  <td className="expand-icon text-center w-8 px-2 py-3 select-none"><ChevronDown /></td>
                  <td className="px-3 py-3">{students.lrn}</td>
                  <td className="px-3 py-3">{students.firstName}</td>
                  <td className="px-3 py-3">{students.lastName}</td>
                  <td className="px-3 py-3">{students.gradeandsection}</td>                
                </tr>
              ))}

          <tr className="bg-gray-100 cursor-default border-b border-gray-200">
            <td className="expand-icon text-center w-8 px-2 py-3 select-none">&#x25B2;</td>
            <td className="px-3 py-3">Cell</td>
            <td className="px-3 py-3">Cell</td>
            <td className="px-3 py-3">Cell</td>
            <td className="px-3 py-3">Cell</td>
          </tr>

          <tr className="bg-gray-100">
            <td colSpan={5} className="p-6 border-b border-gray-300">
                <div className="expanded-content flex flex-col md:flex-row md:gap-5">
                <div className="info-section text-gray-700 mb-6 md:mb-0 md:w-[16%] min-w-0">
                    <strong>Contact Info</strong>
                    <p>Contact No.:</p>
                    <p>Email Address:</p>
                    <p>Address:</p>
                </div>

                <div className="info-section text-gray-700 mb-6 md:mb-0 md:w-[24%] min-w-0">
                    <strong>Student Health Info</strong>
                    <p><strong>Health Problems:</strong></p>
                    <ol className="list-decimal list-inside space-y-0.5">
                    <li>Heart Disease</li>
                    <li>Skin Allergies (Eczema)</li>
                    </ol>
                </div>

                <div className="info-section clinic-history text-gray-700 md:w-[45%] min-w-0">
                    <strong>Recent Clinic History</strong>
                    <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-sm">
                    <thead className="bg-gray-200 text-left text-gray-700 font-semibold">
                        <tr>
                        <th className="py-1 px-1 border-b border-gray-300">Illness</th>
                        <th className="py-1 px-2 border-b border-gray-300">DATE (YYYY/MM/DD)</th>
                        <th className="py-1 px-2 border-b border-gray-300">Given Medication</th>
                        <th className="py-1 px-2 border-b border-gray-300">Nurse</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b bg-white border-gray-300">
                        <td className="py-1 px-2">Toothache</td>
                        <td className="py-1 px-2">2024/10/09</td>
                        <td className="py-1 px-2">Mefenamic Acid</td>
                        <td className="py-1 px-2">Nurse 1</td>
                        </tr>
                        <tr className="border-b bg-white border-gray-300">
                        <td className="py-1 px-2">Headache</td>
                        <td className="py-1 px-2">2024/11/20</td>
                        <td className="py-1 px-2">Paracetamol</td>
                        <td className="py-1 px-2">Nurse 3</td>
                        </tr>
                        <tr className="bg-white">
                        <td className="py-1 px-2">Cell</td>
                        <td className="py-1 px-2">Cell</td>
                        <td className="py-1 px-2">Cell</td>
                        <td className="py-1 px-2">Cell</td>
                        </tr>
                    </tbody>
                    </table>
                    <div className="mt-4 flex flex-wrap gap-4 justify-end">
                    <button className="px-5 py-2 font-semibold cursor-pointer rounded-lg transition-colors border border-gray-700 text-gray-700 bg-white hover:bg-gray-700 hover:text-white select-none">Give Feedback to nurse</button>
                    <button
                        className="px-5 py-2 font-semibold cursor-pointer rounded-lg transition-colors border border-gray-700 text-gray-700 bg-white hover:bg-gray-700 hover:text-white select-none"
                        onClick={() => setShowModal(true)}
                        type="button"
                    >
                        Show more
                    </button>
                    </div>
                </div>
                </div>
            </td>
            </tr>

          <tr className="bg-white transition-colors duration-150 hover:bg-gray-50 cursor-default border-b border-gray-200">
            <td className="expand-icon text-center w-8 px-2 py-3 select-none">&#x25BC;</td>
            <td className="px-3 py-3">Cell</td>
            <td className="px-3 py-3">Cell</td>
            <td className="px-3 py-3">Cell</td>
            <td className="px-3 py-3">Cell</td>
          </tr>
          <tr className="bg-white transition-colors duration-150 hover:bg-gray-50 cursor-default border-b border-gray-200">
            <td className="expand-icon text-center w-8 px-2 py-3 select-none">&#x25BC;</td>
            <td className="px-3 py-3">Cell</td>
            <td className="px-3 py-3">Cell</td>
            <td className="px-3 py-3">Cell</td>
            <td className="px-3 py-3">Cell</td>
          </tr>
          <tr className="bg-white transition-colors duration-150 hover:bg-gray-50 cursor-default border-b border-gray-200">
            <td className="expand-icon text-center w-8 px-2 py-3 select-none">&#x25BC;</td>
            <td className="px-3 py-3">Cell</td>
            <td className="px-3 py-3">Cell</td>
            <td className="px-3 py-3">Cell</td>
            <td className="px-3 py-3">Cell</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-6 flex justify-end items-center space-x-3 text-gray-500 text-sm select-none font-normal">
        <span>
          Rows per page:
          <select
            disabled
            className="mx-1 border border-gray-300 rounded px-2 py-0.5 bg-gray-100 cursor-not-allowed"
          >
            <option>10</option>
          </select>
          1-5 of 13
        </span>
        <button className="p-1 rounded hover:bg-gray-200 cursor-pointer" aria-label="Previous page">
          &lt;
        </button>
        <button className="p-1 rounded hover:bg-gray-200 cursor-pointer" aria-label="Next page">
          &gt;
        </button>
      </div>
    </div>

  );
}