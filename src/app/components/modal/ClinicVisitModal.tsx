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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">CLINIC VISIT HISTORY OF “STUDENT NAME”</h2>
        <h3 className="text-base font-semibold mb-2">History</h3>
        <table className="w-full text-sm border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-2 py-1 text-left">Illness</th>
              <th className="px-2 py-1 text-left">DATE (YYYY/MM/DD)</th>
              <th className="px-2 py-1 text-left">Given Medication</th>
              <th className="px-2 py-1 text-left">Nurse</th>
            </tr>
          </thead>
          <tbody>
            {visits.map((v, i) => (
              <tr key={i} className="border-t">
                <td className="px-2 py-1">{v.illness}</td>
                <td className="px-2 py-1">{v.date}</td>
                <td className="px-2 py-1">{v.medication}</td>
                <td className="px-2 py-1">{v.nurse}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}