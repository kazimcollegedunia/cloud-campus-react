import { useState,useEffect } from "react";
import Api from "../../services/api";
import { useNavigate } from "react-router-dom";
import DashboardTopCard from "./DashboardTopCard";

const Dashboard = () => {

    const [dashboardCradData ,setDashboardCradData] = useState({});

    const dashboardCardApi = async () => {
        try {
            const res = await Api.get("/dashboard");
            setDashboardCradData(res.data.data);
            console.log("Dashboard Stats:", res.data);
        } catch (err) {
            console.log("Error fetching dashboard stats:", err);
        }
    }

    useEffect(() => {
        dashboardCardApi();
    }, []);
    console.log("Dashboard Data:", dashboardCradData);

    return <>
        <section className="p-6 space-y-6">

            {/* <!-- TOP CARDS --> */}
            <DashboardTopCard data={dashboardCradData} />

            {/* <!-- CHART / BOX AREA --> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                <div className="bg-white p-6 rounded-xl shadow-md lg:col-span-2">
                    <h3 className="font-semibold text-gray-700 mb-2">Attendance Graph</h3>
                    <div className="h-56 border-2 border-dashed rounded-xl flex items-center justify-center text-gray-500">
                      📊 Graph Placeholder (Recharts or Chart.js)
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-semibold text-gray-700 mb-3">Quick Actions</h3>
                    <ul className="space-y-2 text-blue-600 font-medium">
                        <li>➕ Add New Student</li>
                        <li>🧑‍🏫 Add Teacher</li>
                        <li>📅 Mark Attendance</li>
                        <li>💰 Generate Fee Invoice</li>
                    </ul>
                </div>

            </div>
            </section>
            </>
}

export default Dashboard;