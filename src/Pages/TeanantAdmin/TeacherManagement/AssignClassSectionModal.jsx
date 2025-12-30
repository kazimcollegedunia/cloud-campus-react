const AssignClassSectionModal = ({ onClose, teacher }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl p-6 space-y-5">

        <div>
          <h3 className="text-lg font-semibold">
            Assign Class & Section
          </h3>
          <p className="text-sm text-gray-500">
            Teacher: {teacher?.name}
          </p>
        </div>

        {/* Classes */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Select Classes
          </label>
          <select
            multiple
            className="w-full border rounded-lg px-3 py-2 text-sm h-32"
          >
            <option>Class 6</option>
            <option>Class 7</option>
            <option>Class 8</option>
            <option>Class 9</option>
            <option>Class 10</option>
          </select>
        </div>

        {/* Sections */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Select Sections
          </label>
          <select
            multiple
            className="w-full border rounded-lg px-3 py-2 text-sm h-24"
          >
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 pt-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border rounded-lg"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg"
          >
            Assign
          </button>
        </div>

      </div>
    </div>
  );
};

export default AssignClassSectionModal;
