const TeacherTable = ({ teacherListArr = [],teacherDetails,teacherTimetable,onClose,statusUpdate }) => {
  const teachers = Array.isArray(teacherListArr)
    ? teacherListArr
    : teacherListArr?.data || [];

  return (
    <div className="bg-white rounded-2xl shadow-md p-5">
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="border-b py-3 px-3">#</th>
              <th className="border-b py-3 px-3">Teacher Name</th>
              <th className="border-b py-3 px-3">Assigned Subjects</th>
              <th className="border-b py-3 px-3">Contact</th>
              <th className="border-b py-3 px-3">Status</th>
              <th className="border-b py-3 px-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {teachers.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No teachers found
                </td>
              </tr>
            ) : (
              teachers.map((teacher, index) => (
                <tr
                  key={teacher.teacher_id ?? index}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="border-b py-2.5 px-3">
                    {index + 1}
                  </td>

                  <td className="border-b py-2.5 px-3">
                    <div className="font-medium">{teacher.name}</div>
                    <div className="text-xs text-gray-500">
                      {teacher.email}
                    </div>
                  </td>

                  <td className="border-b py-2.5 px-3">
                    {teacher.subject?.length ? (
                      teacher.subject.map((obj, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700 mr-1"
                        >
                          {Object.values(obj)[0]}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-gray-400">
                        Not Assigned
                      </span>
                    )}
                  </td>

                  <td className="border-b py-2.5 px-3">
                    {teacher.phone}
                  </td>

                  <td className="border-b py-2.5 px-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                      Active
                    </span>
                  </td>

                  <td className="border-b py-2.5 px-3 text-right space-x-2">
                    <button className="px-3 py-1 text-xs rounded-md bg-indigo-100 text-indigo-700"
                    onClick={teacherDetails}
                    >
                      Assign
                    </button>
                    <button className="px-3 py-1 text-xs rounded-md bg-emerald-100 text-emerald-700"
                        onClick={teacherTimetable}
                    >
                      Timetable
                    </button>
                    <button className="px-3 py-1 text-xs rounded-md bg-gray-100"
                    onClick={onClose}
                    >
                      Edit
                    </button>
                    <button className="px-3 py-1 text-xs rounded-md bg-red-100 text-red-700"
                        onClick={(e) => {statusUpdate('inactive')}}
                    >
                      Inactive
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherTable;
