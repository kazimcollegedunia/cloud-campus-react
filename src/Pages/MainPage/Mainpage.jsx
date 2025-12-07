
import axios from "axios";
// import Signup from "./Signup/Signup";
// import Signin from "./Signup/Signin";
// import Normal from "./Signup/Normal";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/TopHeader";
import Dashboard from "../Dashboard/MainDashboard";
import { Routes,Route } from "react-router-dom";
import Student from "../Student/StudentMain";
import Fee from "../Fee/Fee";
import Attendance from "../Attendance/Attendance";
// import Student from "../Student/StudentMain";

const App = () => {
  return <>
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 flex flex-col">
        {/* <section className="p-6 space-y-6"> */}
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/student" element={<Student />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/fee" element={<Fee />} />
        </Routes>
        {/* </section> */}
      </main>
    </div>

    
    
  </>
}
export default App;