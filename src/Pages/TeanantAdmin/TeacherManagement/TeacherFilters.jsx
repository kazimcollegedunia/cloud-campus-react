const TeacherFilters = () => {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-wrap gap-3 text-sm">

      <select className="border rounded px-3 py-2">
        <option>Status</option>
        <option>Active</option>
        <option>Inactive</option>
        <option>On Leave</option>
      </select>

      <select className="border rounded px-3 py-2">
        <option>Class</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>

      <select className="border rounded px-3 py-2">
        <option>Availability</option>
        <option>Free Now</option>
        <option>Busy</option>
      </select>

      <input
        className="border rounded px-3 py-2 w-64"
        placeholder="Search name / phone / email"
      />
    </div>
  );
};

export default TeacherFilters;
