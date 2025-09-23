import React from 'react';
import {ChartAreaIcon, ChartNoAxesCombinedIcon} from 'lucide-react';

const dashboard = () => {
  return (
    <main className="pl-65 pt-20 px-6 py-8 flex flex-col">
      <div className="w-full max-w-3xl pb-2">
        <h2 className="text-gray-950 text-2xl font-semibold">
          Welcome to TCSNHS Infirmary System!
        </h2>

        <h2 className="text-gray-950 font-2xl font-semibold">
          Mrs. Jean C. Dela Cruz
        </h2>

        <p className="text-gray-950 text-sm">
          Adviser of Grade 9 Section name
        </p>
      </div>

    <div className="flex flex-col gap-8 mt-8">
      <section className="summary-report flex-1 pb-4">
        <h3 className="text-gray-950 font-semibold mb-3">Today's Summary Report</h3>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex items-center justify-between bg-green-100 p-4 rounded-xl">
            <div>
              <p className="text-2xl font-bold p-1">#</p>
              <p className="text-sm text-gray-600 pl-1 pt-1 pb-2 pr-3.5">
                Clinic Visitors from this section
              </p>
            </div>
            <ChartNoAxesCombinedIcon size={35}/> 
           </div>
          </div>
      </section>
      
      <section className='class-table-lists flex-1'>
        <h3 className="text-gray-950 font-semibold mb-3">List of students</h3>
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
                  <td className="px-4 py-4">Cell</td>
                  <td className="px-4 py-4">Cell</td>
                  <td className="px-4 py-4">Cell</td>
                  <td className="px-4 py-4">Cell</td>
                  <td className="px-4 py-4">Cell</td>
            </tbody>
          </table>
        </div>
      </section>
      </div>
    </main> 
  );
}

export default dashboard