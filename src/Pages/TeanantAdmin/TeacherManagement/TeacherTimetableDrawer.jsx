const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const periods = ["1", "2", "3", "4", "5", "6"];

const TeacherTimetableDrawer = ({ teacher, teacherTimetable }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={teacherTimetable} />

      <div className="fixed right-0 top-0 h-full w-full sm:w-[520px] bg-white z-50 shadow-xl">

        <div className="p-5 border-b flex justify-between">
          <h3 className="font-semibold">
            Timetable – {teacher?.name}
          </h3>
          <button onClick={teacherTimetable}>×</button>
        </div>

        <div className="p-5 overflow-auto">
          <table className="w-full text-sm border">
            <thead>
              <tr>
                <th className="border p-2">Day</th>
                {periods.map(p => (
                  <th key={p} className="border p-2">P{p}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {days.map(day => (
                <tr key={day}>
                  <td className="border p-2 font-medium">{day}</td>
                  {periods.map(p => (
                    <td key={p} className="border p-2 text-xs text-center">
                      10-A
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
};

export default TeacherTimetableDrawer;
