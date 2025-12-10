const AttendanceTable = ({
  data,
  attendanceMap,
  onStatusChange,
  onRemarkChange,
  onMarkAllPresent,
  onMarkAllAbsent,
  onClearAll,
  onSave,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5">

      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Mark Attendance</h3>
        <button
          onClick={onSave}
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
        >
          Save Attendance
        </button>
      </div>

      {/* Mark All Buttons */}
      <div className="flex flex-wrap items-center gap-3 mt-5 text-sm">
        <button
          onClick={onMarkAllPresent}
          className="px-4 py-2 bg-green-100 text-green-700 rounded-lg border"
        >
          Mark All Present
        </button>

        <button
          onClick={onMarkAllAbsent}
          className="px-4 py-2 bg-red-100 text-red-700 rounded-lg border"
        >
          Mark All Absent
        </button>

        <button
          onClick={onClearAll}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg border"
        >
          Clear All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="border-b py-3 px-3">#</th>
              <th className="border-b py-3 px-3">Student Name</th>
              <th className="border-b py-3 px-3">Student ID</th>
              <th className="border-b py-3 px-3">Status</th>
              <th className="border-b py-3 px-3">Remarks</th>
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((st, i) => {
                const mapped = attendanceMap[st.user_id] || {};
                const finalStatus = mapped.status ?? st.status;

                return (
                  <tr key={st.user_id} className="hover:bg-gray-50">
                    <td className="border-b py-2.5 px-3">{i + 1}</td>

                    <td className="border-b py-2.5 px-3 font-medium">{st.name}</td>

                    <td className="border-b py-2.5 px-3">{st.user_id}</td>

                    <td className="border-b py-2.5 px-3">
                      <div className="inline-flex items-center gap-4">
                        <label className="inline-flex items-center gap-1">
                          <input
                            type="radio"
                            name={`status_${st.user_id}`}
                            checked={finalStatus === "present"}
                            onChange={() => onStatusChange(st.user_id, "present")}
                            className="accent-green-600"
                          />
                          <span className="text-xs">Present</span>
                        </label>

                        <label className="inline-flex items-center gap-1">
                          <input
                            type="radio"
                            name={`status_${st.user_id}`}
                            checked={finalStatus === "absent"}
                            onChange={() => onStatusChange(st.user_id, "absent")}
                            className="accent-red-600"
                          />
                          <span className="text-xs">Absent</span>
                        </label>
                      </div>
                    </td>

                    <td className="border-b py-2.5 px-3">
                      <input
                        type="text"
                        placeholder="Optional"
                        // defaultValue={st.remarks || ""}
                        value={st.remarks || ""} 
                        onChange={(e) =>
                          onRemarkChange(st.user_id, e.target.value)
                        }
                        className="w-full border rounded-lg px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500 text-sm">
                  No students found for selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AttendanceTable;
