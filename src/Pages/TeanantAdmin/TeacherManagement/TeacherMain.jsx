import { useState,useEffect } from "react";
import TeacherTable from "./TeacherTable";
import TeacherFormModal from "./TeacherFormModal";
// import TeacherViewDrawer from "./TeacherViewDrawer";
import TeacherViewDrawer from "./TeacherViewDrawer";
import TeacherLeaveModal from "./TeacherLeaveModal";
import TeacherTimetableDrawer from "./TeacherTimetableDrawer";
import Api from "../../../services/api";


const Teacher = () => {
  const [openForm, setOpenForm] = useState(false);
  const [openAssigne, setOpenAssigne] = useState(false);
  const [teacherTimetable, setTeacherTimetable] = useState(false);
  const [statusUpdate, setStatusUpdate] = useState({});
  const [reload, setReload] = useState(false);
  const [teacherListArr, setTeacherListArr] = useState({});
  const [teacherFilter, setTeacherFilter] = useState({});

  const filterFormhandler = (e) => { 
        setTeacherFilter({
            ...teacherFilter,
            [e.target.name]:e.target.value
        })
  }

    const refreshTeachers = () => {
        setReload(prev => !prev);
    };

    const callGetApi = async () => {
        let res = await Api.get('teacher-management/teacher',teacherFilter);
        setTeacherListArr(res.data.data);
    }

    useEffect(() => {
        callGetApi();
    },[reload,filterFormhandler]); 

    const teacherDetails = (status, teacherDetailsArr = []) => {
        console.log(teacherDetailsArr)

    }


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
          <option>Class 1</option>
        </select>

        <input
          type="text"
          placeholder="Search by name, phone, email"
          name="search"
          value={teacherFilter.search}
          onChange={(e) => {filterFormhandler(e)}}
          className="border rounded-lg px-3 py-2 text-sm w-64"
        />
      </div>

      {/* TABLE */}
      <TeacherTable 
            reload={reload}
            teacherListArr={teacherListArr}
            teacherDetails={() => setOpenAssigne(true)} 
            teacherTimetable={() => setStatusUpdate(true)} 
            // teacherTimetable={() => setTeacherTimetable(true)} 
            onClose={() => setOpenForm(true)}
            statusUpdate={() => setStatusUpdate({status:null})}
        />
      {openAssigne && <TeacherViewDrawer teacherDetails={() => setOpenAssigne(false)}/>}
      {/* <TeacherLeaveModal /> */}
      {teacherTimetable && <TeacherTimetableDrawer teacherTimetable={() => setTeacherTimetable(false)}/> }

      {/* MODAL */}
      {openForm && <TeacherFormModal onClose={() => setOpenForm(false)}
        onSuccess={refreshTeachers} />}
    </section>
  );
};

export default Teacher;
