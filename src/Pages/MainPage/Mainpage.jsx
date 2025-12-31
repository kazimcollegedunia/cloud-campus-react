import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../../layout/DashboardLayout";
import AuthLayout from "../../layout/AuthLayout";

import Dashboard from "../Dashboard/Dashboard";
import Student from "../Student/StudentMain";
import Attendance from "../Attendance/AttendancePage";
import Fee from "../Fee/Fee";
import Teacher from "../TenantAdmin/TeacherManagement/TeacherMain";
import FeeAdmin from "../TenantAdmin/FeeManagement/FeeMain";

import Signup from "../../Signup/Signup";
import Signin from "../../Signup/Signin";
import NotFound from "../Errors/NotFound";
import WorkOnProgress from "../Errors/WorkInProgress";

const App = () => {
  return (
    <Routes>
      {/* AUTH PAGES – NO SIDEBAR/HEADER */}
      <Route 
        path="/signin" 
        element={
          <AuthLayout>
            <Signin />
          </AuthLayout>
        }
      />

      <Route 
        path="/signup" 
        element={
          <AuthLayout>
            <Signup />
          </AuthLayout>
        }
      />


      {/* DASHBOARD PAGES – WITH SIDEBAR + HEADER */}
      <Route 
        path="/" 
        element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        } 
      />

      <Route 
        path="/student" 
        element={
          <DashboardLayout>
            <Student />
          </DashboardLayout>
        } 
      />

      <Route 
        path="/attendance" 
        element={
          <DashboardLayout>
            <Attendance />
          </DashboardLayout>
        } 
      />

      <Route 
        path="/fee" 
        element={
          <DashboardLayout>
            <Fee />
          </DashboardLayout>
        } 
      />

      <Route 
        path="/admin/teacher" 
        element={
          <DashboardLayout>
            <Teacher />
          </DashboardLayout>
        } 
      />

      <Route 
        path="/admin/fee" 
        element={
          <DashboardLayout>
            <FeeAdmin />
          </DashboardLayout>
        } 
      />
       <Route path="*" element={<WorkOnProgress />} />
    </Routes>

    
  );
};

export default App;
