import { useState, useEffect } from "react";
import Api from "../../services/api";

const StudentTable = (props) => {
  const [students, setStudents] = useState([]);
  const [schoolClass, setSchoolClass] = useState([]);
  const [schoolSection, setSchoolSection] = useState([]);
  const [studentCount, setStudentCount] = useState(0);
  const [filters, setFilters] = useState({ class: "", section: "", search: "" });

  // -------------------------------------
  // Fetch Students with Filters
  // -------------------------------------
  const getStudentData = async (extraFilters = {}) => {
    try {
        const finalFilters = { ...filters, ...extraFilters };
        setFilters(finalFilters);

        const response = await Api.get("/student-lists", { params: finalFilters });
        console.log("Best Option",);
        // setStudentCount(response.data.data.studentCount);
        setStudents(response.data.data.studentData);
        console.log("Students fetched:", response.data.data.studentData);
    } catch (err) {
        console.log(err.response.data);
    }
};


  // -------------------------------------
  // Fetch Class & Section Lists
  // -------------------------------------
  const getClass = async () => {
    try {
      const res = await Api.get("/all-class");
      setSchoolClass(res.data.data);
    } catch (err) {
      console.log("Error fetching class:", err);
    }
  };

  const getSection = async () => {
    try {
      const res = await Api.get("/all-section");
      setSchoolSection(res.data.data);
    } catch (err) {
      console.log("Error fetching section:", err);
    }
  };

  // -------------------------------------
  // Initial Load
  // -------------------------------------
  useEffect(() => {
    getStudentData();
    getClass();
    getSection();
  }, []);

  // -------------------------------------
  // Search Handler
  // -------------------------------------
  const searchStudent = (e) => {
    const value = e.target.value.trim();
    if (value.length >= 1) {
      getStudentData({ search: value });
    } else {
      getStudentData({ search: "" });
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-md p-5">
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="flex gap-3 text-sm">
            <div className="font-bold text-lg text-blue-600">{studentCount}</div>

            {/* Class Filter */}
            <select
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={(e) =>
                getStudentData({ class_id: e.target.value })
              }
            >
              <option value="">All Class</option>
              {props.classes.map((cls, idx) => (
                <option key={idx} value={cls}>
                  Class {cls}
                </option>
              ))}
            </select>

            {/* Section Filter */}
            <select
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={(e) =>
                getStudentData({ section: e.target.value })
              }
            >
              <option value="">All Sections</option>
              {schoolSection.map((sec, idx) => (
                <option key={idx} value={sec}>
                  Section {sec}
                </option>
              ))}
            </select>
          </div>

          {/* Search */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search by name or roll..."
              className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-56"
              onChange={searchStudent}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="border-b py-3 px-3">#</th>
                <th className="border-b py-3 px-3">Name</th>
                <th className="border-b py-3 px-3">Class</th>
                <th className="border-b py-3 px-3">Section</th>
                <th className="border-b py-3 px-3">Admission No</th>
                <th className="border-b py-3 px-3">Parent Phone</th>
                <th className="border-b py-3 px-3">Status</th>
                <th className="border-b py-3 px-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {students.length > 0 ? (
                students.map((st, index) => (
                  <tr key={st.id} className="hover:bg-gray-50">
                    <td className="border-b py-2.5 px-3">{index + 1}</td>
                    <td className="border-b py-2.5 px-3 font-medium">
                      {st.student_name}
                    </td>
                    <td className="border-b py-2.5 px-3">{st.class_id}</td>
                    <td className="border-b py-2.5 px-3">{st.section}</td>
                    <td className="border-b py-2.5 px-3">{st.admission_no}</td>
                    <td className="border-b py-2.5 px-3">{st.parent_phone}</td>
                    <td className="border-b py-2.5 px-3">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          st.status === "active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {st.status.toUpperCase()}
                      </span>
                    </td>

                    <td className="border-b py-2.5 px-3 text-right space-x-2">
                      <button className="px-3 py-1 text-xs rounded-md bg-blue-100 text-blue-700">
                        Edit
                      </button>
                      <button className="px-3 py-1 text-xs rounded-md bg-red-100 text-red-700">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-3">
                    Not Found...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StudentTable;
