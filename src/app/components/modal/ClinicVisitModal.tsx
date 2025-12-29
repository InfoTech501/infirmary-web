import React from "react";

export function ClinicVisitModal({ onClose }: { onClose: () => void }) {
  const visits = [
    { illness: "Toothache", date: "2024/10/09", medication: "Mefenamic Acid", nurse: "Nurse 1" },
    { illness: "Headache", date: "2024/11/20", medication: "Paracetamol", nurse: "Nurse 3" },
    { illness: "Cell", date: "Cell", medication: "Cell", nurse: "Cell" },
    { illness: "Cell", date: "Cell", medication: "Cell", nurse: "Cell" },
    { illness: "Cell", date: "Cell", medication: "Cell", nurse: "Cell" },
    { illness: "Cell", date: "Cell", medication: "Cell", nurse: "Cell" }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 md:p-10">
      <div className="bg-white rounded-xl p-8 max-w-3xl w-full shadow-xl flex flex-col">
        <h2 className="text-lg md:text-xl font-bold mb-6 uppercase tracking-wider text-gray-900">
          Clinic Visit History of “Student Name”
        </h2>
        <h3 className="text-base font-semibold mb-4 text-gray-700">History</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                {["Illness", "DATE (YYYY/MM/DD)", "Given Medication", "Nurse"].map((header, i) => (
                  <th key={i} className="px-4 py-2 font-semibold text-gray-700 text-left border-b border-gray-300">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visits.map(({ illness, date, medication, nurse }, i) => (
                <tr key={i} className="border-b border-gray-200 last:border-0">
                  <td className="px-4 py-2 text-gray-800">{illness}</td>
                  <td className="px-4 py-2 text-gray-800">{date}</td>
                  <td className="px-4 py-2 text-gray-800">{medication}</td>
                  <td className="px-4 py-2 text-gray-800">{nurse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="border border-gray-400 rounded-md px-6 py-2 text-gray-700 hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}