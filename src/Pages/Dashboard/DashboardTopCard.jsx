import { useState } from "react";

const Dashboard = (props) => {
    let apiData = props.data || {};
    return <>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <p className="text-gray-500 text-sm">Total Students</p>
                    <h3 className="text-3xl font-bold mt-1">{apiData.total_student}</h3>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <p className="text-gray-500 text-sm">Total Teachers</p>
                    <h3 className="text-3xl font-bold mt-1">{apiData.total_teachers}</h3>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <p className="text-gray-500 text-sm">Today Attendance</p>
                    <h3 className="text-3xl font-bold mt-1 text-green-600">94%</h3>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <p className="text-gray-500 text-sm">Pending Fees</p>
                    <h3 className="text-2xl font-bold mt-1 text-red-600">₹ {apiData.pending_fees}</h3>
                </div>

            </div>
        </>
}

export default Dashboard;