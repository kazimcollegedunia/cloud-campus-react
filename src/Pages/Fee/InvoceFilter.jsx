const InvoceFilter  = () => {
    return  <div className="bg-white rounded-2xl shadow-md p-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h3 className="text-lg font-semibold">Filter Invoices</h3>
            <button
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg font-semibold">
                + Create New Invoice
            </button>
            </div>

            <form onSubmit={(e) => {
                        filterHandler(e)
                    }}>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">

                    <div>
                        <label className="block font-medium mb-1">Class</label>
                        <select
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                        <option>All Classes</option>
                        <option>Class 6</option>
                        <option>Class 7</option>
                        <option>Class 8</option>
                        <option>Class 9</option>
                        <option>Class 10</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Section</label>
                        <select
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                        <option>All</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Status</label>
                        <select
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
                        <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500">
                            <option value="2024-03">March 2024</option>
                            <option value="2024-04">April 2024</option>
                            <option value="2024-05">May 2024</option>
                            <option value="2024-06">June 2024</option>
                            <option value="2024-07">July 2024</option>
                            <option value="2024-08">August 2024</option>
                            <option value="2024-09">September 2024</option>
                            <option value="2024-10">October 2024</option>
                            <option value="2024-11">November 2024</option>
                            <option value="2024-12">December 2024</option>
                            <option value="2025-01">January 2025</option>
                            <option value="2025-02">February 2025</option>
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