export default function AddStudentHealthInfo() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">(ADD) STUDENT HEALTH INFORMATION</h1>

      
        <h2 className="text-lg font-semibold mb-2">Student Info</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <input className="border p-2 rounded" placeholder="LRN" />
          <input className="border p-2 rounded" placeholder="Name (Last, First, M.I.)" />
          <input type="date" className="border p-2 rounded" placeholder="Birthdate" />
          <input className="border p-2 rounded" placeholder="Grade & Section" />
        </div>


        <h2 className="text-lg font-semibold mb-2">Contact Info</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <input className="border p-2 rounded" placeholder="Contact No." />
          <input className="border p-2 rounded" placeholder="Email Address" />
          <input className="border p-2 rounded" placeholder="Address" />
        </div>

      
        <h2 className="text-lg font-semibold mb-2">
          Student Health Info <span className="text-sm">(kindly specify the health problem)</span>
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <input className="border p-2 rounded" placeholder="Health Problem" />
          <input className="border p-2 rounded" placeholder="Health Problem" />
        </div>

        <button className="bg-black text-white px-4 py-2 rounded">Add Field</button>

    
        <div className="flex justify-end space-x-4 mt-10">
          <button className="bg-black text-white px-6 py-2 rounded">Confirm</button>
          <button className="bg-gray-300 px-6 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
}
