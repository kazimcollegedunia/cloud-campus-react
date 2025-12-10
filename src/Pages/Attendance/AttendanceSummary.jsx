const AttendanceSummary = ({ summary }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5">
      <h3 className="text-lg font-semibold mb-4">Today Summary</h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Total Students</span>
          <span className="font-semibold">{summary.total}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-green-600">Present</span>
          <span className="font-semibold text-green-600">{summary.present}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-red-600">Absent</span>
          <span className="font-semibold text-red-600">{summary.absent}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Attendance %</span>
          <span className="font-semibold text-blue-600">{summary.percent}%</span>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSummary;
