import {useState} from 'react';
import { CLASS_LIST, SECTION_LIST } from "../../constants/SchoolData";
const InvoceFilter = ({ onApply,feeTypes }) => {

  const [filters, setFilters] = useState({
    class_id: "",
    section: "",
    status: "",
    month: "",
  });

  const changeHandler = (e) => {
    setFilters({ 
      ...filters, 
      [e.target.name]: e.target.value 
    });
  };

    return  <div className="bg-white rounded-2xl shadow-md p-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h3 className="text-lg font-semibold">Filter Invoices</h3>
            <button
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg font-semibold">
                + Create New Invoice
            </button>
            </div>

            <form
                onSubmit={(e) => {
                e.preventDefault();
                onApply(filters);   // ← Filter parent ko return
                }}
            >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">

                    <div>
                        <label className="block font-medium mb-1">Class</label>
                        <select
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                         name="class_id"
                            onChange={changeHandler}
                        >
                        <option value=" ">All Classes</option>
                        {CLASS_LIST.map((cls,key) => (
                            <option value={cls}>
                            Class {cls}
                            </option>
                        ))}
                        
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Section</label>
                        <select
                         name="section"
                            onChange={changeHandler}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                        <option value=" ">All Section</option>
                        {SECTION_LIST.map((sec,key) => (
                            <option  value={sec}>
                            Section {sec}
                            </option>
                        ))}
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Status</label>
                        <select
                        name="status"
                        onChange={changeHandler}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                        <option>All</option>
                        <option>Paid</option>
                        <option>Pending</option>
                        <option>Overdue</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Month</label>
                        <select 
                        name="month"
                        onChange={changeHandler}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500">
                            <option value="2025-03">March 2024</option>
                            <option value="2025-04">April 2024</option>
                            <option value="2025-05">May 2024</option>
                            <option value="2025-06">June 2024</option>
                            <option value="2025-07">July 2024</option>
                            <option value="2025-08">August 2024</option>
                            <option value="2025-09">September 2024</option>
                            <option value="2025-10">October 2024</option>
                            <option value="2025-11">November 2024</option>
                            <option value="2025-12">December 2024</option>
                            <option value="2026-01">January 2025</option>
                            <option value="2026-02">February 2025</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Fee Type</label>
                        <select 
                        name="feeType"
                        onChange={changeHandler}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500">
                            {feeTypes.length > 0 ? (
                                feeTypes.map((list, index) => (
                                    <option value={list.id}>{list.name}</option>
                                ))
                            ) : (
                                <option value=" ">Not Assign</option>
                            )}
                            
                        </select>
                    </div>


                    {/* <div>
                        <label className="block font-medium mb-1">Due Before</label>
                        <input
                        type="date"
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div> */}

                    <div className="flex items-end gap-2">
                        <button
                        className="w-full px-4 py-2 bg-gray-100 rounded-lg border text-sm hover:bg-gray-200">
                            Apply
                        </button>
                    </div>
                </div>

            </form>
        </div>
}

export default InvoceFilter;