const TeacherLeaveModal = ({ teacher, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg rounded-xl p-6 space-y-5">

        <h3 className="text-lg font-semibold">
          Mark Leave – {teacher?.name}
        </h3>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <label className="block mb-1">From</label>
            <input type="date" className="border rounded px-3 py-2 w-full" />
          </div>

          <div>
            <label className="block mb-1">To</label>
            <input type="date" className="border rounded px-3 py-2 w-full" />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">
            Assign Substitute Teacher
          </label>
          <select className="border rounded px-3 py-2 w-full text-sm">
            <option>Select Teacher</option>
            <option>Rohit Verma</option>
            <option>Sara Khan</option>
          </select>
        </div>

        <div className="flex justify-end gap-2 pt-3">
          <button onClick={onClose} className="border px-4 py-2 rounded text-sm">
            Cancel
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
            Save Leave
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherLeaveModal;
