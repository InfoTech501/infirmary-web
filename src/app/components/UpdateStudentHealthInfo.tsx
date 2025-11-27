export default function UpdateStudentHealthInfo() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">(UPDATE) STUDENT HEALTH INFORMATION</h1>


        <h2 className="text-lg font-semibold mb-2">Student Info</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <input className="border p-2 rounded" defaultValue="108161907162" />
          <input className="border p-2 rounded" defaultValue="Hernandez, John Doe Q." />
          <input type="date" className="border p-2 rounded" defaultValue="2022-04-17" />
          <input className="border p-2 rounded" defaultValue="G12 - Gumamela" />
        </div>

      
        <h2 className="text-lg font-semibold mb-2">Contact Info</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <input className="border p-2 rounded" defaultValue="0999-999-9999" />
          <input className="border p-2 rounded" defaultValue="johndoehernandez@gmail.com" />
          <input
            className="border p-2 rounded"
            defaultValue="Brgy. Kaybagal North, Tagaytay City, Cavite"
          />
        </div>


        <h2 className="text-lg font-semibold mb-2">
          Student Health Info <span className="text-sm">(kindly specify the health problem)</span>
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <input className="border p-2 rounded" defaultValue="Skin Allergy (ECZEMA)" />
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
