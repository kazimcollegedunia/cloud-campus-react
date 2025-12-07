// import StudentTable from "./Student/StudentTable"
import Api from "../../services/api"
import { useState,useEffect } from "react";

const student = () => {  
    const [formData,SetFormData] = useState({
        user_id:"",
        class_id:"",
        section:"",
        parent_phone:"",
        parentname:"",
        parentemail:"",
        address:"",
        gender:"",
        dob:"",
        admission_no:1
    });

    const formHandler = (e) => {
        SetFormData({
            ...formData,
            [e.target.name]:e.target.value
         })

    }

    const formDatahandler = async (e) => {
        e.preventDefault();
        console.log(formData);
         try {
            const res = await Api.post("/student", formData);
            navigate("/");
            // setSuccess("Account created successfully!");
            console.log("Student added successfully:", res.data);
            // console.log();
            } catch (err) {
                
            // console.log("Signup Error:", err.response.data.errors.email);
            //   console.log("Signup Error:", err);
            // setError(err.response.errors?.data.errors?.message || "Something went wrong");
            } finally {
                // setLoading(false);
            }

        SetFormData({
            name:"",
            class_id:"",
            section:"",
            parent_phone:"",
            parentname:"",
            parentemail:"",
            address:"",   
            gender:"",
            dob:""  });
    }

    useEffect(() => {
        getAllStudents();
    }, []);

    const [students,setStudents] = useState([]);

    const getAllStudents = async () => {
        try {
            const res = await Api.get("/all-student");
            setStudents(res.data.data);
            console.log("Students fetched successfully:", res.data);
        } catch (err) {
            console.log("Error fetching students:", err);
        }
    }
    
    return <>
       <div className="bg-white rounded-2xl shadow-md p-5">
                    <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Add New Student</h3>
                    <span className="text-xs text-gray-500">Quick entry form</span>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm" onSubmit={(e) => {formDatahandler(e)}}>
                    <div>
                        <label className="block font-medium mb-1">Full Name</label>
                        <select
                        name="user_id"
                        value={formData.user_id}
                        onChange={(e) => {formHandler(e)}}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                        <option value="">Select Student</option>
                        {
                           students.map((student) => (
                            <option key={student.id} value={student.id}>{student.name.toUpperCase()}</option>
                           ))   
                        }
                        </select>   
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Class</label>
                        <select
                        name="class_id"
                        value={formData.class}
                        onChange={(e) => {formHandler(e)}}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                        <option value="">Select ClassName</option>
                        <option value="1">ClassName 1</option>
                        <option value="2">ClassName 2</option>
                        <option value="3">ClassName 3</option>
                        <option value="4">ClassName 4</option>
                        <option value="5">ClassName 5</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Section</label>
                        <select
                        name="section"
                        value={formData.section}
                        onChange={(e) => {formHandler(e)}}
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
                        type="number"
                        placeholder="9876543210"
                        name="parent_phone"
                        value={formData.parent_phone}
                        onChange={(e) => {formHandler(e)}}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                     <div>
                        <label className="block font-medium mb-1">Parent Name</label>
                        <input
                        type="text"
                        placeholder="parent Name"
                        name="parent_name"
                        value={formData.parent_name}
                        onChange={(e) => {formHandler(e)}}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Parent Email</label>
                        <input
                        type="email"
                        placeholder="parent@gmail.com"
                        name="parent_email"
                        value={formData.parent_email}
                        onChange={(e) => {formHandler(e)}}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Address</label>
                        <input
                        type="address"
                        placeholder="address"
                        name="address"
                        value={formData.address}
                        onChange={(e) => {formHandler(e)}}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Gender</label>
                        <select
                        name="gender"
                        value={formData.gender}
                        onChange={(e) => {formHandler(e)}}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Date of birth</label>
                        <input
                        type="date"
                        name="dob"
                        value={formData.date}
                        onChange={(e) => {formHandler(e)}}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* <div className="md:col-span-1">
                        <label className="block font-medium mb-1">Parent Email</label>
                        <input
                        type="email"
                        placeholder="parent@gmail.com"
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div> */}

                    <div className="flex items-end">
                        <button
                        type="submit"
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