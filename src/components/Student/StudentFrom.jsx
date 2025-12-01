// import StudentTable from "./Student/StudentTable"

const student = () => {    
    return <>
       <div className="bg-white rounded-2xl shadow-md p-5">
                    <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Add New Student</h3>
                    <span className="text-xs text-gray-500">Quick entry form</span>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                    <div>
                        <label className="block font-medium mb-1">Full Name</label>
                        <input
                        type="text"
                        placeholder="Aman Sharma"
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">ClassName</label>
                        <select
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                        <option value="">Select ClassName</option>
                        <option>ClassName 6</option>
                        <option>ClassName 7</option>
                        <option>ClassName 8</option>
                        <option>ClassName 9</option>
                        <option>ClassName 10</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Section</label>
                        <select
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                        <option value="">Select Section</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Contact No.</label>
                        <input
                        type="text"
                        placeholder="9876543210"
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="md:col-span-3">
                        <label className="block font-medium mb-1">Parent Email</label>
                        <input
                        type="email"
                        placeholder="parent@gmail.com"
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex items-end">
                        <button
                        type="button"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-lg"
                        >
                        + Add Student
                        </button>
                    </div>
                    </form>
                </div>
    </>
}

export default student;