import { useState } from "react";
import TeacherTable from "./TeacherTable";
import TeacherFormModal from "./TeacherFormModal";

const Teacher = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <section className="p-6 space-y-6">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Teachers</h2>
          <p className="text-sm text-gray-500">
            Manage teachers, assignments & timetable
          </p>
        </div>

        <button
          onClick={() => setOpenForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          + Add Teacher
        </button>
      </div>

      {/* FILTERS */}
      <div className="bg-white rounded-xl shadow p-4 flex flex-wrap gap-3">
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
          <option>On Leave</option>
        </select>

        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>All Classes</option>
          <option>Class 6</option>
          <option>Class 7</option>
          <option>Class 7</option>
        </select>

        <input
          type="text"
          placeholder="Search by name, phone, email"
          className="border rounded-lg px-3 py-2 text-sm w-64"
        />
      </div>

      {/* TABLE */}
      <TeacherTable />

      {/* MODAL */}
      {openForm && <TeacherFormModal onClose={() => setOpenForm(false)} />}
    </section>
  );
};

export default Teacher;
