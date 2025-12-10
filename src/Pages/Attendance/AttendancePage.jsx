import AttendanceFilter from "./AttendanceFilter";
import AttendanceSummary from "./AttendanceSummary";
import AttendanceTable from "./AttendanceTable";
import Api from "../../services/api";
import { useState, useEffect } from "react";

const AttendancePage = () => {

  const [attendanceMap, setAttendanceMap] = useState({});

  const handleStatusChange = (user_id, status) => {
    setAttendanceMap((prev) => ({
      ...prev,
      [user_id]: {
        ...prev[user_id],
        status,
      },
    }));
  };

  const handleRemarkChange = (user_id, remarks) => {
    setAttendanceMap((prev) => ({
      ...prev,
      [user_id]: {
        ...prev[user_id],
        remarks,
      },
    }));
  };

  const markAllPresent = () => {
    const updated = {};
    students.forEach((s) => {
      updated[s.user_id] = { status: "present", remarks: "" };
    });
    setAttendanceMap(updated);
  };

  const markAllAbsent = () => {
    const updated = {};
    students.forEach((s) => {
      updated[s.user_id] = { status: "absent", remarks: "absent" };
    });
    setAttendanceMap(updated);
  };

  const clearAll = () => {
    setAttendanceMap({});
  };

  const saveAttendance = async () => {
  try {
    const payload = {
      date: filters.date,
      attendances: Object.entries(attendanceMap).map(([user_id, item]) => ({
        user_id: Number(user_id),
        status: item.status,
        remarks: item.remarks || null,
      })),
    };

    const res = await Api.post("/attendance/mark-bulk", payload);

    alert("✔ Attendance Saved Successfully!");
  } catch (err) {
    alert("❌ Error Saving Attendance");
    console.log(err.response?.data);
  }
};




  const [filters, setFilters] = useState({
    class_id: "",
    date: new Date().toISOString().split("T")[0],
    section: "",
  });

  const [summary, setSummary] = useState({
    total: 0,
    present: 0,
    absent: 0,
    percent: 0,
  });

  const [students, setStudents] = useState([]);

  // ----------------------------------------
  // 🔥 1) GET ATTENDANCE SUMMARY
  // ----------------------------------------
  const getAttendanceSummary = async (extraFilters = {}) => {
    try {
      const finalFilters = { ...filters, ...extraFilters };
      setFilters(finalFilters);

      const response = await Api.get("/attendance/today-attendance-summary", {
        params: finalFilters,
      });

      const data = response.data.data.summary;

      setSummary({
        total: data.total,
        present: data.present,
        absent: data.absent,
        percent: data.attendancespercent,
      });

    } catch (err) {
      console.log("Summary Error:", err.response?.data);
    }
  };

  // ----------------------------------------
  // 🔥 2) GET STUDENT LIST FOR TABLE
  // ----------------------------------------
  const getAttendanceTable = async (extraFilters = {}) => {
    try {
      const finalFilters = { ...filters, ...extraFilters };
      setFilters(finalFilters);

      const response = await Api.get("/attendance/get-attendance", {
        params: finalFilters,
      });

      setStudents(response.data.data);

    } catch (err) {
      console.log("Table Error:", err.response?.data);
    }
  };

  // ----------------------------------------
  // 🔥 3) APPLY BOTH SUMMARY + TABLE
  // ----------------------------------------
  const applyFilters = (extraFilters = {}) => {
    getAttendanceSummary(extraFilters);
    getAttendanceTable(extraFilters);
  };

  useEffect(() => {
    applyFilters();
  }, []);

  return (
    <section className="p-6 space-y-6">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <AttendanceFilter onFilter={(f) => applyFilters(f) } />

        <AttendanceSummary summary={summary} />

      </div>

      <AttendanceTable
        data={students}
        attendanceMap={attendanceMap}
        onStatusChange={(id, status) => handleStatusChange(id, status)}
        onRemarkChange={(id, text) => handleRemarkChange(id, text)}
        onMarkAllPresent={markAllPresent}
        onMarkAllAbsent={markAllAbsent}
        onClearAll={clearAll}
        onSave={saveAttendance}
      />


    </section>
  );
};

export default AttendancePage;
