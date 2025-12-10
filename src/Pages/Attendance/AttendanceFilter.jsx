import { CLASS_LIST, SECTION_LIST } from "../../constants/SchoolData";


const AttendanceFilter = ({ onFilter }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 lg:col-span-2">
      <h3 className="text-lg font-semibold mb-4">Filter Attendance</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
        
        {/* DATE FILTER */}
        <div>
          <label className="block font-medium mb-1">Date</label>
          <input
            type="date"
            defaultValue={new Date().toISOString().split("T")[0]}   // ← current date
            onChange={(e) => onFilter({ date: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* CLASS FILTER */}
        <div>
          <label className="block font-medium mb-1">Class</label>
          <select
            onChange={(e) => onFilter({ class_id: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value=" ">All Class</option>
            {CLASS_LIST.map((cls) => (
                <option key={cls} value={cls}>
                  Class {cls}
                </option>
              ))}
          </select>
        </div>

        {/* SECTION FILTER (optional, not used in summary API) */}
        <div>
          <label className="block font-medium mb-1">Section</label>
          <select
            onChange={(e) => onFilter({ section: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value=" ">All Section</option>
            {SECTION_LIST.map((sec,key) => (
                <option key={key} value={sec}>
                  Section {sec}
                </option>
              ))}
          </select>
        </div>

        {/* <div className="flex items-end">
          <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg">
            Load Students
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default AttendanceFilter;
